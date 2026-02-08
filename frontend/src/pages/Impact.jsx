import React, { useRef, useState } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import { CASE_STUDIES_FULL } from './CaseStudyDetail';
import useMediaQuery from '../hooks/useMediaQuery';

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
    const isMobile = useMediaQuery('(max-width: 768px)');
    const { scrollYProgress } = useScroll({ target: containerRef, offset: ["start start", "end start"] });

    const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);
    const y = useTransform(scrollYProgress, [0, 0.5], [0, isMobile ? -30 : -50]);

    return (
        <section ref={containerRef} style={{
            minHeight: isMobile ? '100svh' : '100vh',
            background: COLORS.darkCharcoal,
            display: 'flex',
            alignItems: 'center',
            position: 'relative',
            overflow: 'hidden',
            marginTop: 'calc(-1 * var(--header-height))',
            paddingTop: 'var(--header-height)',
            justifyContent: 'center'
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
                backgroundPosition: isMobile ? 'center 20%' : 'center top',
                filter: isMobile ? 'brightness(0.35) saturate(1.1)' : 'brightness(0.55) saturate(1.2)',
                animation: 'impactZoom 22s ease-in-out infinite',
                zIndex: 0
            }} />

            <motion.div className="container" style={{
                position: 'relative',
                zIndex: 2,
                opacity,
                y,
                textAlign: 'center',
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center'
            }}>
                <motion.div
                    initial={{ opacity: 0, y: 40, scale: 0.97 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
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
                        animate={{ opacity: 1, y: 0, scale: 1 }}
                        transition={{ duration: 0.9, delay: 0.2, ease: [0.25, 0.1, 0.25, 1] }}
                        style={{
                            fontSize: 'clamp(3.5rem, 11vw, 10rem)',
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
                        initial={{ opacity: 0, y: 40 }}
                        animate={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.7, delay: 0.35, ease: [0.25, 0.1, 0.25, 1] }}
                        style={{
                            fontSize: isMobile ? '1.1rem' : '1.2rem',
                            lineHeight: 1.7,
                            color: 'rgba(254, 255, 255, 0.6)',
                            maxWidth: '600px',
                            margin: '0',
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
    const isMobile = useMediaQuery('(max-width: 768px)');
    const metrics = [
        { value: '50+', label: 'Global Partners', sublabel: 'Trusted by established and emerging fashion houses.' },
        { value: '100%', label: 'Audit Verified', sublabel: 'Full compliance documentation for every facility.' }, // Files/Doc supported
        { value: '99.8%', label: 'Quality Grade', sublabel: 'Consistently meeting luxury standard inspections.' },
        { value: 'Zero', label: 'Compliance Risks', sublabel: 'Documented adherence to global labor standards.' }
    ];

    return (
        <section style={{
            background: COLORS.opticalWhite,
            padding: isMobile ? '6rem 1rem' : 'var(--space-xl) 0', // Reduced mobile side padding to wider cards
            overflow: 'hidden' // Prevent horizontal scroll from animations
        }}>
            <div className="container">
                <div style={{
                    display: 'grid',
                    gridTemplateColumns: isMobile ? 'repeat(2, 1fr)' : 'repeat(4, 1fr)',
                    gap: isMobile ? '1rem' : '3rem', // Increased mobile gap slightly
                    background: 'transparent'
                }}>
                    {metrics.map((metric, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, x: index % 2 === 0 ? -30 : 30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: false, amount: 0.2 }}
                            transition={{ duration: 0.5, ease: "easeOut" }}
                            style={{
                                textAlign: 'left', // Strict Left Align
                                padding: isMobile ? '1.25rem 1rem' : '2rem',
                                border: isMobile ? '1px solid rgba(0,0,0,0.06)' : `1px solid ${COLORS.borderLight}`,
                                background: isMobile ? '#F5F5F3' : (index % 2 === 0 ? COLORS.opticalWhite : 'rgba(17, 17, 17, 0.02)'),
                                borderRadius: isMobile ? '16px' : '0'
                            }}
                        >
                            <div style={{
                                fontSize: isMobile ? '2rem' : 'clamp(2rem, 5vw, 5rem)',
                                fontWeight: 600,
                                color: isMobile ? COLORS.bronze : (index % 2 === 0 ? COLORS.bronze : COLORS.text), // Consistent color on mobile
                                lineHeight: 1,
                                marginBottom: '0.75rem',
                                fontFamily: 'Outfit, sans-serif'
                            }}>
                                {metric.value}
                            </div>
                            <div style={{
                                fontSize: isMobile ? '1rem' : '1.1rem',
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

                {/* Additional Stats: Customers Split */}
                {/* Additional Stats: Customers Split */}
                <div style={{
                    marginTop: '8rem',
                    textAlign: 'center'
                }}>
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: false }}
                        style={{
                            fontSize: 'clamp(2rem, 5vw, 2.5rem)',
                            fontFamily: 'Playfair Display, serif',
                            fontStyle: 'italic',
                            color: COLORS.text,
                            marginBottom: '4rem'
                        }}
                    >
                        Customer Portfolio
                    </motion.h2>

                    <div style={{
                        display: 'flex',
                        justifyContent: 'center',
                        gap: isMobile ? '4rem' : '6rem',
                        flexWrap: 'wrap'
                    }}>
                        {[
                            { val: "60%", label: "Branded" },
                            { val: "40%", label: "Private Label" }
                        ].map((stat, i) => (
                            <motion.div
                                key={i}
                                initial={{ opacity: 0, scale: 0.5, rotate: -10 }}
                                whileInView={{ opacity: 1, scale: 1, rotate: 0 }}
                                viewport={{ once: false, amount: 0.3 }}
                                transition={{
                                    duration: 0.8,
                                    type: "spring",
                                    bounce: 0.4,
                                    delay: i * 0.2
                                }}
                                style={{ position: 'relative', width: '220px', height: '220px' }}
                            >
                                {/* Rotating Outer Ring */}
                                <motion.div
                                    animate={{ rotate: 360 }}
                                    transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                                    style={{
                                        position: 'absolute',
                                        inset: -10,
                                        borderRadius: '50%',
                                        border: `1px dashed ${COLORS.bronze}`,
                                        opacity: 0.3
                                    }}
                                />

                                {/* Counter-Rotating Inner Ring */}
                                <motion.div
                                    animate={{ rotate: -360 }}
                                    transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
                                    style={{
                                        position: 'absolute',
                                        inset: 0,
                                        borderRadius: '50%',
                                        borderTop: `2px solid ${COLORS.bronze}`,
                                        borderRight: `2px solid transparent`,
                                        borderBottom: `2px solid ${COLORS.bronze}`,
                                        borderLeft: `2px solid transparent`,
                                        opacity: 0.8
                                    }}
                                />

                                {/* Floating Content Circle */}
                                <motion.div
                                    animate={{ y: [0, -10, 0] }}
                                    transition={{ duration: 4, repeat: Infinity, ease: "easeInOut", delay: i * 0.5 }}
                                    style={{
                                        position: 'absolute',
                                        inset: '10px',
                                        borderRadius: '50%',
                                        background: COLORS.darkCharcoal,
                                        display: 'flex',
                                        flexDirection: 'column',
                                        alignItems: 'center',
                                        justifyContent: 'center',
                                        boxShadow: '0 15px 35px rgba(0,0,0,0.2)',
                                        color: COLORS.opticalWhite
                                    }}
                                >
                                    <span style={{
                                        fontSize: '3.5rem',
                                        fontWeight: 700,
                                        fontFamily: 'Outfit, sans-serif',
                                        background: `linear-gradient(135deg, ${COLORS.opticalWhite} 0%, ${COLORS.bronze} 100%)`,
                                        WebkitBackgroundClip: 'text',
                                        WebkitTextFillColor: 'transparent'
                                    }}>
                                        {stat.val}
                                    </span>
                                    <span style={{
                                        fontSize: '0.9rem',
                                        textTransform: 'uppercase',
                                        letterSpacing: '0.15em',
                                        marginTop: '0.5rem',
                                        opacity: 0.9
                                    }}>
                                        {stat.label}
                                    </span>
                                </motion.div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

// --- Editorial Case Studies Component ---
const EditorialCaseStudies = () => {
    const isMobile = useMediaQuery('(max-width: 768px)');
    const [hoverState, setHoverState] = useState({ index: null, section: null });
    const navigate = useNavigate();

    const [visibleCount, setVisibleCount] = useState(3);

    const getGridTemplate = (idx) => {
        if (isMobile) return '1fr';
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
            padding: isMobile ? '6rem 0' : '8rem 0'
        }}>
            {/* Section Header */}
            <div className="container" style={{ marginBottom: isMobile ? '3rem' : '4rem' }}>
                <motion.div
                    initial={{ opacity: 0, y: isMobile ? 20 : 40 }}
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
            {CASE_STUDIES_FULL.slice(0, visibleCount).map((study, index) => (
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
                        gridTemplateColumns: isMobile ? '1fr' : '1fr 1fr',
                        minHeight: isMobile ? 'auto' : '80vh',
                        marginBottom: isMobile ? '2rem' : '0'
                    }}
                >
                    {/* Image Side */}
                    <motion.div
                        initial={{ x: index % 2 === 0 ? -30 : 30, opacity: 0 }}
                        whileInView={{ x: 0, opacity: 1 }}
                        viewport={{ once: false, amount: 0.3 }}
                        transition={{ duration: 0.9, delay: 0.1 }}
                        onMouseEnter={() => setHoverState({ index, section: 'image' })}
                        onClick={() => navigate(`/impact/${study.id}`)}
                        style={{
                            position: 'relative',
                            overflow: 'hidden',
                            order: isMobile ? 1 : (index % 2 === 0 ? 1 : 2),
                            cursor: 'pointer'
                        }}
                    >
                        <div style={{
                            position: 'absolute',
                            inset: 0,
                            backgroundImage: `url(${study.image})`,
                            backgroundSize: 'cover',
                            backgroundPosition: isMobile ? 'center 20%' : 'center',
                            filter: isMobile ? 'brightness(0.65)' : 'brightness(0.75)',
                            height: isMobile ? '50vh' : 'auto'
                        }} />

                        {/* Metric Overlay */}
                        <div style={{
                            position: isMobile ? 'relative' : 'absolute',
                            bottom: isMobile ? 'auto' : '3rem',
                            left: isMobile ? 'auto' : '3rem',
                            padding: isMobile ? '2rem' : '2rem',
                            height: isMobile ? '50vh' : 'auto',
                            display: 'flex',
                            flexDirection: 'column',
                            justifyContent: 'flex-end',
                            textAlign: 'left',
                            zIndex: 2
                        }}>
                            <div style={{
                                fontSize: 'clamp(2.5rem, 6vw, 4rem)',
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
                        initial={{ y: 30, opacity: 0 }}
                        whileInView={{ y: 0, opacity: 1 }}
                        viewport={{ once: false, amount: 0.3 }}
                        transition={{ duration: 0.9, delay: 0.2 }}
                        onMouseEnter={() => setHoverState({ index, section: 'content' })}
                        onClick={() => navigate(`/impact/${study.id}`)}
                        style={{
                            display: 'flex',
                            flexDirection: 'column',
                            justifyContent: 'center',
                            padding: isMobile ? '3rem 2rem' : '4rem',
                            background: index % 2 === 0 ? '#111' : '#0a0a0a',
                            order: isMobile ? 2 : (index % 2 === 0 ? 2 : 1),
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
                            fontSize: isMobile ? '1.75rem' : 'clamp(1.5rem, 3vw, 2.2rem)',
                            fontWeight: 500,
                            color: COLORS.opticalWhite,
                            fontFamily: 'Outfit, sans-serif',
                            lineHeight: 1.2,
                            marginBottom: '2.5rem',
                            textAlign: 'left'
                        }}>
                            {study.title}
                        </h3>

                        {/* Challenge & Solution */}
                        <div style={{ marginBottom: '2.5rem', textAlign: 'left' }}>
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
                            paddingTop: '2rem',
                            justifyContent: 'flex-start',
                            textAlign: 'left'
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
                                marginTop: '2.5rem',
                                display: 'inline-flex',
                                width: 'auto',
                                alignItems: 'center',
                                justifyContent: 'flex-start',
                                gap: '0.75rem',
                                padding: '1rem 2rem',
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
                            whileHover={isMobile ? {} : {
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

            {/* See More Button */}
            {visibleCount < CASE_STUDIES_FULL.length && (
                <div style={{ textAlign: 'center', marginTop: '4rem' }}>
                    <motion.button
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        onClick={() => setVisibleCount(CASE_STUDIES_FULL.length)}
                        style={{
                            padding: '1rem 3rem',
                            fontSize: '1rem',
                            fontWeight: 500,
                            letterSpacing: '0.05em',
                            color: COLORS.opticalWhite,
                            background: 'transparent',
                            border: `1px solid ${COLORS.bronze}`,
                            borderRadius: '2rem',
                            cursor: 'pointer',
                            fontFamily: 'Outfit, sans-serif'
                        }}
                    >
                        See More Case Studies
                    </motion.button>
                </div>
            )}
        </section>
    );
};

const Impact = () => {
    return (
        <main style={{ background: COLORS.opticalWhite, overflowX: 'hidden' }}>
            <ImpactHero />
            <EditorialCaseStudies />
            <KeyMetrics />
        </main>
    );
};

export default Impact;

