import React from 'react';
import { useFontScale } from '../hooks/useFontScale';

export function FontScaler() {
    const { scale } = useFontScale();

    // Apply to root element
    React.useEffect(() => {
        document.documentElement.style.setProperty("--font-scale", scale.toString());
    }, [scale]);

    return null; // no UI, just side effect
}