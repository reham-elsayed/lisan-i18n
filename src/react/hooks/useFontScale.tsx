import React from 'react'
import { useTranslation } from 'react-i18next'
import { langFontSizeAdjust } from '../../utils/langFontMap'

export const useFontScale = () => {
    const [scale, setScale] = React.useState(1)
    const { i18n } = useTranslation()
    React.useEffect(() => {
        const handler = (lang: string) => {
            setScale(langFontSizeAdjust[lang as keyof typeof langFontSizeAdjust] || langFontSizeAdjust['default'])
        }
        i18n.on('languageChanged', (lang) => {
            handler(lang)
        })

        return () => { i18n.off('languageChanged', handler) }
    }, [i18n.language])

    return { scale }

}

