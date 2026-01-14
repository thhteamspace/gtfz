import React from 'react';
import { motion } from 'framer-motion';
import RevealText from './motion/RevealText';

const CallToAction = () => {
    return (
        <section className="section" style={{
            position: 'relative',
            background: 'var(--color-obsidian-slate)',
            overflow: 'hidden',
            padding: '10vh 0',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center'
        }}>
            {/* Background Glows */}
            <div style={{
                position: 'absolute',
                bottom: '-50%',
                left: '50%',
                transform: 'translate(-50%, 0)',
                width: '100vw',
                height: '80vh',
                background: 'radial-gradient(ellipse at center, rgba(76, 95, 215, 0.4) 0%, transparent 70%)',
                zIndex: 0,
                pointerEvents: 'none'
            }} />

            {/* Arc Line */}
            <div style={{
                position: 'absolute',
                bottom: 0,
                left: 0,
                width: '100%',
                height: '200px',
                background: 'linear-gradient(to top, rgba(0,0,0,1) 0%, transparent 100%)',
                zIndex: 1
            }} />

            <div className="container" style={{ position: 'relative', zIndex: 2, textAlign: 'center', maxWidth: '800px' }}>
                {/* Pill Badge */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: false }}
                    style={{
                        display: 'inline-block',
                        padding: '0.5rem 1.5rem',
                        borderRadius: '50px',
                        background: 'rgba(255,255,255,0.05)',
                        border: '1px solid rgba(255,255,255,0.1)',
                        marginBottom: '2rem',
                        fontSize: '0.875rem',
                        letterSpacing: '0.1em',
                        textTransform: 'uppercase',
                        boxShadow: '0 0 20px rgba(76, 95, 215, 0.2)'
                    }}
                >
                    <span style={{ marginRight: '0.5rem', color: '#4c5fd7' }}>✦</span> Join Us
                </motion.div>

                {/* Headline */}
                <h2 style={{ fontSize: 'clamp(2.5rem, 5vw, 5rem)', lineHeight: 1.1, marginBottom: '1.5rem', fontWeight: 700 }}>
                    <RevealText>Ready to transform</RevealText>
                    <RevealText delay={0.2}>your digital future?</RevealText>
                </h2>

                <motion.p
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ delay: 0.4 }}
                    style={{ fontSize: '1.25rem', color: 'var(--color-text-secondary)', marginBottom: '3rem', maxWidth: '600px', margin: '0 auto 3rem auto' }}
                >
                    Streamline your strategy with our intuitive, scalable solutions. Designed for global leaders.
                </motion.p>

                {/* Button */}
                <motion.button
                    whileHover={{ scale: 1.05, boxShadow: '0 0 30px rgba(255,255,255,0.3)' }}
                    whileTap={{ scale: 0.95 }}
                    style={{
                        background: 'white',
                        color: 'black',
                        padding: '1rem 3rem',
                        borderRadius: '50px',
                        fontSize: '1rem',
                        fontWeight: 700,
                        border: 'none',
                        cursor: 'pointer'
                    }}
                >
                    Get Started
                </motion.button>
            </div>
        </section>
    );
};

export default CallToAction;
