import React, { useRef, useEffect } from 'react';
import { motion, useInView } from 'framer-motion';
import useMediaQuery from '../hooks/useMediaQuery';

// --- Color Palette ---
const COLORS = {
    opticalWhite: '#FEFFFF',
    darkCharcoal: '#111111',
    bronze: '#C5A059',
    gold: '#D4AF37',
    text: '#111111',
    textSecondary: 'rgba(17, 17, 17, 0.65)',
    lightBg: '#F8F7F5'
};

// --- High-Quality Fashion/Supply Chain Images ---
const IMAGES = {
    hero: 'https://images.unsplash.com/photo-1441986300917-64674bd600d8?auto=format&fit=crop&q=80&w=2574', // Fashion Store/Retail Display
    methodology: 'https://images.unsplash.com/photo-1556905055-8f358a7a47b2?auto=format&fit=crop&q=80&w=2670', // Sewing Detail
    founder: '/assets/images/karina-founder-v2.png'
};

// --- Subtle Animation Variants ---
const fadeInUp = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0 }
};

const fadeIn = {
    hidden: { opacity: 0 },
    visible: { opacity: 1 }
};

// ============================================
// 1. ETHOS HERO (70-80vh)
// ============================================
const EthosHero = () => {
    const isMobile = useMediaQuery('(max-width: 768px)');
    return (
        <section style={{
            height: isMobile ? '80svh' : '75vh',
            minHeight: isMobile ? '400px' : '500px',
            position: 'relative',
            display: 'flex',
            alignItems: 'center',
            overflow: 'hidden'
        }}>
            {/* Background Image */}
            {/* Background Image - Keeping the exact essence of desktop, just scaled */}
            <div style={{
                position: 'absolute',
                inset: 0,
                backgroundImage: `url(${IMAGES.hero})`,
                backgroundSize: 'cover',
                // Using exact center alignment like desktop to maintain the same "shot"
                backgroundPosition: 'center',
                // Matching desktop brightness/contrast intensity
                filter: 'brightness(0.35)'
            }} />

            {/* Content Overlay - Maintaining relative positioning */}
            <div className="container" style={{
                position: 'relative',
                zIndex: 1,
                height: '100%',
                display: 'flex',
                alignItems: 'center',
                // Force left alignment even on mobile if space permits to match desktop "position"
                textAlign: 'left',
                paddingLeft: isMobile ? '1.5rem' : '2rem'
            }}>
                <motion.div
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    variants={fadeInUp}
                    style={{ maxWidth: '800px' }}
                >
                    <h1 style={{
                        fontSize: 'clamp(2.5rem, 6vw, 5.5rem)',
                        fontWeight: 500,
                        color: COLORS.opticalWhite,
                        lineHeight: 1.1,
                        letterSpacing: '-0.02em',
                        marginBottom: '1.5rem',
                        paddingBottom: '0.2rem',
                        fontFamily: 'Outfit, sans-serif'
                    }}>
                        Protecting the Product. Optimizing the <span style={{ color: COLORS.bronze }}>Process.</span>
                    </h1>
                    <p style={{
                        fontSize: isMobile ? '1.05rem' : 'clamp(1.1rem, 2vw, 1.35rem)',
                        color: 'rgba(255,255,255,0.85)',
                        maxWidth: '600px',
                        lineHeight: 1.6,
                        fontFamily: 'Inter, sans-serif',
                        fontWeight: 300
                    }}>
                        Ensuring design intent translates to factory execution through rigorous quality, compliance, and efficiency frameworks.
                    </p>
                </motion.div>
            </div>
        </section>
    );
};

