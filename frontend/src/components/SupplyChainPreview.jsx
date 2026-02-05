
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import useMediaQuery from '../hooks/useMediaQuery';
import RevealText from './motion/RevealText';

const COLORS = {
    opticalWhite: '#FEFFFF',
    darkCharcoal: '#111111',
    bronze: '#C5A059',
    textSecondary: 'rgba(255, 255, 255, 0.7)',
};

const SupplyChainPreview = () => {
    const isMobile = useMediaQuery('(max-width: 900px)');
    const navigate = useNavigate();
    const [isHovered, setIsHovered] = useState(false);

    return (
        <section style={{
            background: COLORS.darkCharcoal,
            padding: isMobile ? '6rem 2rem' : '8rem 0',
            position: 'relative',
            overflow: 'hidden'
        }}>
            <div className="container" style={{
                display: 'grid',
                gridTemplateColumns: isMobile ? '1fr' : '1fr 1fr',
                gap: isMobile ? '4rem' : '6rem',
                alignItems: 'center'
            }}>
                {/* 1. Visual Side (The Glimpse) */}
                <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: false, amount: 0.3 }}
                    transition={{ duration: 0.8 }}
                    onHoverStart={() => setIsHovered(true)}
                    onHoverEnd={() => setIsHovered(false)}
                    onClick={() => navigate('/ethos')}
                    style={{
                        position: 'relative',
                        height: isMobile ? '350px' : '500px',
                        width: '100%',
                        borderRadius: '4px',
                        overflow: 'hidden',
                        cursor: 'pointer',
                        border: `1px solid ${COLORS.bronze}`, // Signature bronze frame
                    }}
                >
                    {/* Image */}
                    <img
                        src="/assets/images/supply_chain_network_background.png"
                        alt="Global Supply Chain Network"
                        style={{
                            width: '100%',
                            height: '100%',
                            objectFit: 'cover',
                            filter: 'brightness(0.8) contrast(1.1)',
                            transition: 'transform 0.7s ease',
                            transform: isHovered ? 'scale(1.05)' : 'scale(1)'
                        }}
                    />

                    {/* Hover Caption overlay */}
                    <motion.div
                        initial={{ opacity: 0, x: 20 }}
                        animate={{
                            opacity: isHovered ? 1 : 0,
                            x: isHovered ? 0 : 20
                        }}
                        transition={{ duration: 0.4, ease: "easeOut" }}
                        style={{
                            position: 'absolute',
                            bottom: '30px',
                            right: '30px',
                            background: 'rgba(17, 17, 17, 0.9)',
                            padding: '12px 24px',
                            borderLeft: `3px solid ${COLORS.bronze}`,
                            backdropFilter: 'blur(8px)'
                        }}
                    >
                        <span style={{
                            color: COLORS.opticalWhite,
                            fontFamily: 'Outfit, sans-serif',
                            fontSize: '0.9rem',
                            letterSpacing: '0.05em'
                        }}>
                            View Full Network Visualization →
                        </span>
                    </motion.div>
                </motion.div>

                {/* 2. Content Side */}
                <div>
                    <div style={{ marginBottom: '2rem' }}>
                        <div style={{
                            display: 'inline-block',
                            borderBottom: `1px solid ${COLORS.bronze}`,
                            paddingBottom: '0.5rem',
                            marginBottom: '1.5rem',
                            fontSize: '0.75rem',
                            color: COLORS.bronze,
                            fontFamily: 'monospace',
                            letterSpacing: '0.2em',
                            textTransform: 'uppercase'
                        }}>
                            Capabilities
                        </div>

                        <h2 style={{
                            fontSize: 'clamp(2rem, 4vw, 3.5rem)',
                            fontWeight: 500,
                            color: COLORS.opticalWhite,
                            fontFamily: 'Outfit, sans-serif',
                            lineHeight: 1.1,
                            marginBottom: '1.5rem'
                        }}>
                            Supply Chain <span style={{ color: COLORS.bronze, fontFamily: 'Playfair Display, serif', fontStyle: 'italic' }}>Orchestration</span>
                        </h2>
                    </div>

                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: false }}
                        transition={{ duration: 0.6, delay: 0.1 }}
                        style={{
                            fontSize: isMobile ? '1rem' : '1.1rem',
                            lineHeight: 1.7,
                            color: COLORS.textSecondary,
                            marginBottom: '2.5rem',
                            fontFamily: 'Inter, sans-serif',
                            maxWidth: '500px'
                        }}
                    >
                        We don't just manage supply chains; we visualize and orchestrate them.
                        From raw material sourcing to final mile delivery, our global network
                        ensures precision, speed, and total transparency.
                    </motion.p>

                    <motion.button
                        initial={{ opacity: 0, y: 10 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: false }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                        whileHover={{ x: 5 }}
                        onClick={() => navigate('/ethos')}
                        style={{
                            background: 'transparent',
                            border: 'none',
                            color: COLORS.bronze,
                            fontSize: '1rem',
                            fontFamily: 'Outfit, sans-serif',
                            cursor: 'pointer',
                            display: 'flex',
                            alignItems: 'center',
                            gap: '10px',
                            padding: 0
                        }}
                    >
                        Explore Our Methodology
                        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                            <line x1="5" y1="12" x2="19" y2="12"></line>
                            <polyline points="12 5 19 12 12 19"></polyline>
                        </svg>
                    </motion.button>
                </div>
            </div>
        </section>
    );
};

export default SupplyChainPreview;
