import React, { useRef, useEffect } from 'react';
import { motion, useInView } from 'framer-motion';

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
    return (
        <section style={{
            height: '75vh',
            minHeight: '500px',
            position: 'relative',
            display: 'flex',
            alignItems: 'center',
            overflow: 'hidden'
        }}>
            {/* Background Image */}
            <div style={{
                position: 'absolute',
                inset: 0,
                backgroundImage: `url(${IMAGES.hero})`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                filter: 'brightness(0.35)'
            }} />

            {/* Content Overlay */}
            <div className="container" style={{ position: 'relative', zIndex: 1, height: '100%', display: 'flex', alignItems: 'center' }}>
                <motion.div
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: false, amount: 0.3 }} // Repeat animation on scroll
                    variants={fadeInUp}
                    transition={{ duration: 0.8 }}
                    style={{ maxWidth: '800px' }}
                >
                    <h1 style={{
                        fontSize: 'clamp(3rem, 6vw, 5.5rem)',
                        fontWeight: 500,
                        color: COLORS.opticalWhite,
                        lineHeight: 1.2,
                        letterSpacing: '-0.02em',
                        marginBottom: '1.5rem',
                        paddingBottom: '0.2rem',
                        fontFamily: 'Outfit, sans-serif'
                    }}>
                        Protecting the Product. Optimizing the <span style={{ color: COLORS.bronze }}>Process.</span>
                    </h1>
                    <p style={{
                        fontSize: 'clamp(1.1rem, 2vw, 1.35rem)',
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
    return (
        <section style={{
            background: COLORS.opticalWhite,
            padding: '6rem 0'
        }}>
            <div className="container">
                <motion.div
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: false, amount: 0.3 }}
                    variants={fadeInUp}
                    transition={{ duration: 0.7 }}
                    style={{
                        display: 'grid',
                        gridTemplateColumns: 'repeat(auto-fit, minmax(400px, 1fr))',
                        gap: '4rem',
                        alignItems: 'center'
                    }}
                >
                    {/* Text Column */}
                    <div>
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
                        height: '350px',
                        background: `linear-gradient(135deg, ${COLORS.bronze}10, ${COLORS.gold}05)`,
                        borderRadius: '4px',
                        overflow: 'hidden'
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
                            padding: '2.5rem'
                        }}>
                            {[
                                { value: '26+', label: 'Partner Factories Across Asia' },
                                { value: '98%', label: 'On-Time Delivery Performance' },
                                { value: '15+', label: 'Years of On-Ground Fashion Experience' }
                            ].map((stat, i) => (
                                <div key={i} style={{
                                    display: 'flex',
                                    alignItems: 'baseline',
                                    gap: '1rem',
                                    marginBottom: i < 2 ? '1.5rem' : 0
                                }}>
                                    <span style={{
                                        fontSize: '2.5rem',
                                        fontWeight: 600,
                                        color: COLORS.bronze,
                                        fontFamily: 'Outfit, sans-serif'
                                    }}>{stat.value}</span>
                                    <span style={{
                                        fontSize: '0.95rem',
                                        color: COLORS.text,
                                        fontFamily: 'Inter, sans-serif'
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
    return (
        <section style={{
            background: COLORS.darkCharcoal,
            padding: '5rem 0'
        }}>
            <div className="container">
                {/* Section Header */}
                <motion.div
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: false }}
                    variants={fadeIn}
                    transition={{ duration: 0.6 }}
                    style={{ marginBottom: '3rem' }}
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
                    gridTemplateColumns: 'repeat(4, 1fr)',
                    gap: '1px',
                    background: 'rgba(255,255,255,0.1)'
                }}>
                    {methodologySteps.map((item, index) => (
                        <motion.div
                            key={item.step}
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: false }}
                            variants={fadeInUp}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            style={{
                                background: COLORS.darkCharcoal,
                                padding: '2rem'
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

            {/* Mobile Layout Styles */}
            <style>{`
                @media (max-width: 900px) {
                    .container > div:last-child {
                        grid-template-columns: repeat(2, 1fr) !important;
                    }
                }
                @media (max-width: 600px) {
                    .container > div:last-child {
                        grid-template-columns: 1fr !important;
                    }
                }
            `}</style>
        </section>
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
    const sectionRef = useRef(null);
    const videoRef = useRef(null);
    const isInView = useInView(sectionRef, { margin: "0px 0px -10% 0px" }); // Play when 10% visible

    useEffect(() => {
        if (videoRef.current) {
            if (isInView) {
                const playPromise = videoRef.current.play();
                if (playPromise !== undefined) {
                    playPromise.catch(error => {
                        console.log("Auto-play prevented (User interaction needed?):", error);
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
            padding: '6rem 0',
            position: 'relative',
            overflow: 'hidden'
        }}>
            {/* Background Video */}
            <div style={{
                position: 'absolute',
                inset: 0,
                zIndex: 0,
                opacity: 0.5, // Adjusted to user preference
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
                        filter: 'blur(4px)', // Kept blur for text readability, removed grayscale
                        transform: 'scale(1.05)' // Slight scale to hide blurred edges
                    }}
                >
                    <source src="/videos/sets-us-apart-bg.mp4" type="video/mp4" />
                </video>
            </div>

            {/* Soft White Overlay */}
            <div style={{
                position: 'absolute',
                inset: 0,
                background: 'rgba(255,255,255,0.4)', // Reduced overlay so video shows through
                pointerEvents: 'none',
                zIndex: 1
            }} />

            <div className="container" style={{ position: 'relative', zIndex: 1 }}>
                <div style={{
                    display: 'flex',
                    flexDirection: 'column',
                    gap: '4rem'
                }}>
                    {/* Title - Top Aligned */}
                    <motion.div
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: false }}
                        variants={fadeInUp}
                        transition={{ duration: 0.6 }}
                        style={{ maxWidth: '800px' }}
                    >
                        <h2 style={{
                            fontSize: 'clamp(3rem, 6vw, 4rem)', // Adjusted to 4rem max
                            fontWeight: 600,
                            color: COLORS.text,
                            fontFamily: 'Outfit, sans-serif',
                            lineHeight: 1.2, // Increased from 1.1
                            paddingBottom: '0.2rem', // Added padding
                            textShadow: '0 2px 20px rgba(255,255,255,0.8)' // Highlight text against video
                        }}>
                            What Sets <span style={{ color: COLORS.bronze }}>Us Apart</span>
                        </h2>
                    </motion.div>

                    {/* Grid List */}
                    <div style={{
                        display: 'grid',
                        gridTemplateColumns: window.innerWidth < 768 ? '1fr' : '1fr 1fr', // Force 2 columns on desktop
                        gap: '3rem',
                        columnGap: '6rem', // Increased gap to cover more horizontal space
                        width: '100%'
                    }}>
                        {differentiators.map((item, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, x: index % 2 === 0 ? -100 : 100 }} // Even from Left, Odd from Right
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: false, amount: 0.2 }}
                                transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1], delay: index * 0.2 }} // Slow cinematic eased
                                style={{
                                    padding: '2rem', // Reduced from 2.5rem
                                    background: 'rgba(255, 255, 255, 0.7)',
                                    backdropFilter: 'blur(12px)',
                                    borderRadius: '16px',
                                    border: '1px solid rgba(255, 255, 255, 0.4)',
                                    boxShadow: '0 10px 30px rgba(0,0,0,0.05)',
                                    height: '100%',
                                    display: 'flex',
                                    flexDirection: 'column',
                                    justifyContent: 'center'
                                }}
                            >
                                <h3 style={{
                                    fontSize: '1.6rem', // Adjusted to 1.6rem
                                    fontWeight: 600,
                                    color: COLORS.text,
                                    fontFamily: 'Outfit, sans-serif',
                                    marginBottom: '1.25rem',
                                    textShadow: '0 2px 15px rgba(255,255,255,0.8)' // Highlight
                                }}>
                                    {item.title}
                                </h3>
                                <p style={{
                                    fontSize: '1.1rem', // Adjusted to 1.1rem
                                    color: 'rgba(17, 17, 17, 0.85)',
                                    lineHeight: 1.6,
                                    textShadow: '0 1px 1px rgba(255,255,255,0.5)', // Subtle lift
                                    maxWidth: '90%'
                                }}>
                                    {item.description}
                                </p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </div>

            {/* Mobile Layout */}
            <style>{`
                @media (max-width: 768px) {
                    .container > div {
                        grid-template-columns: 1fr !important;
                        gap: 2rem !important;
                    }
                }
            `}</style>
        </section>
    );
};

// ============================================
// 5. FOUNDER'S PERSPECTIVE
// ============================================
const FounderPerspective = () => {
    return (
        <section style={{
            background: COLORS.opticalWhite,
            minHeight: '100vh', // Full Screen
            display: 'flex',
            alignItems: 'flex-end', // Anchor image to bottom
            position: 'relative',
            overflow: 'hidden'
        }}>
            {/* 1. Large Watermark Text to fill void */}
            <div style={{
                position: 'absolute',
                top: '50%',
                left: '50%',
                transform: 'translate(-50%, -50%)',
                fontSize: 'clamp(10rem, 25vw, 30rem)',
                fontWeight: 900,
                color: 'rgba(0,0,0,0.02)', // Very subtle
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

            {/* Subtle Gradient Overlay for depth */}
            <div style={{
                position: 'absolute',
                inset: 0,
                background: `radial-gradient(circle at 70% 80%, transparent 20%, ${COLORS.opticalWhite} 100%)`, // Fade edges
                zIndex: 1
            }} />

            <div className="container" style={{ position: 'relative', zIndex: 10 }}>
                <div style={{
                    display: 'grid',
                    gridTemplateColumns: '1.5fr 1fr', // Adjusted balance
                    gap: '4rem',
                    alignItems: 'stretch', // Stretch to control vertical alignment independently
                    maxWidth: '1200px',
                    margin: '0 auto',
                    height: '100vh', // Full height grid
                    paddingBottom: 0 // No bottom padding for image flush
                }}>
                    {/* Quote Column - Vertically Centered */}
                    <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', paddingBottom: '4rem' }}>
                        {/* Label Animation */}
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

                        {/* Quote Text Animation */}
                        <motion.blockquote
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: false, amount: 0.3 }}
                            transition={{ duration: 0.8, delay: 0.1 }}
                            style={{
                                fontSize: 'clamp(1.5rem, 3vw, 2rem)',
                                fontWeight: 400,
                                color: COLORS.text,
                                fontFamily: 'Outfit, sans-serif',
                                lineHeight: 1.4,
                                margin: 0,
                                marginBottom: '2rem',
                                fontStyle: 'normal'
                            }}
                        >
                            "We treat every brand as our own—owning every deadline,
                            every stitch, and every quality standard.
                            Excellence is our only metric."
                        </motion.blockquote>

                        {/* Name & Title Animation */}
                        <motion.div
                            initial={{ opacity: 0 }}
                            whileInView={{ opacity: 1 }}
                            viewport={{ once: false, amount: 0.3 }}
                            transition={{ duration: 0.8, delay: 0.3 }}
                            style={{
                                display: 'flex',
                                alignItems: 'center',
                                gap: '1rem'
                            }}
                        >
                            <div style={{
                                width: '40px',
                                height: '1px',
                                background: COLORS.bronze
                            }} />
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

                    {/* Founder Image Animation - Anchored Bottom */}
                    <motion.div
                        initial={{ opacity: 0, y: 50 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: false, amount: 0.3 }}
                        transition={{ duration: 1, ease: "easeOut" }}
                        style={{
                            display: 'flex',
                            alignItems: 'flex-end', // Anchor Bottom
                            height: '100%',
                            position: 'relative'
                        }}
                    >
                        <div style={{
                            width: '100%',
                            height: '90%', // Occupy most of height
                            position: 'relative'
                        }}>
                            <img
                                src={IMAGES.founder}
                                alt="Karina Khalife - Founder"
                                style={{
                                    width: '100%',
                                    height: '100%',
                                    objectFit: 'contain',
                                    objectPosition: 'bottom center', // Sit on bottom
                                    filter: 'drop-shadow(0 10px 20px rgba(0,0,0,0.1))'
                                }}
                            />
                        </div>
                    </motion.div>
                </div>
            </div>

            {/* Mobile Layout */}
            <style>{`
                @media (max-width: 768px) {
                    .container > div > div {
                        grid-template-columns: 1fr !important;
                    }
                }
            `}</style>
        </section>
    );
};

// ============================================
// 6. CLOSING STATEMENT
// ============================================
const ClosingStatement = () => {
    return (
        <section style={{
            background: COLORS.darkCharcoal,
            padding: '5rem 0'
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
                        fontSize: '1.1rem',
                        color: 'rgba(255,255,255,0.6)',
                        lineHeight: 1.7,
                        marginBottom: '2.5rem'
                    }}>
                        Ready to work with a team that executes? Partner with us for
                        sourcing and production that delivers.
                    </p>

                    <a
                        href="/contact"
                        style={{
                            display: 'inline-flex',
                            alignItems: 'center',
                            gap: '0.75rem',
                            padding: '1rem 2rem',
                            background: COLORS.bronze,
                            color: COLORS.darkCharcoal,
                            textDecoration: 'none',
                            fontSize: '0.95rem',
                            fontWeight: 500,
                            borderRadius: '2rem',
                            transition: 'all 0.3s'
                        }}
                    >
                        Request Advisory Call
                        <span>→</span>
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
