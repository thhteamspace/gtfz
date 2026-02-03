import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import useMediaQuery from '../hooks/useMediaQuery';
import SupplyChainOrchestration from './SupplyChainOrchestration';

const COLORS = {
    opticalWhite: '#FEFFFF',
    darkCharcoal: '#111111',
    bronze: '#C5A059',
    gold: '#D4AF37',
    text: '#111111',
    textSecondary: 'rgba(17, 17, 17, 0.65)',
    lightBg: '#F8F7F5'
};

const ExpertiseGroup = ({ title, areas, startIndex, isMobile, focusedIndex, setFocusedIndex }) => {
    return (
        <div style={{ marginBottom: isMobile ? '3rem' : '6rem' }}>
            <motion.h3
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: false, amount: 0.2 }}
                transition={{ duration: 0.8 }}
                style={{
                    fontSize: 'clamp(2rem, 4vw, 2.5rem)',
                    fontWeight: 400,
                    color: COLORS.bronze,
                    fontFamily: 'Playfair Display, serif',
                    marginBottom: '2rem',
                    borderBottom: `1px solid ${COLORS.bronze}50`,
                    paddingBottom: '1rem',
                    display: 'inline-block'
                }}
            >
                {title}
            </motion.h3>

            <div style={{
                display: isMobile ? 'flex' : 'grid',
                flexDirection: 'column',
                gridTemplateColumns: 'repeat(2, 1fr)',
                gap: isMobile ? '1rem' : '4rem',
                maxWidth: '1200px',
                margin: '0 auto'
            }}>
                {areas.map((area, localIndex) => {
                    const globalIndex = startIndex + localIndex;
                    const isOpen = focusedIndex === globalIndex;

                    return (
                        <motion.div
                            key={globalIndex}
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: false, amount: 0.3 }}
                            custom={localIndex}
                            onClick={() => {
                                if (isMobile) {
                                    setFocusedIndex(focusedIndex === globalIndex ? -1 : globalIndex);
                                }
                            }}
                            variants={isMobile ? {
                                hidden: { opacity: 0, y: 30, x: 0, rotate: 0 },
                                visible: (i) => ({
                                    opacity: 1,
                                    y: 0,
                                    x: 0,
                                    rotate: 0,
                                    transition: { delay: i * 0.1, duration: 0.6 }
                                })
                            } : {
                                hidden: {
                                    opacity: 0,
                                    x: localIndex % 2 === 0 ? '60%' : '-60%',
                                    y: localIndex < 2 ? '60%' : '-60%',
                                    scale: 0.8,
                                    rotate: localIndex % 2 === 0 ? -6 : 6
                                },
                                visible: (i) => ({
                                    opacity: 1,
                                    x: 0,
                                    y: 0,
                                    scale: 1,
                                    rotate: 0,
                                    transition: {
                                        delay: 0.2 + (i * 0.1),
                                        duration: 1.4,
                                        ease: [0.22, 1, 0.36, 1]
                                    }
                                })
                            }}
                            whileHover={isMobile ? undefined : "hover"}
                            style={{
                                borderTop: `1px solid rgba(197, 160, 89, 0.3)`,
                                paddingTop: isMobile ? '1.5rem' : '2rem',
                                paddingBottom: isMobile ? '0.5rem' : '0',
                                position: 'relative',
                                cursor: isMobile ? 'pointer' : 'default',
                                transition: 'background 0.3s'
                            }}
                        >
                            <motion.div
                                variants={{
                                    hover: { width: '100%', opacity: 1 },
                                    visible: { width: '0%', opacity: 0 }
                                }}
                                transition={{ duration: 0.4, ease: "easeInOut" }}
                                style={{
                                    position: 'absolute',
                                    top: '-1px',
                                    left: 0,
                                    height: '2px',
                                    background: COLORS.bronze,
                                    width: isOpen && isMobile ? '100%' : '0%'
                                }}
                            />

                            <h3 style={{
                                fontSize: isMobile ? '1.5rem' : '2rem',
                                fontWeight: 400,
                                color: isOpen || !isMobile ? COLORS.opticalWhite : 'rgba(255,255,255,0.5)',
                                fontFamily: 'Outfit, sans-serif',
                                marginBottom: isMobile ? '0.5rem' : '1.5rem',
                                display: 'flex',
                                alignItems: 'center',
                                gap: '1rem',
                                transition: 'color 0.3s'
                            }}>
                                <span style={{ fontSize: '1rem', color: COLORS.bronze, fontFamily: 'monospace' }}>0{localIndex + 1}</span>
                                {area.title}
                                {!isMobile && (
                                    <motion.span
                                        variants={{
                                            hover: { opacity: 1, scale: 1, rotate: 45 },
                                            visible: { opacity: 0, scale: 0.5, rotate: 0 }
                                        }}
                                        transition={{ duration: 0.4 }}
                                        style={{
                                            fontSize: '0.8rem',
                                            color: COLORS.bronze,
                                            marginLeft: 'auto'
                                        }}
                                    >
                                        ◆
                                    </motion.span>
                                )}
                                {isMobile && (
                                    <span style={{
                                        fontSize: '1.2rem',
                                        color: COLORS.bronze,
                                        marginLeft: 'auto',
                                        transform: isOpen ? 'rotate(180deg)' : 'rotate(0deg)',
                                        transition: 'transform 0.3s'
                                    }}>
                                        ↓
                                    </span>
                                )}
                            </h3>

                            <AnimatePresence>
                                {(isOpen || !isMobile) && (
                                    <motion.div
                                        initial={isMobile ? { height: 0, opacity: 0 } : { opacity: 1 }}
                                        animate={isMobile ? { height: 'auto', opacity: 1 } : { opacity: 1 }}
                                        exit={isMobile ? { height: 0, opacity: 0 } : { opacity: 0 }}
                                        transition={{ duration: 0.4, ease: "easeInOut" }}
                                        style={{ overflow: 'hidden' }}
                                    >
                                        <p style={{
                                            fontSize: '1.05rem',
                                            lineHeight: 1.7,
                                            color: 'rgba(255,255,255,0.7)',
                                            fontFamily: 'Inter, sans-serif',
                                            margin: 0,
                                            marginBottom: isMobile ? '1rem' : '0',
                                            maxWidth: '95%'
                                        }}>
                                            {area.description}
                                        </p>
                                    </motion.div>
                                )}
                            </AnimatePresence>
                        </motion.div>
                    );
                })}
            </div>
        </div>
    );
};

