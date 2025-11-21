# ThoughtLite

<div align="center">
    <p>
        <img alt="ThoughtLite Light Mode Preview" src=".github/assets/preview-light.webp">
        <img alt="ThoughtLite Dark Mode Preview" src=".github/assets/preview-dark.webp">
    </p>
    <p>
        <a href="https://github.com/tuyuritio/astro-theme-thought-lite/releases/latest"><img alt="GitHub Release" src="https://img.shields.io/github/v/release/tuyuritio/astro-theme-thought-lite"></a>
        <a href="https://raw.githubusercontent.com/tuyuritio/astro-theme-thought-lite/refs/heads/main/LICENSE"><img alt="GitHub License" src="https://img.shields.io/github/license/tuyuritio/astro-theme-thought-lite"></a>
    </p>
    <p>Современная тема для <a href="https://astro.build/">Astro</a>, ориентированная на создание контента 🌟</p>
    <p>
        <small><a href="README.md">English</a></small>
        <small><a href="README.zh-cn.md">简体中文</a></small>
        <small><a href="README.ja.md">日本語</a></small>
        <small><ins>Русский</ins></small>
    </p>
</div>

> [!NOTE]
> - Ветка `main` ✅: Статическая сборка, которую можно разместить на любом статическом хостинге.
> - Ветка `cloudflare`: Включает встроенную систему комментариев, развертывается только на Cloudflare.

🎬 **Демо вживую**: [Vercel](https://thought-lite.vercel.app/)

## ✨ Возможности

- [x] **Адаптивный дизайн** — удобен на мобильных устройствах, планшетах и десктопе.
- [x] **Светлая / тёмная темы** — автоматически следует системным настройкам, плюс ручной переключатель.
- [x] **Динамическая фильтрация контента (CSR)** — фильтрация списков и постраничная навигация через History API.
- [x] **Поддержка i18n** — легко расширять языками; отлично работает и на сайтах с одним языком.
- [x] **Sitemap и подписка на ленту** — автоматическая генерация Sitemap и Atom Feed.
- [x] **OpenGraph** — встроенные метатеги Open Graph для удобного шаринга в соцсетях.

## ⚡️ Быстрый старт

### Через команду Astro

Выполните команду:

```sh
pnpm create astro --template tuyuritio/astro-theme-thought-lite

# Следуйте интерактивным подсказкам для создания проекта

cd <your-project-name>
pnpm dev
```

### Через шаблон

1. [Используйте этот шаблон](https://github.com/new?template_name=astro-theme-thought-lite&template_owner=tuyuritio), чтобы создать новый репозиторий, или [форкните](https://github.com/tuyuritio/astro-theme-thought-lite/fork) этот репозиторий.
2. Выполните команды:

```sh
git clone <your-repo-url>
cd <your-repo-name>
pnpm install
pnpm dev
```

## 🔧 Конфигурация

Настройте сайт и интернационализацию (i18n), отредактировав следующие файлы:

- `.env`
- `astro.config.ts`
- `site.config.ts`

Для базовой настройки смотрите руководство: [Site Configuration Guide](src/content/note/en/configuration.md).

Для настройки i18n смотрите: [Internationalization Configuration Guide](src/content/note/en/internationalization.md).

## 💻 Команды

Чаще всего используются следующие команды темы:

| Команда | Действие |
| --- | --- |
| `pnpm install` | Установка зависимостей проекта |
| `pnpm update` | Обновление зависимостей |
| `pnpm new` | Создать новый файл контента |
| `pnpm dev` | Запустить локальный сервер разработки (по умолчанию: `http://localhost:4321`) |
| `pnpm check` | Проверка типов Astro |
| `pnpm build` | Сборка продакшн-версии |
| `pnpm preview` | Просмотр собранного сайта |
| `pnpm format` | Форматирование кода |
| `pnpm lint` | Линтинг кода |

## 🚀 Развёртывание

Текущую ветку можно полностью собрать в статический сайт и разместить на любом статическом хостинге.

Для способов развёртывания на разных платформах смотрите [Astro Official Deployment Guide](https://docs.astro.build/en/guides/deploy/).

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https://github.com/tuyuritio/astro-theme-thought-lite&project-name=astro-blog-thought-lite&repository-name=astro-blog-thought-lite&teamSlug=tuyuritios-projects)
[![Deploy to Netlify](https://www.netlify.com/img/deploy/button.svg)](https://app.netlify.com/integration/start/deploy?repository=https://github.com/tuyuritio/astro-theme-thought-lite)

## 🔄 Обновления

Выполните команды, чтобы подтянуть обновления из оригинального репозитория:

```sh
git remote add theme https://github.com/tuyuritio/astro-theme-thought-lite.git
git fetch theme
git merge theme/main    # Для первого обновления добавьте флаг `--allow-unrelated-histories`
pnpm install
```

## ✍️ Создание контента

Контент хранится в директории `src/content` и включает в себя:

- `note` — для детальных и продуманных длинных публикаций
- `jotting` — короткие заметки и быстрые записи
- `preface` — отображается на главной странице как первое впечатление
- `information` — разнообразная служебная и информационная документация

Подробности — в [Content Creation Guide](src/content/note/en/content.md).

## 🤝 Участие в проекте

Все виды вкладов приветствуются и ценятся!

- Помогите распространять проект или помогите другим пользователям
- Сообщайте об [ошибках](https://github.com/tuyuritio/astro-theme-thought-lite/issues) или предлагайте улучшения
- Улучшайте документацию или помогайте с переводами (i18n)
- Вносите код — см. [CONTRIBUTING.ru.md](CONTRIBUTING.ru.md) для деталей

## 🙏 Благодарности

### Технологии

- **Фреймворк** — [Astro](https://astro.build/)
- **Язык** — [TypeScript](https://www.typescriptlang.org/)
- **Компоненты UI** — [Svelte](https://svelte.dev/)
- **CSS-движок** — [UnoCSS](https://unocss.dev/)
- **Препроцессор CSS** — [Less](https://lesscss.org/)
- **Иконки** — [Iconify](https://iconify.design/)
- **Шрифты** — [Google Fonts](https://fonts.google.com/) | [ZeoSeven Fonts](https://fonts.zeoseven.com/)
- **Просмотр изображений** — [Medium Zoom](https://github.com/francoischalifour/medium-zoom)
- **SPA-переходы** — [Swup](https://swup.js.org/)
- **Работа со временем** — [Luxon](https://moment.github.io/luxon/)
- **Качество кода** — [Biome](https://biomejs.dev/)
- **Статическое развёртывание** — [Vercel](https://vercel.com/)

### Вдохновение

- [Astro Sphere](https://github.com/markhorn-dev/astro-sphere)
- [astro-vitesse](https://github.com/adrian-ub/astro-vitesse)
- [Miniblog](https://github.com/nicholasdly/miniblog)
- [AstroPaper with I18n](https://github.com/yousef8/astro-paper-i18n)

## 📜 Лицензия

Проект распространяется под лицензией [GPLv3](LICENSE). Вы можете свободно изменять и распространять код, при этом необходимо сохранять исходное уведомление об авторских правах.
