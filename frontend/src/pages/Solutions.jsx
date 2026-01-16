import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

// --- Brand Colors ---
const COLORS = {
    obsidian: '#0A0E1A',
    navy: '#1a2332',
    white: '#F5F5F5',
    bronze: '#C5A059',
    gold: '#D4AF6A'
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
        bgImage: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&q=80&w=2670'
    },
    {
        id: 'process',
        title: 'Process Engineering',
        subtitle: 'Lean Six Sigma',
        description: 'Eliminate waste, optimize workflows, and boost operational efficiency.',
        metrics: { value: '45%', label: 'Efficiency Gain' },
        icon: 'Process',
        bgImage: 'https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&q=80&w=2670'
    },
    {
        id: 'integration',
        title: 'Supplier Integration',
        subtitle: 'Network Optimization',
        description: 'Comprehensive vetting, onboarding, and performance management.',
        metrics: { value: '99.2%', label: 'Compliance Rate' },
        icon: 'Integration',
        bgImage: 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&q=80&w=2672'
    },
    {
        id: 'advisory',
        title: 'Risk Advisory',
        subtitle: 'Compliance & Mitigation',
        description: 'Proactive risk identification and regulatory compliance assurance.',
        metrics: { value: '100%', label: 'Audit Success' },
        icon: 'Advisory',
        bgImage: 'https://images.unsplash.com/photo-1550751827-4bd374c3f58b?auto=format&fit=crop&q=80&w=2670'
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
            background: `linear-gradient(to bottom, ${COLORS.obsidian} 0%, ${COLORS.navy} 100%)`,
            position: 'relative',
            display: 'flex',
            alignItems: 'flex-start',
            paddingTop: '20vh',
            justifyContent: 'center',
            overflow: 'visible'
        }}>
            {/* Full background overlay from top */}
            <div style={{
                position: 'absolute',
                top: 0,
                left: 0,
                right: 0,
                bottom: 0,
                background: `linear-gradient(to bottom, ${COLORS.obsidian} 0%, ${COLORS.navy} 100%)`,
                zIndex: 0
            }} />            <motion.div style={{
                position: 'absolute',
                top: 0,
                left: 0,
                right: 0,
                bottom: 0,
                backgroundImage: 'linear-gradient(rgba(197, 160, 89, 0.03) 1px, transparent 1px), linear-gradient(90deg, rgba(197, 160, 89, 0.03) 1px, transparent 1px)',
                backgroundSize: '80px 80px',
                backgroundPosition: 'top center',
                opacity: useTransform(scrollYProgress, [0, 0.5], [0.5, 0])
            }} />


            <motion.div style={{ opacity, scale, y, textAlign: 'center', zIndex: 10, padding: '0 2rem' }}>
                <motion.h1
                    initial={{ opacity: 0, y: 50 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1, delay: 0.2 }}
                    style={{
                        fontSize: 'clamp(3.5rem, 10vw, 8rem)',
                        fontWeight: 800,
                        color: COLORS.white,
                        letterSpacing: '-0.02em',
                        lineHeight: 0.9,
                        marginBottom: '2rem'
                    }}
                >
                    Strategic<br />Capabilities.
                </motion.h1>

                <motion.p
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 1, delay: 0.4 }}
                    style={{
                        fontSize: 'clamp(1rem, 2vw, 1.5rem)',
                        color: '#999',
                        maxWidth: '700px',
                        margin: '0 auto'
                    }}
                >
                    A multi-disciplinary approach to supply chain optimization.
                </motion.p>
            </motion.div>
        </section >
    );
};

