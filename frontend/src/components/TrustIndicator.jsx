import React from 'react';
import { motion } from 'framer-motion';

const TrustIndicator = () => {
    const logos = [
        "TechGlobal", "FinancePrime", "HealthCore", "EduVance", "AgriFuture",
        "BuildMaster", "LogiChain", "EnergyPlus", "MediaStream", "RetailNext"
    ];

    return (
        <section style={{
            padding: '6rem 0',
            borderBottom: '1px solid rgba(255,255,255,0.05)',
            background: '#0a0a0a'
        }}>
            <div className="container">

                {/* Unique Headline */}
                <div style={{
                    marginBottom: '3.5rem',
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    fontFamily: 'Outfit, sans-serif'
                }}>
                    <motion.span
                        initial={{ opacity: 0, letterSpacing: '0.5em' }}
                        whileInView={{ opacity: 1, letterSpacing: '0.2em' }}
                        transition={{ duration: 0.8 }}
                        style={{
                            fontSize: '0.75rem',
                            textTransform: 'uppercase',
                            color: '#C5A059',
                            marginBottom: '1rem'
                        }}
                    >
                        Establish Trust
                    </motion.span>
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                        style={{
                            fontSize: 'clamp(2.5rem, 5vw, 4rem)',
                            fontWeight: 300,
                            color: '#FEFFFF',
                            textAlign: 'center',
                            lineHeight: 1
                        }}
                    >
                        Our <span style={{
                            fontFamily: 'Playfair Display, serif',
                            fontStyle: 'italic',
                            color: '#FEFFFF'
                        }}>Ecosystem</span>
                    </motion.h2>
                </div>

                {/* Marquee Container */}
                <div style={{
                    position: 'relative',
                    padding: '2.5rem 0',
                    background: 'transparent',
                    borderRadius: '12px',
                    overflow: 'hidden'
                }}>
                    {/* Gradient Masks */}
                    <div style={{
                        position: 'absolute', left: 0, top: 0, bottom: 0, width: '15%', zIndex: 2,
                        background: 'linear-gradient(to right, #0a0a0a, transparent)'
                    }} />
                    <div style={{
                        position: 'absolute', right: 0, top: 0, bottom: 0, width: '15%', zIndex: 2,
                        background: 'linear-gradient(to left, #0a0a0a, transparent)'
                    }} />

                    <motion.div
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        transition={{ duration: 1 }}
                        style={{ display: 'flex' }}
                    >
                        <motion.div
                            animate={{ x: ["0%", "-50%"] }}
                            transition={{ repeat: Infinity, duration: 40, ease: "linear" }}
                            style={{ display: 'flex', gap: '6rem', whiteSpace: 'nowrap', paddingLeft: '3rem' }}
                        >
                            {[...logos, ...logos, ...logos].map((logo, index) => (
                                <span key={index} style={{
                                    fontSize: '1.75rem',
                                    fontWeight: 500,
                                    color: 'rgba(255,255,255,0.9)',
                                    fontFamily: 'Outfit, sans-serif',
                                    opacity: 0.7,
                                    letterSpacing: '-0.02em'
                                }}>
                                    {logo}
                                </span>
                            ))}
                        </motion.div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default TrustIndicator;
