

export type TranslationDictionary = {
    [key: string]: string | TranslationDictionary;
};
const langTypes = ["en", "ar"];
export function translate(dictionary: TranslationDictionary, key: string, lang: string): string | null {
    const keyParts = key.split('.');['greeting', "morning"]
    let temp: string | TranslationDictionary = dictionary
    for (let part of keyParts) {
        if (typeof temp === "object" && temp !== null && temp.hasOwnProperty(part)) {
            temp = temp[part];
        } else {
            return null
        }
    }
    if (typeof temp !== "string") {
        return null
    }
    return temp;
}
