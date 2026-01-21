import React, { useRef } from 'react';
import { motion } from 'framer-motion';
import useMediaQuery from '../../hooks/useMediaQuery';

const HorizontalScroll = () => {
    const isMobile = useMediaQuery('(max-width: 768px)');
    const cards = [
        {
            title: "Strategic Advisory",
            id: "01",
            description: "Market entry strategies, cost engineering, and scalable supply chain architecture.",
            img: "https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?auto=format&fit=crop&q=80&w=800"
        },
        {
            title: "Material Sourcing",
            id: "02",
            description: "Sustainable and high-quality fabric sourcing from global networks.",
            img: "https://images.unsplash.com/photo-1490481651871-ab68de25d43d?auto=format&fit=crop&q=80&w=800"
        },
        {
            title: "Quality Assurance",
            id: "03",
            description: "Rigorous testing and quality control protocols for every product.",
            img: "https://images.unsplash.com/photo-1509631179647-0177331693ae?auto=format&fit=crop&q=80&w=800"
        },
        {
            title: "Supply Chain",
            id: "04",
            description: "Optimized logistics and supply chain management solutions.",
            img: "https://images.unsplash.com/photo-1556821840-3a63f95609a7?auto=format&fit=crop&q=80&w=800"
        },
        {
            title: "Compliance",
            id: "05",
            description: "Ensuring adherence to global ethical and safety standards.",
            img: "https://images.unsplash.com/photo-1467043237213-65f2da53396f?auto=format&fit=crop&q=80&w=800"
        },
        {
            title: "Global Network",
            id: "06",
            description: "Connecting you with partners and manufacturers worldwide.",
            img: "https://images.unsplash.com/photo-1541701494587-cb58502866ab?auto=format&fit=crop&q=80&w=800"
        },
    ];

    const scrollContainerRef = useRef(null);
    const [canScrollLeft, setCanScrollLeft] = React.useState(false);
    const [canScrollRight, setCanScrollRight] = React.useState(true);

    const checkScroll = () => {
        if (scrollContainerRef.current) {
            const { scrollLeft, scrollWidth, clientWidth } = scrollContainerRef.current;
            setCanScrollLeft(scrollLeft > 0);
            // Allow a small buffer (e.g. 2px) for float/zoom discrepancies
            setCanScrollRight(scrollLeft < scrollWidth - clientWidth - 2);
        }
    };

    React.useEffect(() => {
        const container = scrollContainerRef.current;
        if (container) {
            container.addEventListener('scroll', checkScroll);
            // Check initially
            checkScroll();
            // Check on resize
            window.addEventListener('resize', checkScroll);
        }
        return () => {
            if (container) {
                container.removeEventListener('scroll', checkScroll);
            }
            window.removeEventListener('resize', checkScroll);
        };
    }, []);

    const handleScroll = (direction) => {
        if (scrollContainerRef.current) {
            const scrollAmount = direction === 'left' ? -400 : 400;
            scrollContainerRef.current.scrollBy({ left: scrollAmount, behavior: 'smooth' });
        }
    };

    return (
        <section style={{
            background: '#0a0a0a',
            position: 'relative',
            padding: isMobile ? '2rem 0' : '8rem 0',
            overflow: 'hidden'
        }}>
            <div className="container">
                {/* Header Section */}
                <div style={{
                    marginBottom: '3rem',
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: isMobile ? 'center' : 'flex-start',
                    position: 'relative' // Ensure relative here just in case
                }}>
                    <motion.span
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        style={{
                            color: '#C5A059',
                            fontFamily: 'monospace',
                            letterSpacing: '0.2em',
                            textTransform: 'uppercase',
                            fontSize: '0.9rem',
                            marginBottom: '1.5rem',
                            display: 'block'
                        }}
                    >
                        Our Expertise
                    </motion.span>

                    <div style={{
                        display: 'flex',
                        justifyContent: isMobile ? 'center' : 'space-between',
                        alignItems: 'flex-end',
                        width: '100%',
                        flexWrap: 'wrap',
                        gap: '2rem',
                        textAlign: isMobile ? 'center' : 'left'
                    }}>
                        <motion.h2
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6 }}
                            style={{
                                fontSize: 'clamp(3rem, 5vw, 5rem)',
                                lineHeight: 1.1,
                                color: '#FEFFFF',
                                fontFamily: 'Outfit, sans-serif',
                                margin: 0
                            }}
                        >
                            Global <span style={{ color: '#C5A059', fontFamily: 'Playfair Display, serif', fontStyle: 'italic' }}>Capabilities</span>
                        </motion.h2>


                    </div>
                </div>

                {/* Relative Wrapper for Cards + Arrows */}
                <div style={{
                    position: 'relative',
                    width: isMobile ? '100vw' : '100%',
                    marginLeft: isMobile ? 'calc(50% - 50vw)' : '0',
                    marginRight: isMobile ? 'calc(50% - 50vw)' : '0'
                }}>

                    {/* Left Navigation Button */}
                    {canScrollLeft && (
                        <motion.button
                            onClick={() => handleScroll('left')}
                            whileHover={{ scale: 1.1, backgroundColor: '#C5A059', color: '#000' }}
                            whileTap={{ scale: 0.95 }}
                            initial={{ opacity: 0, x: -20 }}
                            animate={{ opacity: 1, x: 0 }}
                            exit={{ opacity: 0, x: -20 }}
                            transition={{ duration: 0.4 }}
                            style={{
                                position: 'absolute',
                                left: isMobile ? '1rem' : '-40px',
                                top: isMobile ? 'auto' : '40%',
                                bottom: isMobile ? '120px' : 'auto', // Position over image area on mobile
                                transform: isMobile ? 'none' : 'translateY(-50%)',
                                width: isMobile ? '44px' : '80px',
                                height: isMobile ? '44px' : '80px',
                                borderRadius: '50%',
                                border: '1px solid rgba(255,255,255,0.2)',
                                background: '#0a0a0a',
                                color: '#FEFFFF',
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'center',
                                cursor: 'pointer',
                                outline: 'none',
                                zIndex: 20,
                                boxShadow: '0 10px 30px rgba(0,0,0,0.5)'
                            }}
                        >
                            <svg width={isMobile ? "20" : "30"} height={isMobile ? "20" : "30"} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                <line x1="19" y1="12" x2="5" y2="12"></line>
                                <polyline points="12 19 5 12 12 5"></polyline>
                            </svg>
                        </motion.button>
                    )}

                    {/* Scrollable Grid Layout - Matches original grid size but scrolls */}
                    <div
                        ref={scrollContainerRef}
                        className="hide-scrollbar"
                        style={{
                            display: 'grid',
                            gridAutoFlow: 'column',
                            gridAutoColumns: isMobile ? '100vw' : 'minmax(370px, 1fr)',
                            gap: isMobile ? '1.5rem' : '2.5rem',
                            overflowX: 'auto',
                            paddingBottom: '2rem', // Space for potential scrollbar (hidden but interactable)
                            scrollBehavior: 'smooth',
                            width: '100%',
                            paddingRight: isMobile ? '0' : '60px',
                            paddingLeft: isMobile ? '0' : '60px',
                            scrollSnapType: isMobile ? 'x mandatory' : 'none'
                        }}
                    >
                        {/* Inline style to hide scrollbar */}
                        <style>{`
                            .hide-scrollbar::-webkit-scrollbar {
                                display: none;
                            }
                            .hide-scrollbar {
                                -ms-overflow-style: none;
                                scrollbar-width: none;
                            }
                        `}</style>

                        {cards.map((card, index) => (
                            <div key={card.id} style={{ scrollSnapAlign: 'center', width: '100%', height: '100%' }}>
                                <Card card={card} index={index} isMobile={isMobile} />
                            </div>
                        ))}
                    </div>

                    {/* Right Navigation Button */}
                    {canScrollRight && (
                        <motion.button
                            onClick={() => handleScroll('right')}
                            whileHover={{ scale: 1.1, backgroundColor: '#C5A059', color: '#000' }}
                            whileTap={{ scale: 0.95 }}
                            initial={{ opacity: 0, x: 20 }}
                            animate={{ opacity: 1, x: 0 }}
                            exit={{ opacity: 0, x: 20 }}
                            transition={{ duration: 0.4 }}
                            style={{
                                position: 'absolute',
                                right: isMobile ? '1rem' : '-40px',
                                top: isMobile ? 'auto' : '40%',
                                bottom: isMobile ? '120px' : 'auto', // Position over image area on mobile
                                transform: isMobile ? 'none' : 'translateY(-50%)',
                                width: isMobile ? '44px' : '80px',
                                height: isMobile ? '44px' : '80px',
                                borderRadius: '50%',
                                border: '1px solid rgba(255,255,255,0.2)',
                                background: '#0a0a0a',
                                color: '#FEFFFF',
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'center',
                                cursor: 'pointer',
                                outline: 'none',
                                zIndex: 20,
                                boxShadow: '0 10px 30px rgba(0,0,0,0.5)'
                            }}
                        >
                            <svg width={isMobile ? "20" : "30"} height={isMobile ? "20" : "30"} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                <line x1="5" y1="12" x2="19" y2="12"></line>
                                <polyline points="12 5 19 12 12 19"></polyline>
                            </svg>
                        </motion.button>
                    )}
                </div>
            </div>
        </section>
    );
};

