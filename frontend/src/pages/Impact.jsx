import React, { useRef, useState } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import { CASE_STUDIES_FULL } from './CaseStudyDetail';

const COLORS = {
    opticalWhite: '#FEFFFF',
    darkCharcoal: '#111111',
    bronze: '#C5A059',
    gold: '#D4AF37',
    text: '#111111',
    textSecondary: 'rgba(17, 17, 17, 0.6)'
};

const ImpactHero = () => {
    const containerRef = useRef(null);
    const { scrollYProgress } = useScroll({ target: containerRef, offset: ["start start", "end start"] });

    const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);
    const y = useTransform(scrollYProgress, [0, 0.5], [0, -50]);

    return (
        <section ref={containerRef} style={{
            minHeight: '100vh',
            background: COLORS.darkCharcoal,
            display: 'flex',
            alignItems: 'center',
            position: 'relative',
            overflow: 'hidden'
        }}>
            {/* Cinematic Animated Background */}
            <style>{`
                @keyframes impactZoom {
                    0%, 100% { transform: scale(1); }
                    50% { transform: scale(1.1); }
                }
            `}</style>

            <div style={{
                position: 'absolute',
                inset: 0,
                backgroundImage: 'url(https://images.unsplash.com/photo-1565008576549-57569a49371d?auto=format&fit=crop&q=80&w=2574)',
                backgroundSize: 'cover',
                backgroundPosition: 'center top',
                filter: 'brightness(0.55) saturate(1.2)',
                animation: 'impactZoom 22s ease-in-out infinite',
                zIndex: 0
            }} />

            <motion.div className="container" style={{ position: 'relative', zIndex: 2, opacity, y }}>
                <motion.div
                    initial={{ opacity: 0, y: 40, scale: 0.97 }}
                    whileInView={{ opacity: 1, y: 0, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.9, ease: [0.25, 0.1, 0.25, 1] }}
                >
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.7, delay: 0.1, ease: [0.25, 0.1, 0.25, 1] }}
                        style={{
                            display: 'inline-flex',
                            padding: '0.5rem 1.5rem',
                            background: 'rgba(254, 255, 255, 0.05)',
                            border: '1px solid rgba(254, 255, 255, 0.1)',
                            borderRadius: '2rem',
                            marginBottom: '2rem'
                        }}
                    >
                        <span style={{
                            fontSize: '0.75rem',
                            color: COLORS.bronze,
                            fontFamily: 'monospace',
                            letterSpacing: '0.15em',
                            textTransform: 'uppercase'
                        }}>PROVEN RESULTS</span>
                    </motion.div>

                    <motion.h1
                        initial={{ opacity: 0, y: 50, scale: 0.97 }}
                        whileInView={{ opacity: 1, y: 0, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.9, delay: 0.2, ease: [0.25, 0.1, 0.25, 1] }}
                        style={{
                            fontSize: 'clamp(4rem, 11vw, 10rem)',
                            fontWeight: 500,
                            lineHeight: 0.9,
                            color: COLORS.opticalWhite,
                            marginBottom: '2rem',
                            fontFamily: 'Outfit, sans-serif',
                            letterSpacing: '-0.03em'
                        }}
                    >
                        Measured<br />Impact.
                    </motion.h1>

                    <motion.p
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.7, delay: 0.35, ease: [0.25, 0.1, 0.25, 1] }}
                        style={{
                            fontSize: '1.2rem',
                            lineHeight: 1.7,
                            color: 'rgba(254, 255, 255, 0.6)',
                            maxWidth: '600px',
                            fontFamily: 'Inter, sans-serif',
                            paddingBottom: '20px'
                        }}
                    >
                        Real results from fashion brands who trust us with their supply chain execution.
                    </motion.p>
                </motion.div>
            </motion.div>
        </section>
    );
};

