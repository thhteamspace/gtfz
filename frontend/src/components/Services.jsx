import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

const ServiceItem = ({ title, subtitle, img, index, total, scrollYProgress }) => {
    // We split the scroll progress into slots for each card
    const step = 0.9 / total; // Use 90% of scroll for cards
    const start = index * step;
    const end = start + step;

    // Internal Stagger Logic within this card's [start, end] window
    // 1. Card Entrace (Slide Up): 0% - 20% of range
    // 2. Image Reveal (Center): 20% - 40%
    // 3. Subtitle Reveal (Right): 40% - 70%
    // 4. Left Title Reveal (Left): 70% - 100%

    // Mapping 0-1 range within the card's slot
    const cardEntranceEnd = start + (step * 0.2);
    const imageRevealEnd = start + (step * 0.4);
    const subtitleRevealEnd = start + (step * 0.7);
    const titleRevealEnd = end;

    // 1. Card Slide Up (Entrance)
    const y = useTransform(
        scrollYProgress,
        [start, cardEntranceEnd],
        index === 0 ? ["0%", "0%"] : ["100%", "0%"]
    );

    // 2. Center Image: Scale Up & Fade In
    const imageScale = useTransform(scrollYProgress, [cardEntranceEnd, imageRevealEnd], [0.5, 1.1]);
    const imageOpacity = useTransform(scrollYProgress, [cardEntranceEnd, imageRevealEnd], [0, 1]);

    // 3. Left Title: Slide Up & Fade In
    // Start from 100vh (way below) to create a distinct "travelling up" effect.
    const titleY = useTransform(scrollYProgress, [imageRevealEnd, subtitleRevealEnd], ["100vh", "0px"]);

    // Sync opacity with movement: Fade in over first 50% of the movement range.
    const titleFadeEnd = imageRevealEnd + (subtitleRevealEnd - imageRevealEnd) * 0.5;
    const titleOpacity = useTransform(scrollYProgress, [imageRevealEnd, titleFadeEnd], [0, 1]);


    // 4. Right Subtitle: Slide Up & Fade In
    const subY = useTransform(scrollYProgress, [subtitleRevealEnd, titleRevealEnd], ["100vh", "0px"]);
    // Fade in over first 50% of slide
    const subFadeEnd = subtitleRevealEnd + (titleRevealEnd - subtitleRevealEnd) * 0.5;
    const subOpacity = useTransform(scrollYProgress, [subtitleRevealEnd, subFadeEnd], [0, 1]);



    // Scale Down for Stacking effect as next cards come
    // Happens when NEXT card starts entering
    const nextCardStart = end;
    const scale = useTransform(
        scrollYProgress,
        [nextCardStart, 1],
        [1, 1 - (total - index) * 0.05]
    );

    // Opacity for Card 0 (fade in initially)
    const cardOpacity = index === 0
        ? useTransform(scrollYProgress, [0, 0.05], [0, 1])
        : 1;

    // Text Exit Logic: Fade out text as the next card arrives so only images stack
    // We want text to be visible during its own slot [start, end], then fade out.
    // Actually, let's fade it out as the next one starts sliding up.
    const textExitOpacity = useTransform(scrollYProgress, [end, end + 0.05], [1, 0]);

    // Stack Lift Logic:
    // As the card moves into the "stack" (past 'end'), we want it to move UP slightly
    // to create a visible "bundle" offset behind the new card.
    // Calculate how "deep" in the stack we are.
    const stackLift = useTransform(
        scrollYProgress,
        [end, 1],
        ["0vh", "-10vh"] // Move up by 10vh as it goes deeper into stack
    );

    // Combine Y for entrance with stack lift
    // For Card 0, valid from 0. For others, valid from start.
    // We can just add the stackLift to the base Y for the image container?
    // Actually, let's apply the lift to the main motion.div y or a separate transform.

    // Simplification:
    // Main Y handles [100% -> 0%].
    // We need a secondary Y for the "Stack" phase.
    // Let's composite them? Or just use a separate motion div for the content?
    // Easier: Apply stackLift to the inner container or image container.

    return (
        <motion.div
            style={{
                position: 'absolute',
                top: 0,
                left: 0,
                width: '100%',
                height: '100%',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                y: index === 0 ? 0 : y,
                scale,
                opacity: cardOpacity,
                zIndex: index
            }}
        >
            <motion.div style={{
                // backgroundColor: 'var(--color-obsidian-slate)', // REMOVED for transparent stacking
                width: '100vw',
                height: '100%',
                display: 'flex',
                alignItems: 'flex-end',
                padding: window.innerWidth < 768 ? '0 2rem 5vh 2rem' : '0 4rem 15vh 4rem',
                flexDirection: window.innerWidth < 768 ? 'column' : 'row',
                justifyContent: 'center',
                alignItems: window.innerWidth < 768 ? 'center' : 'flex-end',
                position: 'relative',
                overflow: 'hidden',
                y: stackLift // Apply lift here for the stack effect
            }}>
                {/* 1. Left: Title (Sequence: 3) */}
                <motion.div style={{
                    flex: window.innerWidth < 768 ? 'none' : 1,
                    textAlign: window.innerWidth < 768 ? 'center' : 'left',
                    zIndex: 2,
                    y: titleY,
                    opacity: titleOpacity,
                    marginBottom: window.innerWidth < 768 ? '2rem' : '20vh',
                    willChange: 'transform, opacity'
                }}>
                    {/* Note: Combining opacities. titleOpacity handles Entrance. textExitOpacity handles Exit. */}
                    <motion.div style={{ opacity: textExitOpacity }}>
                        <h3 style={{
                            fontSize: 'clamp(1.5rem, 5vw, 4rem)',
                            fontWeight: 700,
                            lineHeight: 1.1,
                            color: 'white'
                        }}>
                            {title}
                        </h3>
                    </motion.div>
                </motion.div>

                {/* 2. Center: Circular Image (Sequence: 2) */}
                <motion.div style={{
                    flex: window.innerWidth < 768 ? 'none' : '0 0 400px',
                    width: window.innerWidth < 768 ? '260px' : '400px',
                    height: window.innerWidth < 768 ? '260px' : '400px',
                    margin: window.innerWidth < 768 ? '1rem 0' : '0 2rem',
                    position: 'relative',
                    scale: imageScale,
                    opacity: imageOpacity
                }}>
                    <div style={{
                        width: '100%',
                        height: '100%',
                        borderRadius: '50%',
                        overflow: 'hidden',
                        border: '1px solid rgba(255,255,255,0.05)',
                        position: 'relative',
                        boxShadow: '0 0 30px rgba(0,0,0,0.5)',
                        backgroundColor: '#111'
                    }}>
                        <img
                            src={img}
                            alt={title}
                            style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                        />
                    </div>
                </motion.div>

                {/* 3. Right: Subtitle (Sequence: 4) */}
                <motion.div style={{
                    flex: 1,
                    textAlign: 'right',
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'flex-end',
                    zIndex: 2,
                    y: subY,
                    opacity: subOpacity,
                    marginBottom: '20vh',
                    willChange: 'transform, opacity'
                }}>
                    <motion.div style={{ opacity: textExitOpacity, display: 'flex', flexDirection: 'column', alignItems: 'flex-end' }}>
                        <p style={{
                            fontSize: '1.25rem',
                            color: 'var(--color-text-secondary)',
                            maxWidth: '300px',
                            lineHeight: 1.6,
                            fontFamily: 'var(--font-body)',
                            fontStyle: 'italic'
                        }}>
                            {subtitle}
                        </p>
                        <span style={{
                            marginTop: '2rem',
                            fontSize: '0.9rem',
                            color: 'var(--color-heritage-bronze)',
                            textTransform: 'uppercase',
                            letterSpacing: '0.2em',
                            borderBottom: '1px solid var(--color-heritage-bronze)',
                            paddingBottom: '0.5rem'
                        }}>
                            Explore
                        </span>
                    </motion.div>
                </motion.div>
            </motion.div>
        </motion.div>
    );
};

