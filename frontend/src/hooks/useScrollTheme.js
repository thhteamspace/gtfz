import { useEffect, useRef } from 'react';
import { useTheme } from '../components/ThemeTransitionContext';

/**
 * Custom hook that uses Intersection Observer to detect
 * sections with data-theme attributes and trigger theme changes.
 */
const useScrollTheme = () => {
    const { setTheme } = useTheme();
    const observerRef = useRef(null);

    useEffect(() => {
        // Find all sections with data-theme attribute
        const themeSections = document.querySelectorAll('[data-theme-trigger]');

        if (themeSections.length === 0) return;

        // Track which sections are currently visible and their visibility ratios
        const visibleSections = new Map();

        const handleIntersection = (entries) => {
            entries.forEach((entry) => {
                const sectionTheme = entry.target.getAttribute('data-theme-trigger');

                if (entry.isIntersecting && entry.intersectionRatio >= 0.3) {
                    visibleSections.set(entry.target, {
                        theme: sectionTheme,
                        ratio: entry.intersectionRatio
                    });
                } else {
                    visibleSections.delete(entry.target);
                }
            });

            // Determine which theme should be active based on the most visible section
            if (visibleSections.size > 0) {
                let maxRatio = 0;
                let activeTheme = 'dark';

                visibleSections.forEach((value) => {
                    if (value.ratio > maxRatio) {
                        maxRatio = value.ratio;
                        activeTheme = value.theme;
                    }
                });

                setTheme(activeTheme);
            } else {
                // Default to dark when no themed sections are visible
                setTheme('dark');
            }
        };

        // Create Intersection Observer with multiple thresholds for smooth detection
        observerRef.current = new IntersectionObserver(handleIntersection, {
            threshold: [0, 0.1, 0.2, 0.3, 0.4, 0.5, 0.6, 0.7, 0.8, 0.9, 1],
            rootMargin: '-10% 0px -10% 0px' // Trigger slightly inside the viewport
        });

        // Observe all sections with theme triggers
        themeSections.forEach((section) => {
            observerRef.current.observe(section);
        });

        return () => {
            if (observerRef.current) {
                observerRef.current.disconnect();
            }
        };
    }, [setTheme]);

    return null;
};

export default useScrollTheme;