// ============================================
// 2. HOW WE CREATE IMPACT
// ============================================
const HowWeCreateImpact = () => {
    const isMobile = useMediaQuery('(max-width: 768px)');
    return (
        <section style={{
            background: COLORS.opticalWhite,
            padding: isMobile ? '6rem 2rem' : '6rem 0'
        }}>
            <div className="container">
                <motion.div
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: false, amount: 0.2 }}
                    variants={fadeInUp}
                    transition={{ duration: 0.7 }}
                    style={{
                        display: 'grid',
                        gridTemplateColumns: isMobile ? '1fr' : '1fr 1fr',
                        gap: isMobile ? '3rem' : '4rem',
                        alignItems: 'center'
                    }}
                >
                    {/* Text Column */}
                    <div style={{ textAlign: isMobile ? 'center' : 'left' }}>
                        <h2 style={{
                            fontSize: 'clamp(1.75rem, 3vw, 2.5rem)',
                            fontWeight: 500,
                            color: COLORS.text,
                            fontFamily: 'Outfit, sans-serif',
                            marginBottom: '1.5rem',
                            lineHeight: 1.2
                        }}>
                            How We Create <span style={{ color: COLORS.bronze }}>Impact</span>
                        </h2>

                        <p style={{
                            fontSize: '1.05rem',
                            color: COLORS.textSecondary,
                            lineHeight: 1.8,
                            marginBottom: '1.5rem'
                        }}>
                            At Global Thread FZ, we combine deep industry expertise with hands-on execution.
                            Our team embeds directly into your supply chain operations—identifying inefficiencies,
                            resolving quality issues, and building systems that scale with your growth.
                        </p>

                        <p style={{
                            fontSize: '1.05rem',
                            color: COLORS.textSecondary,
                            lineHeight: 1.8
                        }}>
                            We don't just advise—we execute. From factory floor to final shipment,
                            we take ownership of the details that matter, so you can focus on
                            building your brand.
                        </p>
                    </div>

                    {/* Visual Column */}
                    <div style={{
                        position: 'relative',
                        height: isMobile ? 'auto' : '350px',
                        background: `linear-gradient(135deg, ${COLORS.bronze}10, ${COLORS.gold}05)`,
                        borderRadius: '4px',
                        overflow: 'hidden',
                        padding: isMobile ? '2rem 0' : '0'
                    }}>
                        <div style={{
                            position: 'absolute',
                            inset: 0,
                            backgroundImage: `url(${IMAGES.methodology})`,
                            backgroundSize: 'cover',
                            backgroundPosition: 'center',
                            opacity: 0.15
                        }} />

                        {/* Stats Overlay */}
                        <div style={{
                            position: 'relative',
                            height: '100%',
                            display: 'flex',
                            flexDirection: 'column',
                            justifyContent: 'center',
                            padding: isMobile ? '1rem' : '2.5rem',
                            alignItems: isMobile ? 'center' : 'flex-start'
                        }}>
                            {[
                                { value: '26+', label: 'Partner Factories' },
                                { value: '98%', label: 'On-Time Performance' },
                                { value: '15+', label: 'Years Experience' }
                            ].map((stat, i) => (
                                <div key={i} style={{
                                    display: 'flex',
                                    flexDirection: isMobile ? 'column' : 'row',
                                    alignItems: 'baseline',
                                    gap: isMobile ? '0.25rem' : '1rem',
                                    marginBottom: i < 2 ? '1.5rem' : 0,
                                    textAlign: isMobile ? 'center' : 'left'
                                }}>
                                    <span style={{
                                        fontSize: isMobile ? '2.2rem' : '2.5rem',
                                        fontWeight: 600,
                                        color: COLORS.bronze,
                                        fontFamily: 'Outfit, sans-serif'
                                    }}>{stat.value}</span>
                                    <span style={{
                                        fontSize: '0.9rem',
                                        color: COLORS.text,
                                        fontFamily: 'Inter, sans-serif',
                                        textTransform: isMobile ? 'uppercase' : 'none'
                                    }}>{stat.label}</span>
                                </div>
                            ))}
                        </div>
                    </div>
                </motion.div>
            </div>
        </section>
    );
};

