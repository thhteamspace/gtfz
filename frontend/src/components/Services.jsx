import React, { useRef, useState } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

const ServiceCard = ({ title, description, image, hoverImage, index, totalCards }) => {
    const videoRef = useRef(null);
    const cardRef = useRef(null);
    const [isHovering, setIsHovering] = useState(false);

    const { scrollYProgress } = useScroll({
        target: cardRef,
        offset: ["start end", "end start"]
    });

    // Alternating direction: even indices from left, odd from right
    const xDirection = index % 2 === 0 ? -80 : 80;
    const staggerDelay = index * 0.12; // Staggered entrance delay

    // Enhanced scroll-linked transforms with directional movement + scale
    const opacity = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0, 1, 1, 0.85]);
    const y = useTransform(scrollYProgress, [0, 0.2], [60, 0]);
    const x = useTransform(scrollYProgress, [0, 0.2], [xDirection, 0]);
    const scale = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0.92, 1, 1, 0.97]);
    const rotate = useTransform(scrollYProgress, [0, 0.2], [index % 2 === 0 ? 1.5 : -1.5, 0]); // Alternate rotation

    return (
        <motion.div
            ref={cardRef}
            style={{
                opacity,
                y,
                x,
                scale,
                rotate
            }}
        >
            <motion.div
                whileHover={{ y: -10 }}
                transition={{ duration: 0.4, ease: [0.4, 0, 0.2, 1] }}
                onMouseEnter={() => setIsHovering(true)}
                onMouseLeave={() => setIsHovering(false)}
                style={{
                    background: index % 2 === 0 ? '#FEFFFF' : '#111111',
                    border: `1px solid ${index % 2 === 0 ? 'rgba(17,17,17,0.1)' : 'rgba(254,255,255,0.1)'}`,
                    borderRadius: '0',
                    overflow: 'hidden',
                    cursor: 'pointer',
                    position: 'relative'
                }}
            >
                {/* Fashion Video with Image Fallback */}
                <div style={{
                    height: '300px',
                    overflow: 'hidden',
                    position: 'relative'
                }}>
                    {/* Static Image - Shows when not hovering */}
                    <motion.img
                        src={image}
                        alt={title}
                        animate={{
                            opacity: isHovering ? 0 : 1,
                            scale: isHovering ? 1.05 : 1
                        }}
                        transition={{ duration: 0.5, ease: [0.4, 0, 0.2, 1] }}
                        style={{
                            position: 'absolute',
                            inset: 0,
                            width: '100%',
                            height: '100%',
                            objectFit: 'cover',
                            filter: 'brightness(0.9) saturate(1.1)',
                            zIndex: 1
                        }}
                    />

                    {/* Video - Plays on hover */}
                    <motion.video
                        src={hoverImage}
                        muted
                        loop
                        playsInline
                        onMouseEnter={(e) => e.target.play()}
                        onMouseLeave={(e) => { e.target.pause(); e.target.currentTime = 0; }}
                        animate={{
                            opacity: isHovering ? 1 : 0,
                            scale: isHovering ? 1.05 : 1
                        }}
                        transition={{ duration: 0.5, ease: [0.4, 0, 0.2, 1] }}
                        style={{
                            position: 'absolute',
                            inset: 0,
                            width: '100%',
                            height: '100%',
                            objectFit: 'cover',
                            filter: 'brightness(0.9) saturate(1.1)',
                            zIndex: 2
                        }}
                    />

                    {/* Grain overlay on hover */}
                    <motion.div
                        animate={{ opacity: isHovering ? 0.06 : 0 }}
                        transition={{ duration: 0.4 }}
                        style={{
                            position: 'absolute',
                            inset: 0,
                            backgroundImage: 'url("https://grainy-gradients.vercel.app/noise.svg")',
                            pointerEvents: 'none',
                            zIndex: 3,
                            mixBlendMode: 'overlay'
                        }}
                    />
                </div>

                {/* Content */}
                <div style={{
                    padding: '2.5rem',
                    display: 'flex',
                    flexDirection: 'column',
                    gap: '1.5rem'
                }}>
                    <h3 style={{
                        fontSize: 'clamp(1.8rem, 3vw, 2.5rem)',
                        fontWeight: 500,
                        lineHeight: 1.2,
                        color: index % 2 === 0 ? '#111111' : '#FEFFFF',
                        fontFamily: 'Outfit, sans-serif',
                        marginBottom: '0.5rem'
                    }}>
                        {title}
                    </h3>

                    <p style={{
                        fontSize: '1rem',
                        lineHeight: 1.7,
                        color: index % 2 === 0 ? 'rgba(17,17,17,0.6)' : 'rgba(254,255,255,0.7)',
                        fontFamily: 'Inter, sans-serif',
                        fontWeight: 400
                    }}>
                        {description}
                    </p>

                    {/* Bronze Accent Line */}
                    <motion.div
                        initial={{ width: '40px' }}
                        whileHover={{ width: '80px' }}
                        transition={{ duration: 0.4 }}
                        style={{
                            height: '1px',
                            background: '#C5A059',
                            marginTop: '1rem'
                        }}
                    />
                </div>
            </motion.div>
        </motion.div >
    );
};

