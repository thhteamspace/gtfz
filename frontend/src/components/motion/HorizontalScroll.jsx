import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

const HorizontalScroll = () => {
    const targetRef = useRef(null);
    const { scrollYProgress } = useScroll({
        target: targetRef,
    });

    const x = useTransform(scrollYProgress, [0, 1], ["0%", "-225vw"]);

    const cards = [
        { title: "Fashion Consultant", id: "01", img: "https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?auto=format&fit=crop&q=80&w=800" },
        { title: "Material Sourcing", id: "02", img: "https://images.unsplash.com/photo-1490481651871-ab68de25d43d?auto=format&fit=crop&q=80&w=800" },
        { title: "Quality Assurance", id: "03", img: "https://images.unsplash.com/photo-1509631179647-0177331693ae?auto=format&fit=crop&q=80&w=800" },
        { title: "Supply Chain", id: "04", img: "https://images.unsplash.com/photo-1556821840-3a63f95609a7?auto=format&fit=crop&q=80&w=800" },
        { title: "Compliance", id: "05", img: "https://images.unsplash.com/photo-1467043237213-65f2da53396f?auto=format&fit=crop&q=80&w=800" },
        { title: "Global Network", id: "06", img: "https://images.unsplash.com/photo-1541701494587-cb58502866ab?auto=format&fit=crop&q=80&w=800" },
    ];

    return (
        <section ref={targetRef} style={{ height: "300vh", position: "relative" }}>
            <div style={{
                position: "sticky",
                top: 0,
                height: "100vh",
                background: "var(--color-obsidian-slate)",
                overflow: "hidden",
                display: "flex",
                alignItems: "flex-end",
                paddingBottom: "10vh"
            }}>
                {/* STICKY HEADLINE with viewport reveal animation */}
                <div style={{
                    position: 'absolute',
                    top: '20%',
                    left: '50%',
                    transform: 'translate(-50%, -50%)',
                    zIndex: 10,
                    width: '100%',
                    textAlign: 'center',
                    pointerEvents: 'none'
                }}>
                    {/* Headline with down-to-up reveal */}
                    <motion.h2
                        initial={{ opacity: 0, y: 50, scale: 0.97 }}
                        whileInView={{ opacity: 1, y: 0, scale: 1 }}
                        viewport={{ once: true, margin: "-10% 0px" }}
                        transition={{ duration: 0.8, ease: [0.25, 0.1, 0.25, 1] }}
                        style={{
                            fontSize: "clamp(3rem, 6vw, 6rem)",
                            lineHeight: 1,
                            fontWeight: 800,
                            color: 'white',
                            margin: 0
                        }}
                    >
                        Global <span style={{ color: 'var(--color-heritage-bronze)' }}>Capabilities.</span>
                    </motion.h2>

                    {/* Subtext with staggered down-to-up reveal */}
                    <motion.p
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, margin: "-10% 0px" }}
                        transition={{ duration: 0.7, delay: 0.15, ease: [0.25, 0.1, 0.25, 1] }}
                        style={{
                            marginTop: '2rem',
                            fontSize: '1.2rem',
                            color: 'var(--color-text-secondary)',
                            maxWidth: '600px',
                            margin: '2rem auto 0 auto'
                        }}
                    >
                        Delivering impact across borders and industries.
                    </motion.p>
                </div>

                {/* MOVING TRACK */}
                <motion.div style={{
                    x,
                    display: "flex",
                    gap: "2rem",
                    paddingLeft: "100vw",
                    height: "50vh",
                    alignItems: "center"
                }}>
                    {cards.map((card, index) => (
                        <motion.div
                            key={card.id}
                            initial={{
                                opacity: 0,
                                y: index % 2 === 0 ? 60 : -60, // Alternating Y direction
                                x: index % 2 === 0 ? -30 : 30, // Alternating X direction
                                scale: 0.92,
                                rotate: index % 2 === 0 ? 1.5 : -1.5
                            }}
                            whileInView={{
                                opacity: 1,
                                y: 0,
                                x: 0,
                                scale: 1,
                                rotate: 0
                            }}
                            viewport={{ once: true, margin: "-5% 0px" }}
                            transition={{
                                duration: 0.8,
                                delay: index * 0.08,
                                ease: [0.25, 0.1, 0.25, 1]
                            }}
                            style={{
                                minWidth: "35vw",
                                height: "100%",
                                position: 'relative',
                                overflow: 'hidden',
                                borderRadius: '12px',
                                border: '1px solid rgba(255,255,255,0.1)',
                                background: '#111'
                            }}
                        >
                            <motion.img
                                whileHover={{ scale: 1.1 }}
                                transition={{ duration: 0.6 }}
                                src={card.img}
                                alt={card.title}
                                style={{ width: '100%', height: '100%', objectFit: 'cover', filter: 'brightness(0.85) saturate(1.1)' }}
                            />
                            <div style={{ position: 'absolute', bottom: '2rem', left: '2rem', pointerEvents: 'none' }}>
                                <h3 style={{ fontSize: '2.5rem', color: 'white', marginBottom: '0.5rem' }}>{card.title}</h3>
                                <div style={{ height: '2px', width: '50px', background: 'var(--color-heritage-bronze)' }} />
                            </div>
                            <span style={{
                                fontSize: '8rem',
                                position: 'absolute',
                                top: '-2rem',
                                right: '-1rem',
                                opacity: 0.05,
                                fontWeight: 900,
                                color: 'white',
                                pointerEvents: 'none'
                            }}>
                                {card.id}
                            </span>
                        </motion.div>
                    ))}
                </motion.div>
            </div>
        </section>
    );
};

export default HorizontalScroll;
