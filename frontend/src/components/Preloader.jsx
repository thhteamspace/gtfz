import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const Preloader = () => {
    const [isLoading, setIsLoading] = useState(false);

    useEffect(() => {
        // Check if preloader has already been shown in this session
        const hasSeenPreloader = sessionStorage.getItem('gtfz_preloader_shown');

        if (hasSeenPreloader) {
            setIsLoading(false);
            return;
        }

        // First time loading - show preloader
        setIsLoading(true);

        // Wait for 3 seconds then dismiss
        const timer = setTimeout(() => {
            setIsLoading(false);
            // Mark preloader as shown in sessionStorage
            sessionStorage.setItem('gtfz_preloader_shown', 'true');
        }, 3000);

        return () => clearTimeout(timer);
    }, []);

    return (
        <AnimatePresence mode="wait">
            {isLoading && (
                <motion.div
                    exit={{ y: "-100%" }}
                    transition={{ duration: 0.8, ease: [0.76, 0, 0.24, 1] }}
                    style={{
                        position: 'fixed',
                        top: 0, left: 0, width: '100%', height: '100vh',
                        background: '#000000', // Pure Black
                        zIndex: 9999,
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                    }}
                >
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 1, ease: "easeOut" }}
                    >
                        <img
                            src="/assets/images/gtfz-logo.png"
                            alt="GTFZ Logo"
                            style={{
                                width: 'clamp(120px, 40vw, 300px)',
                                height: 'auto',
                                mixBlendMode: 'screen',
                                filter: 'contrast(1.5) brightness(1.1)'
                            }}
                        />
                    </motion.div>
                </motion.div>
            )}
        </AnimatePresence>
    );
};

export default Preloader;