const Services = () => {
    const containerRef = useRef(null);
    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ['start start', 'end end']
    });

    const services = [
        {
            title: "Sourcing Strategy",
            description: "Factory identification, negotiation, and partnership development across Asia's manufacturing landscape.",
            image: "https://images.unsplash.com/photo-1490481651871-ab68de25d43d?auto=format&fit=crop&q=80&w=1200",
            hoverImage: "https://assets.mixkit.co/videos/preview/mixkit-woman-walking-on-a-catwalk-during-a-fashion-show-42823-large.mp4"
        },
        {
            title: "Quality Assurance",
            description: "On-site inspections, technical specifications validation, and production oversight.",
            image: "https://images.unsplash.com/photo-1537832816519-689ad163238b?auto=format&fit=crop&q=80&w=1200", // Fashion Hands/Material Check (Stable)
            hoverImage: "https://assets.mixkit.co/videos/preview/mixkit-sewing-machine-working-on-fabric-42829-large.mp4"
        },
        {
            title: "Supply Chain Optimization",
            description: "Lead time reduction, logistics coordination, and inventory management systems.",
            image: "https://images.unsplash.com/photo-1556821840-3a63f95609a7?auto=format&fit=crop&q=80&w=1200",
            hoverImage: "https://assets.mixkit.co/videos/preview/mixkit-fashion-designer-working-with-fabric-42827-large.mp4"
        },
        {
            title: "Compliance & Ethics",
            description: "Factory audits, labor standards verification, and sustainability compliance documentation.",
            image: "https://images.unsplash.com/photo-1467043237213-65f2da53396f?auto=format&fit=crop&q=80&w=1200",
            hoverImage: "https://assets.mixkit.co/videos/preview/mixkit-model-posing-for-a-fashion-photoshoot-42824-large.mp4"
        }
    ];

    return (
        <section id="services" ref={containerRef} style={{
            minHeight: '100vh',
            background: '#111111',
            padding: 'var(--space-xl) 0',
            position: 'relative'
        }}>
            <div className="container">
                {/* Editorial Section Header with enhanced reveal */}
                <div style={{
                    marginBottom: 'var(--space-lg)',
                    maxWidth: '800px'
                }}>
                    <motion.div
                        initial={{ opacity: 0, y: 50, scale: 0.96 }}
                        whileInView={{ opacity: 1, y: 0, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.9, ease: [0.25, 0.1, 0.25, 1] }}
                    >
                        <div style={{
                            display: 'inline-flex',
                            padding: '0.5rem 1.5rem',
                            background: 'rgba(254, 255, 255, 0.05)',
                            border: '1px solid rgba(254, 255, 255, 0.1)',
                            borderRadius: '2rem',
                            marginBottom: '2rem'
                        }}>
                            <span style={{
                                fontSize: '0.75rem',
                                color: '#C5A059',
                                fontFamily: 'monospace',
                                letterSpacing: '0.15em',
                                textTransform: 'uppercase'
                            }}>HOW WE WORK</span>
                        </div>

                        <motion.h2
                            initial={{ opacity: 0, x: -30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.8, delay: 0.15, ease: [0.25, 0.1, 0.25, 1] }}
                            style={{
                                fontSize: 'clamp(3rem, 8vw, 6rem)',
                                fontWeight: 500,
                                lineHeight: 1,
                                color: '#FEFFFF',
                                marginBottom: '2rem',
                                fontFamily: 'Outfit, sans-serif',
                                letterSpacing: '-0.03em'
                            }}
                        >
                            Execution<br />Over Theory.
                        </motion.h2>

                        <motion.p
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.7, delay: 0.3, ease: [0.25, 0.1, 0.25, 1] }}
                            style={{
                                fontSize: '1.2rem',
                                lineHeight: 1.7,
                                color: 'rgba(254, 255, 255, 0.6)',
                                fontFamily: 'Inter, sans-serif',
                                maxWidth: '600px'
                            }}
                        >
                            On-the-ground expertise transforming supply chain challenges into seamless execution.
                        </motion.p>
                    </motion.div>
                </div>

                {/* Asymmetric Grid - Editorial Layout with staggered reveals */}
                <div style={{
                    display: 'grid',
                    gridTemplateColumns: typeof window !== 'undefined' && window.innerWidth < 768 ? '1fr' : 'repeat(12, 1fr)',
                    gap: '2rem',
                    marginTop: 'var(--space-xl)'
                }}>
                    {/* Card 1: Spans 7 columns */}
                    <div style={{ gridColumn: typeof window !== 'undefined' && window.innerWidth < 768 ? 'span 1' : 'span 7' }}>
                        <ServiceCard {...services[0]} index={0} totalCards={services.length} />
                    </div>

                    {/* Card 2: Spans 5 columns */}
                    <div style={{ gridColumn: typeof window !== 'undefined' && window.innerWidth < 768 ? 'span 1' : 'span 5' }}>
                        <ServiceCard {...services[1]} index={1} totalCards={services.length} />
                    </div>

                    {/* Card 3: Spans 5 columns */}
                    <div style={{ gridColumn: typeof window !== 'undefined' && window.innerWidth < 768 ? 'span 1' : 'span 5' }}>
                        <ServiceCard {...services[2]} index={2} totalCards={services.length} />
                    </div>

                    {/* Card 4: Spans 7 columns */}
                    <div style={{ gridColumn: typeof window !== 'undefined' && window.innerWidth < 768 ? 'span 1' : 'span 7' }}>
                        <ServiceCard {...services[3]} index={3} totalCards={services.length} />
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Services;
