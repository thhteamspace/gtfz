import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

// --- Monochrome Fashion Palette ---
const COLORS = {
    opticalWhite: '#FEFFFF',
    darkCharcoal: '#111111',
    bronze: '#C5A059',
    gold: '#D4AF37',
    // Derived grays
    text: '#111111',
    textSecondary: 'rgba(17, 17, 17, 0.6)',
    borderLight: 'rgba(17, 17, 17, 0.1)'
};

// --- Solution Cards Data ---
// --- SVG Icons ---
const SolutionIcons = {
    Procurement: () => (
        <svg width="100%" height="100%" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
            <rect x="3" y="3" width="18" height="18" rx="2" />
            <path d="M3 9h18M9 21V9" />
        </svg>
    ),
    Process: () => (
        <svg width="100%" height="100%" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
            <circle cx="12" cy="12" r="3" />
            <path d="M12 1v6m0 6v6M1 12h6m6 0h6" />
            <circle cx="12" cy="12" r="10" opacity="0.3" />
        </svg>
    ),
    Integration: () => (
        <svg width="100%" height="100%" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
            <path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71" />
            <path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71" />
        </svg>
    ),
    Advisory: () => (
        <svg width="100%" height="100%" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
            <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
            <path d="M9 12l2 2 4-4" />
        </svg>
    )
};

// --- Solution Cards Data ---
const SOLUTIONS = [
    {
        id: 'procurement',
        title: 'Procurement',
        subtitle: 'Cost Optimization',
        description: 'Strategic sourcing & vendor negotiation to reduce material costs by up to 30%.',
        metrics: { value: '30%', label: 'Cost Reduction' },
        icon: 'Procurement',
        bgImage: 'https://images.unsplash.com/photo-1558171813-4c088753af8f?auto=format&fit=crop&q=80&w=2670'
    },
    {
        id: 'process',
        title: 'Process Engineering',
        subtitle: 'Lean Six Sigma',
        description: 'Eliminate waste, optimize workflows, and boost operational efficiency.',
        metrics: { value: '45%', label: 'Efficiency Gain' },
        icon: 'Process',
        bgImage: 'https://images.unsplash.com/photo-1612423284934-2850a4ea6b0f?auto=format&fit=crop&q=80&w=2670'
    },
    {
        id: 'integration',
        title: 'Supplier Integration',
        subtitle: 'Network Optimization',
        description: 'Comprehensive vetting, onboarding, and performance management.',
        metrics: { value: '99.2%', label: 'Compliance Rate' },
        icon: 'Integration',
        bgImage: 'https://images.unsplash.com/photo-1605289355680-75fb41239154?auto=format&fit=crop&q=80&w=2670'
    },
    {
        id: 'advisory',
        title: 'Risk Advisory',
        subtitle: 'Compliance & Mitigation',
        description: 'Proactive risk identification and regulatory compliance assurance.',
        metrics: { value: '100%', label: 'Audit Success' },
        icon: 'Advisory',
        bgImage: 'https://images.unsplash.com/photo-1556905055-8f358a7a47b2?auto=format&fit=crop&q=80&w=2670'
    }
];

// --- Timeline Data ---
const TIMELINE_STEPS = [
    { phase: '01', title: 'Diagnostic', desc: 'We audit your current chain.' },
    { phase: '02', title: 'Strategy', desc: 'We design the optimization roadmap.' },
    { phase: '03', title: 'Deployment', desc: 'We execute with boots on the ground.' },
    { phase: '04', title: 'Optimization', desc: 'Continuous improvement cycles.' }
];

