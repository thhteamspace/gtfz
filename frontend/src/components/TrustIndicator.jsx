import React from 'react';
import { motion } from 'framer-motion';

const TrustIndicator = () => {
    const logos = [
        "TechGlobal", "FinancePrime", "HealthCore", "EduVance", "AgriFuture",
        "BuildMaster", "LogiChain", "EnergyPlus", "MediaStream", "RetailNext"
    ];

    return (
        <div className="section" style={{ padding: 'var(--space-md) 0', borderBottom: '1px solid rgba(255,255,255,0.05)' }}>
            <div className="container" style={{ overflow: 'hidden' }}>
                {/* Text with down-to-up reveal animation */}
                <motion.p
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-10% 0px" }}
                    transition={{ duration: 0.7, ease: [0.25, 0.1, 0.25, 1] }}
                    style={{
                        textAlign: 'center',
                        fontSize: '0.8rem',
                        textTransform: 'uppercase',
                        letterSpacing: '0.2em',
                        color: 'var(--color-text-secondary)',
                        marginBottom: 'var(--space-md)'
                    }}
                >
                    Trusted by Industry Leaders
                </motion.p>

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-10% 0px" }}
                    transition={{ duration: 0.7, delay: 0.15, ease: [0.25, 0.1, 0.25, 1] }}
                    style={{ display: 'flex', maskImage: 'linear-gradient(to right, transparent, black 10%, black 90%, transparent)' }}
                >
                    <motion.div
                        animate={{ x: ["0%", "-50%"] }}
                        transition={{ repeat: Infinity, duration: 20, ease: "linear" }}
                        style={{ display: 'flex', gap: '4rem', whiteSpace: 'nowrap' }}
                    >
                        {[...logos, ...logos].map((logo, index) => (
                            <span key={index} style={{
                                fontSize: '1.5rem',
                                fontWeight: 700,
                                color: 'var(--color-alabaster-silk)',
                                opacity: 0.5
                            }}>
                                {logo}
                            </span>
                        ))}
                    </motion.div>
                </motion.div>
            </div>
        </div>
    );
};

export default TrustIndicator;
