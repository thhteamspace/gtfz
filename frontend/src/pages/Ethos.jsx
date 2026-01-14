import React from 'react';
import { motion } from 'framer-motion';

// Triad Component - 3 Intersecting Circles of Value
const GTTriad = () => {
    return (
        <div style={{ position: 'relative', height: '500px', display: 'flex', justifyContent: 'center', alignItems: 'center', margin: 'var(--space-xl) 0' }}>
            {/* Circle 1 */}
            <motion.div
                animate={{ scale: [1, 1.05, 1], rotate: [0, 5, 0] }}
                transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
                style={{
                    position: 'absolute',
                    width: '300px', height: '300px',
                    border: '1px solid rgba(166, 124, 82, 0.3)',
                    borderRadius: '50%',
                    transform: 'translate(-30%, -20%)',
                    display: 'flex', alignItems: 'center', justifyContent: 'center',
                    background: 'rgba(166, 124, 82, 0.05)',
                    backdropFilter: 'blur(5px)'
                }}
            >
                <span style={{ color: 'var(--color-heritage-bronze)', fontWeight: 600 }}>Integrity</span>
            </motion.div>

            {/* Circle 2 */}
            <motion.div
                animate={{ scale: [1, 1.05, 1], rotate: [0, -5, 0] }}
                transition={{ duration: 9, repeat: Infinity, ease: "easeInOut", delay: 1 }}
                style={{
                    position: 'absolute',
                    width: '300px', height: '300px',
                    border: '1px solid rgba(255, 255, 255, 0.1)',
                    borderRadius: '50%',
                    transform: 'translate(30%, -20%)',
                    display: 'flex', alignItems: 'center', justifyContent: 'center',
                    background: 'rgba(255, 255, 255, 0.02)',
                    backdropFilter: 'blur(5px)'
                }}
            >
                <span style={{ color: 'white', fontWeight: 600 }}>Strategy</span>
            </motion.div>

            {/* Circle 3 */}
            <motion.div
                animate={{ scale: [1, 1.05, 1] }}
                transition={{ duration: 7, repeat: Infinity, ease: "easeInOut", delay: 2 }}
                style={{
                    position: 'absolute',
                    width: '300px', height: '300px',
                    border: '1px solid rgba(212, 175, 55, 0.3)',
                    borderRadius: '50%',
                    transform: 'translate(0%, 30%)',
                    display: 'flex', alignItems: 'center', justifyContent: 'center',
                    background: 'rgba(212, 175, 55, 0.05)',
                    backdropFilter: 'blur(5px)'
                }}
            >
                <span style={{ color: 'var(--color-cashmere-gold)', fontWeight: 600 }}>Impact</span>
            </motion.div>
        </div>
    )
}

const Ethos = () => {
    return (
        <>
            {/* Minimal Hero */}
            <section className="section" style={{ textAlign: 'center', padding: 'var(--space-xl) 0' }}>
                <div className="container">
                    <motion.h1
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        style={{ fontSize: 'clamp(3rem, 6vw, 6rem)', lineHeight: 1, marginBottom: 'var(--space-md)' }}
                    >
                        Principled <span style={{ color: 'var(--color-heritage-bronze)' }}>Performance.</span>
                    </motion.h1>
                    <p style={{ maxWidth: '600px', margin: '0 auto', fontSize: '1.25rem', color: 'var(--color-text-secondary)' }}>
                        We believe that true value is generated at the intersection of rigorous analysis and unwavering ethics.
                    </p>
                </div>
            </section>

            {/* Triad */}
            <section className="section">
                <div className="container">
                    <GTTriad />
                </div>
            </section>

            {/* Leadership Note */}
            <section className="section" style={{ background: 'var(--color-strategic-navy)' }}>
                <div className="container">
                    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: 'var(--space-xl)', alignItems: 'center' }}>
                        {/* Portrait */}
                        <div style={{ position: 'relative' }}>
                            <div style={{
                                position: 'absolute', top: '-20px', left: '-20px',
                                width: '100%', height: '100%',
                                border: '1px solid var(--color-heritage-bronze)'
                            }} />
                            <img
                                src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=800"
                                alt="Founder"
                                style={{
                                    width: '100%',
                                    filter: 'grayscale(100%)',
                                    position: 'relative',
                                    zIndex: 1
                                }}
                            />
                        </div>

                        {/* Text */}
                        <div>
                            <h2 className="section-title">A note from our Founder</h2>
                            <p style={{ marginBottom: '1.5rem', fontSize: '1.1rem', lineHeight: 1.6, color: 'var(--color-alabaster-silk)' }}>
                                "In an era of noise, we chose signal. GTFZ was built to serve leaders who demand more than just advice—they demand a partner who understands the weight of their decisions."
                            </p>
                            <img
                                src="https://upload.wikimedia.org/wikipedia/commons/e/e4/Signature_sample.svg"
                                alt="Signature"
                                style={{ height: '50px', filter: 'invert(1)' }}
                            />
                            <p style={{ marginTop: '1rem', fontSize: '0.9rem', color: 'var(--color-text-secondary)' }}>
                                — <strong>Alexander Sterling</strong>, Managing Partner
                            </p>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
};

export default Ethos;
