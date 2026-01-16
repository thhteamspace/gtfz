import React from 'react';
import { motion } from 'framer-motion';
import RevealText from './motion/RevealText';

const InsightHighlights = () => {
    const insights = [
        {
            category: "Future of Work",
            title: "Redefining Productivity in the Hybrid Era",
            date: "Oct 24, 2025",
            image: "https://images.unsplash.com/photo-1497215728101-856f4ea42174?auto=format&fit=crop&q=80&w=800"
        },
        {
            category: "Sustainability",
            title: "The ESG Advantage: Profit Meets Purpose",
            date: "Nov 02, 2025",
            image: "https://images.unsplash.com/photo-1466611653911-95081537e5b7?auto=format&fit=crop&q=80&w=800"
        },
        {
            category: "Digital Core",
            title: "Architecture for the Quantum Age",
            date: "Nov 15, 2025",
            image: "https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&q=80&w=800"
        }
    ];

    return (
        <section className="section" data-theme-trigger="light">
            <div className="container">
                <div style={{
                    display: 'flex',
                    flexDirection: window.innerWidth < 768 ? 'column' : 'row',
                    justifyContent: 'space-between',
                    alignItems: window.innerWidth < 768 ? 'center' : 'flex-end',
                    marginBottom: 'var(--space-lg)',
                    gap: window.innerWidth < 768 ? '1rem' : '0'
                }}>
                    <h2 className="section-title" style={{ textAlign: window.innerWidth < 768 ? 'center' : 'left' }}>
                        <RevealText>Latest Thinking</RevealText>
                    </h2>
                    <a href="/impact" className="btn btn-outline">View All Insights</a>
                </div>

                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '2rem' }}>
                    {insights.map((item, index) => (
                        <motion.div
                            key={index}
                            whileHover={{ y: -10 }}
                            style={{
                                padding: '0',
                                border: '1px solid rgba(0,0,0,0.08)',
                                background: '#F2EFE9',
                                boxShadow: '0 15px 35px -5px rgba(0,0,0,0.1)',
                                borderRadius: 'var(--brand-radius-md)',
                                display: 'flex',
                                flexDirection: 'column',
                                overflow: 'hidden',
                                height: '100%',
                                cursor: 'none'
                            }}
                        >
                            {/* Image Thumbnail */}
                            <div style={{ height: '200px', overflow: 'hidden', position: 'relative' }}>
                                <motion.img
                                    src={item.image}
                                    alt={item.title}
                                    whileHover={{ scale: 1.1 }}
                                    transition={{ duration: 0.6 }}
                                    style={{
                                        width: '100%',
                                        height: '100%',
                                        objectFit: 'cover',
                                        filter: 'grayscale(100%)'
                                    }}
                                />
                                <div style={{
                                    position: 'absolute',
                                    top: '1rem',
                                    left: '1rem',
                                    background: 'var(--color-obsidian-slate)',
                                    padding: '0.25rem 0.75rem',
                                    borderRadius: '50px',
                                    fontSize: '0.7rem',
                                    fontWeight: 700,
                                    textTransform: 'uppercase',
                                    letterSpacing: '0.05em',
                                    color: 'var(--color-alabaster-silk)',
                                    border: '1px solid rgba(255,255,255,0.2)'
                                }}>
                                    {item.category}
                                </div>
                            </div>

                            <div style={{ padding: '2rem', display: 'flex', flexDirection: 'column', flexGrow: 1, justifyContent: 'space-between' }}>
                                <h3 style={{ fontSize: '1.5rem', lineHeight: 1.3, marginBottom: '1rem', color: '#1a1a1a' }}>
                                    <RevealText delay={0.1 * index}>
                                        {item.title}
                                    </RevealText>
                                </h3>
                                <div style={{
                                    display: 'flex',
                                    justifyContent: 'space-between',
                                    borderTop: '1px solid rgba(0,0,0,0.1)',
                                    paddingTop: '1rem',
                                    color: '#555',
                                    fontSize: '0.85rem'
                                }}>
                                    <span>{item.date}</span>
                                    <span style={{ color: 'var(--color-heritage-bronze)' }}>Read Article →</span>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default InsightHighlights;
