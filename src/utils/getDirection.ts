const rtlLangs = ['ar', 'he', 'fa', 'ur', 'dv', 'ps', 'sd']

export function getDirection(lang: string): string {
    const lowerCaseLang = lang.toLowerCase();
    //check if language is in rtl list
    if (rtlLangs.includes(lowerCaseLang)) {
        return "rtl";
    }
    //If not found in rtl default to ltr
    return 'ltr'

}