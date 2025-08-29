import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import { AllLanguagesDictionary } from '../types/types';

export const setupI18n = (dictionaries: AllLanguagesDictionary, defaultLang: string) => {
    i18n.use(initReactI18next).init({
        resources: dictionaries,
        lng: defaultLang,
        fallbackLng: 'en',
        interpolation: {
            escapeValue: false, // react already safes from xss
        },
    })
}