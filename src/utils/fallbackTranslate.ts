import { translate, TranslationDictionary } from "./translate";

export function fallbackTranslate(dictionary: TranslationDictionary, key: string, lang: string): string {
    const translated = translate(dictionary, key, lang);
    if (translated !== null) {
        return translated;
    }
    // Fallback to English if translation not found
    const fallback = translate(dictionary, key, "en");
    if (fallback !== null) {
        return fallback;
    }
    // If still not found, return the key itself
    return key;

}