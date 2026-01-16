import React from 'react';
import { motion } from 'framer-motion';
import RevealText from './motion/RevealText';

const CallToAction = () => {
    return (
        <section className="section" data-theme-trigger="light" style={{
            position: 'relative',
            background: 'transparent',
            overflow: 'hidden',
            padding: '10vh 0',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center'
        }}>




            <div className="container" style={{ position: 'relative', zIndex: 2, textAlign: 'center', maxWidth: '800px' }}>
                {/* CRAZY THIN FRAME WRAPPER */}
                <motion.div
                    initial={{ scale: 0.95, opacity: 0 }}
                    whileInView={{ scale: 1, opacity: 1 }}
                    transition={{ duration: 0.8 }}
                    style={{
                        position: 'relative',
                        padding: '4rem 2rem',
                        borderRadius: '30px',
                        border: '1px solid rgba(0,0,0,0.08)',
                        background: 'rgba(255,255,255,0.3)',
                        backdropFilter: 'blur(20px)',
                        boxShadow: '0 20px 60px -10px rgba(0,0,0,0.05)',
                        overflow: 'hidden'
                    }}
                >
                    {/* Decorative Corner Accents */}
                    <div style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', pointerEvents: 'none' }}>
                        <div style={{ position: 'absolute', top: '20px', left: '20px', width: '40px', height: '40px', borderTop: '2px solid rgba(0,0,0,0.2)', borderLeft: '2px solid rgba(0,0,0,0.2)', borderTopLeftRadius: '10px' }} />
                        <div style={{ position: 'absolute', top: '20px', right: '20px', width: '40px', height: '40px', borderTop: '2px solid rgba(0,0,0,0.2)', borderRight: '2px solid rgba(0,0,0,0.2)', borderTopRightRadius: '10px' }} />
                        <div style={{ position: 'absolute', bottom: '20px', left: '20px', width: '40px', height: '40px', borderBottom: '2px solid rgba(0,0,0,0.2)', borderLeft: '2px solid rgba(0,0,0,0.2)', borderBottomLeftRadius: '10px' }} />
                        <div style={{ position: 'absolute', bottom: '20px', right: '20px', width: '40px', height: '40px', borderBottom: '2px solid rgba(0,0,0,0.2)', borderRight: '2px solid rgba(0,0,0,0.2)', borderBottomRightRadius: '10px' }} />
                    </div>

                    {/* Pill Badge */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: false }}
                        style={{
                            display: 'inline-block',
                            padding: '0.5rem 1.5rem',
                            borderRadius: '50px',
                            background: 'rgba(255,255,255,0.5)',
                            border: '1px solid rgba(0,0,0,0.1)',
                            marginBottom: '2rem',
                            fontSize: '0.875rem',
                            letterSpacing: '0.1em',
                            textTransform: 'uppercase',
                            color: '#333'
                        }}
                    >
                        <span style={{ marginRight: '0.5rem', color: '#B8860B' }}>✦</span> Join Us
                    </motion.div>

                    {/* Headline */}
                    <h2 style={{ fontSize: 'clamp(2.5rem, 5vw, 5rem)', lineHeight: 1.1, marginBottom: '1.5rem', fontWeight: 700, color: '#1a1a1a' }}>
                        <RevealText>Ready to transform</RevealText>
                        <RevealText delay={0.2}>your digital future?</RevealText>
                    </h2>

                    <motion.p
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        transition={{ delay: 0.4 }}
                        style={{ fontSize: '1.25rem', color: '#555', marginBottom: '3rem', maxWidth: '600px', margin: '0 auto 3rem auto' }}
                    >
                        Streamline your strategy with our intuitive, scalable solutions. Designed for global leaders.
                    </motion.p>

                    {/* Button */}
                    <motion.button
                        whileHover={{ scale: 1.05, boxShadow: '0 10px 30px rgba(0,0,0,0.1)' }}
                        whileTap={{ scale: 0.95 }}
                        style={{
                            background: '#1a1a1a',
                            color: 'white',
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
                </motion.div>
            </div>
        </section>
    );
};

export default CallToAction;
