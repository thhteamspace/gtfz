import React, { useRef, useEffect } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import useMediaQuery from '../hooks/useMediaQuery';

const Hero = () => {
    const containerRef = useRef(null);
    const videoRef = useRef(null);
    const isMobile = useMediaQuery('(max-width: 768px)');
    const { scrollYProgress } = useScroll({ target: containerRef, offset: ["start start", "end start"] });

    // Slow motion effect
    useEffect(() => {
        if (videoRef.current) {
            videoRef.current.playbackRate = 0.7;
        }
    }, []);

    const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);
    const scale = useTransform(scrollYProgress, [0, 0.5], [1, isMobile ? 0.98 : 0.96]);
    const y = useTransform(scrollYProgress, [0, 0.5], [0, isMobile ? -30 : -60]);
    const bgY = useTransform(scrollYProgress, [0, 1], ['0%', isMobile ? '7%' : '15%']);

    return (
        <section ref={containerRef} style={{
            minHeight: isMobile ? '100svh' : '100vh',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            position: 'relative', // Ensure relative positioning for useScroll
            overflow: 'hidden',
            marginTop: 'calc(-1 * var(--header-height))',
            paddingTop: 'var(--header-height)',
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
                    inset: 0,
                    width: '100%',
                    height: '100%',
                    y: bgY,
                    objectFit: 'cover',
                    objectPosition: isMobile ? 'center 30%' : 'center',
                    filter: isMobile ? 'brightness(0.35) contrast(1.05)' : 'brightness(0.5) contrast(1.1) saturate(1.2)',
                    zIndex: 0
                }}
            >
                <source src="/videos/hero.mp4?v=1" type="video/mp4" />
            </motion.video>

            {/* Dark Gradient Overlay */}
            <div style={{
                position: 'absolute',
                inset: 0,
                background: isMobile
                    ? 'linear-gradient(to bottom, rgba(10,10,10,0.5) 0%, rgba(10,10,10,0.8) 100%)'
                    : 'linear-gradient(to bottom, rgba(10,10,10,0.3) 0%, rgba(10,10,10,0.6) 100%)',
                zIndex: 1
            }} />

            {/* Grain Overlay */}
            <div style={{
                position: 'absolute',
                inset: 0,
                backgroundImage: 'url("https://grainy-gradients.vercel.app/noise.svg")',
                opacity: 0.04,
                pointerEvents: 'none',
                zIndex: 2,
                mixBlendMode: 'overlay'
            }} />

            {/* Hero Content - Centered Premium Layout */}
            <motion.div
                className="container"
                style={{
                    position: 'relative',
                    zIndex: 3,
                    width: '100%',
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    justifyContent: 'center',
                    textAlign: 'center',
                    opacity,
                    scale,
                    y,
                    padding: isMobile ? '0 2rem' : '0'
                }}
            >

                {/* Main Headline */}
                <motion.h1
                    initial={{ opacity: 0, y: isMobile ? 20 : 40 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: isMobile ? 0.6 : 0.9, delay: 0.1, ease: [0.25, 0.1, 0.25, 1] }}
                    style={{
                        fontSize: 'clamp(3.5rem, 10vw, 9rem)',
                        lineHeight: 1.05,
                        fontWeight: 500,
                        letterSpacing: '-0.03em',
                        color: '#FEFFFF',
                        marginBottom: '1.5rem',
                        fontFamily: 'Outfit, sans-serif',
                        maxWidth: '900px'
                    }}
                >
                    Strategic <span style={{ color: '#C5A059' }}>Precision</span>
                </motion.h1>

                {/* Subheadline */}
                <motion.p
                    initial={{ opacity: 0, y: isMobile ? 15 : 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: isMobile ? 0.6 : 0.8, delay: 0.25, ease: [0.25, 0.1, 0.25, 1] }}
                    style={{
                        fontSize: 'clamp(1rem, 2vw, 1.25rem)',
                        lineHeight: 1.7,
                        color: 'rgba(255, 255, 255, 0.7)',
                        fontFamily: 'Inter, sans-serif',
                        fontWeight: 300,
                        maxWidth: '600px',
                        marginBottom: isMobile ? '2.5rem' : '2rem'
                    }}
                >
                    We bridge the gap between boardroom strategy and factory-floor reality, solving complex sourcing challenges with on-ground execution.
                </motion.p>

                {/* CTA Buttons */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: isMobile ? 0.5 : 0.7, delay: 0.4, ease: [0.25, 0.1, 0.25, 1] }}
                    style={{
                        display: 'flex',
                        gap: isMobile ? '1rem' : '1.5rem',
                        flexWrap: 'wrap',
                        justifyContent: 'center',
                        width: isMobile ? '100%' : 'auto'
                    }}
                >
                    <a href="#services" className="btn btn-primary" style={{
                        borderRadius: '2rem',
                        padding: isMobile ? '1rem 2rem' : '1.1rem 2.8rem',
                        background: 'transparent',
                        color: '#FEFFFF',
                        border: '1px solid rgba(255, 255, 255, 0.3)',
                        fontWeight: 500,
                        fontSize: isMobile ? '0.9rem' : '0.95rem',
                        textDecoration: 'none',
                        width: isMobile ? '100%' : 'auto'
                    }}>
                        Understand Our Services
                    </a>

                </motion.div>
            </motion.div>
        </section>
    );
};

export default Hero;
