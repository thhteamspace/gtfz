import React from 'react';
import { motion } from 'framer-motion';

const ThoughtLeadership = () => {
    const articles = [
        {
            category: "Market Analysis",
            title: "Navigating Volatility in Emerging Markets",
            date: "Oct 12, 2025"
        },
        {
            category: "Innovation",
            title: "The AI Paradox: Efficiency vs. Creativity",
            date: "Nov 05, 2025"
        },
        {
            category: "Sustainability",
            title: "Decarbonization as a Competitive Advantage",
            date: "Nov 28, 2025"
        }
    ];

    const container = {
        hidden: { opacity: 0 },
        show: {
            opacity: 1,
            transition: {
                staggerChildren: 0.2
            }
        }
    };

    const item = {
        hidden: { y: 30, opacity: 0 },
        show: { y: 0, opacity: 1, transition: { type: "spring", stiffness: 50 } }
    };

    return (
        <section id="thought-leadership" className="section" style={{ background: 'var(--color-strategic-navy)' }}>
            <div className="container">
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'end', marginBottom: 'var(--space-lg)' }}>
                    <div>
                        <span style={{
                            display: 'block',
                            color: 'var(--color-heritage-bronze)',
                            textTransform: 'uppercase',
                            letterSpacing: '0.1em',
                            fontWeight: 600,
                            marginBottom: 'var(--space-sm)'
                        }}>
                            Perspectives
                        </span>
                        <h2 className="section-title">Thought Leadership</h2>
                    </div>
                    <motion.a
                        href="#all-insights"
                        className="btn btn-outline desktop-only"
                        whileHover={{ scale: 1.05 }}
                    >
                        View All Insights
                    </motion.a>
                </div>

                <motion.div
                    variants={container}
                    initial="hidden"
                    whileInView="show"
                    viewport={{ once: false, margin: "-50px" }}
                    style={{
                        display: 'grid',
                        gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
                        gap: 'var(--space-md)'
                    }}
                >
                    {articles.map((article, index) => (
                        <motion.div
                            key={index}
                            variants={item}
                            style={{
                                background: 'var(--color-obsidian-slate)',
                                padding: 'var(--space-md)',
                                display: 'flex',
                                flexDirection: 'column',
                                height: '100%',
                                borderBottom: '1px solid transparent',
                                cursor: 'pointer'
                            }}
                            whileHover={{
                                y: -10,
                                borderBottomColor: 'var(--color-heritage-bronze)',
                                transition: { duration: 0.2 }
                            }}
                        >
                            <div style={{
                                fontSize: '0.75rem',
                                textTransform: 'uppercase',
                                letterSpacing: '0.05em',
                                color: 'var(--color-text-secondary)',
                                marginBottom: 'var(--space-sm)'
                            }}>
                                {article.category}
                            </div>
                            <h3 style={{
                                fontSize: '1.5rem',
                                marginBottom: 'var(--space-sm)',
                                color: 'white'
                            }}>
                                {article.title}
                            </h3>
                            <div style={{ marginTop: 'auto', paddingTop: 'var(--space-md)', fontSize: '0.875rem', color: 'var(--color-heritage-bronze)' }}>
                                Read Article →
                            </div>
                        </motion.div>
                    ))}
                </motion.div>
            </div>
        </section>
    );
};

export default ThoughtLeadership;
