import React, { useRef } from 'react';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import useMediaQuery from '../hooks/useMediaQuery';

import imgSourcing from '../assets/images/latest-sourcing.jpg';
import imgQuality from '../assets/images/latest-quality.jpg';
import imgSustainability from '../assets/images/latest-sustainability.jpg';

const InsightHighlights = () => {
    const scrollContainerRef = useRef(null);
    const isMobile = useMediaQuery('(max-width: 768px)');
    const navigate = useNavigate();

    const insights = [
        {
            category: "Material Sourcing",
            date: "Oct 12, 2025 • 5 min read",
            title: "Reducing Lead Times by 40% Through Strategic Factory Partnerships",
            image: imgSourcing,
            link: "/impact/supply-chain-diversification",
            description: "How direct relationships with raw material suppliers can cut weeks off your production schedule."
        },
        {
            category: "Quality Control",
            date: "Sep 28, 2025 • 7 min read",
            title: "Zero-Defect Production: Implementing Advanced QA Protocols",
            image: imgQuality,
            link: "/impact/quality-control",
            description: "A deep dive into the multi-stage inspection processes that guarantee premium output."
        },
        {
            category: "Sustainability",
            date: "Sep 15, 2025 • 4 min read",
            title: "Building Ethical Supply Chains in Southeast Asia",
            image: imgSustainability,
            link: "/impact/compliance-issues",
            description: "Navigating the complexities of compliance and labor standards in emerging markets."
        },
        // Duplicate for scroll demonstration
        {
            category: "Logistics",
            date: "Aug 30, 2025 • 6 min read",
            title: "Optimizing Last-Mile Delivery for Global Fashion Brands",
            image: "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&q=80&w=800",
            link: "/impact",
            description: "Strategies to ensure your products reach distribution centers faster and cheaper."
        }
    ];

    const [canScrollLeft, setCanScrollLeft] = React.useState(false);
    const [canScrollRight, setCanScrollRight] = React.useState(true);

    const checkScroll = () => {
        if (scrollContainerRef.current) {
            const { scrollLeft, scrollWidth, clientWidth } = scrollContainerRef.current;
            setCanScrollLeft(scrollLeft > 0);
            setCanScrollRight(scrollLeft < scrollWidth - clientWidth - 5);
        }
    };

    React.useEffect(() => {
        const container = scrollContainerRef.current;
        if (container) {
            container.addEventListener('scroll', checkScroll);
            checkScroll();
            window.addEventListener('resize', checkScroll);
        }
        return () => {
            if (container) container.removeEventListener('scroll', checkScroll);
            window.removeEventListener('resize', checkScroll);
        };
    }, []);

    const handleScroll = (direction) => {
        if (scrollContainerRef.current) {
            const scrollAmount = 400;
            scrollContainerRef.current.scrollBy({
                left: direction === 'left' ? -scrollAmount : scrollAmount,
                behavior: 'smooth'
            });
        }
    };

    return (
        <section style={{
            minHeight: isMobile ? 'auto' : '100vh',
            background: '#0a0a0a', // Dark Theme from reference
            padding: isMobile ? '6rem 2rem' : '6rem 0',
            position: 'relative',
            color: '#ffffff',
            overflow: 'hidden'
        }}>
            <div className="container">
                {/* Header Section */}
                <div style={{
                    display: 'flex',
                    justifyContent: 'space-between',
                    alignItems: isMobile ? 'center' : 'flex-end',
                    marginBottom: isMobile ? '2.5rem' : '4rem',
                    flexWrap: 'wrap',
                    gap: isMobile ? '1.5rem' : '2rem'
                }}>
                    <div style={{ maxWidth: '600px' }}>
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            style={{
                                display: 'inline-flex',
                                alignItems: 'center',
                                padding: '0.5rem 1rem',
                                border: '1px solid rgba(255,255,255,0.1)',
                                borderRadius: '100px',
                                marginBottom: '1.5rem',
                                background: 'rgba(255,255,255,0.03)'
                            }}
                        >
                            <span style={{
                                fontSize: '0.75rem',
                                color: '#C5A059',
                                fontFamily: 'Inter, sans-serif',
                                textTransform: 'uppercase',
                                letterSpacing: '0.05em'
                            }}>
                                Latest Insights
                            </span>
                        </motion.div>

                        <motion.h2
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.1 }}
                            viewport={{ once: true }}
                            style={{
                                fontSize: isMobile ? '2.5rem' : 'clamp(2.5rem, 5vw, 4rem)',
                                fontWeight: 500,
                                fontFamily: 'Outfit, sans-serif',
                                lineHeight: 1.1,
                                margin: 0,
                                color: '#FEFFFF',
                                textAlign: isMobile ? 'center' : 'left'
                            }}
                        >
                            Supply Chain<br />Intelligence
                        </motion.h2>
                    </div>

                    <motion.button
                        whileHover={{ scale: 1.05, backgroundColor: 'rgba(255,255,255,0.1)' }}
                        whileTap={{ scale: 0.95 }}
                        onClick={() => navigate('/impact')}
                        style={{
                            padding: '0.8rem 1.5rem',
                            borderRadius: '100px',
                            border: '1px solid rgba(255,255,255,0.2)',
                            background: 'transparent',
                            color: '#FEFFFF',
                            fontSize: '0.9rem',
                            cursor: 'pointer',
                            display: 'flex',
                            alignItems: 'center',
                            gap: '0.5rem',
                            fontFamily: 'Inter, sans-serif',
                            margin: isMobile ? '0 auto' : '0'
                        }}
                    >
                        View All
                        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                            <line x1="7" y1="17" x2="17" y2="7"></line>
                            <polyline points="7 7 17 7 17 17"></polyline>
                        </svg>
                    </motion.button>
                </div>

                {/* Horizontal Scroll Carousel */}
                <div
                    ref={scrollContainerRef}
                    style={{
                        display: 'flex',
                        gap: isMobile ? '1.5rem' : '2rem',
                        overflowX: 'auto',
                        paddingBottom: isMobile ? '1rem' : '2rem',
                        scrollBehavior: 'smooth',
                        scrollbarWidth: 'none',
                        msOverflowStyle: 'none'
                    }}
                    className="hide-scrollbar"
                >
                    <style>{`
                        .hide-scrollbar::-webkit-scrollbar {
                            display: none;
                        }
                    `}</style>

                    {insights.map((item, i) => (
                        <div key={i} style={{ flexShrink: 0, width: 'min(100%, 400px)' }}>
                            <BlogCard {...item} />
                        </div>
                    ))}
                </div>

                {/* Navigation Controls */}
                <div style={{
                    display: 'flex',
                    justifyContent: 'flex-end',
                    gap: '1rem',
                    marginTop: '1rem'
                }}>
                    {canScrollLeft && <NavButton direction="left" onClick={() => handleScroll('left')} />}
                    {canScrollRight && <NavButton direction="right" onClick={() => handleScroll('right')} />}
                </div>
            </div>
        </section>
    );
};

