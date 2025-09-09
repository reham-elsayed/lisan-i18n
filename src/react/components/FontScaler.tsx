import React from 'react';
import { useFontScale } from '../hooks/useFontScale';
export function FontScaler() {
    const { scalef, lineHeightf, minHeightf } = useFontScale();

    // Apply to root element
    React.useEffect(() => {
        document.documentElement.style.setProperty("--font-scale", scalef.toString());
        document.documentElement.style.setProperty(
            "--line-height",
            lineHeightf.toString())
        document.documentElement.style.setProperty(
            "--ui-min-height",
            minHeightf.toString()
        );
    }, [scalef]);

    return null; // no UI, just side effect
}
