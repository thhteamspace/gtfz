import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

const About = () => {
    const containerRef = useRef(null);
    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start end", "end start"]
    });

    const y = useTransform(scrollYProgress, [0, 1], [100, -100]);
    const scale = useTransform(scrollYProgress, [0, 1], [1.1, 1]);

    const paragraph = "We are a boutique strategic consultancy firm dedicated to solving the most critical challenges for the world's leading organizations. Founded on the belief that clarity drives results, we strip away the noise to find the signal.";

    const words = paragraph.split(" ");

    return (
        <section id="about" className="section" ref={containerRef} style={{ background: 'transparent' }}>
            <div className="container">
                <div style={{
                    display: 'grid',
                    gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
                    gap: 'var(--space-xl)',
                    alignItems: 'center'
                }}>
                    {/* Scroll Reveal Text */}
                    <div>
                        <span style={{
                            display: 'block',
                            color: 'var(--color-heritage-bronze)',
                            textTransform: 'uppercase',
                            letterSpacing: '0.2em',
                            fontWeight: 700,
                            fontSize: '0.875rem',
                            marginBottom: 'var(--space-md)'
                        }}>
                            About GTFZ
                        </span>

                        <h2 style={{
                            fontSize: 'clamp(2rem, 3vw, 3.5rem)',
                            lineHeight: 1.2,
                            display: 'flex',
                            flexWrap: 'wrap',
                            gap: '0.3em'
                        }}>
                            {words.map((word, i) => {
                                const start = i / words.length;
                                const end = start + (1 / words.length);
                                const wordOpacity = useTransform(scrollYProgress, [start * 0.5, end * 0.5 + 0.2], [0.1, 1]);

                                return (
                                    <motion.span key={i} style={{ opacity: wordOpacity, transition: 'opacity 0.2s' }}>
                                        {word}
                                    </motion.span>
                                );
                            })}
                        </h2>
                    </div>

                    {/* Parallax Image Block */}
                    <div style={{ position: 'relative', overflow: 'hidden', borderRadius: '8px', height: '600px' }}>
                        <motion.img
                            src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=2670&auto=format&fit=crop"
                            alt="Modern Architecture"
                            style={{
                                y,
                                scale,
                                height: '120%', /* taller for parallax */
                                width: '100%',
                                objectFit: 'cover',
                                filter: 'grayscale(100%) brightness(0.8) contrast(1.2)'
                            }}
                        />

                        {/* Gradient Overlay */}
                        <div style={{
                            position: 'absolute',
                            inset: 0,
                            background: 'linear-gradient(180deg, rgba(76, 95, 215, 0.1), transparent)',
                            pointerEvents: 'none'
                        }} />
                    </div>
                </div>
            </div>
        </section>
    );
};

export default About;
