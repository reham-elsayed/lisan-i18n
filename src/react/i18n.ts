import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import { AllLanguagesDictionary } from '../types';
import { getDirection } from '../utils';

export function setupI18n({ dictionaries, defaultLang, controlDom = true }: { dictionaries: AllLanguagesDictionary, defaultLang: string, controlDom?: boolean }) {
    i18n.use(initReactI18next).init({
        resources: dictionaries,
        lng: defaultLang,
        fallbackLng: 'en',
        interpolation: {
            escapeValue: false, // react already safes from xss
        },
    })
    if (controlDom) {
        if (typeof window !== 'undefined') {
            (window as any).i18n = i18n; // for debugging purposes

            i18n.on('languageChanged', (lang) => {
                if (typeof window !== 'undefined') {
                    document.documentElement.lang = lang; // set the lang attribute on the html element
                    document.documentElement.dir = getDirection(lang); // set the dir attribute on the html element
                }
            })
            i18n.emit('languageChanged', i18n.language); // trigger the event to set the initial lang and dir attributes
        }
    }
    return i18n;
}