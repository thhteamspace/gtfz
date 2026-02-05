import React, { useRef, useEffect, useState } from 'react';
import { motion, useInView, AnimatePresence } from 'framer-motion';
import RevealText from '../components/motion/RevealText';
import useMediaQuery from '../hooks/useMediaQuery';
import IndustryExpertise from '../components/IndustryExpertise';

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
                    animate="visible"
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
                        Balancing creative vision with commercial reality—ensuring your designs reach the consumer as intended, on time, and at the right cost through intelligent supply chain orchestration.
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
            padding: isMobile ? '4rem 1rem' : '6rem 0'
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
                            We partner with fashion and lifestyle brands to solve complex sourcing,
                            operational, and execution challenges. Our approach blends strategic
                            thinking with hands-on execution thereby ensuring ideas don’t just look
                            good on paper, but work seamlessly on the ground.
                        </p>

                        <p style={{
                            fontSize: '1.05rem',
                            color: COLORS.textSecondary,
                            lineHeight: 1.8,
                            marginBottom: '1.5rem'
                        }}>
                            We operate at the intersection of procurement excellence, operational
                            performance, integrated systems, and pragmatic advisory, helping brands
                            build supply chains that are resilient, transparent, and ready to scale.
                        </p>

                        <h3 style={{
                            fontSize: '1.1rem',
                            fontWeight: 500,
                            marginBottom: '0.75rem',
                            color: COLORS.text
                        }}>
                            Our Solutions
                        </h3>

                        <p style={{
                            fontSize: '1.05rem',
                            color: COLORS.textSecondary,
                            lineHeight: 1.8
                        }}>
                            We support clients across strategic sourcing, operational excellence, connected
                            operations, and decision & governance advisory, helping brands design resilient
                            sourcing strategies, identify and onboard the right suppliers globally, streamline
                            factory and end-to-end operational workflows, and enable seamless information flow
                            across suppliers, production, and internal teams.
                            <br /><br />
                            Our work brings together cost discipline, quality assurance, compliance, and delivery
                            reliability, ensuring decisions are grounded in data and executable on the ground.
                            We also work closely with leadership teams to navigate regulatory complexity, manage
                            risk, and scale confidently translating operational insight into clear, action-ready
                            guidance. For a deeper view of our methodologies, tools, and detailed service offerings,
                            please explore our Solutions page.
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
                            display: isMobile ? 'grid' : 'flex', // Grid for mobile row
                            gridTemplateColumns: isMobile ? 'repeat(3, 1fr)' : '1fr',
                            flexDirection: isMobile ? 'row' : 'column',
                            justifyContent: 'center',
                            padding: isMobile ? '1.5rem 0.5rem' : '2.5rem',
                            alignItems: isMobile ? 'start' : 'flex-start',
                            gap: isMobile ? '0' : '0'
                        }}>
                            {[
                                { value: '26+', label: 'Partner Factories' },
                                { value: '98%', label: 'On-Time Performance' },
                                { value: '25+', label: 'Years Experience' }
                            ].map((stat, i) => (
                                <div key={i} style={{
                                    display: 'flex',
                                    flexDirection: isMobile ? 'column' : 'row',
                                    alignItems: isMobile ? 'center' : 'baseline',
                                    justifyContent: isMobile ? 'flex-start' : 'flex-start',
                                    gap: isMobile ? '0.25rem' : '1rem',
                                    marginBottom: !isMobile && i < 2 ? '1.5rem' : 0,
                                    textAlign: isMobile ? 'center' : 'left',
                                    borderRight: isMobile && i < 2 ? '1px solid rgba(197, 160, 89, 0.2)' : 'none'
                                }}>
                                    <span style={{
                                        fontSize: isMobile ? '1.6rem' : '2.5rem',
                                        fontWeight: 600,
                                        color: COLORS.bronze,
                                        fontFamily: 'Outfit, sans-serif'
                                    }}>{stat.value}</span>
                                    <span style={{
                                        fontSize: isMobile ? '0.75rem' : '0.9rem',
                                        color: COLORS.text,
                                        fontFamily: 'Inter, sans-serif',
                                        textTransform: isMobile ? 'uppercase' : 'none',
                                        lineHeight: 1.2
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
// 2.b MISSION & VISION
// ============================================
const MissionVision = () => {
    const isMobile = useMediaQuery('(max-width: 768px)');
    return (
        <section style={{
            background: '#F5F5F3',
            padding: isMobile ? '4rem 2rem' : '6rem 0',
            borderTop: `1px solid ${COLORS.borderLight}`,
            overflow: 'hidden' // Added to prevent scrollbar during animation
        }}>
            <div className="container">
                <motion.div
                    initial={{ opacity: 0, y: 50, scale: 0.95 }}
                    whileInView={{ opacity: 1, y: 0, scale: 1 }}
                    viewport={{ once: false, amount: 0.3 }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                    style={{ textAlign: 'center', marginBottom: '4rem' }}
                >
                    <h2 style={{
                        fontSize: 'clamp(2rem, 4vw, 3rem)',
                        fontFamily: 'Playfair Display, serif',
                        fontStyle: 'italic',
                        color: COLORS.text
                    }}>
                        Mission & Vision
                    </h2>
                </motion.div>

                <div style={{
                    display: 'grid',
                    gridTemplateColumns: isMobile ? '1fr' : '1fr 1fr',
                    gap: isMobile ? '3rem' : '6rem'
                }}>
                    {/* Mission Card */}
                    <motion.div
                        initial={{ opacity: 0, x: -70, rotateY: 10 }}
                        whileInView={{ opacity: 1, x: 0, rotateY: 0 }}
                        viewport={{ once: false, amount: 0.2 }}
                        transition={{ duration: 0.8, type: "spring", stiffness: 60, damping: 20 }}
                        style={{
                            background: '#fff',
                            padding: '3rem',
                            borderLeft: `4px solid ${COLORS.bronze}`,
                            boxShadow: '0 20px 40px rgba(0,0,0,0.08)',
                            perspective: '1000px'
                        }}
                    >
                        <h3 style={{
                            fontSize: '1.5rem',
                            fontWeight: 600,
                            marginBottom: '1rem',
                            fontFamily: 'Outfit, sans-serif'
                        }}>Mission</h3>
                        <p style={{
                            fontSize: '1.05rem',
                            lineHeight: 1.7,
                            color: COLORS.textSecondary,
                            fontFamily: 'Inter, sans-serif'
                        }}>
                            To empower brands to not only reach their goals but to exceed them, fostering a culture of continuous growth and innovation.
                        </p>
                    </motion.div>

                    {/* Vision Card */}
                    <motion.div
                        initial={{ opacity: 0, x: 70, rotateY: -10 }}
                        whileInView={{ opacity: 1, x: 0, rotateY: 0 }}
                        viewport={{ once: false, amount: 0.2 }}
                        transition={{ duration: 0.8, type: "spring", stiffness: 60, damping: 20 }}
                        style={{
                            background: '#fff',
                            padding: '3rem',
                            borderLeft: `4px solid ${COLORS.bronze}`,
                            boxShadow: '0 20px 40px rgba(0,0,0,0.08)',
                            perspective: '1000px'
                        }}
                    >
                        <h3 style={{
                            fontSize: '1.5rem',
                            fontWeight: 600,
                            marginBottom: '1rem',
                            fontFamily: 'Outfit, sans-serif'
                        }}>Vision</h3>
                        <p style={{
                            fontSize: '1.05rem',
                            lineHeight: 1.7,
                            color: COLORS.textSecondary,
                            fontFamily: 'Inter, sans-serif'
                        }}>
                            To transform the future of the fashion industry by blending creativity with strategic excellence. As dedicated collaborators, we invest our passion and expertise into every project.
                        </p>
                    </motion.div>
                </div>
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
        description: 'We start with a rigorous, fact-based diagnosis of your procurement landscape, operating processes, systems, and decision structures. This phase surfaces root-cause bottlenecks, risk exposures, inefficiencies, and value leakage across the end-to-end supply chain not just symptoms.'
    },
    {
        step: '02',
        title: 'Design',
        description: 'We co-design practical, scalable solutions that align strategy with execution. This includes re-architecting sourcing models, process workflows, system integrations, controls, and governance frameworks tailored to your business model, growth ambition, and risk profile.'
    },
    {
        step: '03',
        title: 'Deploy',
        description: 'We move decisively from plan to action. Our teams work alongside yours to implement solutions on the ground embedding SOPs, enabling system integrations, training teams, and aligning stakeholders across functions, partners, and geographies.'
    },
    {
        step: '04',
        title: 'Sustain',
        description: 'We institutionalize performance. Through clear KPIs, operating rhythms, dashboards, and decision rights, we ensure improvements are embedded into daily operations—so gains are sustained, measured, and continuously improved over time.'
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
                {/* Steps Grid - Horizontal Layout */}
                <div style={{
                    display: isMobile ? 'flex' : 'grid',
                    gridTemplateColumns: isMobile ? 'none' : 'repeat(4, 1fr)',
                    gap: isMobile ? '1rem' : '1px',
                    background: isMobile ? 'transparent' : 'rgba(255,255,255,0.1)',
                    overflowX: isMobile ? 'auto' : 'visible',
                    scrollSnapType: isMobile ? 'x mandatory' : 'none',
                    width: isMobile ? '100vw' : '100%',
                    marginLeft: isMobile ? 'calc(50% - 50vw)' : 0,
                    padding: isMobile ? '0 1.5rem 2rem 1.5rem' : 0,
                    scrollbarWidth: 'none' // Hide scrollbar Firefox
                }} className="hide-scrollbar">
                    {methodologySteps.map((item, index) => (
                        <motion.div
                            key={item.step}
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: false }}
                            variants={fadeInUp}
                            transition={{ duration: 0.5, delay: isMobile ? 0 : index * 0.1 }}
                            style={{
                                background: isMobile ? '#161616' : COLORS.darkCharcoal,
                                padding: isMobile ? '2.5rem 2rem' : '2rem',
                                minWidth: isMobile ? '85vw' : 'auto',
                                scrollSnapAlign: isMobile ? 'center' : 'none',
                                borderRadius: isMobile ? '24px' : '0',
                                border: isMobile ? '1px solid rgba(255,255,255,0.08)' : 'none',
                                textAlign: 'left',
                                position: 'relative',
                                overflow: 'hidden'
                            }}
                        >
                            {/* Decorative Step Number BG */}
                            <div style={{
                                position: 'absolute',
                                top: isMobile ? '-10px' : '1rem',
                                right: isMobile ? '10px' : '1rem',
                                fontSize: isMobile ? '5rem' : '1rem',
                                fontWeight: 800,
                                color: isMobile ? 'rgba(255,255,255,0.04)' : COLORS.bronze,
                                fontFamily: 'Outfit, sans-serif',
                                lineHeight: 1,
                                pointerEvents: 'none'
                            }}>
                                {item.step}
                            </div>

                            {/* Title */}
                            <h3 style={{
                                fontSize: '1.5rem',
                                fontWeight: 500,
                                color: COLORS.opticalWhite,
                                fontFamily: 'Outfit, sans-serif',
                                marginBottom: '1rem',
                                position: 'relative',
                                zIndex: 1
                            }}>
                                {item.title}
                            </h3>

                            {/* Description */}
                            <p style={{
                                fontSize: '0.95rem',
                                color: 'rgba(255,255,255,0.6)',
                                lineHeight: 1.6,
                                fontFamily: 'Inter, sans-serif',
                                position: 'relative',
                                zIndex: 1,
                                maxWidth: '90%'
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
// 4.a OUR VALUES (New Content)
// ============================================
const coreValues = [
    {
        title: 'Integrity',
        description: 'We uphold the highest ethical standards in all our dealings. Our commitment to transparency and honesty ensures that our clients can trust us as their dedicated advisors.'
    },
    {
        title: 'Excellence',
        description: 'We are committed to delivering exceptional quality in every project. Our focus on results drives us to exceed expectations, ensuring that our clients achieve their strategic goals.'
    },
    {
        title: 'Results-Driven',
        description: 'Our focus is on measurable outcomes. We take our clients\' success to heart, ensuring that every initiative is designed to achieve tangible results and foster long-term growth.'
    }
];

const CoreValues = () => {
    const isMobile = useMediaQuery('(max-width: 768px)');
    return (
        <section style={{
            background: COLORS.opticalWhite,
            padding: isMobile ? '4rem 1rem' : '6rem 0'
        }}>
            <div className="container">
                <motion.div
                    initial={{ opacity: 0, y: 40, scale: 0.9 }}
                    whileInView={{ opacity: 1, y: 0, scale: 1 }}
                    viewport={{ once: false, amount: 0.3 }}
                    transition={{ duration: 0.7, ease: "easeOut" }}
                    style={{ textAlign: 'center', marginBottom: '4rem' }}
                >
                    <h2 style={{
                        fontSize: 'clamp(2rem, 4vw, 3rem)',
                        fontFamily: 'Playfair Display, serif',
                        fontStyle: 'italic',
                        color: COLORS.text
                    }}>
                        Our Values
                    </h2>
                </motion.div>

                <div style={{
                    display: 'grid',
                    gridTemplateColumns: isMobile ? '1fr' : 'repeat(3, 1fr)',
                    gap: isMobile ? '2rem' : '3rem'
                }}>
                    {coreValues.map((val, i) => (
                        <motion.div
                            key={i}
                            initial={{ opacity: 0, y: 50, scale: 0.85 }}
                            whileInView={{ opacity: 1, y: 0, scale: 1 }}
                            viewport={{ once: false, amount: 0.1 }}
                            transition={{
                                delay: i * 0.15,
                                duration: 0.6,
                                type: "spring",
                                stiffness: 50,
                                damping: 15
                            }}
                            whileHover={{ scale: 1.05, transition: { duration: 0.3 } }}
                            style={{
                                textAlign: 'center',
                                padding: '2rem 1.5rem',
                                background: '#fff',
                                borderRadius: '16px',
                                boxShadow: '0 4px 20px rgba(0,0,0,0.03)'
                            }}
                        >
                            <h3 style={{ fontFamily: 'Outfit, sans-serif', fontSize: '1.5rem', marginBottom: '1rem', color: COLORS.text }}>{val.title}</h3>
                            <motion.div
                                initial={{ width: 0 }}
                                whileInView={{ width: '40px' }}
                                viewport={{ once: false }}
                                transition={{ delay: 0.5 + (i * 0.15), duration: 0.5 }}
                                style={{ height: '2px', background: COLORS.bronze, margin: '0 auto 1.5rem' }}
                            />
                            <p style={{ lineHeight: 1.7, color: COLORS.textSecondary, fontFamily: 'Inter, sans-serif' }}>{val.description}</p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

// ============================================
// 4.b WHAT SETS US APART (Original Content)
// ============================================
const differentiators = [
    {
        title: 'Hands-On Industry Expertise',
        description: 'Deep, hands-on experience across branded and private-label businesses, spanning product development, sourcing, compliance, and go-to-market execution'
    },
    {
        title: 'Strategy Grounded in Reality',
        description: 'A rare balance of strategic rigor and operational pragmatism, translating boardroom strategy into decisions that work on the factory floor and in real supply chains'
    },
    {
        title: 'Global Perspective, Local Precision',
        description: 'A truly global sourcing perspective with local execution sensitivity, navigating regions, regulations, cultures, and on-ground realities with equal confidence'
    },
    {
        title: 'Relentless Focus on Results',
        description: 'A relentless focus on measurable results not just presentations, prioritising speed, clarity, and impact over theory'
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
                    {/* Closing Line for Differentiators */}
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: false }}
                        transition={{ duration: 0.8, delay: 0.4 }}
                        style={{ textAlign: 'center', marginTop: isMobile ? '2rem' : '3rem' }}
                    >
                        <p style={{
                            fontSize: 'clamp(1rem, 2vw, 1.25rem)',
                            color: COLORS.text,
                            fontFamily: 'Inter, sans-serif',
                            maxWidth: '800px',
                            margin: '0 auto',
                            fontWeight: 500
                        }}>
                            We go beyond advice, working alongside teams through execution to ensure outcomes are achieved not just outlined.
                        </p>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

// ============================================
// 5. FOUNDER'S PERSPECTIVE
// ============================================
// ============================================
// 5. PERSPECTIVE SLIDER (Founder & Others)
// ============================================
const perspectives = [
    {
        id: 'founder',
        label: "FOUNDER'S PERSPECTIVE",
        quote: "Strong supply chains are built on clarity, discipline, and trust. Our role is to bring structure where there is complexity, and confidence where decisions feel uncertain.",
        name: "Karina Khalife",
        title: "Founder, Global Thread FZ",
        image: IMAGES.founder,
        closingLine: "Strategy with intent. Execution with precision. Partnerships built to last."
    },
    {
        id: 'partner',
        label: "PARTNER PERSPECTIVE",
        quote: "GTFZ delivered a transformation that went beyond just logistics. They reshaped our entire sourcing strategy, driving efficiency and ethical compliance across our global network.",
        name: "James Miller",
        title: "COO, Apex Retail Group",
        image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=2574",
        closingLine: "Efficiency driven by data. Sourcing guided by ethics."
    },
    {
        id: 'industry',
        label: "INDUSTRY LEADER",
        quote: "In a volatile market, having a partner who understands the nuances of global trade compliance and cultural navigation is invaluable. GTFZ is that partner.",
        name: "Sarah Jenkins",
        title: "Director of Sustainability, EcoStyle",
        image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=80&w=2576",
        closingLine: "Sustainability as a standard. Compliance without compromise."
    }
];

const FounderPerspective = () => {
    const isMobile = useMediaQuery('(max-width: 768px)');
    const [currentIndex, setCurrentIndex] = useState(0);
    const [direction, setDirection] = useState(0);

    const nextSlide = () => {
        setDirection(1);
        setCurrentIndex((prev) => (prev + 1) % perspectives.length);
    };

    const prevSlide = () => {
        setDirection(-1);
        setCurrentIndex((prev) => (prev === 0 ? perspectives.length - 1 : prev - 1));
    };

    const currentSlide = perspectives[currentIndex];

    const slideVariants = {
        enter: (direction) => ({
            x: direction > 0 ? 50 : -50,
            opacity: 0
        }),
        center: {
            x: 0,
            opacity: 1
        },
        exit: (direction) => ({
            x: direction < 0 ? 50 : -50,
            opacity: 0
        })
    };

    return (
        <section style={{
            background: COLORS.opticalWhite,
            minHeight: isMobile ? 'auto' : '100vh',
            display: 'flex',
            alignItems: 'center',
            position: 'relative',
            overflow: 'hidden',
            padding: isMobile ? '6rem 2rem 4rem 2rem' : '0'
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
                    alignItems: 'center',
                    maxWidth: '1200px',
                    margin: '0 auto',
                    minHeight: isMobile ? 'auto' : '80vh'
                }}>
                    {/* Content Column with Animation */}
                    <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', paddingBottom: isMobile ? '3rem' : '4rem', textAlign: 'left', position: 'relative' }}>
                        <AnimatePresence mode='wait' custom={direction}>
                            <motion.div
                                key={currentIndex}
                                custom={direction}
                                variants={slideVariants}
                                initial="enter"
                                animate="center"
                                exit="exit"
                                transition={{ duration: 0.5 }}
                                style={{ width: '100%' }}
                            >
                                <div style={{
                                    fontSize: '0.85rem',
                                    color: COLORS.bronze,
                                    fontFamily: 'monospace',
                                    letterSpacing: '0.2em',
                                    textTransform: 'uppercase',
                                    marginBottom: '1.5rem',
                                    display: 'block'
                                }}>
                                    {currentSlide.label}
                                </div>

                                <blockquote style={{
                                    fontSize: isMobile ? '1.25rem' : 'clamp(1.5rem, 3vw, 2.2rem)',
                                    fontWeight: 400,
                                    color: COLORS.text,
                                    fontFamily: 'Outfit, sans-serif',
                                    lineHeight: 1.4,
                                    margin: 0,
                                    marginBottom: '2.5rem',
                                    fontStyle: 'italic'
                                }}>
                                    “{currentSlide.quote}”
                                </blockquote>

                                <div>
                                    <div style={{
                                        fontSize: '1.25rem',
                                        fontWeight: 600,
                                        color: COLORS.text,
                                        fontFamily: 'Outfit, sans-serif',
                                        marginBottom: '0.25rem'
                                    }}>
                                        {currentSlide.name}
                                    </div>
                                    <div style={{
                                        fontSize: '0.9rem',
                                        color: COLORS.textSecondary,
                                        fontFamily: 'Inter, sans-serif',
                                        textTransform: 'uppercase',
                                        letterSpacing: '0.05em'
                                    }}>
                                        {currentSlide.title}
                                    </div>
                                </div>

                                {currentSlide.closingLine && (
                                    <div style={{
                                        fontSize: '1.25rem',
                                        color: COLORS.bronze,
                                        fontFamily: 'Playfair Display, serif',
                                        fontStyle: 'italic',
                                        lineHeight: 1.4,
                                        marginTop: '1.5rem'
                                    }}>
                                        {currentSlide.closingLine}
                                    </div>
                                )}
                            </motion.div>
                        </AnimatePresence>
                    </div>

                    {/* Image Column with Animation */}
                    <div style={{
                        display: 'flex',
                        alignItems: 'flex-end',
                        height: isMobile ? '400px' : '100%',
                        position: 'relative'
                    }}>
                        {/* Navigation Arrows */}
                        <div style={{
                            position: isMobile ? 'static' : 'absolute',
                            bottom: isMobile ? 'auto' : '0',
                            left: isMobile ? 'auto' : '-8rem',
                            display: isMobile ? 'block' : 'flex',
                            gap: isMobile ? '0' : '1rem',
                            zIndex: 20
                        }}>
                            <button
                                onClick={prevSlide}
                                style={{
                                    background: 'transparent',
                                    border: 'none',
                                    width: '50px',
                                    height: '50px',
                                    display: 'flex',
                                    alignItems: 'center',
                                    justifyContent: 'center',
                                    cursor: 'pointer',
                                    color: COLORS.bronze,
                                    fontSize: '2rem',
                                    transition: 'all 0.3s ease',
                                    position: isMobile ? 'absolute' : 'relative',
                                    left: isMobile ? '-1.5rem' : 'auto',
                                    top: isMobile ? '50%' : 'auto',
                                    transform: isMobile ? 'translateY(-50%)' : 'none'
                                }}
                            >
                                ←
                            </button>
                            <button
                                onClick={nextSlide}
                                style={{
                                    background: 'transparent',
                                    border: 'none',
                                    width: '50px',
                                    height: '50px',
                                    display: 'flex',
                                    alignItems: 'center',
                                    justifyContent: 'center',
                                    cursor: 'pointer',
                                    color: COLORS.bronze,
                                    fontSize: '2rem',
                                    transition: 'all 0.3s ease',
                                    position: isMobile ? 'absolute' : 'relative',
                                    right: isMobile ? '-1.5rem' : 'auto',
                                    top: isMobile ? '50%' : 'auto',
                                    transform: isMobile ? 'translateY(-50%)' : 'none'
                                }}
                            >
                                →
                            </button>
                        </div>

                        <AnimatePresence mode='wait'>
                            <motion.div
                                key={currentSlide.image}
                                initial={{ opacity: 0, x: 20 }}
                                animate={{ opacity: 1, x: 0 }}
                                exit={{ opacity: 0, x: -20 }}
                                transition={{ duration: 0.5 }}
                                style={{
                                    width: '100%',
                                    height: isMobile ? '100%' : '90%',
                                    position: 'relative'
                                }}
                            >
                                <img
                                    src={currentSlide.image}
                                    alt={currentSlide.name}
                                    style={{
                                        width: '100%',
                                        height: '100%',
                                        objectFit: 'contain',
                                        objectPosition: 'bottom center',
                                        filter: 'drop-shadow(0 10px 20px rgba(0,0,0,0.1))'
                                    }}
                                />
                            </motion.div>
                        </AnimatePresence>
                    </div>
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
                        marginBottom: '2rem',
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: 'center'
                    }}>
                        <RevealText>From strategic vision to consumer delivery—</RevealText>
                        <RevealText delay={0.1}><span style={{ color: COLORS.bronze }}>we make it happen.</span></RevealText>
                    </h2>

                    <p style={{
                        fontSize: isMobile ? '1rem' : '1.1rem',
                        color: 'rgba(255,255,255,0.6)',
                        lineHeight: 1.7,
                        marginBottom: '2.5rem'
                    }}>
                        Ready to accelerate? Partner with us.
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
            <MissionVision />
            <OurMethodology />
            <CoreValues />
            <WhatSetsUsApart />
            <FounderPerspective />
            <IndustryExpertise />

        </main>
    );
};

export default Ethos;
