'use client';

import { useEffect } from 'react';

export function DirectionHandler({
    locale,
    children,
}: {
    locale: string;
    children: React.ReactNode;
}) {
    useEffect(() => {
        const dir = locale === 'ar' ? 'rtl' : 'ltr';

        document.documentElement.lang = locale;
        document.documentElement.dir = dir;
    }, [locale]);

    return children;
}