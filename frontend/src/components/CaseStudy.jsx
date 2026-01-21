import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

/**
 * Reusable Case Study Component
 * 
 * Props structure:
 * {
 *   title: string,
 *   client: string,
 *   duration: string,
 *   challenge: string,
 *   solution: string,
 *   metrics: [{ value: string, label: string, icon?: string }],
 *   images: { hero: string, before?: string, after?: string, gallery?: string[] },
 *   industry: string
 * }
 */

const CaseStudy = ({
    title,
    client,
    duration,
    challenge,
    solution,
    metrics = [],
    images = {},
    industry,
    index = 0
}) => {
    const containerRef = useRef(null);
    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start end", "end start"]
    });

    const opacity = useTransform(scrollYProgress, [0, 0.3, 0.7, 1], [0, 1, 1, 0.8]);
    const scale = useTransform(scrollYProgress, [0, 0.3], [0.95, 1]);
    const imageY = useTransform(scrollYProgress, [0, 1], ['0%', '15%']);

    return (
        <motion.div
            ref={containerRef}
            style={{
                opacity,
                scale,
                marginBottom: '6rem',
                position: 'relative'
            }}
        >
            <div style={{
                background: index % 2 === 0 ? '#FEFFFF' : '#111111',
                border: `1px solid ${index % 2 === 0 ? 'rgba(17,17,17,0.1)' : 'rgba(254,255,255,0.1)'}`,
                overflow: 'hidden',
                position: 'relative'
            }}>
                {/* Hero Image with Parallax */}
                <div style={{
                    height: '500px',
                    overflow: 'hidden',
                    position: 'relative'
                }}>
                    <motion.div
                        style={{
                            position: 'absolute',
                            inset: 0,
                            backgroundImage: `url(${images.hero || 'https://images.unsplash.com/photo-1558769132-cb1aea56c2e2?auto=format&fit=crop&q=80&w=2070'})`,
                            backgroundSize: 'cover',
                            backgroundPosition: 'center',
                            filter: 'brightness(0.7) saturate(1.15)',
                            y: imageY
                        }}
                    />

                    {/* Gradient Overlay */}
                    <div style={{
                        position: 'absolute',
                        inset: 0,
                        background: 'linear-gradient(to bottom, transparent 0%, rgba(0,0,0,0.6) 100%)'
                    }} />

                    {/* Floating Metrics Overlay */}
                    <div style={{
                        position: 'absolute',
                        bottom: '3rem',
                        left: '3rem',
                        right: '3rem',
                        display: 'flex',
                        gap: '2rem',
                        flexWrap: 'wrap'
                    }}>
                        {metrics.slice(0, 3).map((metric, idx) => (
                            <motion.div
                                key={idx}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: idx * 0.1, duration: 0.6 }}
                                style={{
                                    background: 'rgba(254, 255, 255, 0.1)',
                                    backdropFilter: 'blur(10px)',
                                    border: '1px solid rgba(254, 255, 255, 0.2)',
                                    borderRadius: '1rem',
                                    padding: '1.5rem',
                                    minWidth: '150px'
                                }}
                            >
                                <div style={{
                                    fontSize: '2.5rem',
                                    fontWeight: 700,
                                    color: '#C5A059',
                                    marginBottom: '0.5rem',
                                    fontFamily: 'Outfit, sans-serif'
                                }}>
                                    {metric.value}
                                </div>
                                <div style={{
                                    fontSize: '0.85rem',
                                    color: '#FEFFFF',
                                    textTransform: 'uppercase',
                                    letterSpacing: '0.1em',
                                    fontFamily: 'monospace'
                                }}>
                                    {metric.label}
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>

                {/* Content Section */}
                <div style={{
                    padding: '4rem 3rem',
                    display: 'grid',
                    gridTemplateColumns: window.innerWidth < 768 ? '1fr' : '1fr 1fr',
                    gap: '4rem'
                }}>
                    {/* Left Column - Metadata */}
                    <div>
                        {/* Industry Badge */}
                        <div style={{
                            display: 'inline-flex',
                            padding: '0.5rem 1.5rem',
                            background: index % 2 === 0 ? 'rgba(17,17,17,0.05)' : 'rgba(254,255,255,0.05)',
                            border: `1px solid ${index % 2 === 0 ? 'rgba(17,17,17,0.1)' : 'rgba(254,255,255,0.1)'}`,
                            borderRadius: '2rem',
                            marginBottom: '2rem'
                        }}>
                            <span style={{
                                fontSize: '0.75rem',
                                color: '#C5A059',
                                fontFamily: 'monospace',
                                letterSpacing: '0.15em',
                                textTransform: 'uppercase'
                            }}>
                                {industry || 'CASE STUDY'}
                            </span>
                        </div>

                        {/* Title */}
                        <h3 style={{
                            fontSize: 'clamp(2rem, 4vw, 3.5rem)',
                            fontWeight: 500,
                            color: index % 2 === 0 ? '#111111' : '#FEFFFF',
                            marginBottom: '1.5rem',
                            lineHeight: 1.2,
                            fontFamily: 'Outfit, sans-serif'
                        }}>
                            {title}
                        </h3>

                        {/* Client & Duration */}
                        <div style={{
                            display: 'flex',
                            gap: '2rem',
                            marginBottom: '3rem',
                            paddingBottom: '1.5rem',
                            borderBottom: `1px solid ${index % 2 === 0 ? 'rgba(17,17,17,0.1)' : 'rgba(254,255,255,0.1)'}`
                        }}>
                            <div>
                                <div style={{
                                    fontSize: '0.75rem',
                                    color: index % 2 === 0 ? 'rgba(17,17,17,0.5)' : 'rgba(254,255,255,0.5)',
                                    marginBottom: '0.5rem',
                                    textTransform: 'uppercase',
                                    letterSpacing: '0.1em',
                                    fontFamily: 'monospace'
                                }}>
                                    Client
                                </div>
                                <div style={{
                                    fontSize: '1rem',
                                    color: index % 2 === 0 ? '#111111' : '#FEFFFF',
                                    fontWeight: 500
                                }}>
                                    {client}
                                </div>
                            </div>
                            <div>
                                <div style={{
                                    fontSize: '0.75rem',
                                    color: index % 2 === 0 ? 'rgba(17,17,17,0.5)' : 'rgba(254,255,255,0.5)',
                                    marginBottom: '0.5rem',
                                    textTransform: 'uppercase',
                                    letterSpacing: '0.1em',
                                    fontFamily: 'monospace'
                                }}>
                                    Duration
                                </div>
                                <div style={{
                                    fontSize: '1rem',
                                    color: index % 2 === 0 ? '#111111' : '#FEFFFF',
                                    fontWeight: 500
                                }}>
                                    {duration}
                                </div>
                            </div>
                        </div>

                        {/* Challenge */}
                        <div style={{ marginBottom: '2rem' }}>
                            <h4 style={{
                                fontSize: '1.2rem',
                                fontWeight: 500,
                                color: '#C5A059',
                                marginBottom: '1rem',
                                fontFamily: 'Outfit, sans-serif'
                            }}>
                                The Challenge
                            </h4>
                            <p style={{
                                fontSize: '1rem',
                                lineHeight: 1.8,
                                color: index % 2 === 0 ? 'rgba(17,17,17,0.7)' : 'rgba(254,255,255,0.7)',
                                fontFamily: 'Inter, sans-serif'
                            }}>
                                {challenge}
                            </p>
                        </div>
                    </div>

                    {/* Right Column - Solution */}
                    <div>
                        <h4 style={{
                            fontSize: '1.2rem',
                            fontWeight: 500,
                            color: '#C5A059',
                            marginBottom: '1rem',
                            fontFamily: 'Outfit, sans-serif'
                        }}>
                            Our Solution
                        </h4>
                        <p style={{
                            fontSize: '1rem',
                            lineHeight: 1.8,
                            color: index % 2 === 0 ? 'rgba(17,17,17,0.7)' : 'rgba(254,255,255,0.7)',
                            fontFamily: 'Inter, sans-serif',
                            marginBottom: '2rem'
                        }}>
                            {solution}
                        </p>

                        {/* Additional Metrics */}
                        {metrics.length > 3 && (
                            <div style={{
                                display: 'grid',
                                gridTemplateColumns: '1fr 1fr',
                                gap: '1.5rem',
                                marginTop: '3rem'
                            }}>
                                {metrics.slice(3).map((metric, idx) => (
                                    <div key={idx} style={{
                                        padding: '1.5rem',
                                        background: index % 2 === 0 ? 'rgba(17,17,17,0.03)' : 'rgba(254,255,255,0.03)',
                                        border: `1px solid ${index % 2 === 0 ? 'rgba(17,17,17,0.1)' : 'rgba(254,255,255,0.1)'}`,
                                        borderRadius: '0.5rem'
                                    }}>
                                        <div style={{
                                            fontSize: '2rem',
                                            fontWeight: 700,
                                            color: '#C5A059',
                                            marginBottom: '0.5rem'
                                        }}>
                                            {metric.value}
                                        </div>
                                        <div style={{
                                            fontSize: '0.85rem',
                                            color: index % 2 === 0 ? 'rgba(17,17,17,0.6)' : 'rgba(254,255,255,0.6)',
                                            fontFamily: 'Inter, sans-serif'
                                        }}>
                                            {metric.label}
                                        </div>
                                    </div>
                                ))}
                            </div>
                        )}

                        {/* Bronze Accent Line */}
                        <div style={{
                            width: '60px',
                            height: '2px',
                            background: '#C5A059',
                            marginTop: '3rem'
                        }} />
                    </div>
                </div>
            </div>
        </motion.div>
    );
};

export default CaseStudy;
