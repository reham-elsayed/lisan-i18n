export const langFontSizeAdjust = {
    ar: { scale: 1.05, lineHeight: 1.6 },
    ja: { scale: 0.9, lineHeight: 1.4 },
    zh: { scale: 0.95, lineHeight: 1.45 },
    default: { scale: 1, lineHeight: 1.5 }
};

const BASE_FONT_SIZE = 16; // px
const BASE_PADDING_Y = 8;  // px top/bottom

export function estimateMinHeight(lang: string): number {
    const { scale, lineHeight } =
        langFontSizeAdjust[lang as keyof typeof langFontSizeAdjust] ??
        langFontSizeAdjust.default;

    return Math.ceil(BASE_FONT_SIZE * scale * lineHeight + BASE_PADDING_Y * 2);
}