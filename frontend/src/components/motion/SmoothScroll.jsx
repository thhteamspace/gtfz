import React, { useEffect, useState, createContext, useContext } from 'react';
import Lenis from 'lenis';

export const LenisContext = createContext(null);

export const useLenis = () => useContext(LenisContext);

const SmoothScroll = ({ children }) => {
    const [lenis, setLenis] = useState(null);

    useEffect(() => {
        // Initialize Lenis
        const newLenis = new Lenis({
            duration: 1.2,
            easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
            direction: 'vertical',
            gestureDirection: 'vertical',
            smooth: true,
            mouseMultiplier: 1,
            smoothTouch: false,
            touchMultiplier: 2,
        });

        setLenis(newLenis);

        // RAF loop
        function raf(time) {
            newLenis.raf(time);
            requestAnimationFrame(raf);
        }

        requestAnimationFrame(raf);

        // Cleanup
        return () => {
            newLenis.destroy();
        };
    }, []);

    return (
        <LenisContext.Provider value={lenis}>
            <div className="smooth-scroll-wrapper">
                {children}
            </div>
        </LenisContext.Provider>
    );
};

export default SmoothScroll;