// ============================================
// 3. OUR METHODOLOGY — DIAGNOSE TO SUSTAIN
// ============================================
const methodologySteps = [
    {
        step: '01',
        title: 'Diagnose',
        description: 'We audit your supply chain to identify bottlenecks, compliance gaps, and production inefficiencies.'
    },
    {
        step: '02',
        title: 'Design',
        description: 'We engineer sourcing strategies and quality frameworks aligned with your product goals.'
    },
    {
        step: '03',
        title: 'Deploy',
        description: 'We embed on the factory floor to train teams, standardize workflows, and oversee pilot runs.'
    },
    {
        step: '04',
        title: 'Sustain',
        description: 'We maintain oversight through continuous monitoring and real-time issue resolution.'
    }
];

const OurMethodology = () => {
    const isMobile = useMediaQuery('(max-width: 768px)');
    return (
        <section style={{
            background: COLORS.darkCharcoal,
            padding: isMobile ? '6rem 2rem' : '5rem 0'
        }}>
            <div className="container">
                {/* Section Header */}
                <motion.div
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: false }}
                    variants={fadeIn}
                    transition={{ duration: 0.6 }}
                    style={{ marginBottom: '3rem', textAlign: isMobile ? 'center' : 'left' }}
                >
                    <h2 style={{
                        fontSize: 'clamp(1.75rem, 3vw, 2.5rem)',
                        fontWeight: 500,
                        color: COLORS.opticalWhite,
                        fontFamily: 'Outfit, sans-serif',
                        marginBottom: '0.75rem'
                    }}>
                        Our Methodology
                    </h2>
                    <p style={{
                        fontSize: '1rem',
                        color: 'rgba(255,255,255,0.5)',
                        fontFamily: 'Inter, sans-serif'
                    }}>
                        From Insight to Impact — A structured approach to supply chain excellence.
                    </p>
                </motion.div>

                {/* Steps Grid - Horizontal Layout */}
                <div style={{
                    display: 'grid',
                    gridTemplateColumns: isMobile ? 'repeat(2, 1fr)' : 'repeat(4, 1fr)',
                    gap: isMobile ? '1px' : '1px',
                    background: 'rgba(255,255,255,0.1)'
                }}>
                    {methodologySteps.map((item, index) => (
                        <motion.div
                            key={item.step}
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: false }}
                            variants={fadeInUp}
                            transition={{ duration: 0.5, delay: isMobile ? 0 : index * 0.1 }}
                            style={{
                                background: COLORS.darkCharcoal,
                                padding: isMobile ? '1.5rem' : '2rem',
                                // Keep border logic clean for grid
                                textAlign: 'left'
                            }}
                        >
                            {/* Title */}
                            <h3 style={{
                                fontSize: '1.5rem',
                                fontWeight: 500,
                                color: COLORS.opticalWhite,
                                fontFamily: 'Outfit, sans-serif',
                                marginBottom: '1rem'
                            }}>
                                {item.title}
                            </h3>

                            {/* Description */}
                            <p style={{
                                fontSize: '0.9rem',
                                color: 'rgba(255,255,255,0.6)',
                                lineHeight: 1.6,
                                fontFamily: 'Inter, sans-serif'
                            }}>
                                {item.description}
                            </p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section >
    );
};

// ============================================
// 4. WHAT SETS US APART
// ============================================
const differentiators = [
    {
        title: 'Embedded Expertise',
        description: "We don't operate from boardrooms. Our teams work on the factory floor to solve production issues in real-time."
    },
    {
        title: 'End-to-End Ownership',
        description: 'We take responsibility beyond isolated checkpoints. From raw material to final shipment, we own the outcome.'
    },
    {
        title: 'Fashion-Specific Focus',
        description: 'We speak the language of apparel. Our processes catch quality nuances that generalist firms miss.'
    },
    {
        title: 'Relationship-Driven Approach',
        description: 'We build leverage with factories through respect and long-term partnership, ensuring your production gets priority.'
    }
];

