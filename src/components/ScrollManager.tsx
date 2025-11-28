'use client';

import { useEffect } from 'react';

export function ScrollManager() {
    useEffect(() => {
        // Handle hash-based navigation when page loads
        const scrollToHash = () => {
            const hash = window.location.hash.substring(1);
            if (hash) {
                // Small delay to ensure the page is fully rendered
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

        // Run once on mount
        scrollToHash();

        // Also handle hash changes
        const handleHashChange = () => {
            scrollToHash();
        };

        window.addEventListener('hashchange', handleHashChange);
        return () => window.removeEventListener('hashchange', handleHashChange);
    }, []);

    return null;
}
