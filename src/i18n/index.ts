// Import translation files for different locales
import en from "./en/index.yaml";
import enScript from "./en/script.yaml";
import enLinkroll from "./en/linkroll.yaml";
import zhCN from "./zh-cn/index.yaml";
import zhCNScript from "./zh-cn/script.yaml";
import zhLinkroll from "./zh-cn/linkroll.yaml";
import ja from "./ja/index.yaml";
import jaScript from "./ja/script.yaml";
import jaLinkroll from "./ja/linkroll.yaml";
import ru from "./ru/index.yaml";
import ruScript from "./ru/script.yaml";
import ruLinkroll from "./ru/linkroll.yaml";

// Translation object mapping locale codes to their respective translation data
const translations = {
	en: {
		...en,
		script: enScript,
		linkroll: enLinkroll
	},
	"zh-cn": {
		...zhCN,
		script: zhCNScript,
		linkroll: zhLinkroll
	},
	ja: {
		...ja,
		script: jaScript,
		linkroll: jaLinkroll
	},
	ru: {
		...ru,
		script: ruScript,
		linkroll: ruLinkroll
	}
};

// Define Language type based on available translations
type Language = keyof typeof translations;

// Define Namespace type based on keys in the translation objects
export type TranslationNamespace = keyof (typeof translations)[Language];

/**
 * Validate if the provided language is supported
 * @param language - The target language/locale code (e.g., "en", "zh-cn", "ja")
 * @throws Error if the language is not supported
 */
function validateLanguage(language: string): asserts language is Language {
	if (!Object.keys(translations).includes(language)) throw new Error(`Unsupported language: ${language}`);
}

/**
 * Create an internationalization function for a specific language
 * @param language - The target language/locale code (e.g., "en", "zh-cn", "ja")
 * @param namespace - Optional namespace prefix to prepend to all translation keys (e.g., "script")
 * @returns Translation function that can translate keys with parameter substitution
 */
export default function i18nit(
	language: string,
	namespace?: TranslationNamespace
): (key: string, params?: Record<string, string | number>) => string {
	// Ensure the provided language is valid
	validateLanguage(language);

	let translation: Record<string, any> = translations[language];
	if (namespace) translation = translation[namespace];

	function normalizeLocale(loc: string) {
		const parts = String(loc).split(/[-_]/);
		if (parts.length === 1) return parts[0];
		// preserve language, uppercase region (e.g. zh-cn -> zh-CN)
		return parts[0] + (parts[1] ? `-${parts[1].toUpperCase()}` : "");
	}

	function interpolate(str: string, params?: Record<string, string | number>) {
		return String(str).replace(/\{(\w+)\}/g, (_, param) => {
			const val = params?.[param];
			return val === undefined || val === null ? String(param) : String(val);
		});
	}

	/**
	 * Main translation function with parameter interpolation
	 * Navigates through nested translation object using dot notation, supports parameter substitution,
	 * and plural selection when a translation is an object with plural categories.
	 * @param key - Dot-separated key path to look up translation (e.g., "notification.reply.title")
	 * @param params - Optional parameters for string interpolation (replaces {paramName} placeholders)
	 *                 For plural selection provide a numeric `count` (also accepts `n` or `amount`).
	 * @returns Translated and interpolated string, or the original key if translation not found
	 */
	function t(key: string, params?: Record<string, string | number>) {
		const keys = key.split(".");
		const value: any = keys.reduce((translation: any, k) => (translation ? translation[k] : undefined), translation);

		if (value === undefined || value === null) return key;

		// If value is a function, call it with params and interpolate result
		if (typeof value === "function") {
			try {
				const res = value(params ?? {});
				return interpolate(String(res), params);
			} catch (e) {
				return key;
			}
		}

		// If value is an object, assume it's a pluralization map or nested object
		if (typeof value === "object") {
			// Try plural selection if numeric count present
			const count = params?.count ?? params?.n ?? params?.amount;
			const num = Number(count);

			if (!Number.isNaN(num) && isFinite(num)) {
				try {
					const pr = new Intl.PluralRules(normalizeLocale(language));
					const category = pr.select(num);
					// Prefer exact category, then numeric key, then 'other', then first value
					const chosen = value[category] ?? value[String(num)] ?? value.other ?? Object.values(value)[0];
					return interpolate(String(chosen), params);
				} catch (e) {
					// fallback to trying 'other' or first available
					const fallback = value.other ?? Object.values(value)[0];
					return interpolate(String(fallback), params);
				}
			}

			// If no numeric count, but object contains a 'other' string, use it
			if (typeof value.other === "string") return interpolate(value.other, params);

			// As a final fallback, stringify the object
			return interpolate(String(value), params);
		}

		// Otherwise assume primitive (string/number) and interpolate
		return interpolate(String(value), params);
	}

	return t;
}