const Services = () => {
    const containerRef = useRef(null);
    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ['start start', 'end end']
    });

    const services = [
        { title: "Corporate Strategy", subtitle: "Defining long-term vision and actionable roadmaps for sustainable growth.", img: "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?auto=format&fit=crop&q=80&w=800" },
        { title: "Operational Efficiency", subtitle: "Optimizing processes and resource allocation to maximize performance.", img: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=800" },
        { title: "Digital Transformation", subtitle: "Leveraging technology to modernize systems and elevate customer experiences.", img: "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?auto=format&fit=crop&q=80&w=800" },
        { title: "Mergers & Acquisitions", subtitle: "Rigorous due diligence and seamless integration planning for complex deals.", img: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&q=80&w=800" }
    ];

    // Final Collapse: Entire stack moves up at 95% scroll
    const finalCollapse = useTransform(scrollYProgress, [0.95, 1], ["0%", "-100%"]);
    const finalOpacity = useTransform(scrollYProgress, [0.95, 1], [1, 0]);

    return (
        <section ref={containerRef} style={{ height: '800vh', position: 'relative' }}>
            <div style={{
                position: 'sticky',
                top: 0,
                height: '100vh',
                overflow: 'hidden',
                background: 'var(--color-obsidian-slate)'
            }}>

                {/* 1. FIXED TITLE */}
                <div style={{
                    position: 'absolute',
                    top: window.innerWidth < 768 ? '10%' : '20%',
                    left: '50%',
                    transform: 'translate(-50%, -50%)',
                    zIndex: 10,
                    textAlign: 'center',
                    width: '100%',
                    pointerEvents: 'none'
                }}>
                    <h2 style={{
                        fontSize: window.innerWidth < 768 ? '2.5rem' : "clamp(3rem, 6vw, 6rem)",
                        lineHeight: 1,
                        fontWeight: 800,
                        color: 'white',
                        margin: 0
                    }}>
                        Our <span style={{ color: 'var(--color-heritage-bronze)' }}>Capabilities.</span>
                    </h2>
                    <p style={{
                        marginTop: window.innerWidth < 768 ? '1rem' : '2rem',
                        fontSize: window.innerWidth < 768 ? '0.9rem' : '1.2rem',
                        color: 'var(--color-text-secondary)',
                        maxWidth: '600px',
                        margin: window.innerWidth < 768 ? '1rem auto 0 auto' : '2rem auto 0 auto'
                    }}>
                        Stacked for success.
                    </p>
                </div>

                {/* 2. STACKING CARDS CONTAINER */}
                {/* 
                    We place this container slightly lower so cards don't overlap the title too much 
                    initially, or we let them cover the title? 
                    User said "bundle bana... header me jaye". 
                    Let's utilize the full height, cards will slide ON TOP of everything.
                */}
                <div style={{
                    position: 'absolute',
                    top: '0',
                    left: 0,
                    width: '100%',
                    height: '100%',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    marginTop: window.innerWidth < 768 ? '15vh' : '5vh' // Push cards down more on mobile
                }}>
                    {services.map((service, i) => (
                        <ServiceItem
                            key={i}
                            index={i}
                            total={services.length}
                            {...service}
                            scrollYProgress={scrollYProgress}
                        />
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Services;
