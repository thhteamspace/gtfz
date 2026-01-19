import React from 'react';
import { motion } from 'framer-motion';
import Hero from '../components/Hero';
import Services from '../components/Services';
import TrustIndicator from '../components/TrustIndicator';
import HorizontalScroll from '../components/motion/HorizontalScroll';
import StrategicSplit from '../components/StrategicSplit';
import InsightHighlights from '../components/InsightHighlights';
import EditorialImage from '../components/motion/EditorialImage';

const Home = () => {
    return (
        <>
            <Hero />
            <TrustIndicator />

            {/* Our Philosophy Section - Full Layout */}
            <section style={{
                background: '#111111',
                padding: '6rem 0',
                position: 'relative'
            }}>
                <div className="container" style={{
                    display: 'grid',
                    gridTemplateColumns: 'repeat(auto-fit, minmax(400px, 1fr))',
                    gap: '4rem',
                    alignItems: 'center'
                }}>
                    {/* Text Content */}
                    <div style={{ padding: '2rem 0' }}>
                        <motion.div
                            initial={{ opacity: 0, y: 30 }}
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
                            initial={{ opacity: 0, y: 40 }}
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
                        >Crafted with Purpose</motion.h2>

                        <motion.p
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: false, amount: 0.3 }}
                            transition={{ duration: 0.7, delay: 0.2, ease: [0.25, 0.1, 0.25, 1] }}
                            style={{
                                fontSize: '1.1rem',
                                lineHeight: 1.8,
                                color: 'rgba(255,255,255,0.7)',
                                marginBottom: '2rem',
                                fontFamily: 'Inter, sans-serif'
                            }}
                        >
                            We partner with fashion and lifestyle brands to solve complex sourcing, operational, and execution challenges. Our approach blends strategic thinking with hands-on execution—ensuring ideas don't just look good on paper, but work seamlessly on the ground.
                        </motion.p>

                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: false, amount: 0.3 }}
                            transition={{ duration: 0.6, delay: 0.3, ease: [0.25, 0.1, 0.25, 1] }}
                            style={{ display: 'flex', gap: '3rem', marginTop: '2rem' }}
                        >
                            <div>
                                <div style={{ fontSize: '2rem', fontWeight: 600, color: '#C5A059', fontFamily: 'Outfit, sans-serif' }}>15+</div>
                                <div style={{ fontSize: '0.8rem', color: 'rgba(255,255,255,0.5)', marginTop: '0.25rem' }}>Years</div>
                            </div>
                            <div>
                                <div style={{ fontSize: '2rem', fontWeight: 600, color: '#C5A059', fontFamily: 'Outfit, sans-serif' }}>50+</div>
                                <div style={{ fontSize: '0.8rem', color: 'rgba(255,255,255,0.5)', marginTop: '0.25rem' }}>Brands</div>
                            </div>
                            <div>
                                <div style={{ fontSize: '2rem', fontWeight: 600, color: '#C5A059', fontFamily: 'Outfit, sans-serif' }}>Global</div>
                                <div style={{ fontSize: '0.8rem', color: 'rgba(255,255,255,0.5)', marginTop: '0.25rem' }}>Reach</div>
                            </div>
                        </motion.div>
                    </div>

                    {/* Image with animation */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.95, y: 40 }}
                        whileInView={{ opacity: 1, scale: 1, y: 0 }}
                        viewport={{ once: false, amount: 0.3 }}
                        transition={{ duration: 0.8, delay: 0.2, ease: [0.25, 0.1, 0.25, 1] }}
                        style={{
                            position: 'relative',
                            height: '500px',
                            borderRadius: '8px',
                            overflow: 'hidden'
                        }}
                    >
                        <motion.img
                            whileHover={{ scale: 1.08 }}
                            transition={{ duration: 0.5 }}
                            src="https://images.unsplash.com/photo-1441984904996-e0b6ba687e04?auto=format&fit=crop&q=80&w=1200"
                            alt="Fashion atelier"
                            style={{
                                width: '100%',
                                height: '100%',
                                objectFit: 'cover',
                                filter: 'brightness(0.9) saturate(1.1)',
                                cursor: 'pointer'
                            }}
                        />
                        {/* Subtle overlay */}
                        <div style={{
                            position: 'absolute',
                            inset: 0,
                            background: 'linear-gradient(to top, rgba(17,17,17,0.4) 0%, transparent 50%)'
                        }} />
                    </motion.div>
                </div>
            </section>

            <StrategicSplit />
            <Services />

            {/* Editorial Image Break - Runway/Vision */}
            <EditorialImage
                src="https://images.unsplash.com/photo-1529139574466-a303027c1d8b?auto=format&fit=crop&q=80&w=2400"
                alt="Fashion runway"
                caption="From Vision to Reality"
                subcaption="Global Reach"
                height={80}
                parallaxIntensity={35}
                overlay={0.4}
                captionPosition="center"
            />

            <HorizontalScroll />
            <InsightHighlights />
        </>
    );
};

export default Home;