// --- 1.0 Hero Section ---
const SolutionsHero = () => {
    const containerRef = useRef(null);
    const { scrollYProgress } = useScroll({ target: containerRef, offset: ["start start", "end start"] });

    const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);
    const scale = useTransform(scrollYProgress, [0, 0.5], [1, 0.95]);
    const y = useTransform(scrollYProgress, [0, 0.5], [0, -100]);

    return (
        <section ref={containerRef} style={{
            height: '100vh',
            background: COLORS.darkCharcoal,
            position: 'relative',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            overflow: 'hidden'
        }}>
            {/* Cinematic Animated Background */}
            <style>{`
                @key frames solutionsZoom {
                    0%, 100% { transform: scale(1); }
                    50% { transform: scale(1.08); }
                }
            `}</style>

            <div style={{
                position: 'absolute',
                inset: 0,
                backgroundImage: 'url(https://images.unsplash.com/photo-1558769132-cb1aea56c2e2?auto=format&fit=crop&q=80&w=2574)',
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                filter: 'brightness(0.55) saturate(1.15)',
                animation: 'solutionsZoom 25s ease-in-out infinite',
                zIndex: 0
            }} />

            {/* Gradient Overlay */}
            <div style={{
                position: 'absolute',
                inset: 0,
                background: 'radial-gradient(circle at center, transparent 0%, rgba(17,17,17,0.8) 100%)',
                zIndex: 1
            }} />


            <motion.div style={{ opacity, scale, y, textAlign: 'left', zIndex: 10, padding: '0 4rem', maxWidth: '1400px', width: '100%' }}>
                <motion.h1
                    initial={{ opacity: 0, y: 50, scale: 0.97 }}
                    whileInView={{ opacity: 1, y: 0, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.9, delay: 0.1, ease: [0.25, 0.1, 0.25, 1] }}
                    style={{
                        fontSize: 'clamp(4rem, 12vw, 10rem)',
                        fontWeight: 600,
                        color: COLORS.opticalWhite,
                        letterSpacing: '-0.03em',
                        lineHeight: 1.1,
                        marginBottom: '2rem',
                        fontFamily: 'Outfit, sans-serif'
                    }}
                >
                    Strategic<br />Execution.
                </motion.h1>

                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.7, delay: 0.25, ease: [0.25, 0.1, 0.25, 1] }}
                    style={{
                        display: 'inline-flex',
                        padding: '0.75rem 1.5rem',
                        background: 'rgba(254, 255, 255, 0.1)',
                        border: `1px solid ${COLORS.bronze}`,
                        borderRadius: '2rem',
                        backdropFilter: 'blur(10px)'
                    }}
                >
                    <span style={{
                        fontSize: '0.9rem',
                        color: COLORS.bronze,
                        fontFamily: 'monospace',
                        letterSpacing: '0.1em',
                        textTransform: 'uppercase'
                    }}>Fashion Supply-Chain Consultancy</span>
                </motion.div>
            </motion.div>
        </section >
    );
};

// --- 2.0 Solutions Slides - Simple Scrolling ---
const BentoGrid = () => {
    return (
        <div style={{ background: COLORS.opticalWhite }}>
            {SOLUTIONS.map((solution, idx) => (
                <SolutionSlide key={solution.id} solution={solution} index={idx} />
            ))}
        </div>
    );
};

