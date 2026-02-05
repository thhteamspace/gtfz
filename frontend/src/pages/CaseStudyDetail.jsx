import React, { useEffect } from 'react';
import { useParams, useNavigate, Link } from 'react-router-dom';
import { motion } from 'framer-motion';

import imgCompliance from '../assets/images/impact-compliance.png';
import imgQuality from '../assets/images/impact-quality.png';
import imgSourcing from '../assets/images/impact-sourcing.png';
import imgTeam from '../assets/images/impact-team.png';
import imgLogistics from '../assets/images/impact-logistics.png';

const COLORS = {
    opticalWhite: '#FEFFFF',
    darkCharcoal: '#111111',
    bronze: '#C5A059',
    gold: '#D4AF37',
    text: '#111111',
    textSecondary: 'rgba(17, 17, 17, 0.6)'
};

// Full case studies data with complete content
export const CASE_STUDIES_FULL = [
    {
        id: 'compliance-issues',
        title: "Resolving Compliance Issues in Fashion Manufacturing",
        category: "Compliance & Standards",
        image: imgCompliance,
        metric: "100%",
        label: "Audit Success",
        client: "Asian Fashion Manufacturer",
        duration: "6 Months",
        excerpt: "Resolved critical compliance gaps for a mid-sized fashion manufacturer, preventing relationship loss with a key retailer through workflow redesign and training.",
        challenge: "A mid-sized fashion manufacturer supplying to international retailers was facing critical compliance gaps related to manufacturing processes, documentation, and standard operating procedures (SOPs). With an upcoming third-party audit by a key retail partner, the risk of non-compliance threatened order continuity and long-term commercial relationships.",
        solution: "Global Thread FZ conducted a rapid yet thorough compliance diagnostic across shop-floor processes, SOP adherence, and workforce practices. Key actions included:\n\n• Mapping existing workflows against retailer and regulatory compliance requirements\n• Identifying gaps in documentation, process discipline, and training\n• Redesigning workflows to align with audit expectations\n• Delivering targeted, role-based training to supervisors and factory staff",
        fullContent: {
            overview: "A mid-sized fashion manufacturer supplying to international retailers was facing critical compliance gaps related to manufacturing processes, documentation, and standard operating procedures (SOPs). With an upcoming third-party audit by a key retail partner, the risk of non-compliance threatened order continuity and long-term commercial relationships.",
            challenge: "A mid-sized fashion manufacturer supplying to international retailers was facing critical compliance gaps related to manufacturing processes, documentation, and standard operating procedures (SOPs). With an upcoming third-party audit by a key retail partner, the risk of non-compliance threatened order continuity and long-term commercial relationships.",
            solution: "Global Thread FZ conducted a rapid yet thorough compliance diagnostic across shop-floor processes, SOP adherence, and workforce practices. Key actions included:\n\n• Mapping existing workflows against retailer and regulatory compliance requirements\n• Identifying gaps in documentation, process discipline, and training\n• Redesigning workflows to align with audit expectations\n• Delivering targeted, role-based training to supervisors and factory staff",
            results: "Value Delivered:\nCompliance was transformed from a reactive risk into a sustainable operational capability—protecting revenue and reputation.",
            keyOutcomes: [
                "Achieved full compliance ahead of the retailer’s audit timeline",
                "Passed the audit without major observations or corrective action plans",
                "Strengthened trust with the retailer, leading to continued and expanded business",
                "Embedded long-term compliance discipline within factory operations"
            ]
        }
    },
    {
        id: 'quality-control',
        title: "Implementing Quality Control Standards for a Multi-Location Fashion Manufacturer",
        category: "Quality Assurance",
        image: imgQuality,
        metric: "85%",
        label: "Defect Reduction",
        client: "International Fashion Brand",
        duration: "6 Months",
        excerpt: "Implemented an end-to-end quality governance framework for a multi-location manufacturer, significantly reducing defect rates and improving visibility.",
        challenge: "A fashion brand operating manufacturing units across multiple Asian countries struggled with inconsistent product quality, high defect rates, and limited visibility into factory-level performance. The absence of standardized quality control processes resulted in customer complaints and rising rework costs.",
        solution: "Global Thread FZ partnered closely with the client to design and implement an end-to-end quality governance framework:\n\n• Conducted root-cause analysis across factories to identify quality failure points\n• Defined standardized quality control procedures applicable across locations\n• Selected and implemented a digital quality management solution\n• Introduced real-time dashboards and reporting for defect tracking and trend analysis\n• Enabled stronger collaboration between HQ quality teams and factory teams",
        fullContent: {
            overview: "A fashion brand operating manufacturing units across multiple Asian countries struggled with inconsistent product quality, high defect rates, and limited visibility into factory-level performance. The absence of standardized quality control processes resulted in customer complaints and rising rework costs.",
            challenge: "A fashion brand operating manufacturing units across multiple Asian countries struggled with inconsistent product quality, high defect rates, and limited visibility into factory-level performance. The absence of standardized quality control processes resulted in customer complaints and rising rework costs.",
            solution: "Global Thread FZ partnered closely with the client to design and implement an end-to-end quality governance framework:\n\n• Conducted root-cause analysis across factories to identify quality failure points\n• Defined standardized quality control procedures applicable across locations\n• Selected and implemented a digital quality management solution\n• Introduced real-time dashboards and reporting for defect tracking and trend analysis\n• Enabled stronger collaboration between HQ quality teams and factory teams",
            results: "Value Delivered:\nQuality became measurable, consistent, and scalable—supporting the brand’s growth across geographies without compromising standards.",
            keyOutcomes: [
                "Significant reduction in defect rates across production lines",
                "Improved transparency and accountability across factories",
                "Faster issue identification and resolution through real-time reporting",
                "Noticeable increase in customer satisfaction and repeat orders"
            ]
        }
    },
    {
        id: 'supply-chain-diversification',
        title: "Diversifying Supply Chains Amid Tariff and Geopolitical Challenges",
        category: "Strategic Sourcing",
        image: imgSourcing,
        metric: "40%",
        label: "Risk Mitigation",
        client: "Multiple Fashion Brands",
        duration: "4 Months",
        excerpt: "Led a structured supply chain diversification initiative for brands impacted by rising tariffs, ensuring resilience and cost stability.",
        challenge: "In early 2025, several fashion brands were impacted by rising tariffs and shifting trade dynamics, making existing sourcing geographies commercially unviable. The brands needed alternative manufacturing options without compromising quality, ethics, or speed to market.",
        solution: "Global Thread FZ led a structured supply chain diversification initiative:\n\n• Assessed current sourcing exposure and tariff impact scenarios\n• Evaluated alternative manufacturing geographies based on cost, capacity, compliance, and ESG standards\n• Identified and vetted new factories aligned with brand quality and ethical benchmarks\n• Supported onboarding and transition planning to minimize disruption",
        fullContent: {
            overview: "In early 2025, several fashion brands were impacted by rising tariffs and shifting trade dynamics, making existing sourcing geographies commercially unviable. The brands needed alternative manufacturing options without compromising quality, ethics, or speed to market.",
            challenge: "In early 2025, several fashion brands were impacted by rising tariffs and shifting trade dynamics, making existing sourcing geographies commercially unviable. The brands needed alternative manufacturing options without compromising quality, ethics, or speed to market.",
            solution: "Global Thread FZ led a structured supply chain diversification initiative:\n\n• Assessed current sourcing exposure and tariff impact scenarios\n• Evaluated alternative manufacturing geographies based on cost, capacity, compliance, and ESG standards\n• Identified and vetted new factories aligned with brand quality and ethical benchmarks\n• Supported onboarding and transition planning to minimize disruption",
            results: "Value Delivered:\nThe brands moved from dependency-driven sourcing to a resilient, future-ready supply chain model.",
            keyOutcomes: [
                "Successfully diversified manufacturing footprint across multiple regions",
                "Reduced tariff exposure and stabilized landed costs",
                "Improved supply chain resilience and risk distribution",
                "Enabled brands to respond more flexibly to future market and policy changes"
            ]
        }
    },
    {
        id: 'team-efficiency',
        title: "Enhancing Supply Chain Team Efficiency Through Process and Communication Redesign",
        category: "Process Optimization",
        image: imgTeam,
        metric: "25%",
        label: "Lead Time Reduction",
        client: "Growing Fashion Company",
        duration: "9 Months",
        excerpt: "Streamlined supply chain operations by identifying bottlenecks and implementing a centralized communication platform, reducing lead times by 25%.",
        challenge: "A growing fashion company faced recurring shipment delays and internal friction caused by fragmented communication and inefficient decision-making across its supply chain team.",
        solution: "Global Thread FZ conducted an operational deep-dive to identify structural and behavioral bottlenecks:\n\n• Mapped end-to-end information flows across planning, sourcing, and logistics\n• Identified delays caused by manual handoffs and unclear ownership\n• Implemented a centralized communication and tracking platform\n• Streamlined workflows and clarified roles, escalation paths, and KPIs",
        fullContent: {
            overview: "A growing fashion company faced recurring shipment delays and internal friction caused by fragmented communication and inefficient decision-making across its supply chain team.",
            challenge: "A growing fashion company faced recurring shipment delays and internal friction caused by fragmented communication and inefficient decision-making across its supply chain team.",
            solution: "Global Thread FZ conducted an operational deep-dive to identify structural and behavioral bottlenecks:\n\n• Mapped end-to-end information flows across planning, sourcing, and logistics\n• Identified delays caused by manual handoffs and unclear ownership\n• Implemented a centralized communication and tracking platform\n• Streamlined workflows and clarified roles, escalation paths, and KPIs",
            results: "Value Delivered:\nOperational efficiency improved without adding headcount unlocking productivity through better systems and clarity.",
            keyOutcomes: [
                "25% reduction in overall lead times",
                "Faster decision-making and fewer last-minute escalations",
                "Improved team collaboration and accountability",
                "Higher service levels delivered to customers and retail partners"
            ]
        }
    },
    {
        id: 'local-support',
        title: "Addressing Supply Chain Delays Through Local, On-Ground Support",
        category: "Operational Excellence",
        image: imgLogistics,
        metric: "30%",
        label: "Faster Delivery",
        client: "Fashion Company (NA Operations)",
        duration: "4 Months",
        excerpt: "Established a localized operating model in China to bridge the gap between North American operations and manufacturers, reducing lead times by 30%.",
        challenge: "A North America–based fashion company faced persistent supply chain delays due to time-zone gaps, limited factory visibility, and slow issue resolution with Asian manufacturers.",
        solution: "Global Thread FZ enabled a localized operating model:\n\n• Established a dedicated in-office support team in China\n• Acted as the real-time interface between North American teams and manufacturers\n• Enabled faster communication, issue escalation, and production monitoring\n• Strengthened supplier collaboration through on-ground presence",
        fullContent: {
            overview: "A North America–based fashion company faced persistent supply chain delays due to time-zone gaps, limited factory visibility, and slow issue resolution with Asian manufacturers.",
            challenge: "A North America–based fashion company faced persistent supply chain delays due to time-zone gaps, limited factory visibility, and slow issue resolution with Asian manufacturers.",
            solution: "Global Thread FZ enabled a localized operating model:\n\n• Established a dedicated in-office support team in China\n• Acted as the real-time interface between North American teams and manufacturers\n• Enabled faster communication, issue escalation, and production monitoring\n• Strengthened supplier collaboration through on-ground presence",
            results: "Value Delivered:\nBy placing expertise closer to production, the client achieved speed, control, and predictability across its supply chain.",
            keyOutcomes: [
                "30% reduction in production and delivery lead times",
                "Faster resolution of quality and production issues",
                "Improved delivery reliability and customer satisfaction",
                "Stronger, more transparent supplier relationships"
            ]
        }
    }
];

