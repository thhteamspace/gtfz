import React, { useRef } from 'react';
import { motion } from 'framer-motion';
import useMediaQuery from '../hooks/useMediaQuery';

const Services = () => {
    const isMobile = useMediaQuery('(max-width: 768px)');
    const containerRef = useRef(null);

    const services = [
        {
            title: "Sourcing Strategy",
            description: "We don't just find factories; we architect supply ecosystems. Identifing specialized manufacturers in niche markets.",
            stat: "Global",
            statLabel: "Strategic Partners",
            image: "https://images.unsplash.com/photo-1490481651871-ab68de25d43d?auto=format&fit=crop&q=80&w=1200",
            variant: "compact-text" // Renamed for clarity: Short Card
        },
        {
            title: "Quality Assurance",
            description: "Quality is not an accident. Our on-ground teams conduct rigorous multi-stage inspections, ensuring every stitch meets your technical specifications and brand standards.",
            stat: "100%",
            statLabel: "Quality Checked",
            image: "https://images.unsplash.com/photo-1537832816519-689ad163238b?auto=format&fit=crop&q=80&w=1200",
            variant: "tall-image" // Tall Card
        },
        {
            title: "Supply Chain",
            description: "Speed to market is the new currency. We streamline your logistics by reducing lead times and optimizing inventory turnover.",
            stat: "40%",
            statLabel: "Faster Delivery",
            image: "https://images.unsplash.com/photo-1556821840-3a63f95609a7?auto=format&fit=crop&q=80&w=1200",
            variant: "tall-image" // Tall Card
        },
        {
            title: "Compliance",
            description: "Sustainability is no longer optional. We protect your brand reputation by enforcing strict labor standards.",
            stat: "Ethical",
            statLabel: "Standards Met",
            image: "https://images.unsplash.com/photo-1467043237213-65f2da53396f?auto=format&fit=crop&q=80&w=1200",
            variant: "compact-image" // Short Card
        }
    ];

    return (
        <section id="services" ref={containerRef} style={{
            minHeight: 'auto',
            background: '#FEFFFF',
            padding: isMobile ? '6rem 2rem' : '4rem 0',
            position: 'relative'
        }}>
            <div className="container">
                {/* Header Section */}
                <div style={{
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    marginBottom: '3rem',
                    textAlign: 'center'
                }}>
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        style={{
                            display: 'flex',
                            alignItems: 'center',
                            gap: '0.75rem',
                            marginBottom: '1rem'
                        }}
                    >
                        <div style={{ width: '8px', height: '8px', borderRadius: '50%', background: '#C5A059' }} />
                        <span style={{
                            fontSize: '0.75rem',
                            color: '#111111',
                            fontFamily: 'monospace',
                            letterSpacing: '0.2em',
                            textTransform: 'uppercase',
                            fontWeight: 600
                        }}>
                            HOW WE WORK
                        </span>
                    </motion.div>

                    <motion.h2
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.1 }}
                        viewport={{ once: true }}
                        style={{
                            fontSize: 'clamp(2.5rem, 4vw, 3.5rem)',
                            fontWeight: 500,
                            color: '#111111',
                            fontFamily: 'Outfit, sans-serif',
                            lineHeight: 1.1,
                            maxWidth: '700px',
                            marginBottom: '1rem'
                        }}
                    >
                        Execution<br />Over Theory
                    </motion.h2>

                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.2 }}
                        viewport={{ once: true }}
                        style={{
                            color: 'rgba(17,17,17,0.6)',
                            maxWidth: '500px',
                            lineHeight: 1.6,
                            fontSize: '0.95rem',
                            fontFamily: 'Inter, sans-serif'
                        }}
                    >
                        On-the-ground expertise transforming supply chain challenges into seamless execution.
                    </motion.p>
                </div>

                {/* Explicit 3-Column Bento Grid */}
                {/* Explicit Responsive Bento Grid */}
                <div style={{
                    display: 'grid',
                    gridTemplateColumns: isMobile ? 'repeat(2, 1fr)' : 'repeat(3, 1fr)',
                    gridTemplateRows: isMobile ? 'repeat(3, 240px)' : '300px 300px',
                    gap: isMobile ? '1rem' : '1.5rem',
                    width: '100%',
                    maxWidth: '1200px',
                    margin: '0 auto'
                }}>
                    {/* Item 1: Top Left */}
                    <div style={{
                        gridColumn: '1 / 2',
                        gridRow: '1 / 2'
                    }}>
                        <ServiceCard {...services[0]} height="100%" isMobile={isMobile} />
                    </div>

                    {/* Item 2: Center Tall (Desktop) / Right Tall (Mobile) */}
                    <div style={{
                        gridColumn: '2 / 3',
                        gridRow: '1 / 3'
                    }}>
                        <ServiceCard {...services[1]} height="100%" isMobile={isMobile} />
                    </div>

                    {/* Item 3: Right Tall (Desktop) / Left Tall (Mobile) */}
                    <div style={{
                        gridColumn: isMobile ? '1 / 2' : '3 / 4',
                        gridRow: isMobile ? '2 / 4' : '1 / 3'
                    }}>
                        <ServiceCard {...services[2]} height="100%" isMobile={isMobile} />
                    </div>

                    {/* Item 4: Bottom Left (Desktop) / Bottom Right (Mobile) */}
                    <div style={{
                        gridColumn: isMobile ? '2 / 3' : '1 / 2',
                        gridRow: isMobile ? '3 / 4' : '2 / 3'
                    }}>
                        <ServiceCard {...services[3]} height="100%" isMobile={isMobile} />
                    </div>
                </div>
            </div>
        </section>
    );
};

