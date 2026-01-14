import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const Preloader = () => {
    const [count, setCount] = useState(0);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        const timer = setInterval(() => {
            setCount((prev) => {
                if (prev >= 100) {
                    clearInterval(timer);
                    setTimeout(() => setIsLoading(false), 500);
                    return 100;
                }
                return prev + 1;
            });
        }, 20); // Speed of counter

        return () => clearInterval(timer);
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
                        background: '#000',
                        zIndex: 9999,
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        color: 'var(--color-heritage-bronze)'
                    }}
                >
                    <div style={{ display: 'flex', alignItems: 'flex-end', overflow: 'hidden' }}>
                        <h1 style={{ fontSize: '15vw', lineHeight: 0.8, fontWeight: 900 }}>
                            {count}
                        </h1>
                        <span style={{ fontSize: '5vw', marginBottom: '2vw' }}>%</span>
                    </div>

                    {/* Flashing words/images could go here */}
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: [0, 1, 0] }}
                        transition={{ repeat: Infinity, duration: 0.5 }}
                        style={{ position: 'absolute', bottom: '50px', letterSpacing: '0.2em', textTransform: 'uppercase', fontSize: '0.8rem' }}
                    >
                        Loading Experience
                    </motion.div>
                </motion.div>
            )}
        </AnimatePresence>
    );
};

export default Preloader;
