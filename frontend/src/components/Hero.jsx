import React from 'react';
import { motion } from 'framer-motion';
import RevealText from './motion/RevealText';
import Parallax from './motion/Parallax';

const Hero = () => {
    // Animation Variants
    const container = {
        hidden: { opacity: 0 },
        show: {
            opacity: 1,
            transition: { staggerChildren: 0.1, delayChildren: 0.3 }
        }
    };

    const item = {
        hidden: { y: 100, opacity: 0 },
        show: { y: 0, opacity: 1, transition: { ease: [0.25, 1, 0.5, 1], duration: 1.2 } }
    };

    return (
        <section id="home" className="section" style={{
            minHeight: '100vh',
            display: 'flex',
            alignItems: 'center',
            position: 'relative',
            overflow: 'hidden',
            paddingTop: 'var(--header-height)'
        }}>
            {/* SVG Distortion Filter Definition */}
            <svg style={{ position: 'absolute', width: 0, height: 0 }}>
                <filter id="displacementFilter">
                    <feTurbulence type="turbulence" baseFrequency="0.01 0.02" numOctaves="3" result="noise" />
                    <feDisplacementMap in="SourceGraphic" in2="noise" scale="30" />
                </filter>
            </svg>

            {/* HERO BACKGROUND SYSTEM */}
            <div className="hero-background-container">
                <div className="hero-bg-image" style={{ backgroundImage: `url('/assets/images/hero-bg.png')` }} />
                <div className="hero-bg-overlay" />
                <div className="hero-bg-distortion">
                    <motion.div
                        animate={{ scale: [1, 1.1, 1], opacity: [0.1, 0.3, 0.1] }}
                        transition={{ duration: 15, repeat: Infinity, ease: "easeInOut" }}
                        style={{
                            width: '120%',
                            height: '120%',
                            background: `radial-gradient(circle at 50% 50%, rgba(166, 124, 82, 0.1) 0%, transparent 70%)`,
                            filter: 'url(#displacementFilter)'
                        }}
                    />
                </div>
            </div>

            <div className="container" style={{ position: 'relative', zIndex: 1, width: '100%' }}>
                <div style={{ maxWidth: '1100px' }}>

                    {/* Main Title - Massive & Tight using RevealText */}
                    <div style={{ marginBottom: '1rem' }}>
                        <h1 style={{
                            fontSize: 'clamp(4rem, 9vw, 9rem)',
                            lineHeight: 0.9,
                            fontWeight: 800,
                            letterSpacing: '-0.04em',
                            color: 'white',
                            marginBottom: 0
                        }}>
                            <RevealText>Strategic</RevealText>
                            <RevealText delay={0.4}>
                                <span style={{ color: 'var(--color-heritage-bronze)', opacity: 0.9 }}>Precision.</span>
                            </RevealText>
                        </h1>
                    </div>

                    <div style={{ display: 'grid', gridTemplateColumns: '1fr', gap: '2rem', marginTop: 'var(--space-md)' }}>
                        <motion.div
                            variants={item}
                            initial="hidden"
                            whileInView="show"
                            viewport={{ once: false }}
                        >
                            <p style={{ fontSize: 'clamp(1rem, 1.5vw, 1.25rem)', lineHeight: 1.4, color: 'var(--color-text-secondary)', maxWidth: '500px' }}>
                                We navigate complexity to unlock value. A boutique consultancy defining the standard of excellence for global leaders.
                            </p>
                        </motion.div>

                        <motion.div
                            variants={item}
                            initial="hidden"
                            whileInView="show"
                            viewport={{ once: false }}
                            style={{ display: 'flex', gap: '1rem', alignItems: 'flex-start' }}
                        >
                            <a href="#services" className="btn btn-primary" style={{ borderRadius: '50px', padding: '1rem 2.5rem' }}>
                                Explore Work
                            </a>
                        </motion.div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Hero;