const WhatSetsUsApart = () => {
    const isMobile = useMediaQuery('(max-width: 768px)');
    const sectionRef = useRef(null);
    const videoRef = useRef(null);
    const isInView = useInView(sectionRef, { margin: "0px 0px -10% 0px" });

    useEffect(() => {
        if (videoRef.current) {
            if (isInView) {
                const playPromise = videoRef.current.play();
                if (playPromise !== undefined) {
                    playPromise.catch(error => {
                        console.log("Auto-play prevented:", error);
                    });
                }
            } else {
                videoRef.current.pause();
            }
        }
    }, [isInView]);

    return (
        <section ref={sectionRef} style={{
            background: COLORS.lightBg,
            padding: isMobile ? '6rem 2rem' : '6rem 0',
            position: 'relative',
            overflow: 'hidden'
        }}>
            {/* Background Video */}
            <div style={{
                position: 'absolute',
                inset: 0,
                zIndex: 0,
                opacity: isMobile ? 0.3 : 0.5,
                pointerEvents: 'none'
            }}>
                <video
                    ref={videoRef}
                    loop
                    muted
                    playsInline
                    preload="metadata"
                    style={{
                        width: '100%',
                        height: '100%',
                        objectFit: 'cover',
                        filter: 'blur(4px)',
                        transform: 'scale(1.05)'
                    }}
                >
                    <source src="/videos/sets-us-apart-bg.mp4" type="video/mp4" />
                </video>
            </div>

            {/* Soft White Overlay */}
            <div style={{
                position: 'absolute',
                inset: 0,
                background: isMobile ? 'rgba(255,255,255,0.6)' : 'rgba(255,255,255,0.4)',
                pointerEvents: 'none',
                zIndex: 1
            }} />

            <div className="container" style={{ position: 'relative', zIndex: 1 }}>
                <div style={{
                    display: 'flex',
                    flexDirection: 'column',
                    gap: isMobile ? '2.5rem' : '4rem'
                }}>
                    {/* Title - Top Aligned */}
                    <motion.div
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: false }}
                        variants={fadeInUp}
                        transition={{ duration: 0.6 }}
                        style={{ maxWidth: '800px', textAlign: 'left' }}
                    >
                        <h2 style={{
                            fontSize: 'clamp(2.5rem, 6vw, 4rem)',
                            fontWeight: 600,
                            color: COLORS.text,
                            fontFamily: 'Outfit, sans-serif',
                            lineHeight: 1.2,
                            paddingBottom: '0.2rem',
                            textShadow: '0 2px 20px rgba(255,255,255,0.8)'
                        }}>
                            What Sets <span style={{ color: COLORS.bronze }}>Us Apart</span>
                        </h2>
                    </motion.div>

                    {/* Grid List */}
                    <div style={{
                        display: 'grid',
                        gridTemplateColumns: isMobile ? '1fr' : '1fr 1fr',
                        rowGap: isMobile ? '1.25rem' : '3rem',
                        columnGap: isMobile ? '0' : '6rem',
                        width: '100%'
                    }}>
                        {differentiators.map((item, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, x: index % 2 === 0 ? -30 : 30 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: false, amount: 0.2 }}
                                transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1], delay: index * 0.1 }}
                                style={{
                                    padding: '2rem',
                                    background: 'rgba(255, 255, 255, 0.7)',
                                    backdropFilter: 'blur(12px)',
                                    borderRadius: '16px',
                                    border: '1px solid rgba(255, 255, 255, 0.4)',
                                    boxShadow: '0 10px 30px rgba(0,0,0,0.05)',
                                    height: '100%',
                                    display: 'flex',
                                    flexDirection: 'column',
                                    justifyContent: 'center',
                                    textAlign: 'left'
                                }}
                            >
                                <h3 style={{
                                    fontSize: '1.5rem',
                                    fontWeight: 600,
                                    color: COLORS.text,
                                    fontFamily: 'Outfit, sans-serif',
                                    marginBottom: '1rem',
                                    textShadow: isMobile ? 'none' : '0 2px 15px rgba(255,255,255,0.8)'
                                }}>
                                    {item.title}
                                </h3>
                                <p style={{
                                    fontSize: '1rem',
                                    color: 'rgba(17, 17, 17, 0.85)',
                                    lineHeight: 1.6,
                                    maxWidth: isMobile ? '100%' : '90%',
                                    margin: isMobile ? '0 auto' : '0'
                                }}>
                                    {item.description}
                                </p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