const SolutionSlide = ({ solution, index }) => {
    const containerRef = useRef(null);
    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start end", "end start"]
    });

    // Smooth scale and fade effects
    const scale = useTransform(scrollYProgress, [0, 0.3, 0.7, 1], [0.9, 1.05, 1.05, 0.9]);
    const opacity = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0, 1, 1, 0]);

    // Multi-layer parallax
    const bgY = useTransform(scrollYProgress, [0, 1], ['-20%', '20%']);
    const contentY = useTransform(scrollYProgress, [0, 1], ['0%', '-5%']);

    // Subtle icon animations
    const iconScale = useTransform(scrollYProgress, [0, 0.3, 0.7, 1], [0.8, 1.1, 1.1, 0.8]);
    const iconY = useTransform(scrollYProgress, [0, 0.5, 1], [20, -10, 20]);

    // Mask Reveal Animations (Staggered)
    const subtitleY = useTransform(scrollYProgress, [0.1, 0.35], ['100%', '0%']);
    const titleY = useTransform(scrollYProgress, [0.15, 0.4], ['100%', '0%']);
    const descY = useTransform(scrollYProgress, [0.2, 0.45], ['100%', '0%']);
    const metricsY = useTransform(scrollYProgress, [0.25, 0.5], ['100%', '0%']);

    return (
        <section
            ref={containerRef}
            style={{
                minHeight: '100vh',
                position: 'relative',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                overflow: 'hidden',
                perspective: '1500px'
            }}
        >
            {/* Animated Background with Parallax */}
            <motion.div
                style={{
                    position: 'absolute',
                    inset: 0,
                    width: '100%',
                    height: '100%',
                    backgroundImage: `url(${solution.bgImage})`,
                    backgroundSize: 'cover',
                    backgroundPosition: 'center center',
                    filter: 'brightness(0.85) saturate(1.15)',
                    y: bgY,
                    scale
                }}
            />

            {/* Dark Overlay for Monochrome Effect */}
            <div style={{
                position: 'absolute',
                inset: 0,
                background: 'linear-gradient(to bottom, rgba(17,17,17,0.5), rgba(17,17,17,0.8))',
                zIndex: 1
            }} />







            {/* Main Content - Premium Layout */}
            <motion.div
                style={{
                    position: 'relative',
                    zIndex: 10,
                    width: '100%',
                    maxWidth: '1200px',
                    padding: '4rem 3rem',
                    opacity,
                    y: contentY,
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    textAlign: 'center'
                }}
            >


                {/* Centered Content */}
                <div style={{ width: '100%', maxWidth: '900px' }}>
                    {/* Subtitle Badge */}
                    <div style={{ overflow: 'hidden', padding: '0.5rem', marginBottom: '1.5rem' }}>
                        <motion.div style={{
                            fontSize: '0.75rem',
                            color: COLORS.bronze,
                            fontFamily: 'monospace',
                            letterSpacing: '0.15em',
                            textTransform: 'uppercase',
                            display: 'inline-block',
                            padding: '0.5rem 1.5rem',
                            border: `1px solid ${COLORS.bronze}`,
                            borderRadius: '2rem',
                            background: 'rgba(254, 255, 255, 0.05)',
                            backdropFilter: 'blur(10px)',
                            y: subtitleY
                        }}>
                            {solution.subtitle}
                        </motion.div>
                    </div>

                    {/* Title */}
                    <div style={{ overflow: 'hidden', marginBottom: '2rem', paddingBottom: '20px' }}>
                        <motion.h2 style={{
                            fontSize: 'clamp(3.5rem, 8vw, 7rem)',
                            fontWeight: 500,
                            color: COLORS.opticalWhite,
                            letterSpacing: '-0.03em',
                            lineHeight: 1,
                            fontFamily: 'Outfit, sans-serif',
                            y: titleY
                        }}>
                            {solution.title}
                        </motion.h2>
                    </div>

                    {/* Minimal Divider */}
                    <div style={{
                        width: '60px',
                        height: '1px',
                        background: COLORS.bronze,
                        marginBottom: '2rem',
                        marginLeft: 'auto',
                        marginRight: 'auto',
                        opacity: 0.5
                    }} />

                    {/* Description */}
                    {/* Description */}
                    <div style={{ overflow: 'hidden', marginBottom: '2.5rem', maxWidth: '600px', margin: '0 auto 2.5rem', paddingBottom: '10px' }}>
                        <motion.p style={{
                            color: '#ccc',
                            fontSize: 'clamp(1rem, 1.8vw, 1.3rem)',
                            lineHeight: 1.8,
                            fontWeight: 300,
                            y: descY
                        }}>
                            {solution.description}
                        </motion.p>
                    </div>

                    {/* Metrics - Centered */}
                    <div style={{ overflow: 'hidden', padding: '1rem' }}>
                        <motion.div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '1.5rem', y: metricsY }}>
                            <motion.div
                                animate={{
                                    scale: [1, 1.02, 1],
                                }}
                                transition={{ duration: 3, repeat: Infinity }}
                                style={{
                                    fontSize: 'clamp(4rem, 8vw, 6rem)',
                                    fontWeight: 900,
                                    background: `linear-gradient(135deg, ${COLORS.bronze} 0%, ${COLORS.gold} 50%, #fff 100%)`,
                                    backgroundClip: 'text',
                                    WebkitBackgroundClip: 'text',
                                    WebkitTextFillColor: 'transparent',
                                    letterSpacing: '-0.02em',
                                    lineHeight: 1
                                }}
                            >
                                {solution.metrics.value}
                            </motion.div>
                            <div style={{
                                display: 'flex',
                                flexDirection: 'column',
                                alignItems: 'flex-start',
                                gap: '0.25rem'
                            }}>
                                <div style={{
                                    fontSize: 'clamp(0.9rem, 1.2vw, 1.1rem)',
                                    color: COLORS.bronze,
                                    textTransform: 'uppercase',
                                    letterSpacing: '0.15em',
                                    fontWeight: 600,
                                    fontFamily: 'monospace'
                                }}>
                                    {solution.metrics.label}
                                </div>
                                <div style={{
                                    width: '60px',
                                    height: '1px',
                                    background: COLORS.bronze,
                                    opacity: 0.5
                                }} />
                            </div>
                        </motion.div>
                    </div>
                </div>
            </motion.div>


        </section>
    );
};

