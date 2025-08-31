import React, { useEffect, useState } from 'react'
import { useTranslation } from 'react-i18next'
import { getDirection } from '../utils'

export const useDirection = () => {
    const { i18n } = useTranslation()
    const [dir, setDir] = useState<'ltr' | 'rtl'>('ltr')
    useEffect(() => {
        const handler = (lang: string) => { setDir(getDirection(lang) as 'ltr' | 'rtl') }
        i18n.on('languageChanged', handler)
        return () => {
            i18n.off('languageChanged', handler)
        }
    }, [i18n.language])
    return { dir }

}