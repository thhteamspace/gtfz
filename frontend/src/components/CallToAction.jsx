import React from 'react';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import RevealText from './motion/RevealText';

const CallToAction = () => {
    const navigate = useNavigate();

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




            <div className="container" style={{ position: 'relative', zIndex: 2, textAlign: 'center', maxWidth: '700px' }}>
                {/* CRAZY THIN FRAME WRAPPER */}
                <motion.div
                    initial={{ scale: 0.95, opacity: 0 }}
                    whileInView={{ scale: 1, opacity: 1 }}
                    transition={{ duration: 0.8 }}
                    style={{
                        position: 'relative',
                        padding: '3rem 2rem',
                        borderRadius: '24px',
                        border: '1px solid rgba(0,0,0,0.08)',
                        background: 'rgba(255,255,255,0.3)',
                        backdropFilter: 'blur(20px)',
                        boxShadow: '0 20px 60px -10px rgba(0,0,0,0.05)',
                        overflow: 'hidden'
                    }}
                >
                    {/* Decorative Corner Accents */}
                    <div style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', pointerEvents: 'none' }}>
                        <div style={{ position: 'absolute', top: '15px', left: '15px', width: '30px', height: '30px', borderTop: '2px solid rgba(0,0,0,0.2)', borderLeft: '2px solid rgba(0,0,0,0.2)', borderTopLeftRadius: '10px' }} />
                        <div style={{ position: 'absolute', top: '15px', right: '15px', width: '30px', height: '30px', borderTop: '2px solid rgba(0,0,0,0.2)', borderRight: '2px solid rgba(0,0,0,0.2)', borderTopRightRadius: '10px' }} />
                        <div style={{ position: 'absolute', bottom: '15px', left: '15px', width: '30px', height: '30px', borderBottom: '2px solid rgba(0,0,0,0.2)', borderLeft: '2px solid rgba(0,0,0,0.2)', borderBottomLeftRadius: '10px' }} />
                        <div style={{ position: 'absolute', bottom: '15px', right: '15px', width: '30px', height: '30px', borderBottom: '2px solid rgba(0,0,0,0.2)', borderRight: '2px solid rgba(0,0,0,0.2)', borderBottomRightRadius: '10px' }} />
                    </div>

                    {/* Pill Badge */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: false }}
                        style={{
                            display: 'inline-block',
                            padding: '0.4rem 1.2rem',
                            borderRadius: '50px',
                            background: 'rgba(255,255,255,0.5)',
                            border: '1px solid rgba(0,0,0,0.1)',
                            marginBottom: '1.5rem',
                            fontSize: '0.8rem',
                            letterSpacing: '0.1em',
                            textTransform: 'uppercase',
                            color: '#333'
                        }}
                    >
                        <span style={{ marginRight: '0.5rem', color: '#B8860B' }}>✦</span> Contact Us
                    </motion.div>

                    {/* Headline */}
                    <h2 style={{ fontSize: 'clamp(2rem, 4vw, 3.5rem)', lineHeight: 1.1, marginBottom: '1.25rem', fontWeight: 700, color: '#1a1a1a' }}>
                        <RevealText>Seeking to strengthen execution </RevealText>
                        <RevealText delay={0.2}>across your operations?</RevealText>
                    </h2>

                    <motion.p
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        transition={{ delay: 0.4 }}
                        style={{ fontSize: '1.1rem', color: '#555', marginBottom: '2.5rem', maxWidth: '550px', margin: '0 auto 2.5rem auto', lineHeight: 1.6 }}
                    >
                        From sourcing strategy to supply chain optimization, we partner with fashion brands to deliver measurable results and exceptional consumer experiences.
                    </motion.p>

                    {/* Button */}
                    <motion.button
                        whileHover={{ scale: 1.05, boxShadow: '0 10px 30px rgba(0,0,0,0.1)' }}
                        whileTap={{ scale: 0.95 }}
                        onClick={() => navigate('/contact')}
                        style={{
                            background: '#1a1a1a',
                            color: 'white',
                            padding: '0.9rem 2.5rem',
                            borderRadius: '50px',
                            fontSize: '0.95rem',
                            fontWeight: 700,
                            border: 'none',
                            cursor: 'pointer'
                        }}
                    >
                        Talk to Our Experts
                    </motion.button>
                </motion.div>
            </div>
        </section>
    );
};

export default CallToAction;
