import React, { useRef, useState } from 'react';
import { motion, useScroll, useTransform, AnimatePresence } from 'framer-motion';
import useMediaQuery from '../hooks/useMediaQuery';

const StrategicSplit = () => {
    const isMobile = useMediaQuery('(max-width: 768px)');
    const containerRef = useRef(null);
    const [activeSection, setActiveSection] = useState(0);

    // Images corresponding to sections
    const sectionImages = [
        "https://images.unsplash.com/photo-1565008576549-57569a49371d?auto=format&fit=crop&q=80&w=1200", // Solutions (Factory)
        "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&q=80&w=1200"  // Impact (Shipping/Global Scale - Containers/Port)
    ];

    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start start", "end end"]
    });

    // Nivora-style scroll-linked micro-transforms for sticky image
    // const imageScale = useTransform(scrollYProgress, [0, 0.3, 0.7, 1], [1, 1.05, 1.05, 1]); // Removed
    // const imageRotate = useTransform(scrollYProgress, [0, 0.5, 1], [0, -1.5, 0]); // Removed
    // const imageX = useTransform(scrollYProgress, [0, 0.2], [-40, 0]); // Removed

    // Progress indicator
    const progressHeight = useTransform(scrollYProgress, [0, 1], ['0%', '100%']);
    const grainOpacity = useTransform(scrollYProgress, [0, 0.3, 0.7, 1], [0.02, 0.06, 0.06, 0.02]);

    // Content sections data
    const contentSections = [
        {
            badge: "OUR APPROACH",
            headline: <>Strategic Alignment<br />& <span style={{ color: '#C5A059' }}>Organizational Excellence</span></>,
            paragraphs: [
                "We align your organizational structure with strategic objectives, ensuring seamless coordination across procurement, operations, and leadership teams.",
                "Our approach focuses on building robust governance frameworks, optimizing decision-making processes, and creating alignment that drives sustainable growth and consumer satisfaction."
            ],
            cta: { text: "View All Solutions →", href: "/solutions" }
        },
        {
            badge: "THE RESULT",
            headline: <>Precision at<br /><span style={{ color: '#C5A059' }}>Scale</span></>,
            paragraphs: [
                "Our on-ground presence means faster decision-making, real-time quality control, and supply chains that move at the speed of fashion.",
                "26+ partner factories. 98% on-time delivery. Zero compromises on quality."
            ],
            stats: [
                { value: "25+", label: "Years Experience" },
                { value: "50M+", label: "Units Delivered" }
            ],
            cta: { text: "See Our Impact →", href: "/impact" }
        }
    ];

    return (
        <section ref={containerRef} style={{
            minHeight: isMobile ? 'auto' : '150vh',
            background: '#FEFFFF',
            position: 'relative',
            paddingTop: isMobile ? '6rem' : '6rem', // Keep consistent top padding
            paddingBottom: isMobile ? '6rem' : '12rem'
        }}>
            <div style={{ width: isMobile ? '100%' : '92%', maxWidth: '1800px', margin: '0 auto', height: '100%', padding: isMobile ? '0 2rem' : '0' }}>
                <div style={{
                    display: 'grid',
                    gridTemplateColumns: isMobile ? '1fr' : '1.2fr 0.8fr',
                    gap: isMobile ? '3rem' : '6rem',
                    position: 'relative'
                }}>
                    {/* LEFT: Sticky Visual */}
                    <div style={{
                        position: isMobile ? 'relative' : 'sticky',
                        top: '100px',
                        height: 'fit-content',
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: 'flex-start',
                        marginBottom: isMobile ? '3rem' : '0'
                    }}>
                        <div style={{ position: 'relative', width: '100%' }}>
                            <motion.div
                                style={{
                                    position: 'relative',
                                    overflow: 'hidden',
                                    height: isMobile ? '320px' : '500px',
                                    width: '100%',
                                    borderRadius: '4px'
                                }}
                            >
                                {/* Dynamic Images with Crossfade */}
                                {sectionImages.map((src, idx) => (
                                    <motion.img
                                        key={idx}
                                        src={src}
                                        alt={`Visual ${idx}`}
                                        initial={{ opacity: 0 }}
                                        animate={{ opacity: activeSection === idx ? 1 : 0 }}
                                        transition={{ duration: 0.6 }}
                                        style={{
                                            position: 'absolute',
                                            top: 0,
                                            left: 0,
                                            width: '100%',
                                            height: '100%',
                                            objectFit: 'cover',
                                            objectPosition: isMobile ? 'center 30%' : 'center',
                                            filter: 'brightness(0.9) saturate(1.2)',
                                            display: 'block'
                                        }}
                                    />
                                ))}

                                {/* Grain Overlay */}
                                <motion.div
                                    style={{
                                        position: 'absolute',
                                        inset: 0,
                                        backgroundImage: 'url("https://grainy-gradients.vercel.app/noise.svg")',
                                        opacity: grainOpacity,
                                        pointerEvents: 'none',
                                        mixBlendMode: 'overlay',
                                        zIndex: 2
                                    }}
                                />

                                {/* Bronze Accent Border */}
                                <div style={{
                                    position: 'absolute',
                                    bottom: 0,
                                    left: 0,
                                    width: '100%',
                                    height: '2px',
                                    background: '#C5A059',
                                    zIndex: 3
                                }} />
                            </motion.div>

                            {/* Progress Indicator - Desktop Only */}
                            {!isMobile && (
                                <motion.div
                                    style={{
                                        position: 'absolute',
                                        right: '-2rem',
                                        top: 0,
                                        width: '2px',
                                        height: '80%',
                                        background: 'rgba(17, 17, 17, 0.1)'
                                    }}
                                >
                                    <motion.div
                                        style={{
                                            width: '100%',
                                            height: progressHeight,
                                            background: 'var(--color-heritage-bronze)',
                                            transformOrigin: 'top'
                                        }}
                                    />
                                </motion.div>
                            )}

                            {/* Small Metrics */}
                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.6, delay: 0.3, ease: [0.4, 0, 0.2, 1] }}
                                style={{
                                    marginTop: '2rem',
                                    display: 'flex',
                                    gap: '3rem'
                                }}
                            >
                                <div>
                                    <div style={{
                                        fontSize: '3rem',
                                        fontWeight: 500,
                                        color: '#111111',
                                        fontFamily: 'Outfit, sans-serif',
                                        lineHeight: 1
                                    }}>26+</div>
                                    <div style={{
                                        fontSize: '0.75rem',
                                        color: 'rgba(17, 17, 17, 0.5)',
                                        fontFamily: 'monospace',
                                        letterSpacing: '0.1em',
                                        marginTop: '0.5rem',
                                        textTransform: 'uppercase'
                                    }}>Partner Factories</div>
                                </div>
                                <div>
                                    <div style={{
                                        fontSize: '3rem',
                                        fontWeight: 500,
                                        color: '#C5A059',
                                        fontFamily: 'Outfit, sans-serif',
                                        lineHeight: 1
                                    }}>98%</div>
                                    <div style={{
                                        fontSize: '0.75rem',
                                        color: 'rgba(17, 17, 17, 0.5)',
                                        fontFamily: 'monospace',
                                        letterSpacing: '0.1em',
                                        marginTop: '0.5rem',
                                        textTransform: 'uppercase'
                                    }}>On-Time Delivery</div>
                                </div>
                            </motion.div>
                        </div>
                    </div>

                    {/* RIGHT: Scrolling Content */}
                    <div style={{
                        padding: isMobile ? '0' : 'var(--space-xl) 0',
                        display: 'flex',
                        flexDirection: 'column',
                        gap: isMobile ? '4rem' : '25vh',
                        justifyContent: 'flex-start',
                        paddingTop: isMobile ? '3rem' : '15vh'
                    }}>
                        {contentSections.map((section, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 60, scale: 0.96 }}
                                whileInView={{ opacity: 1, y: 0, scale: 1 }}
                                viewport={{ once: false, margin: "-20% 0px" }} // Trigger when 20% from center
                                onViewportEnter={() => setActiveSection(index)}
                                transition={{
                                    duration: 0.9,
                                    delay: 0.1,
                                    ease: [0.25, 0.1, 0.25, 1]
                                }}
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
                                    }}>{section.badge}</span>
                                </div>

                                {/* Large Editorial Headline */}
                                <h2 style={{
                                    fontSize: 'clamp(2.5rem, 6vw, 5rem)',
                                    fontWeight: 500,
                                    lineHeight: 1.1,
                                    color: '#111111',
                                    marginBottom: '2rem',
                                    fontFamily: 'Outfit, sans-serif',
                                    letterSpacing: '-0.03em'
                                }}>
                                    {section.headline}
                                </h2>

                                {/* Body Copy */}
                                <div style={{
                                    display: 'grid',
                                    gridTemplateColumns: isMobile ? '1fr' : '1fr 1fr',
                                    gap: '2rem',
                                    marginBottom: section.cta ? '3rem' : '0'
                                }}>
                                    {section.paragraphs.map((para, pIndex) => (
                                        <motion.p
                                            key={pIndex}
                                            initial={{ opacity: 0, y: 30 }}
                                            whileInView={{ opacity: 1, y: 0 }}
                                            viewport={{ once: false, margin: "-10% 0px" }}
                                            transition={{
                                                duration: 0.7,
                                                delay: 0.2 + (pIndex * 0.1),
                                                ease: [0.25, 0.1, 0.25, 1]
                                            }}
                                            style={{
                                                fontSize: '1rem',
                                                lineHeight: 1.8,
                                                color: 'rgba(17, 17, 17, 0.7)',
                                                fontFamily: 'Inter, sans-serif',
                                                fontWeight: 400
                                            }}
                                        >
                                            {para}
                                        </motion.p>
                                    ))}
                                </div>

                                {/* Stats Grid */}
                                {section.stats && (
                                    <motion.div
                                        initial={{ opacity: 0, y: 20 }}
                                        whileInView={{ opacity: 1, y: 0 }}
                                        viewport={{ once: false }}
                                        transition={{ duration: 0.6, delay: 0.3 }}
                                        style={{
                                            display: 'flex',
                                            gap: '3rem',
                                            marginBottom: '2rem',
                                            paddingTop: '1rem',
                                            borderTop: '1px solid rgba(17, 17, 17, 0.1)'
                                        }}
                                    >
                                        {section.stats.map((stat, sIndex) => (
                                            <div key={sIndex}>
                                                <div style={{
                                                    fontSize: '2.5rem',
                                                    fontWeight: 500,
                                                    color: sIndex % 2 === 0 ? '#111111' : '#C5A059',
                                                    fontFamily: 'Outfit, sans-serif',
                                                    lineHeight: 1
                                                }}>{stat.value}</div>
                                                <div style={{
                                                    fontSize: '0.75rem',
                                                    color: 'rgba(17, 17, 17, 0.5)',
                                                    fontFamily: 'monospace',
                                                    letterSpacing: '0.1em',
                                                    marginTop: '0.5rem',
                                                    textTransform: 'uppercase'
                                                }}>{stat.label}</div>
                                            </div>
                                        ))}
                                    </motion.div>
                                )}

                                {/* CTA */}
                                {section.cta && (
                                    <motion.a
                                        href={section.cta.href}
                                        initial={{ opacity: 0, x: -20 }}
                                        whileInView={{ opacity: 1, x: 0 }}
                                        viewport={{ once: false }}
                                        transition={{ duration: 0.6, delay: 0.4 }}
                                        style={{
                                            display: 'inline-flex',
                                            alignItems: 'center',
                                            gap: '0.5rem',
                                            fontSize: '0.9rem',
                                            color: '#C5A059',
                                            fontFamily: 'Inter, sans-serif',
                                            fontWeight: 500,
                                            textDecoration: 'none',
                                            borderBottom: '1px solid #C5A059',
                                            paddingBottom: '0.25rem',
                                            transition: 'all var(--duration-normal) var(--ease-fabric)'
                                        }}
                                    >
                                        {section.cta.text}
                                    </motion.a>
                                )}
                            </motion.div>
                        ))}
                    </div>
                </div>
            </div>
        </section >
    );
};

export default StrategicSplit;
