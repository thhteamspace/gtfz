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
        description: 'Strategic sourcing & vendor negotiation to reduce material costs across production runs.',
        metrics: { value: 'Up to 30%', label: 'Cost Reduction' },
        icon: 'Procurement',
        bgImage: 'https://images.pexels.com/photos/5710046/pexels-photo-5710046.jpeg?auto=compress&cs=tinysrgb&w=1600' // Pexels: Fabric Rolls in Factory
    },
    {
        id: 'process',
        title: 'Process Engineering',
        subtitle: 'Lean Six Sigma',
        description: 'Eliminating waste and optimizing workflows for maximum operational output.',
        metrics: { value: '45%', label: 'Efficiency Gain (Avg)' },
        icon: 'Process',
        bgImage: 'https://images.pexels.com/photos/3738088/pexels-photo-3738088.jpeg?auto=compress&cs=tinysrgb&w=1600' // Working: Sewing Machine
    },
    {
        id: 'integration',
        title: 'Supplier Integration',
        subtitle: 'Network Optimization',
        description: 'Comprehensive vetting, onboarding, and performance management modules.',
        metrics: { value: '99.2%', label: 'Compliance (Global)' },
        icon: 'Integration',
        bgImage: 'https://images.pexels.com/photos/996329/pexels-photo-996329.jpeg?auto=compress&cs=tinysrgb&w=1600' // Working: Clothing Rack
    },
    {
        id: 'advisory',
        title: 'Risk Advisory',
        subtitle: 'Compliance & Mitigation',
        description: 'Proactive risk identification and regulatory compliance assurance.',
        metrics: { value: '100%', label: 'Audit Success (Cases)' },
        icon: 'Advisory',
        bgImage: 'https://images.pexels.com/photos/6214476/pexels-photo-6214476.jpeg?auto=compress&cs=tinysrgb&w=1600' // Pexels: Quality Inspection
    }
];

// ... (Timeline Data remains same)

// ... (Hero Section remains same)

// ...



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







            {/* Main Content - Editorial Layout (Bottom Left) */}
            <motion.div
                style={{
                    position: 'relative',
                    zIndex: 10,
                    width: '100%',
                    height: '100%',
                    padding: '6rem 4rem',
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'flex-end', // Align to bottom
                    alignItems: 'flex-start', // Align to left
                    textAlign: 'left' // text-left
                }}
            >
                <div style={{
                    width: '100%',
                    maxWidth: '1400px', // Wider container
                    margin: '0 auto',
                    display: 'flex',
                    justifyContent: 'space-between',
                    alignItems: 'flex-end',
                    flexWrap: 'wrap',
                    gap: '4rem'
                }}>
                    {/* Left Block: Text */}
                    <div style={{ flex: 1, minWidth: '300px', opacity: 1, transform: 'translateY(0)' }}>
                        {/* Subtitle Badge */}
                        <motion.div style={{
                            display: 'inline-block',
                            padding: '0.5rem 1.25rem',
                            border: `1px solid ${COLORS.bronze}`,
                            borderRadius: '2rem',
                            background: 'rgba(17, 17, 17, 0.4)',
                            backdropFilter: 'blur(10px)',
                            marginBottom: '2rem',
                            y: subtitleY
                        }}>
                            <span style={{
                                fontSize: '0.8rem',
                                color: COLORS.bronze,
                                fontFamily: 'monospace',
                                letterSpacing: '0.15em',
                                textTransform: 'uppercase'
                            }}>
                                {solution.subtitle}
                            </span>
                        </motion.div>

                        {/* Title */}
                        <div style={{ overflow: 'hidden', marginBottom: '2rem', paddingBottom: '0.5rem' }}> {/* Added padding for descenders */}
                            <motion.h2 style={{
                                fontSize: 'clamp(4rem, 9vw, 8rem)',
                                fontWeight: 600,
                                color: COLORS.opticalWhite,
                                letterSpacing: '-0.03em',
                                lineHeight: 1.1, // Increased line-height
                                fontFamily: 'Outfit, sans-serif',
                                margin: 0,
                                y: titleY
                            }}>
                                {solution.title}
                            </motion.h2>
                        </div>

                        {/* Description - Compact */}
                        <div style={{ overflow: 'hidden', maxWidth: '600px', paddingBottom: '0.5rem' }}>
                            <motion.p style={{
                                color: 'rgba(255,255,255,0.85)',
                                fontSize: '1.2rem',
                                lineHeight: 1.6,
                                fontWeight: 300,
                                y: descY
                            }}>
                                {solution.description}
                            </motion.p>
                        </div>
                    </div>

                    {/* Right Block: Metrics (Big Number) */}
                    <div style={{ overflow: 'hidden' }}>
                        <motion.div style={{
                            display: 'flex',
                            flexDirection: 'column',
                            alignItems: 'flex-end', // Right align metric
                            y: metricsY
                        }}>
                            <motion.div
                                style={{
                                    fontSize: 'clamp(5rem, 10vw, 9rem)', // Huge Metric
                                    fontWeight: 800,
                                    color: COLORS.opticalWhite,
                                    letterSpacing: '-0.04em',
                                    lineHeight: 0.9
                                }}
                            >
                                {solution.metrics.value}
                            </motion.div>
                            <div style={{
                                fontSize: '1rem',
                                color: COLORS.bronze,
                                textTransform: 'uppercase',
                                letterSpacing: '0.2em',
                                fontFamily: 'monospace',
                                marginTop: '1rem'
                            }}>
                                {solution.metrics.label}
                            </div>
                        </motion.div>
                    </div>
                </div>
            </motion.div>

            {/* Gradient Overlay for Readability at Bottom */}
            <div style={{
                position: 'absolute',
                inset: 0,
                background: 'linear-gradient(to top, rgba(17,17,17,0.9) 0%, rgba(17,17,17,0.4) 50%, transparent 100%)',
                zIndex: 1
            }} />


        </section>
    );
};