// Specialized Card Component derived from ReferenceCard
const ServiceCard = ({ variant, title, description, stat, statLabel, image, height, isMobile }) => {
    const cardRadius = '24px';

    // Compact Text Card (e.g. Sourcing)
    if (variant === 'compact-text') {
        return (
            <motion.div
                whileHover={{ scale: 0.98 }}
                style={{
                    height: height,
                    background: '#F0EFEA',
                    borderRadius: cardRadius,
                    padding: '2rem',
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'space-between',
                    cursor: 'pointer',
                    overflow: 'hidden'
                }}
            >
                <div>
                    <div style={{ fontSize: '2.5rem', fontWeight: 600, color: '#111', fontFamily: 'Outfit, sans-serif', lineHeight: 1 }}>{stat}</div>
                    <div style={{ color: '#666', fontSize: '0.85rem', marginBottom: '1rem', textTransform: 'uppercase', letterSpacing: '0.05em' }}>{statLabel}</div>
                </div>
                <div>
                    <h3 style={{ fontSize: '1.2rem', fontWeight: 500, marginBottom: '0.5rem', color: '#111' }}>{title}</h3>
                    <p style={{ fontSize: '0.9rem', color: '#555', lineHeight: 1.4, margin: 0 }}>
                        {description}
                    </p>
                </div>
            </motion.div>
        );
    }

    // Tall Image Card (e.g. Quality, Supply Chain)
    if (variant === 'tall-image') {
        return (
            <motion.div
                whileHover={{ y: -5 }}
                style={{
                    height: height,
                    borderRadius: cardRadius,
                    overflow: 'hidden',
                    position: 'relative',
                    cursor: 'pointer'
                }}
            >
                <img src={image} alt={title} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                <div style={{
                    position: 'absolute',
                    inset: 0,
                    background: 'linear-gradient(to top, rgba(0,0,0,0.85) 0%, rgba(0,0,0,0.2) 50%, transparent 100%)',
                    padding: isMobile ? '2.5rem 1.5rem' : '2.5rem',
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'flex-end',
                    color: 'white'
                }}>
                    <span style={{ fontSize: isMobile ? '2.6rem' : '3rem', fontWeight: 600, fontFamily: 'Outfit, sans-serif', color: '#FEFFFF', lineHeight: 1 }}>{stat}</span>
                    <span style={{ fontSize: '0.9rem', opacity: 0.9, marginBottom: '1.5rem', letterSpacing: '0.05em' }}>{statLabel}</span>
                    <h3 style={{ fontSize: isMobile ? '1.35rem' : '1.5rem', lineHeight: 1.2, fontFamily: 'Outfit, sans-serif', marginBottom: '0.5rem' }}>{title}</h3>
                    <p style={{ fontSize: '0.95rem', opacity: 0.8, lineHeight: 1.5 }}>{description}</p>
                </div>
            </motion.div>
        );
    }

    // Compact Image Card (e.g. Compliance)
    if (variant === 'compact-image') {
        return (
            <motion.div
                whileHover={{ scale: 0.98 }}
                style={{
                    height: height,
                    borderRadius: cardRadius,
                    overflow: 'hidden',
                    position: 'relative',
                    cursor: 'pointer'
                }}
            >
                <img src={image} alt={title} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                <div style={{
                    position: 'absolute',
                    inset: 0,
                    background: 'rgba(0,0,0,0.3)', // Lighter overlay for small card
                    padding: '2rem',
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'center', // Centered content for variety
                    alignItems: 'center',
                    textAlign: 'center',
                    color: 'white'
                }}>
                    <span style={{ fontSize: '2rem', fontWeight: 600, fontFamily: 'Outfit, sans-serif', color: '#FEFFFF', lineHeight: 1 }}>{stat}</span>
                    <span style={{ fontSize: '0.8rem', opacity: 0.9, letterSpacing: '0.05em', textTransform: 'uppercase', marginBottom: '0.5rem' }}>{statLabel}</span>
                    <h3 style={{ fontSize: '1.2rem', margin: 0 }}>{title}</h3>
                </div>
            </motion.div>
        );
    }

    return null;
};

export default Services;
