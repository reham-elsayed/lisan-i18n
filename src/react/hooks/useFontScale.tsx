import React from 'react'
import { useTranslation } from 'react-i18next'
import { langFontSizeAdjust } from '../../utils/langFontMap'
const MIN_SCALE = 0.95;
const MAX_SCALE = 1.05;
export const useFontScale = () => {
    const [scalef, setScalef] = React.useState(1)
    const [lineHeightf, setLineHeightf] = React.useState(1)
    const { i18n } = useTranslation()
    React.useEffect(() => {
        const handler = (lang: string) => {
            const { scale, lineHeight } = langFontSizeAdjust[lang as keyof typeof langFontSizeAdjust] ?? langFontSizeAdjust["default"]

            const clamedScale = Math.min(Math.max(scale, MIN_SCALE), MAX_SCALE);
            setScalef(clamedScale)
            setLineHeightf(lineHeight)
        }
        // run once on mount
        handler(i18n.language);

        // subscribe to language changes
        i18n.on('languageChanged', (lang) => {
            handler(lang)
        })

        return () => { i18n.off('languageChanged', handler) }
    }, [i18n.language])

    return { scalef, lineHeightf }

}

