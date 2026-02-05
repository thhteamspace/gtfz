import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import useMediaQuery from '../hooks/useMediaQuery';

const COLORS = {
    opticalWhite: '#FEFFFF',
    darkCharcoal: '#111111',
    bronze: '#C5A059',
    gold: '#D4AF37',
    textSecondary: 'rgba(255, 255, 255, 0.7)',
    lightGrey: 'rgba(255, 255, 255, 0.05)'
};

const buckets = [
    {
        id: 'advisory',
        title: 'Transformational Advisory',
        subtitle: 'Management & Restructuring',
        vibe: 'Strategic Excellence',
        items: [
            {
                label: 'Management Consulting',
                desc: 'High-level strategic steering and organizational design to align global operations with long-term brand vision.'
            },
            {
                label: 'Operational Restructuring',
                desc: 'Revitalizing underperforming supply chains through methodical restructuring and capital reallocation.'
            },
            {
                label: 'Process Improvement',
                desc: 'Implementing Lean and Six Sigma frameworks to drive measurable efficiency gains across the value chain.'
            }
        ]
    },
    {
        id: 'orchestration',
        title: 'Operational Orchestration',
        subtitle: 'Supply Chain & Logistics',
        vibe: 'Network Precision',
        items: [
            {
                label: 'Network Orchestration',
                desc: 'Masterfully coordinating a global ecosystem of thousands of specialized vendors and manufacturing partners.'
            },
            {
                label: 'Design-led Sourcing',
                desc: 'Integrating product development with strategic sourcing to reduce lead times and maximize market responsiveness.'
            },
            {
                label: 'End-to-End Logistics',
                desc: 'Strategic navigation across global hubs, ensuring seamless flow from factory floor to localized distribution.'
            }
        ]
    }
];

