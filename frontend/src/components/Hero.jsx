import React, { useRef, useEffect } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

const Hero = () => {
    const containerRef = useRef(null);
    const videoRef = useRef(null);
    const { scrollYProgress } = useScroll({ target: containerRef, offset: ["start start", "end start"] });

    // Slow motion effect
    useEffect(() => {
        if (videoRef.current) {
            videoRef.current.playbackRate = 0.7; // 70% speed
        }
    }, []);

    const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);
    const scale = useTransform(scrollYProgress, [0, 0.5], [1, 0.96]);
    const y = useTransform(scrollYProgress, [0, 0.5], [0, -60]);

    // Background parallax - more subtle
    const bgY = useTransform(scrollYProgress, [0, 1], ['0%', '15%']);
    const bgScale = useTransform(scrollYProgress, [0, 1], [1, 1.1]);

    return (
        <section ref={containerRef} style={{
            minHeight: '100vh',
            display: 'flex',
            alignItems: 'center',
            position: 'relative',
            overflow: 'hidden',
            marginTop: 'calc(-1 * var(--header-height))',
            paddingTop: 'calc(var(--header-height) + 4rem)',
            background: '#0a0a0a'
        }}>
            {/* Cinematic Background Video */}
            <motion.video
                ref={videoRef}
                autoPlay
                loop
                muted
                playsInline
                style={{
                    position: 'absolute',
                    top: '-10%',
                    left: 0,
                    width: '100%',
                    height: '120%',
                    y: bgY,
                    objectFit: 'cover',
                    filter: 'brightness(0.6) contrast(1.15) saturate(1.2) blur(2px)',
                    zIndex: 0
                }}
            >
                <source src="/videos/hero.mp4" type="video/mp4" />
            </motion.video>



            {/* Grain Overlay - Fashion Depth */}
            <div style={{
                position: 'absolute',
                inset: 0,
                backgroundImage: 'url("https://grainy-gradients.vercel.app/noise.svg")',
                opacity: 0.04,
                pointerEvents: 'none',
                zIndex: 2,
                mixBlendMode: 'overlay'
            }} />

            <motion.div
                className="container"
                style={{
                    position: 'relative',
                    zIndex: 3,
                    width: '100%',
                    opacity,
                    scale,
                    y
                }}
            >
                {/* Asymmetric Editorial Layout */}
                <div style={{ maxWidth: '1200px' }}>
                    {/* Small Badge - Top */}
                    <motion.div
                        initial={{ opacity: 0, y: 30, scale: 0.95 }}
                        animate={{ opacity: 1, y: 0, scale: 1 }}
                        transition={{ duration: 0.7, ease: [0.25, 0.1, 0.25, 1] }}
                        style={{
                            display: 'inline-flex',
                            padding: '0.5rem 1.5rem',
                            background: 'rgba(255, 255, 255, 0.05)',
                            border: '1px solid rgba(255, 255, 255, 0.1)',
                            borderRadius: '2rem',
                            marginBottom: '2rem'
                        }}
                    >
                        <span style={{
                            fontSize: '0.75rem',
                            color: '#FEFFFF',
                            fontFamily: 'monospace',
                            letterSpacing: '0.15em',
                            textTransform: 'uppercase'
                        }}>Fashion Supply-Chain Expertise</span>
                    </motion.div>

                    {/* Large Editorial Headline - Staggered with movement */}
                    <div style={{ marginBottom: '3rem' }}>
                        <motion.h1
                            initial={{ opacity: 0, x: -40, scale: 0.97 }}
                            animate={{ opacity: 1, x: 0, scale: 1 }}
                            transition={{ duration: 0.9, delay: 0.15, ease: [0.25, 0.1, 0.25, 1] }}
                            style={{
                                fontSize: 'clamp(4rem, 11vw, 12rem)',
                                lineHeight: 0.9,
                                fontWeight: 500,
                                letterSpacing: '-0.03em',
                                color: '#FEFFFF',
                                marginBottom: '1rem',
                                fontFamily: 'Outfit, sans-serif'
                            }}
                        >
                            Strategic
                        </motion.h1>
                        <motion.h1
                            initial={{ opacity: 0, x: 40, scale: 0.97 }}
                            animate={{ opacity: 1, x: 0, scale: 1 }}
                            transition={{ duration: 0.9, delay: 0.3, ease: [0.25, 0.1, 0.25, 1] }}
                            style={{
                                fontSize: 'clamp(4rem, 11vw, 12rem)',
                                lineHeight: 0.9,
                                fontWeight: 500,
                                letterSpacing: '-0.03em',
                                color: '#C5A059',
                                marginLeft: '15%',
                                fontFamily: 'Outfit, sans-serif'
                            }}
                        >
                            Precision.
                        </motion.h1>
                    </div>

                    {/* Editorial Two-Column Layout */}
                    <div style={{
                        display: 'grid',
                        gridTemplateColumns: typeof window !== 'undefined' && window.innerWidth < 768 ? '1fr' : '1fr 1fr',
                        gap: '4rem',
                        maxWidth: '1000px'
                    }}>
                        <motion.div
                            initial={{ opacity: 0, y: 30, scale: 0.97 }}
                            animate={{ opacity: 1, y: 0, scale: 1 }}
                            transition={{ duration: 0.8, delay: 0.5, ease: [0.25, 0.1, 0.25, 1] }}
                        >
                            <p style={{
                                fontSize: '1.1rem',
                                lineHeight: 1.7,
                                color: 'rgba(255, 255, 255, 0.8)',
                                fontFamily: 'Inter, sans-serif',
                                fontWeight: 300
                            }}>
                                Transforming vision into execution. We optimize the critical space between creative excellence and commercial reality in fashion supply chains.
                            </p>
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0, y: 30, scale: 0.97 }}
                            animate={{ opacity: 1, y: 0, scale: 1 }}
                            transition={{ duration: 0.8, delay: 0.65, ease: [0.25, 0.1, 0.25, 1] }}
                            style={{ display: 'flex', flexDirection: 'column', gap: '1rem', alignItems: 'flex-start' }}
                        >
                            <a href="#services" className="btn btn-primary" style={{
                                borderRadius: '2rem',
                                padding: '1rem 2.5rem',
                                background: '#FEFFFF',
                                color: '#111111',
                                border: '1px solid #FEFFFF'
                            }}>
                                Understand Our Services
                            </a>
                            <div style={{
                                fontSize: '0.85rem',
                                color: 'rgba(255, 255, 255, 0.5)',
                                fontFamily: 'monospace',
                                letterSpacing: '0.05em'
                            }}>
                                Operational Design Standards / 2026
                            </div>
                        </motion.div>
                    </div>
                </div>
            </motion.div>
        </section>
    );
};

export default Hero;
