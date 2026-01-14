import React from 'react';
import { motion } from 'framer-motion';

const Careers = () => {
    const roles = [
        { title: "Senior Strategy Consultant", location: "New York", type: "Full-time" },
        { title: "Data Scientist, Analytics", location: "London", type: "Full-time" },
        { title: "Engagement Manager", location: "Singapore", type: "Full-time" },
    ];

    return (
        <section id="careers" className="section">
            <div className="container">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: false }}
                    transition={{ duration: 0.6 }}
                >
                    <h2 className="section-title">Join the Firm</h2>
                    <p className="section-subtitle">
                        We are looking for exceptional talent to help shape the future of global business.
                    </p>
                </motion.div>

                <div style={{ marginTop: 'var(--space-lg)' }}>
                    {roles.map((role, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: false }}
                            transition={{ delay: index * 0.1, duration: 0.5 }}
                            style={{
                                display: 'flex',
                                justifyContent: 'space-between',
                                alignItems: 'center',
                                padding: 'var(--space-md) 0',
                                borderBottom: '1px solid rgba(255,255,255,0.1)',
                            }}
                            className="career-row"
                        >
                            <div>
                                <h3 style={{ fontSize: '1.25rem', marginBottom: '0.5rem', color: 'white' }}>{role.title}</h3>
                                <div style={{ fontSize: '0.875rem', color: 'var(--color-text-secondary)' }}>
                                    {role.location} &middot; {role.type}
                                </div>
                            </div>
                            <motion.button
                                className="btn btn-outline"
                                style={{ padding: '0.5rem 1.5rem', fontSize: '0.75rem' }}
                                whileHover={{ scale: 1.05, backgroundColor: 'var(--color-cashmere-gold)', color: 'var(--color-obsidian-slate)' }}
                                whileTap={{ scale: 0.95 }}
                            >
                                Apply Now
                            </motion.button>
                        </motion.div>
                    ))}
                </div>

                <div style={{ marginTop: 'var(--space-md)', textAlign: 'center' }}>
                    <a href="#all-jobs" style={{ textDecoration: 'underline', color: 'var(--color-heritage-bronze)' }}>
                        View all open positions
                    </a>
                </div>
            </div>
        </section>
    );
};

export default Careers;