const KeyMetrics = () => {
    const metrics = [
        { value: '50+', label: 'Global Partners', sublabel: 'Trusted by established and emerging fashion houses.' },
        { value: '100%', label: 'Audit Verified', sublabel: 'Full compliance documentation for every facility.' }, // Files/Doc supported
        { value: '99.8%', label: 'Quality Grade', sublabel: 'Consistently meeting luxury standard inspections.' },
        { value: 'Zero', label: 'Compliance Risks', sublabel: 'Documented adherence to global labor standards.' }
    ];

    return (
        <section style={{
            background: COLORS.opticalWhite,
            padding: 'var(--space-xl) 0'
        }}>
            <div className="container">
                <div style={{
                    display: 'grid',
                    gridTemplateColumns: window.innerWidth < 768 ? '1fr' : 'repeat(4, 1fr)',
                    gap: '3rem'
                }}>
                    {metrics.map((metric, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6, delay: index * 0.1, ease: [0.4, 0, 0.2, 1] }}
                            style={{
                                textAlign: 'center',
                                padding: '2rem',
                                border: `1px solid ${COLORS.borderLight}`,
                                background: index % 2 === 0 ? COLORS.opticalWhite : 'rgba(17, 17, 17, 0.02)'
                            }}
                        >
                            <div style={{
                                fontSize: 'clamp(3rem, 6vw, 5rem)',
                                fontWeight: 500,
                                color: index % 2 === 0 ? COLORS.bronze : COLORS.text,
                                lineHeight: 1,
                                marginBottom: '1rem',
                                fontFamily: 'Outfit, sans-serif'
                            }}>
                                {metric.value}
                            </div>
                            <div style={{
                                fontSize: '1.1rem',
                                fontWeight: 500,
                                color: COLORS.text,
                                marginBottom: '0.5rem',
                                fontFamily: 'Outfit, sans-serif'
                            }}>
                                {metric.label}
                            </div>
                            <div style={{
                                fontSize: '0.85rem',
                                color: COLORS.textSecondary,
                                fontFamily: 'Inter, sans-serif'
                            }}>
                                {metric.sublabel}
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

// --- Editorial Case Studies Component ---
const EditorialCaseStudies = () => {
    const [hoverState, setHoverState] = useState({ index: null, section: null });
    const navigate = useNavigate();

    const getGridTemplate = (idx) => {
        if (hoverState.index !== idx) return '1fr 1fr';
        // Even index: Image Left (Order 1), Content Right (Order 2)
        // Odd index: Content Left (Order 1), Image Right (Order 2)
        const isImageLeft = idx % 2 === 0;

        if (hoverState.section === 'image') {
            // Hover Image: It should grow.
            // If Image is Left -> 1.5fr 1fr
            // If Image is Right -> 1fr 1.5fr
            return isImageLeft ? '1.5fr 1fr' : '1fr 1.5fr';
        }
        if (hoverState.section === 'content') {
            // Hover Content: It should grow.
            // If Content is Right -> 1fr 1.5fr
            // If Content is Left -> 1.5fr 1fr
            return isImageLeft ? '1fr 1.5fr' : '1.5fr 1fr';
        }
        return '1fr 1fr';
    };

    return (
        <section style={{
            background: '#0a0a0a',
            padding: '8rem 0'
        }}>
            {/* Section Header */}
            <div className="container" style={{ marginBottom: '4rem' }}>
                <motion.div
                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: false, amount: 0.3 }}
                    transition={{ duration: 0.8 }}
                    style={{ textAlign: 'center' }}
                >
                    <h2 style={{
                        fontSize: 'clamp(2.5rem, 6vw, 4.5rem)',
                        fontWeight: 500,
                        color: COLORS.opticalWhite,
                        fontFamily: 'Outfit, sans-serif',
                        marginBottom: '1rem'
                    }}>
                        SUCCESS <span style={{ color: COLORS.bronze }}>STORIES</span>
                    </h2>
                </motion.div>
            </div>

            {/* Case Study Cards */}
            {CASE_STUDIES_FULL.map((study, index) => (
                <motion.div
                    key={index}
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: false, amount: 0.2 }}
                    animate={{
                        gridTemplateColumns: getGridTemplate(index)
                    }}
                    transition={{
                        gridTemplateColumns: { duration: 0.4, ease: "easeInOut" },
                        opacity: { duration: 0.8 }
                    }}
                    onMouseLeave={() => setHoverState({ index: null, section: null })}
                    style={{
                        display: 'grid',
                        gridTemplateColumns: '1fr 1fr',
                        minHeight: '80vh'
                    }}
                >
                    {/* Image Side */}
                    <motion.div
                        initial={{ x: index % 2 === 0 ? -80 : 80, opacity: 0 }}
                        whileInView={{ x: 0, opacity: 1 }}
                        viewport={{ once: false, amount: 0.3 }}
                        transition={{ duration: 1, delay: 0.2 }}
                        onMouseEnter={() => setHoverState({ index, section: 'image' })}
                        onClick={() => navigate(`/impact/${study.id}`)}
                        style={{
                            position: 'relative',
                            overflow: 'hidden',
                            order: index % 2 === 0 ? 1 : 2,
                            cursor: 'pointer'
                        }}
                    >
                        <div style={{
                            position: 'absolute',
                            inset: 0,
                            backgroundImage: `url(${study.image})`,
                            backgroundSize: 'cover',
                            backgroundPosition: 'center',
                            filter: 'brightness(0.75)'
                        }} />

                        {/* Metric Overlay */}
                        <div style={{
                            position: 'absolute',
                            bottom: '3rem',
                            left: '3rem',
                            padding: '2rem'
                        }}>
                            <div style={{
                                fontSize: 'clamp(3rem, 6vw, 4rem)',
                                fontWeight: 700,
                                color: COLORS.bronze,
                                fontFamily: 'Outfit, sans-serif',
                                lineHeight: 1
                            }}>
                                {study.metric}
                            </div>
                            <div style={{
                                fontSize: '0.8rem',
                                color: 'rgba(255,255,255,0.6)',
                                fontFamily: 'monospace',
                                letterSpacing: '0.1em',
                                textTransform: 'uppercase',
                                marginTop: '0.5rem'
                            }}>
                                {study.label}
                            </div>
                        </div>


                    </motion.div>

                    {/* Content Side */}
                    <motion.div
                        initial={{ y: 50, opacity: 0 }}
                        whileInView={{ y: 0, opacity: 1 }}
                        viewport={{ once: false, amount: 0.3 }}
                        transition={{ duration: 1, delay: 0.3 }}
                        onMouseEnter={() => setHoverState({ index, section: 'content' })}
                        onClick={() => navigate(`/impact/${study.id}`)}
                        style={{
                            display: 'flex',
                            flexDirection: 'column',
                            justifyContent: 'center',
                            padding: '4rem',
                            background: index % 2 === 0 ? '#111' : '#0a0a0a',
                            order: index % 2 === 0 ? 2 : 1,
                            cursor: 'pointer'
                        }}
                    >
                        {/* Category */}
                        <div style={{
                            display: 'inline-flex',
                            alignSelf: 'flex-start',
                            padding: '0.5rem 1rem',
                            border: `1px solid ${COLORS.bronze}`,
                            borderRadius: '2rem',
                            marginBottom: '2rem'
                        }}>
                            <span style={{
                                fontSize: '0.7rem',
                                color: COLORS.bronze,
                                fontFamily: 'monospace',
                                letterSpacing: '0.1em',
                                textTransform: 'uppercase'
                            }}>
                                {study.category}
                            </span>
                        </div>

                        {/* Title */}
                        <h3 style={{
                            fontSize: 'clamp(1.5rem, 3vw, 2.2rem)',
                            fontWeight: 500,
                            color: COLORS.opticalWhite,
                            fontFamily: 'Outfit, sans-serif',
                            lineHeight: 1.2,
                            marginBottom: '2rem'
                        }}>
                            {study.title}
                        </h3>

                        {/* Challenge & Solution */}
                        <div style={{ marginBottom: '2rem' }}>
                            <div style={{ marginBottom: '1.5rem' }}>
                                <div style={{
                                    fontSize: '0.75rem',
                                    color: COLORS.bronze,
                                    fontFamily: 'monospace',
                                    textTransform: 'uppercase',
                                    marginBottom: '0.5rem'
                                }}>Challenge</div>
                                <p style={{
                                    color: 'rgba(255,255,255,0.6)',
                                    lineHeight: 1.6,
                                    fontSize: '0.95rem'
                                }}>
                                    {study.challenge}
                                </p>
                            </div>
                            <div>
                                <div style={{
                                    fontSize: '0.75rem',
                                    color: COLORS.bronze,
                                    fontFamily: 'monospace',
                                    textTransform: 'uppercase',
                                    marginBottom: '0.5rem'
                                }}>Solution</div>
                                <p style={{
                                    color: 'rgba(255,255,255,0.6)',
                                    lineHeight: 1.6,
                                    fontSize: '0.95rem'
                                }}>
                                    {study.solution}
                                </p>
                            </div>
                        </div>

                        {/* Client & Duration */}
                        <div style={{
                            display: 'flex',
                            gap: '3rem',
                            borderTop: '1px solid rgba(255,255,255,0.1)',
                            paddingTop: '1.5rem'
                        }}>
                            <div>
                                <div style={{ fontSize: '0.65rem', color: 'rgba(255,255,255,0.4)', textTransform: 'uppercase', marginBottom: '0.25rem' }}>Client</div>
                                <div style={{ fontSize: '0.9rem', color: COLORS.opticalWhite, fontWeight: 500 }}>{study.client}</div>
                            </div>
                            <div>
                                <div style={{ fontSize: '0.65rem', color: 'rgba(255,255,255,0.4)', textTransform: 'uppercase', marginBottom: '0.25rem' }}>Duration</div>
                                <div style={{ fontSize: '0.9rem', color: COLORS.opticalWhite, fontWeight: 500 }}>{study.duration}</div>
                            </div>
                        </div>

                        {/* Read Full Story Button */}
                        <motion.div
                            style={{
                                marginTop: '2rem',
                                display: 'inline-flex',
                                alignItems: 'center',
                                gap: '0.75rem',
                                padding: '0.75rem 1.5rem',
                                background: 'transparent',
                                border: `1px solid ${COLORS.bronze}`,
                                borderRadius: '2rem',
                                color: COLORS.bronze,
                                fontSize: '0.85rem',
                                fontWeight: 500,
                                cursor: 'pointer',
                                alignSelf: 'flex-start',
                                transition: 'all 0.3s'
                            }}
                            whileHover={{
                                background: COLORS.bronze,
                                color: '#111'
                            }}
                        >
                            Read Full Story
                            <span style={{ fontSize: '1.1rem' }}>→</span>
                        </motion.div>
                    </motion.div>
                </motion.div>
            ))}
        </section>
    );
};

const Impact = () => {
    return (
        <main style={{ background: COLORS.opticalWhite }}>
            <ImpactHero />
            <EditorialCaseStudies />
            <KeyMetrics />
        </main>
    );
};

export default Impact;

