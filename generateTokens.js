const fs = require("fs");
const path = require("path");

// Load JSON file
const tokens = require("./src/tokens/design-tokens.json");

// Helper: flatten nested tokens into CSS variables
function toCSSVars(obj, prefix = "") {
    let css = "";
    for (const key in obj) {
        const value = obj[key];
        if (typeof value === "object") {
            css += toCSSVars(value, `${prefix}-${key}`);
        } else {
            css += `  --${prefix}-${key}: ${value};\n`;
        }
    }
    return css;
}

// Build CSS output
let css = `:root {\n${toCSSVars(tokens)}}
\n
[dir="rtl"] {
  /* Example overrides — you can make this smarter later */
  --spacing-sm: 0.75rem;
}
`;

// Write to a CSS file
const outPath = path.join(__dirname, "dist", "tokens.css");
fs.writeFileSync(outPath, css);

console.log("✅ Tokens generated at tokens.css");
