
export type TranslationDictionary = {
    [key: string]: string | TranslationDictionary;
};

export type AllLanguagesDictionary = {
    [lang: string]: {
        translation: TranslationDictionary;
    };
};