const IndustryExpertise = () => {
    const isMobile = useMediaQuery('(max-width: 768px)');
    const [focusedIndex, setFocusedIndex] = useState(0);

    const strategicAreas = [
        {
            title: "Management Consulting",
            description: "We specialize in management consulting that transforms organizations into agile, efficient, and innovative leaders in their industries. Our team of seasoned consultants bring a wealth of experience and expertise."
        },
        {
            title: "Reorganization",
            description: "Reorganization is essential for businesses aiming to enhance efficiency and adapt to changing market dynamics. Our expert consultants guide organizations through strategic restructuring, ensuring optimal resource allocation."
        },
        {
            title: "Business Building",
            description: "We assist clients in leveraging all available growth strategies, such as enhancing their core operations, exploring adjacent markets, and launching transformative new ventures."
        },
        {
            title: "Revenue Growth Management",
            description: "We help our clients focus on maximizing revenue and profitability through strategic pricing, promotion optimization, and product assortment using advanced data analytics."
        }
    ];

    return (
        <section style={{
            background: COLORS.darkCharcoal,
            padding: isMobile ? '4rem 1.5rem' : '8rem 0',
            position: 'relative',
            color: COLORS.opticalWhite,
            borderTop: `1px solid ${COLORS.bronze}30`
        }}>
            <div className="container">
                <div style={{
                    textAlign: 'center',
                    marginBottom: isMobile ? '3rem' : '5rem'
                }}>
                    <motion.div
                        initial={{ opacity: 0, scale: 0.95, filter: 'blur(10px)' }}
                        whileInView={{ opacity: 1, scale: 1, filter: 'blur(0px)' }}
                        viewport={{ once: false, amount: 0.2 }}
                        transition={{ duration: 1, ease: "easeOut" }}
                    >
                        <h2 style={{
                            fontSize: 'clamp(2.5rem, 5vw, 4rem)',
                            fontWeight: 500,
                            color: COLORS.opticalWhite,
                            fontFamily: 'Outfit, sans-serif',
                            lineHeight: 1.1,
                            margin: 0
                        }}>
                            Industry <span style={{ color: COLORS.bronze, fontStyle: 'italic', fontFamily: 'Playfair Display, serif' }}>Expertise</span>
                        </h2>
                    </motion.div>
                </div>

                <ExpertiseGroup
                    title="Strategic Management & Transformation"
                    areas={strategicAreas}
                    startIndex={0}
                    isMobile={isMobile}
                    focusedIndex={focusedIndex}
                    setFocusedIndex={setFocusedIndex}
                />

                <SupplyChainOrchestration />

            </div>
        </section>
    );
};
export default IndustryExpertise;
