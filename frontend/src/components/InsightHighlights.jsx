import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

import imgSourcing from '../assets/images/latest-sourcing.jpg';
import imgQuality from '../assets/images/latest-quality.jpg';
import imgSustainability from '../assets/images/latest-sustainability.jpg';

const InsightCard = ({ category, title, image, index, isLarge = false }) => {
    const cardRef = useRef(null);
    const { scrollYProgress } = useScroll({
        target: cardRef,
        offset: ["start end", "end start"]
    });

    // Alternating direction: even indices from left, odd from right
    const xDirection = index % 2 === 0 ? -80 : 80;
    const staggerDelay = index * 0.15; // Staggered entrance

    // Enhanced scroll-linked transforms with directional movement + scale
    const opacity = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0, 1, 1, 0.85]);
    const y = useTransform(scrollYProgress, [0, 0.25], [60, 0]);
    const x = useTransform(scrollYProgress, [0, 0.25], [xDirection, 0]);
    const scale = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0.93, 1, 1, 0.97]);
    const rotate = useTransform(scrollYProgress, [0, 0.2], [index % 2 === 0 ? 1 : -1, 0]);

    // Image parallax
    const imageY = useTransform(scrollYProgress, [0, 1], ['-5%', '5%']);
    const imageScale = useTransform(scrollYProgress, [0, 0.5, 1], [1.1, 1.05, 1.1]);

    return (
        <motion.div
            ref={cardRef}
            style={{ opacity, y, x, scale, rotate }}
        >
            <motion.div
                whileHover={{ y: -8 }}
                transition={{ duration: 0.4, ease: [0.4, 0, 0.2, 1] }}
                style={{
                    background: '#111111',
                    overflow: 'hidden',
                    cursor: 'pointer',
                    position: 'relative',
                    height: '100%',
                    display: 'flex',
                    flexDirection: 'column'
                }}
            >
                {/* Image - Full Bleed with Parallax */}
                <div style={{
                    height: isLarge ? '500px' : '400px',
                    overflow: 'hidden',
                    position: 'relative'
                }}>
                    <motion.img
                        src={image}
                        alt={title}
                        style={{
                            y: imageY,
                            scale: imageScale,
                            width: '100%',
                            height: '120%',
                            objectFit: 'cover',
                            filter: 'brightness(0.9) saturate(1.1)'
                        }}
                    />

                    {/* Grain overlay */}
                    <div style={{
                        position: 'absolute',
                        inset: 0,
                        backgroundImage: 'url("https://grainy-gradients.vercel.app/noise.svg")',
                        opacity: 0.05,
                        pointerEvents: 'none',
                        mixBlendMode: 'overlay'
                    }} />

                    {/* Category Badge Overlay */}
                    <div style={{
                        position: 'absolute',
                        top: '1.5rem',
                        left: '1.5rem',
                        background: 'rgba(17, 17, 17, 0.8)',
                        backdropFilter: 'blur(10px)',
                        padding: '0.5rem 1rem',
                        borderRadius: '2rem',
                        border: '1px solid rgba(254, 255, 255, 0.1)'
                    }}>
                        <span style={{
                            fontSize: '0.7rem',
                            color: '#C5A059',
                            fontFamily: 'monospace',
                            letterSpacing: '0.15em',
                            textTransform: 'uppercase'
                        }}>
                            {category}
                        </span>
                    </div>
                </div>

                {/* Content */}
                <div style={{
                    padding: '2.5rem',
                    display: 'flex',
                    flexDirection: 'column',
                    gap: '1.5rem',
                    flexGrow: 1
                }}>
                    <h3 style={{
                        fontSize: isLarge ? 'clamp(1.8rem, 3vw, 2.5rem)' : 'clamp(1.5rem, 2.5vw, 2rem)',
                        fontWeight: 500,
                        lineHeight: 1.3,
                        color: '#FEFFFF',
                        fontFamily: 'Outfit, sans-serif'
                    }}>
                        {title}
                    </h3>

                    {/* Bronze Accent Arrow */}
                    <div style={{
                        display: 'flex',
                        alignItems: 'center',
                        gap: '0.5rem',
                        marginTop: 'auto'
                    }}>
                        <span style={{
                            fontSize: '0.85rem',
                            color: '#C5A059',
                            fontFamily: 'Inter, sans-serif',
                            fontWeight: 500
                        }}>
                            Read Case Study
                        </span>
                        <motion.span
                            initial={{ x: 0 }}
                            whileHover={{ x: 5 }}
                            style={{ color: '#C5A059' }}
                        >
                            →
                        </motion.span>
                    </div>
                </div>
            </motion.div>
        </motion.div>
    );
};