// ============================================
// 5. FOUNDER'S PERSPECTIVE
// ============================================
const FounderPerspective = () => {
    const isMobile = useMediaQuery('(max-width: 768px)');
    return (
        <section style={{
            background: COLORS.opticalWhite,
            minHeight: isMobile ? 'auto' : '100vh',
            display: 'flex',
            alignItems: 'flex-end',
            position: 'relative',
            overflow: 'hidden',
            padding: isMobile ? '6rem 2rem 0 2rem' : '0'
        }}>
            {/* 1. Large Watermark Text */}
            <div style={{
                position: 'absolute',
                top: '50%',
                left: '50%',
                transform: 'translate(-50%, -50%)',
                fontSize: 'clamp(10rem, 25vw, 30rem)',
                fontWeight: 900,
                color: 'rgba(0,0,0,0.015)',
                fontFamily: 'Inter, sans-serif',
                whiteSpace: 'nowrap',
                zIndex: 0,
                pointerEvents: 'none',
                letterSpacing: '-0.05em'
            }}>
                VISION
            </div>

            {/* 2. Architectural Grid Pattern */}
            <div style={{
                position: 'absolute',
                inset: 0,
                backgroundImage: 'linear-gradient(rgba(17,17,17,0.03) 1px, transparent 1px), linear-gradient(90deg, rgba(17,17,17,0.03) 1px, transparent 1px)',
                backgroundSize: '100px 100px',
                zIndex: 0,
                pointerEvents: 'none'
            }} />

            {/* Subtle Gradient Overlay */}
            <div style={{
                position: 'absolute',
                inset: 0,
                background: `radial-gradient(circle at 70% 80%, transparent 20%, ${COLORS.opticalWhite} 100%)`,
                zIndex: 1
            }} />

            <div className="container" style={{ position: 'relative', zIndex: 10 }}>
                <div style={{
                    display: 'grid',
                    gridTemplateColumns: isMobile ? '1fr' : '1.5fr 1fr',
                    gap: isMobile ? '0' : '4rem',
                    alignItems: isMobile ? 'center' : 'stretch',
                    maxWidth: '1200px',
                    margin: '0 auto',
                    height: isMobile ? 'auto' : '100vh'
                }}>
                    {/* Quote Column */}
                    <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', paddingBottom: isMobile ? '3rem' : '4rem', textAlign: 'left' }}>
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: false, amount: 0.3 }}
                            transition={{ duration: 0.6 }}
                            style={{
                                fontSize: '0.85rem',
                                color: COLORS.bronze,
                                fontFamily: 'monospace',
                                letterSpacing: '0.2em',
                                textTransform: 'uppercase',
                                marginBottom: '1.5rem',
                                display: 'block'
                            }}
                        >
                            FOUNDER'S PERSPECTIVE
                        </motion.div>

                        <motion.blockquote
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: false, amount: 0.3 }}
                            transition={{ duration: 0.8, delay: 0.1 }}
                            style={{
                                fontSize: isMobile ? '1.25rem' : 'clamp(1.5rem, 3vw, 2.2rem)',
                                fontWeight: 400,
                                color: COLORS.text,
                                fontFamily: 'Outfit, sans-serif',
                                lineHeight: 1.4,
                                margin: 0,
                                marginBottom: '2.5rem',
                                fontStyle: 'normal'
                            }}
                        >
                            "We treat every brand as our own—owning every deadline,
                            every stitch, and every quality standard.
                            Excellence is our only metric."
                        </motion.blockquote>

                        <motion.div
                            initial={{ opacity: 0 }}
                            whileInView={{ opacity: 1 }}
                            viewport={{ once: false, amount: 0.3 }}
                            transition={{ duration: 0.8, delay: 0.3 }}
                            style={{
                                display: 'flex',
                                alignItems: 'center',
                                gap: '1rem',
                                justifyContent: 'flex-start'
                            }}
                        >
                            <div style={{ width: '40px', height: '1px', background: COLORS.bronze }} />
                            <div>
                                <div style={{
                                    fontSize: '1rem',
                                    fontWeight: 500,
                                    color: COLORS.text,
                                    fontFamily: 'Outfit, sans-serif'
                                }}>
                                    Karina Khalife
                                </div>
                                <div style={{
                                    fontSize: '0.85rem',
                                    color: COLORS.textSecondary
                                }}>
                                    Founder, Global Thread FZ
                                </div>
                            </div>
                        </motion.div>
                    </div>

                    {/* Founder Image */}
                    <motion.div
                        initial={{ opacity: 0, y: isMobile ? 30 : 50 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: false, amount: 0.3 }}
                        transition={{ duration: 1, ease: "easeOut" }}
                        style={{
                            display: 'flex',
                            alignItems: 'flex-end',
                            height: isMobile ? '400px' : '100%',
                            position: 'relative'
                        }}
                    >
                        <div style={{
                            width: '100%',
                            height: isMobile ? '100%' : '90%',
                            position: 'relative'
                        }}>
                            <img
                                src={IMAGES.founder}
                                alt="Karina Khalife - Founder"
                                style={{
                                    width: '100%',
                                    height: '100%',
                                    objectFit: 'contain',
                                    objectPosition: 'bottom center',
                                    filter: 'drop-shadow(0 10px 20px rgba(0,0,0,0.1))'
                                }}
                            />
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

