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
🎨 Design Tokens

In Lisān i18n Kit, we use design tokens to make styles flexible, consistent, and adaptable across different languages (especially Arabic ↔ English).

✅ What are Design Tokens?

Design tokens are named values (like variables) that store reusable style information.
Instead of hardcoding colors, spacing, or typography, we define them once and use them everywhere.

Tokens are applied globally (:root) and updated when the user changes language.

Example flow:

User switches to Arabic → --direction: rtl, --font-scale: 1.1

The DOM <html> element updates lang="ar" and dir="rtl".

All components automatically use the right tokens.

🛠️ Benefits

Consistency: same spacing/colors across React & Next.js apps.

Accessibility: better readability when font sizes scale per language.

Flexibility: easy theming for RTL vs LTR layouts.

Future-proof: new tokens can be added without breaking old styles.
///////////////////////////


useDirection hook returns variable for dynamic styles 

'''
const function App(){
const {dir}= useDirection()
  return (
      <div className={`direction-${dir}`}>
      <h1>{t('greeting')}</h1>
    </div>
  )
}


'''
in your css file write styles
example
'''
.direction-ltr {
  background-color: #535bf2;
  direction: ltr;
  text-align: left;
}

.direction-rtl {
  background-color: #f25b53;
  direction: rtl;
  text-align: right;
}
'''

Use margin-inline / padding-inline over left/right.

Prefer start/end in text-align.

Mark number/email inputs dir="ltr".

Provide alternative icons for arrows/carets.
🎨 Features


'''
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





// {
//     "en": {
//         "font-size-body": "16px",
//         "font-size-heading": "20px",
//         "font-size-subheading": "18px",
//         "line-height-body": "1.5",
//         "line-height-heading": "1.3",
//         "letter-spacing": "0",
//         "word-spacing": "normal",
//         "paragraph-spacing": "1rem",
//         "spacing-button-x": "1rem",
//         "spacing-button-y": "0.5rem",
//         "spacing-card-x": "1.5rem",
//         "spacing-card-y": "1rem",
//         "card-min-width": "250px",
//         "container-max-width": "1200px",
//         "text-align": "left",
//         "direction": "ltr"
//     },
//     "ar": {
//         "font-size-body": "14px",
//         "font-size-heading": "18px",
//         "font-size-subheading": "16px",
//         "line-height-body": "1.8",
//         "line-height-heading": "1.5",
//         "letter-spacing": "-0.5px",
//         "word-spacing": "0.15em",
//         "paragraph-spacing": "1.25rem",
//         "spacing-button-x": "1.25rem",
//         "spacing-button-y": "0.6rem",
//         "spacing-card-x": "1.75rem",
//         "spacing-card-y": "1.25rem",
//         "card-min-width": "270px",
//         "container-max-width": "1180px",
//         "text-align": "right",
//         "direction": "rtl"
//     }
// }