const SupplyChainOrchestration = () => {
    const isMobile = useMediaQuery('(max-width: 1024px)');
    const [hoveredBucket, setHoveredBucket] = useState(null);
    const [activeMobileBucket, setActiveMobileBucket] = useState('advisory');

    return (
        <div style={{ marginTop: '8rem', color: COLORS.opticalWhite, position: 'relative', padding: isMobile ? '0' : '0 2rem' }}>

            {/* HEADER SECTION */}
            <div style={{
                textAlign: 'center',
                marginBottom: isMobile ? '3rem' : '8rem',
                maxWidth: '900px',
                margin: '0 auto'
            }}>
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                >
                    <div style={{
                        textTransform: 'uppercase',
                        letterSpacing: '0.4em',
                        fontSize: '0.7rem',
                        color: COLORS.bronze,
                        marginBottom: '1rem',
                        fontWeight: 600
                    }}>
                        Comprehensive Ecosystem
                    </div>
                    <h3 style={{
                        fontSize: 'clamp(2.25rem, 5vw, 4.5rem)',
                        fontFamily: 'Outfit, sans-serif',
                        fontWeight: 500,
                        color: COLORS.opticalWhite,
                        marginBottom: '1.5rem',
                        lineHeight: 1.1
                    }}>
                        Two Dimensions of <span style={{ color: COLORS.bronze, fontFamily: 'Playfair Display, serif', fontStyle: 'italic' }}>Value Creation</span>
                    </h3>
                    {!isMobile && (
                        <p style={{
                            fontSize: '1.2rem',
                            lineHeight: 1.8,
                            color: COLORS.textSecondary,
                            fontFamily: 'Inter, sans-serif',
                            maxWidth: '700px',
                            margin: '0 auto'
                        }}>
                            We bridge the gap between high-level management strategy and ground-level operational precision.
                        </p>
                    )}
                </motion.div>
            </div>

            {/* MOBILE TABS TOGGLE */}
            {isMobile && (
                <div style={{
                    display: 'flex',
                    background: 'rgba(255,255,255,0.03)',
                    borderRadius: '100px',
                    padding: '6px',
                    marginBottom: '3rem',
                    border: '1px solid rgba(255,255,255,0.08)',
                    maxWidth: '320px',
                    margin: '0 auto 3rem auto'
                }}>
                    {buckets.map(b => (
                        <button
                            key={b.id}
                            onClick={() => setActiveMobileBucket(b.id)}
                            style={{
                                flex: 1,
                                padding: '12px 20px',
                                border: 'none',
                                borderRadius: '100px',
                                background: activeMobileBucket === b.id ? COLORS.bronze : 'transparent',
                                color: activeMobileBucket === b.id ? COLORS.darkCharcoal : 'rgba(255,255,255,0.6)',
                                fontSize: '0.75rem',
                                fontWeight: 700,
                                textTransform: 'uppercase',
                                letterSpacing: '0.15em',
                                transition: 'all 0.4s cubic-bezier(0.16, 1, 0.3, 1)',
                                fontFamily: 'Outfit, sans-serif'
                            }}
                        >
                            {b.id === 'advisory' ? 'Advisory' : 'Orchestration'}
                        </button>
                    ))}
                </div>
            )}

            {/* DUAL BUCKET LAYOUT */}
            <div style={{
                display: 'grid',
                gridTemplateColumns: isMobile ? '1fr' : '1fr 1fr',
                gap: '2rem',
                alignItems: 'stretch',
                position: 'relative'
            }}>
                {buckets
                    .filter(bucket => !isMobile || bucket.id === activeMobileBucket)
                    .map((bucket, bIdx) => {
                        const isHovered = hoveredBucket === bucket.id;
                        return (
                            <motion.div
                                key={bucket.id}
                                onMouseEnter={() => setHoveredBucket(bucket.id)}
                                onMouseLeave={() => setHoveredBucket(null)}
                                initial={isMobile ? { opacity: 0, x: 20 } : { opacity: 0, x: bIdx === 0 ? -30 : 30 }}
                                animate={isMobile ? { opacity: 1, x: 0 } : {}}
                                whileInView={!isMobile ? { opacity: 1, x: 0 } : {}}
                                viewport={{ once: true }}
                                transition={{ duration: 0.6 }}
                                style={{
                                    background: 'rgba(255, 255, 255, 0.02)',
                                    border: `1px solid ${isHovered || isMobile ? COLORS.bronze : 'rgba(255,255,255,0.05)'}`,
                                    padding: isMobile ? '2.5rem 1.5rem' : '5rem 4rem',
                                    position: 'relative',
                                    borderRadius: '4px',
                                    transition: 'all 0.5s cubic-bezier(0.16, 1, 0.3, 1)',
                                    overflow: 'hidden',
                                    display: 'flex',
                                    flexDirection: 'column'
                                }}
                            >
                                {/* Watermark Index */}
                                <div style={{
                                    position: 'absolute',
                                    top: isMobile ? '-1rem' : '-2rem',
                                    right: isMobile ? '0rem' : '-1rem',
                                    fontSize: isMobile ? '6rem' : '12rem',
                                    fontWeight: 900,
                                    color: 'rgba(255,255,255,0.02)',
                                    fontFamily: 'Outfit, sans-serif',
                                    pointerEvents: 'none'
                                }}>
                                    0{bucket.id === 'advisory' ? 1 : 2}
                                </div>

                                <div style={{
                                    textTransform: 'uppercase',
                                    letterSpacing: '0.2em',
                                    fontSize: '0.7rem',
                                    color: COLORS.bronze,
                                    marginBottom: '0.75rem',
                                    fontWeight: 600,
                                    fontFamily: 'monospace'
                                }}>
                                    {bucket.vibe}
                                </div>

                                <h4 style={{
                                    fontSize: 'clamp(1.75rem, 3vw, 2.5rem)',
                                    color: COLORS.opticalWhite,
                                    fontFamily: 'Outfit, sans-serif',
                                    marginBottom: '0.5rem',
                                    fontWeight: 500
                                }}>
                                    {bucket.title}
                                </h4>
                                <div style={{
                                    fontSize: '1rem',
                                    color: 'rgba(255,255,255,0.4)',
                                    fontFamily: 'Playfair Display, serif',
                                    fontStyle: 'italic',
                                    marginBottom: isMobile ? '2.5rem' : '4rem'
                                }}>
                                    {bucket.subtitle}
                                </div>

                                <div style={{ flex: 1 }}>
                                    {bucket.items.map((item, iIdx) => (
                                        <div key={iIdx} style={{
                                            marginBottom: isMobile ? '2rem' : '3rem',
                                            position: 'relative',
                                            paddingLeft: '1.25rem'
                                        }}>
                                            <div style={{
                                                position: 'absolute',
                                                left: 0,
                                                top: '0.5rem',
                                                width: '5px',
                                                height: '5px',
                                                borderRadius: '50%',
                                                background: COLORS.bronze,
                                                opacity: 1,
                                                transition: 'all 0.3s ease'
                                            }} />
                                            <h5 style={{
                                                fontSize: '1.15rem',
                                                color: COLORS.opticalWhite,
                                                marginBottom: '0.5rem',
                                                fontFamily: 'Outfit, sans-serif',
                                                fontWeight: 500
                                            }}>
                                                {item.label}
                                            </h5>
                                            <p style={{
                                                fontSize: '0.9rem',
                                                lineHeight: 1.6,
                                                color: COLORS.textSecondary,
                                                fontFamily: 'Inter, sans-serif',
                                                maxWidth: '400px'
                                            }}>
                                                {item.desc}
                                            </p>
                                        </div>
                                    ))}
                                </div>

                                {/* Decorative Line */}
                                <div style={{
                                    width: '40px',
                                    height: '1px',
                                    background: COLORS.bronze,
                                    marginTop: '1rem'
                                }} />
                            </motion.div>
                        );
                    })}
            </div>

        </div>
    );
};

export default SupplyChainOrchestration;