// --- 2.0 Solutions Slides - Simple Scrolling ---
const BentoGrid = () => {
    return (
        <div style={{ background: COLORS.obsidian }}>
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
                    top: '-10%',
                    left: '-10%',
                    width: '120%',
                    height: '120%',
                    backgroundImage: `url(${solution.bgImage})`,
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                    filter: 'brightness(0.2) contrast(1.2) saturate(1.5)',
                    y: bgY,
                    scale
                }}
            />







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
                            fontSize: '0.8rem',
                            color: COLORS.bronze,
                            fontFamily: 'monospace',
                            letterSpacing: '0.3em',
                            textTransform: 'uppercase',
                            display: 'inline-block',
                            padding: '0.5rem 1.5rem',
                            border: `1px solid ${COLORS.bronze}40`,
                            borderRadius: '50px',
                            background: `${COLORS.bronze}10`,
                            y: subtitleY
                        }}>
                            {solution.subtitle}
                        </motion.div>
                    </div>

                    {/* Title */}
                    <div style={{ overflow: 'hidden', marginBottom: '1.5rem', paddingBottom: '20px', marginTop: '-10px' }}>
                        <motion.h2 style={{
                            fontSize: 'clamp(3.5rem, 7vw, 6rem)',
                            fontWeight: 800,
                            color: COLORS.white,
                            letterSpacing: '-0.03em',
                            lineHeight: 1.1,
                            textShadow: `0 2px 40px rgba(255, 255, 255, 0.1)`,
                            y: titleY
                        }}>
                            {solution.title}
                        </motion.h2>
                    </div>

                    {/* Divider Line */}
                    <div style={{
                        width: '120px',
                        height: '2px',
                        background: `linear-gradient(90deg, transparent, ${COLORS.bronze}, transparent)`,
                        marginBottom: '2rem',
                        marginLeft: 'auto',
                        marginRight: 'auto',
                        boxShadow: `0 0 15px ${COLORS.bronze}`
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
        <section ref={containerRef} style={{ height: '400vh', background: '#000', position: 'relative' }}>
            <div style={{ position: 'sticky', top: 0, height: '100vh', display: 'flex', alignItems: 'center', justifyContent: 'center', overflow: 'hidden' }}>
                <motion.div style={{
                    position: 'absolute',
                    inset: 0,
                    backgroundImage: 'linear-gradient(rgba(197, 160, 89, 0.05) 1px, transparent 1px), linear-gradient(90deg, rgba(197, 160, 89, 0.05) 1px, transparent 1px)',
                    backgroundSize: '50px 50px',
                    opacity: 0.3,
                    scale: useTransform(scrollYProgress, [0, 1], [1, 1.5])
                }} />

                <div style={{ maxWidth: '1400px', width: '100%', padding: '0 4rem', zIndex: 10 }}>
                    <motion.h2 style={{
                        fontSize: 'clamp(2rem, 5vw, 4rem)',
                        fontWeight: 800,
                        color: COLORS.white,
                        marginTop: '5rem',
                        marginBottom: '4rem',
                        opacity: useTransform(scrollYProgress, [0, 0.1], [0, 1])
                    }}>
                        The Engagement Model
                    </motion.h2>

                    <div style={{ display: 'flex', gap: '2rem', alignItems: 'flex-start' }}>
                        {TIMELINE_STEPS.map((step, idx) => (
                            <TimelineStep key={step.phase} step={step} index={idx} scrollProgress={scrollYProgress} />
                        ))}
                    </div>

                    <motion.div style={{
                        position: 'absolute',
                        top: '50%',
                        left: '4rem',
                        right: '4rem',
                        height: '2px',
                        background: 'rgba(197, 160, 89, 0.2)',
                        zIndex: 0
                    }}>
                        <motion.div style={{
                            height: '100%',
                            background: COLORS.bronze,
                            boxShadow: `0 0 20px ${COLORS.bronze}`,
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

    const opacity = useTransform(scrollProgress, [start, start + 0.1, end - 0.1, end], [0, 1, 1, 0.3]);
    const scale = useTransform(scrollProgress, [start, start + 0.1, end - 0.1, end], [0.8, 1.1, 1, 0.9]);
    const y = useTransform(scrollProgress, [start, end], [50, -50]);

    return (
        <motion.div style={{ opacity, scale, y, flex: 1, position: 'relative', zIndex: 10, marginTop: '15rem' }}>
            <motion.div style={{
                width: '60px',
                height: '60px',
                borderRadius: '50%',
                background: COLORS.navy,
                border: `2px solid ${COLORS.bronze}`,
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                fontSize: '1.5rem',
                fontWeight: 800,
                color: COLORS.bronze,
                marginBottom: '2rem'
            }}>
                {step.phase}
            </motion.div>

            <h3 style={{ fontSize: '1.8rem', fontWeight: 700, color: COLORS.white, marginBottom: '1rem' }}>
                {step.title}
            </h3>

            <p style={{ color: '#999', lineHeight: 1.6, fontSize: '1rem' }}>
                {step.desc}
            </p>
        </motion.div>
    );
};

const Solutions = () => {
    return (
        <main style={{ background: COLORS.obsidian }}>
            <SolutionsHero />
            <BentoGrid />
            <EngagementTimeline />
        </main>
    );
};

export default Solutions;
