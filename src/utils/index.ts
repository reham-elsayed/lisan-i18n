export const detectLanguage = () => {
    if (typeof navigator !== "undefined") {
        return navigator.language.startsWith("ar") ? "ar" : "en";
    }
    return "en";
};