// Extracted Card Component matching the 'Arched Image' design
const Card = ({ card, index, isMobile }) => {
    return (
        <motion.div
            initial={{ opacity: 0, scale: 0.85, y: 100 }}
            whileInView={{ opacity: 1, scale: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.8, delay: (index % 2) * 0.1, ease: [0.25, 0.1, 0.25, 1] }}
            whileHover="hover"
            style={{
                background: 'linear-gradient(180deg, #161616 0%, #0a0a0a 100%)',
                borderRadius: '32px',
                padding: '0', // Removed global padding for full bleed content
                border: '1px solid rgba(255,255,255,0.05)',
                display: 'flex',
                flexDirection: 'column',
                position: 'relative',
                overflow: 'hidden',
                height: isMobile ? '620px' : '550px',
                cursor: 'pointer'
            }}
        >
            {/* Hover Glow Border */}
            <motion.div
                variants={{
                    hover: { opacity: 1 }
                }}
                initial={{ opacity: 0 }}
                transition={{ duration: 0.4 }}
                style={{
                    position: 'absolute',
                    inset: 0,
                    borderRadius: '32px',
                    border: '1px solid rgba(197, 160, 89, 0.3)',
                    boxShadow: '0 0 30px rgba(197, 160, 89, 0.1)',
                    pointerEvents: 'none',
                    zIndex: 10
                }}
            />

            {/* Card Content Top - Padded Container */}
            <div style={{ zIndex: 2, padding: isMobile ? '2rem 1.5rem 0 1.5rem' : '2.5rem 2.5rem 0 2.5rem', display: 'flex', flexDirection: 'column', height: '100%' }}>
                <div style={{
                    display: 'flex',
                    justifyContent: 'space-between',
                    alignItems: 'flex-start',
                    marginBottom: '1rem'
                }}>
                    <h3 style={{
                        fontSize: isMobile ? '1.75rem' : '2rem',
                        color: '#FEFFFF',
                        fontFamily: 'Outfit, sans-serif',
                        lineHeight: 1.1,
                        margin: 0
                    }}>{card.title}</h3>


                </div>

                <p style={{
                    color: 'rgba(255,255,255,0.6)',
                    lineHeight: 1.6,
                    fontSize: isMobile ? '0.95rem' : '1rem',
                    maxWidth: '90%',
                    fontFamily: 'Inter, sans-serif',
                    marginBottom: '2rem'
                }}>{card.description}</p>

                {/* Card Image Bottom - Full Bleed Arched */}
                <div style={{
                    marginTop: 'auto',
                    flex: 1,
                    // Use negative margin to pull image to edges of the parent container
                    marginLeft: isMobile ? '-1.5rem' : '-2.5rem',
                    marginRight: isMobile ? '-1.5rem' : '-2.5rem',
                    marginBottom: '0',
                    minHeight: '280px',
                    display: 'flex',
                    position: 'relative'
                }}>
                    <motion.img
                        variants={{
                            hover: { scale: 1.05 }
                        }}
                        transition={{ duration: 0.6, ease: [0.25, 0.1, 0.25, 1] }}
                        src={card.img}
                        alt={card.title}
                        style={{
                            width: '100%',
                            height: '100%',
                            objectFit: 'cover',
                            objectPosition: 'center 20%',
                            borderRadius: '40px 40px 0 0', // The Arched Top - Critical for the reference look
                            filter: 'brightness(0.9) contrast(1.1)'
                        }}
                    />

                    {/* Image Overlay Gradient */}
                    <div style={{
                        position: 'absolute',
                        inset: 0,
                        background: 'linear-gradient(to top, rgba(0,0,0,0.5), transparent)',
                        pointerEvents: 'none',
                        borderRadius: '40px 40px 0 0'
                    }} />

                </div>
            </div>
        </motion.div>
    );
};

export default HorizontalScroll;
