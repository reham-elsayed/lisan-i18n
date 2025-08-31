Lisān 🕌✨

A unified i18n kit for React & Next.js with a focus on Arabic language support




🌍 Overview

Lisān (لسان = "language") is an open-source internationalization (i18n) package that simplifies setup for React and Next.js projects.
It provides:

🔹 Unified config for react-i18next & next-i18next

🔹 Arabic-first support (including RTL layouts & dialects)

🔹 Plug-and-play <LanguageSwitcher /> component

🔹 Auto-generated translation keys (optional, AI-assisted roadmap)

🔹 Example projects for both React & Next.js

Whether you’re building an e-commerce store, a quiz app, or a clinic manager dashboard, Lisān reduces repetitive setup and gives you clarity — Bayān.

📦 Installation
npm install lisan-i18n
# or
yarn add lisan-i18n
# or
pnpm add lisan-i18n

⚡ Quick Start
React
import { I18nProvider, useTranslation } from "lisan-i18n";

function App() {
  return (
    <I18nProvider>
      <Home />
    </I18nProvider>
  );
}

function Home() {
  const { t } = useTranslation();
  return <h1>{t("welcome")}</h1>;
}
 
Next.js
// next.config.js
const { withI18n } = require("lisan-i18n");
module.exports = withI18n({
  reactStrictMode: true,
});


In a page:

import { useTranslation } from "lisan-i18n";

export default function Home() {
  const { t } = useTranslation();
  return <h1>{t("welcome")}</h1>;
}

🌐 Example Translations

/locales/en/common.json

{
  "welcome": "Welcome to Lisān",
  "changeLanguage": "Change Language"
}


/locales/ar/common.json

{
  "welcome": "مرحبًا بك في لسان",
  "changeLanguage": "تغيير اللغة"
}
///////////////////////////////////////////////////////////////////////////////////////////////
Developer Guidelines for UI customization:

useDirection hook returns variable for dynamic styles 

'''
const {dir}= useDirection()

'''
Use margin-inline / padding-inline over left/right.

Prefer start/end in text-align.

Mark number/email inputs dir="ltr".

Provide alternative icons for arrows/carets.
🎨 Features

1. Font & Typography Choices

Use a font family that supports multiple scripts consistently (e.g. Noto Sans, Inter with fallback, Roboto, Source Sans).
→ This reduces jumps between languages.

Set consistent line-height (leading) across languages. This keeps vertical rhythm even when glyphs are taller (Arabic, Hindi, Thai).

Avoid using pixel-perfect font sizes only → prefer rem or em so scaling is consistent.

📏 2. Spacing & Layout

Leave flexible space for text expansion:

German, Russian → tend to be 30–50% longer than English.

Arabic, Hebrew → can be shorter but taller.
→ Use flexbox / grid instead of fixed widths.

Avoid truncating text aggressively → allow wrapping.

🌍 3. Language-specific adjustments

 apply slight font-size scaling per language, e.g.

Japanese/Chinese → same font size feels visually larger (compact glyphs).

Arabic/Urdu → same font size feels smaller (tall glyphs).
define a language → font-size multiplier map:

const langFontSizeAdjust: Record<string, number> = {
  ja: 0.9, // Japanese, shrink slightly
  zh: 0.95, // Chinese
  ar: 1.05, // Arabic, make a bit bigger
};

✅ Simple setup for both React & Next.js
✅ Built-in RTL support for Arabic, Persian, Hebrew
✅ Easy <LanguageSwitcher />
✅ Configurable namespaces & fallback languages
✅ Future roadmap: AI-assisted key extraction & translation suggestions

🛠️ Roadmap

 Base setup for React + Next.js

 Add <LanguageSwitcher />

 Add CLI tool for auto-key generation

 AI integration for translation drafts

 Multi-dialect Arabic presets

🤝 Contributing

Contributions are welcome!

Fork the repo

Create a branch (git checkout -b feature/my-feature)

Commit changes (git commit -m "add feature")

Push branch (git push origin feature/my-feature)

Create a Pull Request

📜 License

Licensed under the MIT License
.

✨ Lisān: Making translations clear, simple, and Arabic-first.