const CaseStudyDetail = () => {
    const { id } = useParams();
    const navigate = useNavigate();

    const study = CASE_STUDIES_FULL.find(s => s.id === id);
    const currentIndex = CASE_STUDIES_FULL.findIndex(s => s.id === id);
    const prevStudy = currentIndex > 0 ? CASE_STUDIES_FULL[currentIndex - 1] : null;
    const nextStudy = currentIndex < CASE_STUDIES_FULL.length - 1 ? CASE_STUDIES_FULL[currentIndex + 1] : null;

    useEffect(() => {
        window.scrollTo(0, 0);
    }, [id]);

    if (!study) {
        return (
            <div style={{
                minHeight: '100vh',
                background: COLORS.darkCharcoal,
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                flexDirection: 'column',
                gap: '2rem'
            }}>
                <h1 style={{ color: COLORS.opticalWhite, fontSize: '2rem' }}>Case Study Not Found</h1>
                <Link to="/impact" style={{
                    color: COLORS.bronze,
                    textDecoration: 'none',
                    padding: '1rem 2rem',
                    border: `1px solid ${COLORS.bronze}`,
                    borderRadius: '2rem'
                }}>
                    ← Back to Impact
                </Link>
            </div>
        );
    }

    return (
        <main style={{ background: COLORS.darkCharcoal }}>
            {/* Hero Section */}
            <section style={{
                minHeight: '70vh',
                position: 'relative',
                display: 'flex',
                alignItems: 'flex-end',
                overflow: 'hidden'
            }}>
                {/* Background Image */}
                <div style={{
                    position: 'absolute',
                    inset: 0,
                    backgroundImage: `url(${study.image})`,
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                    filter: 'brightness(0.4)'
                }} />

                {/* Gradient Overlay */}
                <div style={{
                    position: 'absolute',
                    inset: 0,
                    background: 'linear-gradient(to top, rgba(17,17,17,1) 0%, rgba(17,17,17,0.5) 50%, rgba(17,17,17,0.3) 100%)'
                }} />

                {/* Hero Content */}
                <div className="container" style={{ position: 'relative', zIndex: 2, paddingBottom: '4rem' }}>
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                    >

                        {/* Category Badge */}
                        <div style={{
                            display: 'inline-flex',
                            padding: '0.5rem 1.25rem',
                            border: `1px solid ${COLORS.bronze}`,
                            borderRadius: '2rem',
                            marginBottom: '1.5rem'
                        }}>
                            <span style={{
                                fontSize: '0.75rem',
                                color: COLORS.bronze,
                                fontFamily: 'monospace',
                                letterSpacing: '0.1em',
                                textTransform: 'uppercase'
                            }}>
                                {study.category}
                            </span>
                        </div>

                        {/* Title */}
                        <h1 style={{
                            fontSize: 'clamp(2rem, 5vw, 4rem)',
                            fontWeight: 500,
                            color: COLORS.opticalWhite,
                            fontFamily: 'Outfit, sans-serif',
                            lineHeight: 1.1,
                            marginBottom: '2rem',
                            maxWidth: '900px'
                        }}>
                            {study.title}
                        </h1>

                        {/* Meta Info */}
                        <div style={{
                            display: 'flex',
                            gap: '3rem',
                            flexWrap: 'wrap'
                        }}>
                            <div>
                                <div style={{ fontSize: '0.7rem', color: 'rgba(255,255,255,0.4)', textTransform: 'uppercase', marginBottom: '0.25rem' }}>Client</div>
                                <div style={{ fontSize: '1rem', color: COLORS.opticalWhite, fontWeight: 500 }}>{study.client}</div>
                            </div>
                            <div>
                                <div style={{ fontSize: '0.7rem', color: 'rgba(255,255,255,0.4)', textTransform: 'uppercase', marginBottom: '0.25rem' }}>Duration</div>
                                <div style={{ fontSize: '1rem', color: COLORS.opticalWhite, fontWeight: 500 }}>{study.duration}</div>
                            </div>
                            <div>
                                <div style={{ fontSize: '0.7rem', color: 'rgba(255,255,255,0.4)', textTransform: 'uppercase', marginBottom: '0.25rem' }}>Key Result</div>
                                <div style={{ fontSize: '1rem', color: COLORS.bronze, fontWeight: 600 }}>{study.metric} {study.label}</div>
                            </div>
                        </div>
                    </motion.div>
                </div>
            </section>

            {/* Content Section */}
            <section style={{
                background: COLORS.opticalWhite,
                padding: '5rem 0'
            }}>
                <div className="container">
                    <div style={{
                        maxWidth: '800px',
                        margin: '0 auto'
                    }}>
                        {/* Overview */}
                        <motion.div
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6 }}
                            style={{ marginBottom: '3rem' }}
                        >
                            <h2 style={{
                                fontSize: '1.5rem',
                                fontWeight: 600,
                                color: COLORS.text,
                                fontFamily: 'Outfit, sans-serif',
                                marginBottom: '1rem'
                            }}>Overview</h2>
                            <p style={{
                                fontSize: '1.1rem',
                                lineHeight: 1.8,
                                color: COLORS.textSecondary
                            }}>
                                {study.fullContent.overview}
                            </p>
                        </motion.div>

                        {/* The Challenge */}
                        <motion.div
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6, delay: 0.1 }}
                            style={{
                                marginBottom: '3rem',
                                padding: '2rem',
                                background: 'rgba(17,17,17,0.03)',
                                borderLeft: `4px solid ${COLORS.bronze}`
                            }}
                        >
                            <h2 style={{
                                fontSize: '1.5rem',
                                fontWeight: 600,
                                color: COLORS.text,
                                fontFamily: 'Outfit, sans-serif',
                                marginBottom: '1rem'
                            }}>The Challenge</h2>
                            <p style={{
                                fontSize: '1.05rem',
                                lineHeight: 1.8,
                                color: COLORS.textSecondary
                            }}>
                                {study.fullContent.challenge}
                            </p>
                        </motion.div>

                        {/* Our Solution */}
                        <motion.div
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6, delay: 0.2 }}
                            style={{ marginBottom: '3rem' }}
                        >
                            <h2 style={{
                                fontSize: '1.5rem',
                                fontWeight: 600,
                                color: COLORS.text,
                                fontFamily: 'Outfit, sans-serif',
                                marginBottom: '1rem'
                            }}>Our Solution</h2>
                            <div style={{
                                fontSize: '1.05rem',
                                lineHeight: 1.8,
                                color: COLORS.textSecondary,
                                whiteSpace: 'pre-line'
                            }}>
                                {study.fullContent.solution}
                            </div>
                        </motion.div>

                        {/* Results */}
                        <motion.div
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6, delay: 0.3 }}
                            style={{ marginBottom: '3rem' }}
                        >
                            <h2 style={{
                                fontSize: '1.5rem',
                                fontWeight: 600,
                                color: COLORS.text,
                                fontFamily: 'Outfit, sans-serif',
                                marginBottom: '1rem'
                            }}>The Results</h2>
                            <p style={{
                                fontSize: '1.05rem',
                                lineHeight: 1.8,
                                color: COLORS.textSecondary,
                                marginBottom: '2rem'
                            }}>
                                {study.fullContent.results}
                            </p>

                            {/* Key Outcomes */}
                            <div style={{
                                background: COLORS.darkCharcoal,
                                padding: '2rem',
                                borderRadius: '0.5rem'
                            }}>
                                <h3 style={{
                                    fontSize: '1rem',
                                    fontWeight: 600,
                                    color: COLORS.bronze,
                                    fontFamily: 'monospace',
                                    textTransform: 'uppercase',
                                    letterSpacing: '0.1em',
                                    marginBottom: '1.5rem'
                                }}>Key Outcomes</h3>
                                <ul style={{
                                    listStyle: 'none',
                                    padding: 0,
                                    margin: 0,
                                    display: 'flex',
                                    flexDirection: 'column',
                                    gap: '1rem'
                                }}>
                                    {study.fullContent.keyOutcomes.map((outcome, idx) => (
                                        <li key={idx} style={{
                                            display: 'flex',
                                            alignItems: 'flex-start',
                                            gap: '1rem',
                                            color: COLORS.opticalWhite,
                                            fontSize: '1rem',
                                            lineHeight: 1.5
                                        }}>
                                            <span style={{ color: COLORS.bronze, fontSize: '1.2rem' }}>✓</span>
                                            {outcome}
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </motion.div>

                        {/* Metric Highlight */}
                        <motion.div
                            initial={{ opacity: 0, scale: 0.95 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6, delay: 0.4 }}
                            style={{
                                textAlign: 'center',
                                padding: '3rem',
                                background: `linear-gradient(135deg, ${COLORS.bronze}15, ${COLORS.gold}10)`,
                                border: `1px solid ${COLORS.bronze}30`,
                                borderRadius: '0.5rem',
                                marginTop: '3rem'
                            }}
                        >
                            <div style={{
                                fontSize: 'clamp(4rem, 10vw, 6rem)',
                                fontWeight: 700,
                                color: COLORS.bronze,
                                fontFamily: 'Outfit, sans-serif',
                                lineHeight: 1
                            }}>
                                {study.metric}
                            </div>
                            <div style={{
                                fontSize: '1.2rem',
                                color: COLORS.text,
                                fontWeight: 500,
                                marginTop: '0.5rem'
                            }}>
                                {study.label}
                            </div>
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* Navigation to Other Case Studies */}
            <section style={{
                background: COLORS.darkCharcoal,
                padding: '4rem 0'
            }}>
                <div className="container">
                    <div style={{
                        display: 'flex',
                        justifyContent: 'space-between',
                        alignItems: 'center',
                        flexWrap: 'wrap',
                        gap: '2rem'
                    }}>
                        {/* Previous */}
                        {prevStudy ? (
                            <Link
                                to={`/impact/${prevStudy.id}`}
                                style={{
                                    textDecoration: 'none',
                                    display: 'flex',
                                    flexDirection: 'column',
                                    gap: '0.5rem',
                                    opacity: 0.7,
                                    transition: 'opacity 0.3s'
                                }}
                                onMouseEnter={e => e.currentTarget.style.opacity = 1}
                                onMouseLeave={e => e.currentTarget.style.opacity = 0.7}
                            >
                                <span style={{ fontSize: '0.75rem', color: COLORS.bronze, textTransform: 'uppercase' }}>← Previous</span>
                                <span style={{ color: COLORS.opticalWhite, fontSize: '1.1rem' }}>{prevStudy.title}</span>
                            </Link>
                        ) : <div />}

                        {/* Next */}
                        {nextStudy ? (
                            <Link
                                to={`/impact/${nextStudy.id}`}
                                style={{
                                    textDecoration: 'none',
                                    display: 'flex',
                                    flexDirection: 'column',
                                    gap: '0.5rem',
                                    textAlign: 'right',
                                    opacity: 0.7,
                                    transition: 'opacity 0.3s'
                                }}
                                onMouseEnter={e => e.currentTarget.style.opacity = 1}
                                onMouseLeave={e => e.currentTarget.style.opacity = 0.7}
                            >
                                <span style={{ fontSize: '0.75rem', color: COLORS.bronze, textTransform: 'uppercase' }}>Next →</span>
                                <span style={{ color: COLORS.opticalWhite, fontSize: '1.1rem' }}>{nextStudy.title}</span>
                            </Link>
                        ) : <div />}
                    </div>

                    {/* Back to All */}
                    <div style={{ textAlign: 'center', marginTop: '3rem' }}>
                        <Link
                            to="/impact"
                            style={{
                                display: 'inline-flex',
                                alignItems: 'center',
                                gap: '0.75rem',
                                padding: '1rem 2rem',
                                border: `1px solid ${COLORS.bronze}`,
                                borderRadius: '2rem',
                                color: COLORS.bronze,
                                textDecoration: 'none',
                                fontSize: '0.9rem',
                                transition: 'all 0.3s'
                            }}
                            onMouseEnter={e => {
                                e.target.style.background = COLORS.bronze;
                                e.target.style.color = COLORS.darkCharcoal;
                            }}
                            onMouseLeave={e => {
                                e.target.style.background = 'transparent';
                                e.target.style.color = COLORS.bronze;
                            }}
                        >
                            View All Case Studies
                        </Link>
                    </div>
                </div>
            </section>
        </main>
    );
};

export default CaseStudyDetail;