// --- 3.0 Timeline ---
const EngagementTimeline = () => {
    const containerRef = useRef(null);
    const { scrollYProgress } = useScroll({ target: containerRef, offset: ["start start", "end end"] });

    return (
        <section ref={containerRef} style={{ height: '300vh', background: COLORS.opticalWhite, position: 'relative' }}>
            <div style={{ position: 'sticky', top: 0, height: '100vh', display: 'flex', alignItems: 'center', justifyContent: 'center', overflow: 'hidden' }}>
                {/* Premium Checkered Pattern Background */}
                <motion.div style={{
                    position: 'absolute',
                    inset: 0,
                    backgroundImage: `
                        repeating-linear-gradient(
                            0deg,
                            transparent,
                            transparent 19px,
                            rgba(17, 17, 17, 0.015) 19px,
                            rgba(17, 17, 17, 0.015) 20px
                        ),
                        repeating-linear-gradient(
                            90deg,
                            transparent,
                            transparent 19px,
                            rgba(17, 17, 17, 0.015) 19px,
                            rgba(17, 17, 17, 0.015) 20px
                        ),
                        repeating-linear-gradient(
                            45deg,
                            transparent,
                            transparent 39px,
                            rgba(197, 160, 89, 0.008) 39px,
                            rgba(197, 160, 89, 0.008) 40px
                        )
                    `,
                    backgroundSize: '20px 20px, 20px 20px, 40px 40px',
                    opacity: 1
                }} />

                <div style={{ maxWidth: '1400px', width: '100%', padding: '0 4rem', zIndex: 10 }}>
                    {/* Editorial Header */}
                    <motion.div
                        initial={{ opacity: 0, y: 40, scale: 0.97 }}
                        whileInView={{ opacity: 1, y: 0, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8, ease: [0.25, 0.1, 0.25, 1] }}
                        style={{
                            marginBottom: '6rem',
                            opacity: useTransform(scrollYProgress, [0, 0.1], [0, 1])
                        }}
                    >
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
                                color: COLORS.bronze,
                                fontFamily: 'monospace',
                                letterSpacing: '0.15em',
                                textTransform: 'uppercase'
                            }}>ENGAGEMENT PROCESS</span>
                        </div>

                        <motion.h2
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.7, delay: 0.15, ease: [0.25, 0.1, 0.25, 1] }}
                            style={{
                                fontSize: 'clamp(3rem, 6vw, 5rem)',
                                fontWeight: 500,
                                color: COLORS.text,
                                lineHeight: 1.1,
                                fontFamily: 'Outfit, sans-serif',
                                letterSpacing: '-0.03em'
                            }}
                        >
                            From Diagnostic<br />to Deployment
                        </motion.h2>
                    </motion.div>

                    {/* Timeline Steps */}
                    <div style={{ display: 'flex', gap: '3rem', alignItems: 'flex-start', position: 'relative' }}>
                        {TIMELINE_STEPS.map((step, idx) => (
                            <TimelineStep key={step.phase} step={step} index={idx} scrollProgress={scrollYProgress} />
                        ))}
                    </div>

                    {/* Progress Line */}
                    <motion.div style={{
                        position: 'absolute',
                        top: '75px', // Moved below the 50px circle node
                        left: '6rem',
                        right: '6rem',
                        height: '1px',
                        background: 'rgba(197, 160, 89, 0.2)',
                        zIndex: 0
                    }}>
                        <motion.div style={{
                            height: '100%',
                            background: COLORS.bronze,
                            width: useTransform(scrollYProgress, [0, 1], ['0%', '100%'])
                        }} />
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

