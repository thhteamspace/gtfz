import React, { useState } from 'react';
import { motion } from 'framer-motion';

const StrategicSplit = () => {
    const [hoveredLeft, setHoveredLeft] = useState(false);
    const [hoveredRight, setHoveredRight] = useState(false);

    return (
        <section className="section strategic-split-container" style={{ padding: 0, minHeight: '80vh', display: 'flex', overflow: 'hidden' }}>
            {/* Left Panel: Pain Points */}
            <motion.div
                onHoverStart={() => setHoveredLeft(true)}
                onHoverEnd={() => setHoveredLeft(false)}
                animate={{
                    flex: window.innerWidth < 768 ? 'none' : (hoveredLeft ? 2 : 1),
                    height: window.innerWidth < 768 ? (hoveredLeft ? '60vh' : '40vh') : 'auto'
                }}
                transition={{ duration: 0.5, ease: "easeInOut" }}
                style={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    padding: 'var(--space-md)',
                    borderRight: window.innerWidth < 768 ? 'none' : '1px solid rgba(255,255,255,0.1)',
                    borderBottom: window.innerWidth < 768 ? '1px solid rgba(255,255,255,0.1)' : 'none',
                    position: 'relative',
                    cursor: 'crosshair',
                    overflow: 'hidden',
                    width: window.innerWidth < 768 ? '100%' : 'auto'
                }}
            >
                {/* Background Image with Overlay */}
                <motion.div
                    animate={{ scale: hoveredLeft ? 1.05 : 1 }}
                    transition={{ duration: 0.8 }}
                    style={{
                        position: 'absolute',
                        inset: 0,
                        backgroundImage: 'url(/assets/images/challenge-split.png)',
                        backgroundSize: 'cover',
                        backgroundPosition: 'center',
                        filter: 'grayscale(100%) contrast(1.2) brightness(0.3)',
                        zIndex: 0
                    }}
                />

                {/* Dark Overlay */}
                <div style={{
                    position: 'absolute',
                    inset: 0,
                    background: 'linear-gradient(135deg, rgba(12, 14, 17, 0.8), rgba(12, 14, 17, 0.4))',
                    zIndex: 1
                }} />
                <div style={{ maxWidth: '400px', zIndex: 1, textAlign: window.innerWidth < 768 ? 'center' : 'left' }}>
                    <h3 style={{ color: 'var(--color-text-secondary)', marginBottom: '1rem', textTransform: 'uppercase', letterSpacing: '0.1em', fontSize: '0.8rem' }}>The Challenge</h3>
                    <h2 style={{ fontSize: 'clamp(1.5rem, 3vw, 3rem)', lineHeight: 1.1, marginBottom: '2rem' }}>
                        Navigating uncertainty in a fragmented world.
                    </h2>
                    {(hoveredLeft || window.innerWidth < 768) && (
                        <motion.ul initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} style={{ listStyle: 'none', padding: 0, display: 'inline-block', textAlign: 'left' }}>
                            <li style={{ marginBottom: '0.5rem', color: 'var(--color-text-secondary)', display: 'flex', alignItems: 'center', gap: '10px' }}>
                                <span style={{ width: '6px', height: '6px', background: 'var(--color-text-secondary)', borderRadius: '50%' }} /> Supply Chain Volatility
                            </li>
                            <li style={{ marginBottom: '0.5rem', color: 'var(--color-text-secondary)', display: 'flex', alignItems: 'center', gap: '10px' }}>
                                <span style={{ width: '6px', height: '6px', background: 'var(--color-text-secondary)', borderRadius: '50%' }} /> Talent Shortages
                            </li>
                            <li style={{ marginBottom: '0.5rem', color: 'var(--color-text-secondary)', display: 'flex', alignItems: 'center', gap: '10px' }}>
                                <span style={{ width: '6px', height: '6px', background: 'var(--color-text-secondary)', borderRadius: '50%' }} /> Digital Disruption
                            </li>
                        </motion.ul>
                    )}
                </div>
            </motion.div>

            {/* Right Panel: Solution */}
            <motion.div
                onHoverStart={() => setHoveredRight(true)}
                onHoverEnd={() => setHoveredRight(false)}
                animate={{
                    flex: window.innerWidth < 768 ? 'none' : (hoveredRight ? 2 : 1),
                    height: window.innerWidth < 768 ? (hoveredRight ? '60vh' : '40vh') : 'auto'
                }}
                transition={{ duration: 0.5, ease: "easeInOut" }}
                style={{
                    position: 'relative',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    padding: 'var(--space-md)',
                    cursor: 'default',
                    overflow: 'hidden',
                    width: window.innerWidth < 768 ? '100%' : 'auto'
                }}
            >
                {/* Background Image with Overlay */}
                <motion.div
                    animate={{ scale: hoveredRight ? 1.05 : 1 }}
                    transition={{ duration: 0.8 }}
                    style={{
                        position: 'absolute',
                        inset: 0,
                        backgroundImage: 'url(/assets/images/solution-split.png)',
                        backgroundSize: 'cover',
                        backgroundPosition: 'center',
                        filter: 'grayscale(60%) brightness(0.4)',
                        zIndex: 0
                    }}
                />

                {/* Gold Gradient Overlay */}
                <div style={{
                    position: 'absolute',
                    inset: 0,
                    background: 'linear-gradient(45deg, rgba(166, 124, 82, 0.3), rgba(15, 18, 22, 0.7))',
                    zIndex: 1,
                    mixBlendMode: 'overlay'
                }} />

                <div style={{ maxWidth: '400px', zIndex: 2, textAlign: window.innerWidth < 768 ? 'center' : 'left' }}>
                    <h3 style={{ color: 'var(--color-cashmere-gold)', marginBottom: '1rem', textTransform: 'uppercase', letterSpacing: '0.1em', fontSize: '0.8rem' }}>The Solution</h3>
                    <h2 style={{ fontSize: 'clamp(1.5rem, 3vw, 3rem)', lineHeight: 1.1, marginBottom: '2rem' }}>
                        Clarity, precision, and actionable strategy.
                    </h2>
                    {(hoveredRight || window.innerWidth < 768) && (
                        <motion.ul initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} style={{ listStyle: 'none', padding: 0, display: 'inline-block', textAlign: 'left' }}>
                            <li style={{ marginBottom: '0.5rem', display: 'flex', alignItems: 'center', gap: '10px' }}>
                                <span style={{ width: '6px', height: '6px', background: 'var(--color-cashmere-gold)', borderRadius: '50%' }} /> Data-Driven Insights
                            </li>
                            <li style={{ marginBottom: '0.5rem', display: 'flex', alignItems: 'center', gap: '10px' }}>
                                <span style={{ width: '6px', height: '6px', background: 'var(--color-cashmere-gold)', borderRadius: '50%' }} /> Resilient Frameworks
                            </li>
                            <li style={{ marginBottom: '0.5rem', display: 'flex', alignItems: 'center', gap: '10px' }}>
                                <span style={{ width: '6px', height: '6px', background: 'var(--color-cashmere-gold)', borderRadius: '50%' }} /> Future-Proof Growth
                            </li>
                        </motion.ul>
                    )}
                </div>
            </motion.div>
        </section>
    );
};

export default StrategicSplit;
