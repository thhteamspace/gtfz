import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

const HorizontalScroll = () => {
    const targetRef = useRef(null);
    const { scrollYProgress } = useScroll({
        target: targetRef,
    });

    // Scroll Logic:
    // We have a 400vh scroll container.
    // The cards track needs to move left.
    // Initial Position: Starts offset to the right (so first card is visible correctly).
    // Final Position: Moves left enough to show the VERY LAST card at the right edge, then stops.
    // Text Animation: Moves from center-left (top 50%, left 5vw) to top-center (top 15%, left 50%, x -50%)
    // Adjusted translation to -225vw as per user request to perfect the end alignment.
    const x = useTransform(scrollYProgress, [0, 1], ["0%", "-225vw"]);

    const cards = [
        { title: "Strategy", id: "01", img: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&q=80&w=800" }, // Building
        { title: "Innovation", id: "02", img: "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?auto=format&fit=crop&q=80&w=800" }, // Tech
        { title: "Growth", id: "03", img: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=800" }, // Data
        { title: "Analytics", id: "04", img: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=800" }, // Charts
        { title: "Future", id: "05", img: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&q=80&w=800" }, // Globe
        { title: "Global", id: "06", img: "https://images.unsplash.com/photo-1541701494587-cb58502866ab?auto=format&fit=crop&q=80&w=800" }, // Abstract
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
                {/* 1. STICKY HEADLINE (Static Top Center) */}
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
                    <h2 style={{
                        fontSize: "clamp(3rem, 6vw, 6rem)",
                        lineHeight: 1,
                        fontWeight: 800,
                        color: 'white',
                        margin: 0
                    }}>
                        Global <span style={{ color: 'var(--color-heritage-bronze)' }}>Capabilities.</span>
                    </h2>
                    <p
                        style={{
                            marginTop: '2rem',
                            fontSize: '1.2rem',
                            color: 'var(--color-text-secondary)',
                            maxWidth: '600px',
                            margin: '2rem auto 0 auto'
                        }}
                    >
                        Delivering impact across borders and industries.
                    </p>
                </div>

                {/* 2. MOVING TRACK (Right Side) */}
                <motion.div style={{
                    x,
                    display: "flex",
                    gap: "2rem",
                    paddingLeft: "100vw", // Start way off screen to let title animate first
                    height: "50vh",
                    alignItems: "center"
                }}>
                    {cards.map((card) => (
                        <div key={card.id} style={{
                            minWidth: "35vw",
                            height: "100%",
                            position: 'relative',
                            overflow: 'hidden',
                            borderRadius: '12px',
                            border: '1px solid rgba(255,255,255,0.1)',
                            background: '#111'
                        }}>
                            <motion.img
                                whileHover={{ scale: 1.1 }}
                                transition={{ duration: 0.6 }}
                                src={card.img}
                                alt={card.title}
                                style={{ width: '100%', height: '100%', objectFit: 'cover', filter: 'grayscale(100%) brightness(0.8)' }}
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
                        </div>
                    ))}
                </motion.div>
            </div>
        </section>
    );
};

export default HorizontalScroll;