const BlogCard = ({ category, date, title, image, link, description }) => {
    const navigate = useNavigate();

    return (
        <motion.div
            onClick={() => navigate(link)}
            whileHover={{ y: -10 }}
            style={{
                cursor: 'pointer',
                group: 'card'
            }}
        >
            {/* Image Container */}
            <div style={{
                borderRadius: '32px', // Highly rounded per reference
                overflow: 'hidden',
                marginBottom: '1.5rem',
                aspectRatio: '1 / 1', // Square per reference
                background: '#1a1a1a', // Placeholder bg
                position: 'relative'
            }}>
                <motion.img
                    src={image}
                    alt={title}
                    whileHover={{ scale: 1.05 }}
                    transition={{ duration: 0.6, ease: [0.25, 1, 0.5, 1] }}
                    style={{
                        width: '100%',
                        height: '100%',
                        objectFit: 'cover',
                        opacity: 0.9
                    }}
                />
            </div>

            {/* Metadata Row */}
            <div style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
                marginBottom: '1rem',
                fontSize: '0.85rem'
            }}>
                <span style={{
                    padding: '0.4rem 1rem',
                    borderRadius: '100px',
                    border: '1px solid rgba(255,255,255,0.15)',
                    color: '#C5A059',
                    fontFamily: 'Inter, sans-serif',
                    fontWeight: 500
                }}>
                    {category}
                </span>
                <span style={{ color: 'rgba(255,255,255,0.4)', fontFamily: 'Inter, sans-serif' }}>
                    {date}
                </span>
            </div>

            {/* Content */}
            <h3 style={{
                fontSize: '1.5rem',
                color: '#FEFFFF',
                fontFamily: 'Outfit, sans-serif',
                fontWeight: 500,
                lineHeight: 1.3,
                marginBottom: '0.75rem'
            }}>
                {title}
            </h3>

            <p style={{
                fontSize: '1rem',
                color: 'rgba(255,255,255,0.5)',
                lineHeight: 1.6,
                fontFamily: 'Inter, sans-serif',
                display: '-webkit-box',
                WebkitLineClamp: 2,
                WebkitBoxOrient: 'vertical',
                overflow: 'hidden'
            }}>
                {description}
            </p>

            <div style={{
                display: 'flex',
                alignItems: 'center',
                gap: '0.5rem',
                marginTop: '1.25rem',
                color: '#C5A059',
                fontSize: '0.9rem',
                fontFamily: 'Inter, sans-serif',
                fontWeight: 500
            }}>
                Read Article
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <line x1="5" y1="12" x2="19" y2="12"></line>
                    <polyline points="12 5 19 12 12 19"></polyline>
                </svg>
            </div>
        </motion.div>
    );
};

const NavButton = ({ direction, onClick }) => (
    <motion.button
        onClick={onClick}
        whileHover={{ scale: 1.1, backgroundColor: 'rgba(255,255,255,0.1)' }}
        whileTap={{ scale: 0.9 }}
        style={{
            width: '50px',
            height: '50px',
            borderRadius: '50%',
            border: '1px solid rgba(255,255,255,0.1)',
            background: 'transparent',
            color: '#FEFFFF',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            cursor: 'pointer',
            outline: 'none'
        }}
    >
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            {direction === 'left' ? (
                <polyline points="15 18 9 12 15 6"></polyline>
            ) : (
                <polyline points="9 18 15 12 9 6"></polyline>
            )}
        </svg>
    </motion.button>
);

export default InsightHighlights;