const InsightHighlights = () => {
    const containerRef = useRef(null);
    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start end", "end start"]
    });

    const insights = [
        {
            category: "Material Sourcing",
            title: "Reducing Lead Times by 40% Through Strategic Factory Partnerships",
            image: imgSourcing
        },
        {
            category: "Quality Control",
            title: "Zero-Defect Production: Implementing Advanced QA Protocols",
            image: imgQuality
        },
        {
            category: "Sustainability",
            title: "Building Ethical Supply Chains in Southeast Asia",
            image: imgSustainability
        }
    ];

    return (
        <section ref={containerRef} style={{
            minHeight: '100vh',
            background: '#FEFFFF',
            padding: 'var(--space-xl) 0',
            position: 'relative'
        }}>
            <div className="container">
                {/* Editorial Header with enhanced reveal */}
                <div style={{
                    display: 'flex',
                    flexDirection: typeof window !== 'undefined' && window.innerWidth < 768 ? 'column' : 'row',
                    justifyContent: 'space-between',
                    alignItems: typeof window !== 'undefined' && window.innerWidth < 768 ? 'flex-start' : 'flex-end',
                    marginBottom: 'var(--space-lg)',
                    gap: '2rem'
                }}>
                    <motion.div
                        initial={{ opacity: 0, y: 50, scale: 0.96 }}
                        whileInView={{ opacity: 1, y: 0, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.9, ease: [0.25, 0.1, 0.25, 1] }}
                        style={{ maxWidth: '600px' }}
                    >
                        {/* Badge */}
                        <div style={{
                            display: 'inline-flex',
                            padding: '0.5rem 1.5rem',
                            background: 'rgba(17, 17, 17, 0.05)',
                            border: '1px solid rgba(17, 17, 17, 0.1)',
                            borderRadius: '2rem',
                            marginBottom: '2rem'
                        }}>
                            <span style={{
                                fontSize: '0.75rem',
                                color: '#111111',
                                fontFamily: 'monospace',
                                letterSpacing: '0.15em',
                                textTransform: 'uppercase'
                            }}>CASE STUDIES</span>
                        </div>

                        <motion.h2
                            initial={{ opacity: 0, x: -30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.8, delay: 0.15, ease: [0.25, 0.1, 0.25, 1] }}
                            style={{
                                fontSize: 'clamp(3rem, 7vw, 5.5rem)',
                                fontWeight: 500,
                                lineHeight: 1,
                                color: '#111111',
                                fontFamily: 'Outfit, sans-serif',
                                letterSpacing: '-0.03em'
                            }}
                        >
                            Latest<br />Work
                        </motion.h2>
                    </motion.div>

                    <motion.a
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.7, delay: 0.3, ease: [0.25, 0.1, 0.25, 1] }}
                        href="/impact"
                        className="btn btn-outline"
                        style={{
                            alignSelf: typeof window !== 'undefined' && window.innerWidth < 768 ? 'flex-start' : 'flex-end',
                            marginBottom: typeof window !== 'undefined' && window.innerWidth < 768 ? 0 : '1.5rem'
                        }}
                    >
                        View All Projects
                    </motion.a>
                </div>

                {/* Asymmetric Grid with editorial treatment */}
                <div style={{
                    display: 'grid',
                    gridTemplateColumns: typeof window !== 'undefined' && window.innerWidth < 768 ? '1fr' : 'repeat(12, 1fr)',
                    gap: '2rem'
                }}>
                    {/* Card 1: Spans 5 columns */}
                    <div style={{ gridColumn: typeof window !== 'undefined' && window.innerWidth < 768 ? 'span 1' : 'span 5' }}>
                        <InsightCard {...insights[0]} index={0} />
                    </div>

                    {/* Card 2: Spans 7 columns - larger editorial treatment */}
                    <div style={{ gridColumn: typeof window !== 'undefined' && window.innerWidth < 768 ? 'span 1' : 'span 7' }}>
                        <InsightCard {...insights[1]} index={1} isLarge={true} />
                    </div>

                    {/* Card 3: Spans full width - full editorial moment */}
                    <div style={{ gridColumn: typeof window !== 'undefined' && window.innerWidth < 768 ? '1' : 'span 12' }}>
                        <InsightCard {...insights[2]} index={2} isLarge={true} />
                    </div>
                </div>
            </div>
        </section>
    );
};

export default InsightHighlights;
