import React from 'react';
import { motion } from 'framer-motion';
import useMediaQuery from '../hooks/useMediaQuery';
import Hero from '../components/Hero';
import Services from '../components/Services';
import TrustIndicator from '../components/TrustIndicator';
import HorizontalScroll from '../components/motion/HorizontalScroll';
import StrategicSplit from '../components/StrategicSplit';
import InsightHighlights from '../components/InsightHighlights';
import EditorialImage from '../components/motion/EditorialImage';
import SupplyChainPreview from '../components/SupplyChainPreview';

const Home = () => {
    const isMobile = useMediaQuery('(max-width: 768px)');
    return (
        <>
            <Hero />
            <TrustIndicator />

            {/* Our Philosophy Section - Full Layout */}
            <section style={{
                background: '#111111',
                padding: isMobile ? '6rem 2rem' : '6rem 0',
                position: 'relative'
            }}>
                <div className="container" style={{
                    display: 'grid',
                    gridTemplateColumns: isMobile ? '1fr' : 'repeat(auto-fit, minmax(400px, 1fr))',
                    gap: isMobile ? '2.5rem' : '4rem',
                    alignItems: 'center'
                }}>
                    {/* Text Content */}
                    <div style={{ padding: isMobile ? '0' : '2rem 0', textAlign: isMobile ? 'center' : 'left' }}>
                        <motion.div
                            initial={{ opacity: 0, y: isMobile ? 15 : 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: false, amount: 0.3 }}
                            transition={{ duration: 0.6, ease: [0.25, 0.1, 0.25, 1] }}
                            style={{
                                fontSize: '0.75rem',
                                color: '#C5A059',
                                fontFamily: 'monospace',
                                letterSpacing: '0.2em',
                                textTransform: 'uppercase',
                                marginBottom: '1.5rem'
                            }}
                        >Our Philosophy</motion.div>

                        <motion.h2
                            initial={{ opacity: 0, y: isMobile ? 20 : 40 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: false, amount: 0.3 }}
                            transition={{ duration: 0.7, delay: 0.1, ease: [0.25, 0.1, 0.25, 1] }}
                            style={{
                                fontSize: 'clamp(2.5rem, 5vw, 4rem)',
                                fontWeight: 500,
                                color: '#FEFFFF',
                                lineHeight: 1.1,
                                marginBottom: '2rem',
                                fontFamily: 'Outfit, sans-serif'
                            }}
                        >The GTFZ Standard</motion.h2>

                        <motion.p
                            initial={{ opacity: 0, y: isMobile ? 15 : 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: false, amount: 0.3 }}
                            transition={{ duration: 0.7, delay: 0.2, ease: [0.25, 0.1, 0.25, 1] }}
                            style={{
                                fontSize: isMobile ? '1rem' : '1.1rem',
                                lineHeight: 1.8,
                                color: 'rgba(255,255,255,0.7)',
                                marginBottom: '2.5rem',
                                fontFamily: 'Inter, sans-serif'
                            }}
                        >
                            We act as the operational backbone for global fashion brands, merging strategic vision with a focus on final consumer happiness. Our approach blends high-level strategy with deep focus on final consumer satisfaction - ensuring ideas don't just look good on paper but resonate effectively with the end consumer.
                        </motion.p>

                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: false, amount: 0.3 }}
                            transition={{ duration: 0.6, delay: 0.3, ease: [0.25, 0.1, 0.25, 1] }}
                            style={{
                                display: 'flex',
                                gap: isMobile ? '2rem' : '3rem',
                                marginTop: '2rem',
                                flexWrap: 'wrap',
                                justifyContent: isMobile ? 'center' : 'flex-start'
                            }}
                        >
                            <div style={{ textAlign: isMobile ? 'center' : 'left' }}>
                                <div style={{ fontSize: isMobile ? '1.75rem' : '2rem', fontWeight: 600, color: '#C5A059', fontFamily: 'Outfit, sans-serif' }}>25+</div>
                                <div style={{ fontSize: '0.8rem', color: 'rgba(255,255,255,0.5)', marginTop: '0.25rem' }}>Years</div>
                            </div>
                            <div style={{ textAlign: isMobile ? 'center' : 'left' }}>
                                <div style={{ fontSize: isMobile ? '1.75rem' : '2rem', fontWeight: 600, color: '#C5A059', fontFamily: 'Outfit, sans-serif' }}>50+</div>
                                <div style={{ fontSize: '0.8rem', color: 'rgba(255,255,255,0.5)', marginTop: '0.25rem' }}>Brands</div>
                            </div>
                            <div style={{ textAlign: isMobile ? 'center' : 'left' }}>
                                <div style={{ fontSize: isMobile ? '1.75rem' : '2rem', fontWeight: 600, color: '#C5A059', fontFamily: 'Outfit, sans-serif' }}>Global</div>
                                <div style={{ fontSize: '0.8rem', color: 'rgba(255,255,255,0.5)', marginTop: '0.25rem' }}>Reach</div>
                            </div>
                        </motion.div>
                    </div>

                    {/* Image with animation */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.95, y: isMobile ? 20 : 40 }}
                        whileInView={{ opacity: 1, scale: 1, y: 0 }}
                        viewport={{ once: false, amount: 0.3 }}
                        transition={{ duration: 0.8, delay: 0.2, ease: [0.25, 0.1, 0.25, 1] }}
                        style={{
                            position: 'relative',
                            height: isMobile ? 'auto' : 'auto',
                            borderRadius: isMobile ? '12px' : '8px',
                            overflow: 'hidden',
                            // Full bleed on mobile to maximize size
                            margin: isMobile ? '0 -2rem' : '0',
                            width: isMobile ? 'calc(100% + 4rem)' : '100%',
                            maxWidth: isMobile ? '100vw' : 'unset'
                        }}
                    >
                        <motion.img
                            whileHover={isMobile ? {} : { scale: 1.05 }}
                            transition={{ duration: 0.5 }}
                            src="https://images.unsplash.com/photo-1483985988355-763728e1935b?auto=format&fit=crop&q=80&w=1200"
                            alt="Fashion consumers shopping experience"
                            style={{
                                width: '100%',
                                height: 'auto',
                                display: 'block',
                                objectFit: 'cover',
                                objectPosition: 'center center',
                                filter: 'brightness(0.9) saturate(1.1)',
                                cursor: 'pointer'
                            }}
                        />
                        {/* Subtle overlay only for desktop */}
                        {!isMobile && <div style={{
                            position: 'absolute',
                            inset: 0,
                            background: 'linear-gradient(to top, rgba(17,17,17,0.4) 0%, transparent 50%)',
                            pointerEvents: 'none'
                        }} />}
                    </motion.div>
                </div>
            </section>

            <StrategicSplit />
            <SupplyChainPreview />
            <Services />



            <HorizontalScroll />
            <InsightHighlights />
        </>
    );
};

export default Home;
