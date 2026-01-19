import React, { useRef, useEffect } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

const Hero = () => {
    const containerRef = useRef(null);
    const videoRef = useRef(null);
    const { scrollYProgress } = useScroll({ target: containerRef, offset: ["start start", "end start"] });

    // Slow motion effect
    useEffect(() => {
        if (videoRef.current) {
            videoRef.current.playbackRate = 0.7;
        }
    }, []);

    const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);
    const scale = useTransform(scrollYProgress, [0, 0.5], [1, 0.96]);
    const y = useTransform(scrollYProgress, [0, 0.5], [0, -60]);
    const bgY = useTransform(scrollYProgress, [0, 1], ['0%', '15%']);

    return (
        <section ref={containerRef} style={{
            minHeight: '100vh',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            position: 'relative',
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
                    filter: 'brightness(0.5) contrast(1.1) saturate(1.2)',
                    zIndex: 0
                }}
            >
                <source src="/videos/hero.mp4" type="video/mp4" />
            </motion.video>

            {/* Dark Gradient Overlay */}
            <div style={{
                position: 'absolute',
                inset: 0,
                background: 'linear-gradient(to bottom, rgba(10,10,10,0.3) 0%, rgba(10,10,10,0.6) 100%)',
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
                    y
                }}
            >
                {/* Small Badge */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, ease: [0.25, 0.1, 0.25, 1] }}
                    style={{
                        display: 'inline-flex',
                        padding: '0.6rem 1.8rem',
                        background: 'rgba(197, 160, 89, 0.1)',
                        border: '1px solid rgba(197, 160, 89, 0.3)',
                        borderRadius: '2rem',
                        marginBottom: '2.5rem'
                    }}
                >
                    <span style={{
                        fontSize: '0.75rem',
                        color: '#C5A059',
                        fontFamily: 'monospace',
                        letterSpacing: '0.2em',
                        textTransform: 'uppercase',
                        fontWeight: 500
                    }}>Fashion Supply-Chain Consultancy</span>
                </motion.div>

                {/* Main Headline */}
                <motion.h1
                    initial={{ opacity: 0, y: 40 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.9, delay: 0.1, ease: [0.25, 0.1, 0.25, 1] }}
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
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.25, ease: [0.25, 0.1, 0.25, 1] }}
                    style={{
                        fontSize: 'clamp(1rem, 2vw, 1.25rem)',
                        lineHeight: 1.7,
                        color: 'rgba(255, 255, 255, 0.7)',
                        fontFamily: 'Inter, sans-serif',
                        fontWeight: 300,
                        maxWidth: '600px',
                        marginBottom: '2rem'
                    }}
                >
                    We partner with fashion brands to solve complex sourcing, operational, and execution challenges across global supply chains.
                </motion.p>

                {/* CTA Buttons */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.7, delay: 0.4, ease: [0.25, 0.1, 0.25, 1] }}
                    style={{ display: 'flex', gap: '1.5rem', flexWrap: 'wrap', justifyContent: 'center' }}
                >
                    <a href="#services" className="btn btn-primary" style={{
                        borderRadius: '2rem',
                        padding: '1.1rem 2.8rem',
                        background: 'transparent',
                        color: '#FEFFFF',
                        border: '1px solid rgba(255, 255, 255, 0.3)',
                        fontWeight: 500,
                        fontSize: '0.95rem',
                        textDecoration: 'none'
                    }}>
                        Understand Our Services
                    </a>
                    <a href="/contact" className="btn" style={{
                        borderRadius: '2rem',
                        padding: '1.1rem 2.8rem',
                        background: 'transparent',
                        color: '#FEFFFF',
                        border: '1px solid rgba(255, 255, 255, 0.3)',
                        fontWeight: 500,
                        fontSize: '0.95rem',
                        textDecoration: 'none'
                    }}>
                        Let's Talk
                    </a>
                </motion.div>
            </motion.div>
        </section>
    );
};

export default Hero;