// --- 3.0 Timeline ---
const EngagementTimeline = () => {
    const containerRef = useRef(null);
    const { scrollYProgress } = useScroll({ target: containerRef, offset: ["start start", "end end"] });



    return (
        <section ref={containerRef} style={{ height: '400vh', background: COLORS.opticalWhite, position: 'relative' }}>
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

                <div style={{ maxWidth: '1400px', width: '100%', padding: '0 4rem', zIndex: 10, display: 'flex', flexDirection: 'column', height: '100%', justifyContent: 'center' }}>

                    {/* Top Row: Header + Dynamic Image (The implementation user asked for) */}
                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '4rem', gap: '4rem' }}>

                        {/* Left: Header Text */}
                        <motion.div
                            initial={{ opacity: 0, y: 40, scale: 0.97 }}
                            whileInView={{ opacity: 1, y: 0, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.8, ease: [0.25, 0.1, 0.25, 1] }}
                            style={{
                                // opacity: useTransform(scrollYProgress, [0, 0.1], [0, 1]), // REMOVED: Title should be visible via whileInView
                                maxWidth: '600px'
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

                        {/* Right: Dynamic Image Display (Targeted Area) */}
                        <motion.div
                            style={{
                                width: '350px',
                                height: '350px',
                                position: 'relative',
                                borderRadius: '50%',
                                overflow: 'hidden',
                                boxShadow: '0 20px 40px rgba(0,0,0,0.1)',
                                opacity: useTransform(scrollYProgress, [0, 0.1], [0, 1]), // Fade in container
                                marginRight: '4rem', // Nudge left
                                marginTop: '2rem' // Nudge down slightly
                            }}
                        >
                            <TimelineGallery scrollYProgress={scrollYProgress} />
                        </motion.div>
                    </div>

                    {/* Bottom Row: Timeline Steps */}
                    <div style={{ display: 'flex', gap: '3rem', alignItems: 'flex-start', position: 'relative' }}>
                        {TIMELINE_STEPS.map((step, idx) => (
                            <TimelineStep key={step.phase} step={step} index={idx} scrollProgress={scrollYProgress} />
                        ))}

                        {/* Progress Line */}
                        <motion.div style={{
                            position: 'absolute',
                            top: '25px', // Center of 50px badge
                            left: '25px',
                            right: '0',
                            width: '100%',
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
            </div>
        </section>
    );
};

const TimelineStep = ({ step, index, scrollProgress }) => {
    // Ranges matched to 400vh logic & new offset
    // 0: 0-0.25, 1: 0.25-0.5, etc.
    const start = index * 0.25;

    // Fade in: [start, start + 0.1]
    const opacity = useTransform(scrollProgress, [start, start + 0.15], [0, 1]);
    const y = useTransform(scrollProgress, [start, start + 0.15], [50, 0]);

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

const TimelineGallery = ({ scrollYProgress }) => {
    // Optimized Ranges with PLATEAUS (Hold opacity 1) so images are clearly visible
    // Image 0 START: Opacity 1 immediately (0-0.2). Parent container handles the "Fade In".
    const op0 = useTransform(scrollYProgress, [0, 0.2, 0.25], [1, 1, 0]);

    // Image 1: FadeIn 0.2-0.25, Hold 0.25-0.45, FadeOut 0.45-0.5
    const op1 = useTransform(scrollYProgress, [0.25, 0.3, 0.5, 0.55], [0, 1, 1, 0]);

    // Image 2: FadeIn 0.45-0.5, Hold 0.5-0.7, FadeOut 0.7-0.75
    const op2 = useTransform(scrollYProgress, [0.5, 0.55, 0.75, 0.8], [0, 1, 1, 0]);

    // Image 3: FadeIn 0.7-0.75, Hold 0.75-1.0
    const op3 = useTransform(scrollYProgress, [0.75, 0.8, 1], [0, 1, 1]);

    const imageOpacities = [op0, op1, op2, op3];

    const STEP_IMAGES = [
        'https://images.pexels.com/photos/4614119/pexels-photo-4614119.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1', // Diagnostic: Inspection/Check (Clear Audit)
        'https://images.pexels.com/photos/461035/pexels-photo-461035.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1', // Strategy: Yarn Spools
        'https://images.pexels.com/photos/996329/pexels-photo-996329.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',   // Execution: Industrial Production (Kept)
        'https://images.pexels.com/photos/298863/pexels-photo-298863.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'    // Optimization: Clean Retail Display (Kept)
    ];

    return (
        <>
            {STEP_IMAGES.map((imgSrc, idx) => (
                <motion.div
                    key={idx}
                    style={{
                        position: 'absolute',
                        inset: 0,
                        backgroundImage: `url(${imgSrc})`,
                        backgroundSize: 'cover',
                        backgroundPosition: 'center',
                        opacity: imageOpacities[idx],
                        filter: 'grayscale(30%) contrast(1.1)'
                    }}
                />
            ))}
        </>
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
                        backgroundImage: 'url(https://images.pexels.com/photos/2249290/pexels-photo-2249290.jpeg?auto=compress&cs=tinysrgb&w=1600)', // Pexels: Industrial Warehouse
                        backgroundSize: 'cover',
                        backgroundPosition: 'center center',
                        filter: 'brightness(0.5) saturate(0)' // Grayscale for industrial execution feel
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