// ============================================
// 6. CLOSING STATEMENT
// ============================================
const ClosingStatement = () => {
    const isMobile = useMediaQuery('(max-width: 768px)');
    return (
        <section style={{
            background: COLORS.darkCharcoal,
            padding: isMobile ? '6rem 2rem' : '5rem 0'
        }}>
            <div className="container">
                <motion.div
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: false }}
                    variants={fadeIn}
                    transition={{ duration: 0.8 }}
                    style={{
                        textAlign: 'center',
                        maxWidth: '800px',
                        margin: '0 auto'
                    }}
                >
                    <h2 style={{
                        fontSize: 'clamp(1.75rem, 4vw, 3rem)',
                        fontWeight: 500,
                        color: COLORS.opticalWhite,
                        fontFamily: 'Outfit, sans-serif',
                        lineHeight: 1.3,
                        marginBottom: '2rem'
                    }}>
                        From factory floor to your front door—
                        <span style={{ color: COLORS.bronze }}> we make it happen.</span>
                    </h2>

                    <p style={{
                        fontSize: isMobile ? '1rem' : '1.1rem',
                        color: 'rgba(255,255,255,0.6)',
                        lineHeight: 1.7,
                        marginBottom: '2.5rem'
                    }}>
                        Ready to work with a team that executes? Partner with us for
                        sourcing and production that delivers.
                    </p>

                    <a
                        href="/contact"
                        className="btn btn-primary"
                        style={{
                            borderRadius: '2rem',
                            padding: isMobile ? '1rem 2.8rem' : '1rem 2rem',
                            background: COLORS.bronze,
                            color: COLORS.darkCharcoal,
                            border: `1px solid ${COLORS.bronze}`,
                            width: isMobile ? '100%' : 'auto'
                        }}
                    >
                        Request Advisory Call
                    </a>
                </motion.div>
            </div>
        </section>
    );
};

// ============================================
// MAIN ETHOS PAGE
// ============================================
const Ethos = () => {
    return (
        <main style={{ background: COLORS.opticalWhite }}>
            <EthosHero />
            <HowWeCreateImpact />
            <OurMethodology />
            <WhatSetsUsApart />
            <FounderPerspective />
            <ClosingStatement />
        </main>
    );
};

export default Ethos;
