'use client';

import { useEffect } from 'react';

export function ScrollManager() {
    useEffect(() => {
        const scrollToHash = () => {
            const hash = window.location.hash.substring(1);
            if (hash) {
                setTimeout(() => {
                    const element = document.getElementById(hash);
                    if (element) {
                        element.scrollIntoView({
                            behavior: 'smooth',
                            block: 'start',
                        });
                    }
                }, 50);
            }
        };

        scrollToHash();

        const handleHashChange = () => {
            scrollToHash();
        };

        window.addEventListener('hashchange', handleHashChange);
        return () => window.removeEventListener('hashchange', handleHashChange);
    }, []);

    return null;
}