const TimelineStep = ({ step, index, scrollProgress }) => {
    const start = index * 0.25;
    const end = start + 0.25;

    const opacity = useTransform(scrollProgress, [start, start + 0.1, end - 0.1, 1], [0, 1, 1, 1]);
    const y = useTransform(scrollProgress, [start, end], [30, 0]);

    return (
        <motion.div style={{ opacity, y, flex: 1, position: 'relative', zIndex: 10 }}>
            {/* Phase Number Badge */}
            <motion.div style={{
                width: '50px',
                height: '50px',
                borderRadius: '50%',
                background: COLORS.opticalWhite,
                border: `1px solid ${COLORS.bronze}`,
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                fontSize: '1.2rem',
                fontWeight: 500,
                color: COLORS.bronze,
                marginBottom: '1.5rem',
                fontFamily: 'Outfit, sans-serif'
            }}>
                {step.phase}
            </motion.div>

            {/* Title */}
            <h3 style={{
                fontSize: '1.5rem',
                fontWeight: 500,
                color: COLORS.text,
                marginBottom: '1rem',
                fontFamily: 'Outfit, sans-serif'
            }}>
                {step.title}
            </h3>

            {/* Description */}
            <p style={{
                color: COLORS.textSecondary,
                lineHeight: 1.7,
                fontSize: '0.95rem',
                fontFamily: 'Inter, sans-serif'
            }}>
                {step.desc}
            </p>
        </motion.div>
    );
};

const Solutions = () => {
    return (
        <main style={{ background: COLORS.obsidian }}>
            <SolutionsHero />

            {/* Editorial Break - Fashion Mood Moment */}
            <section style={{
                height: '100vh',
                position: 'relative',
                overflow: 'hidden'
            }}>
                <motion.div
                    style={{
                        position: 'absolute',
                        inset: 0,
                        backgroundImage: 'url(https://images.unsplash.com/photo-1509631179647-0177331693ae?auto=format&fit=crop&q=80&w=2670)',
                        backgroundSize: 'cover',
                        backgroundPosition: 'center center',
                        filter: 'brightness(0.6) saturate(1.1)'
                    }}
                    initial={{ scale: 1.05 }}
                    whileInView={{ scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 1.5, ease: [0.25, 0.1, 0.25, 1] }}
                />
                {/* Grain Overlay */}
                <div style={{
                    position: 'absolute',
                    inset: 0,
                    backgroundImage: 'url("https://grainy-gradients.vercel.app/noise.svg")',
                    opacity: 0.05,
                    pointerEvents: 'none',
                    mixBlendMode: 'overlay',
                    zIndex: 2
                }} />
                {/* Minimal Caption */}
                <motion.div
                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.9, delay: 0.4, ease: [0.25, 0.1, 0.25, 1] }}
                    style={{
                        position: 'absolute',
                        bottom: '15%',
                        right: '5%',
                        zIndex: 3,
                        textAlign: 'right'
                    }}
                >
                    <p style={{
                        fontSize: 'clamp(1.5rem, 3vw, 2.5rem)',
                        color: '#fff',
                        fontFamily: 'Outfit, sans-serif',
                        fontWeight: 300,
                        letterSpacing: '-0.02em',
                        lineHeight: 1.3,
                        maxWidth: '500px'
                    }}>
                        From blueprint<br />to reality.
                    </p>
                </motion.div>
            </section>

            <BentoGrid />
            <EngagementTimeline />
        </main>
    );
};

export default Solutions;
