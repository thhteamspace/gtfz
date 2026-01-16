import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

const COLORS = {
    obsidian: '#0A0E1A',
    charcoal: '#121212',
    gold: '#D4AF6A',
    bronze: '#C5A059',
    white: '#F5F5F5',
    text: '#CCCCCC'
};

const METRICS_DATA = [
    { value: '15%', label: 'Cost Reduction' },
    { value: '100%', label: 'Audit Compliance' },
    { value: '25%', label: 'Lead Time Improvement' },
    { value: '3', label: 'Continents' }
];

const REPORTS_DATA = [
    {
        title: "Cost Containment",
        category: "Case Study",
        excerpt: "How we reduced material spend by 15% without compromising quality for a global retailer."
    },
    {
        title: "The Compliance Turnaround",
        category: "Risk Advisory",
        excerpt: "Achieving 100% audit success for a supply chain previously flagged for high risk."
    },
    {
        title: "Efficiency at Scale",
        category: "Process Engineering",
        excerpt: "Optimizing workflows across 3 continents to improve lead times by 25%."
    }
];

const ImpactHero = () => {
    return (
        <section style={{
            height: '80vh',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center',
            textAlign: 'center',
            padding: '2rem',
            background: COLORS.obsidian
        }}>
            <motion.h1
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1, ease: 'easeOut' }}
                style={{
                    fontSize: 'clamp(3rem, 8vw, 8rem)',
                    fontWeight: 800,
                    color: COLORS.white,
                    letterSpacing: '-0.02em',
                    lineHeight: 1,
                    marginBottom: '1.5rem'
                }}
            >
                Measurable Results.
            </motion.h1>
            <motion.p
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1, delay: 0.3, ease: 'easeOut' }}
                style={{
                    fontSize: 'clamp(1.2rem, 2vw, 1.8rem)',
                    color: COLORS.bronze,
                    fontWeight: 300,
                    maxWidth: '800px'
                }}
            >
                Driving commercial value for global fashion brands.
            </motion.p>
        </section>
    );
};

const KeyMetrics = () => {
    return (
        <section style={{
            padding: '6rem 2rem',
            background: COLORS.charcoal,
            borderTop: `1px solid ${COLORS.bronze}20`,
            borderBottom: `1px solid ${COLORS.bronze}20`
        }}>
            <div style={{
                maxWidth: '1400px',
                margin: '0 auto',
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
                gap: '4rem',
                textAlign: 'center'
            }}>
                {METRICS_DATA.map((item, index) => (
                    <motion.div
                        key={index}
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8, delay: index * 0.1 }}
                        style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}
                    >
                        <span style={{
                            fontSize: 'clamp(3rem, 5vw, 4.5rem)',
                            fontWeight: 800,
                            color: COLORS.white,
                            lineHeight: 1
                        }}>
                            {item.value}
                        </span>
                        <span style={{
                            fontSize: '1rem',
                            color: COLORS.bronze,
                            textTransform: 'uppercase',
                            letterSpacing: '0.1em',
                            fontFamily: 'monospace'
                        }}>
                            {item.label}
                        </span>
                    </motion.div>
                ))}
            </div>
        </section>
    );
};

const ImpactReports = () => {
    return (
        <section style={{ padding: '8rem 2rem', background: COLORS.obsidian }}>
            <div style={{ maxWidth: '1000px', margin: '0 auto' }}>
                <motion.h3
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    style={{
                        fontSize: '0.9rem',
                        color: COLORS.bronze,
                        textTransform: 'uppercase',
                        letterSpacing: '0.2em',
                        marginBottom: '4rem',
                        fontFamily: 'monospace'
                    }}
                >
                    Case Studies
                </motion.h3>

                <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}>
                    {REPORTS_DATA.map((report, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, x: -30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.8, delay: index * 0.2 }}
                            style={{
                                padding: '3rem',
                                border: '1px solid rgba(255,255,255,0.05)',
                                background: 'rgba(255,255,255,0.02)',
                                transition: 'all 0.3s ease',
                                cursor: 'pointer'
                            }}
                            whileHover={{ background: 'rgba(255,255,255,0.04)', borderColor: COLORS.bronze }}
                        >
                            <div style={{
                                fontSize: '0.8rem',
                                color: COLORS.bronze,
                                marginBottom: '1rem',
                                textTransform: 'uppercase',
                                letterSpacing: '0.1em'
                            }}>
                                {report.category}
                            </div>
                            <h2 style={{
                                fontSize: '2.5rem',
                                fontWeight: 700,
                                color: COLORS.white,
                                marginBottom: '1rem'
                            }}>
                                {report.title}
                            </h2>
                            <p style={{
                                fontSize: '1.2rem',
                                color: COLORS.text,
                                lineHeight: 1.6
                            }}>
                                {report.excerpt}
                            </p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

const Testimonial = () => {
    return (
        <section style={{ padding: '10rem 2rem', background: COLORS.charcoal, textAlign: 'center' }}>
            <div style={{ maxWidth: '900px', margin: '0 auto' }}>
                <motion.div
                    initial={{ scale: 0.9, opacity: 0 }}
                    whileInView={{ scale: 1, opacity: 1 }}
                    transition={{ duration: 1 }}
                >
                    <span style={{ fontSize: '4rem', color: COLORS.bronze, fontFamily: 'serif' }}>"</span>
                    <h3 style={{
                        fontSize: 'clamp(2rem, 4vw, 3.5rem)',
                        fontWeight: 300,
                        fontStyle: 'italic',
                        color: COLORS.white,
                        lineHeight: 1.4,
                        marginBottom: '3rem'
                    }}>
                        GTFZ transformed our supply chain from a cost center into a competitive advantage. Their detailed approach to compliance and efficiency is unmatched.
                    </h3>
                    <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem', alignItems: 'center' }}>
                        <span style={{ fontSize: '1.2rem', color: COLORS.bronze, fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.1em' }}>
                            Sarah Jenkins
                        </span>
                        <span style={{ fontSize: '0.9rem', color: '#666' }}>
                            COO, Global Apparel Co.
                        </span>
                    </div>
                </motion.div>
            </div>
        </section>
    );
};

const Impact = () => {
    return (
        <div style={{ background: COLORS.obsidian, minHeight: '100vh', paddingTop: '10vh' }}>
            <ImpactHero />
            <KeyMetrics />
            <ImpactReports />
            <Testimonial />
        </div>
    );
};

export default Impact;
