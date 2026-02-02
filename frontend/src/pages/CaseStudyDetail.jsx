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
        excerpt: "A fashion manufacturer encountered compliance issues related to manufacturing processes and SOPs. Global Thread FZ implemented corrective measures, revising workflows and training staff.",
        challenge: "Manufacturer faced compliance violations in SOPs and manufacturing processes, risking major retailer relationship.",
        solution: "Conducted thorough assessment, revised workflows, implemented training programs, and established monitoring systems.",
        fullContent: {
            overview: "A fashion manufacturer encountered compliance issues primarily related to their manufacturing processes and standard operating procedures. The issues were identified during a pre-audit assessment and threatened their relationship with a key retailer.",
            challenge: "The manufacturer faced significant compliance violations in their standard operating procedures (SOPs) and manufacturing processes. These issues were putting their business relationship with a major retailer at risk, as an upcoming audit could have resulted in their removal from the approved vendor list. The problems ranged from documentation gaps to inconsistent quality control measures on the production floor.",
            solution: "Global Thread FZ Team quickly assessed the situation and implemented corrective measures, including:\n\n• Conducted a comprehensive gap analysis of existing SOPs\n• Revised workflows to align with international standards\n• Developed and delivered training programs for staff on updated protocols\n• Implemented real-time monitoring systems for ongoing compliance\n• Created documentation templates and audit-ready files\n• Established regular internal audit schedules",
            results: "As a result, the manufacturer achieved compliance ahead of their key retailer's audit, strengthening their business relationship and ensuring continued success. The manufacturer not only passed the audit but received commendation for the improvements made in such a short timeframe.",
            keyOutcomes: [
                "100% compliance achieved before audit deadline",
                "Strengthened retailer relationship",
                "Improved staff knowledge and adherence to protocols",
                "Sustainable compliance framework established"
            ]
        }
    },
    {
        id: 'quality-control',
        title: "Implementing Quality Control Standards for a Fashion Manufacturer",
        category: "Quality Assurance",
        image: imgQuality,
        metric: "85%",
        label: "Defect Reduction",
        client: "International Fashion Brand",
        duration: "6 Months",
        excerpt: "Fashion company with manufacturing sites across Asia faced inconsistent quality due to lack of standardized QC measures. Global Thread FZ researched solutions and implemented a comprehensive QC framework.",
        challenge: "Inconsistent quality across multiple Asian manufacturing sites due to lack of standardization and limited factory performance visibility.",
        solution: "Researched software solutions, implemented standardized QC procedures, deployed real-time reporting tools for enhanced oversight.",
        fullContent: {
            overview: "A fashion company with manufacturing sites across Asia faced challenges with inconsistent quality due to a lack of standardized quality control measures and limited visibility into factory performance.",
            challenge: "The brand was experiencing inconsistent product quality across their multiple manufacturing sites in Asia. Each factory operated with different quality standards, making it difficult to maintain brand consistency. Limited visibility into real-time factory performance meant issues were often discovered too late, leading to increased returns, customer complaints, and damaged brand reputation.",
            solution: "Global Thread FZ addressed the issue by thoroughly understanding the root causes, researching suitable software solutions, and implementing a comprehensive quality control framework. This included:\n\n• Standardized quality control procedures across all manufacturing sites\n• Implementation of real-time reporting tools for enhanced oversight\n• Development of a centralized dashboard for quality metrics\n• Training programs for QC inspectors at each facility\n• Establishment of clear communication channels between QC teams and factory management\n• Regular quality audits and performance reviews",
            results: "The comprehensive QC framework enhanced oversight and communication between quality control teams and factories, leading to significant reductions in defects and increased customer satisfaction. The brand saw an 85% reduction in quality-related returns within the first year.",
            keyOutcomes: [
                "85% reduction in product defects",
                "Real-time visibility into factory performance",
                "Standardized quality across all manufacturing sites",
                "Improved customer satisfaction scores",
                "Reduced return rates and associated costs"
            ]
        }
    },
    {
        id: 'supply-chain-diversification',
        title: "Diversifying Supply Chains Amid Tariff Challenges",
        category: "Strategic Sourcing",
        image: imgSourcing,
        metric: "40%",
        label: "Cost Mitigation",
        client: "Multiple Fashion Brands",
        duration: "4 Months",
        excerpt: "Fashion brands faced significant challenges in early 2025 due to rising tariffs. Global Thread FZ conducted comprehensive analysis and identified factories aligned with quality and ethical standards.",
        challenge: "Rising tariffs in early 2025 threatened profitability and required urgent supply chain diversification strategy.",
        solution: "Comprehensive location analysis, factory vetting for quality/ethics alignment, diversified manufacturing network implementation.",
        fullContent: {
            overview: "In early 2025, several fashion brands faced significant challenges due to rising tariffs, prompting the need to find new manufacturing homes to maintain profitability and competitiveness.",
            challenge: "Rising tariffs in early 2025 created unprecedented pressure on fashion brands' profit margins. Brands that had concentrated their manufacturing in specific regions found themselves facing cost increases that threatened their business models. Many needed to quickly identify alternative manufacturing locations without compromising on quality, ethical standards, or production timelines.",
            solution: "Global Thread FZ assisted these brands by conducting a comprehensive analysis of potential manufacturing locations and identifying factories that aligned with their quality and ethical standards. Our approach included:\n\n• Detailed cost-benefit analysis of various manufacturing regions\n• Factory vetting process focusing on quality capabilities and ethical compliance\n• Risk assessment of potential new manufacturing partners\n• Transition planning to minimize disruption to existing production\n• Negotiation support for favorable terms with new partners\n• Implementation of dual-sourcing strategies for risk mitigation",
            results: "By diversifying their supply chains, the brands not only mitigated the impact of tariffs but also enhanced their operational resilience and adaptability in an evolving market landscape. Average cost savings of 40% were achieved compared to single-source manufacturing strategies.",
            keyOutcomes: [
                "40% cost mitigation achieved through strategic sourcing",
                "Diversified manufacturing base across multiple regions",
                "Enhanced operational resilience",
                "Maintained quality and ethical standards",
                "Reduced dependency on single-region manufacturing"
            ]
        }
    },
    {
        id: 'team-efficiency',
        title: "Enhancing Supply Chain Team Efficiency",
        category: "Process Optimization",
        image: imgTeam,
        metric: "25%",
        label: "Lead Time Reduction",
        client: "North American Fashion Company",
        duration: "9 Months",
        excerpt: "A fashion company sought to improve the efficiency of its supply chain team, which was struggling with communication breakdowns and delayed shipments.",
        challenge: "Communication breakdowns and delayed shipments plagued supply chain operations, affecting customer satisfaction.",
        solution: "Process assessment, bottleneck identification, centralized platform implementation, workflow optimization for better collaboration.",
        fullContent: {
            overview: "A fashion company sought to improve the efficiency of its supply chain team, which was struggling with communication breakdowns and delayed shipments that were affecting customer satisfaction and operational costs.",
            challenge: "The supply chain team was facing significant challenges with communication breakdowns and delayed shipments. Information silos between departments led to duplicated efforts, missed deadlines, and confusion about order status. The lack of a centralized system meant team members spent excessive time tracking down information rather than solving problems, leading to frustrated employees and unhappy customers.",
            solution: "Global Thread FZ initiated a thorough assessment of the existing processes and identified key bottlenecks in information flow and decision-making. By implementing a centralized communication platform and streamlining workflows, we facilitated better collaboration among team members and improved transparency in operations:\n\n• Process mapping to identify inefficiencies and bottlenecks\n• Implementation of centralized communication and project management platform\n• Development of standardized workflows and SOPs\n• Training programs for team adoption of new systems\n• Establishment of clear escalation procedures\n• Regular performance reviews and continuous improvement cycles",
            results: "As a result, the supply chain team reduced lead times by 25% and significantly enhanced overall productivity, leading to improved service levels and customer satisfaction. Team morale also improved as frustration with inefficient processes was eliminated.",
            keyOutcomes: [
                "25% reduction in lead times",
                "Improved team collaboration and communication",
                "Enhanced transparency in operations",
                "Higher customer satisfaction scores",
                "Increased team productivity and morale"
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
        excerpt: "Faced with persistent supply chain delays and long lead times affecting operations in North America, a fashion company needed a strategic solution.",
        challenge: "Persistent delays and long lead times between North American operations and Asian manufacturing hindered business performance.",
        solution: "Established dedicated China-based support team enabling real-time communication, quick issue resolution, enhanced supplier collaboration.",
        fullContent: {
            overview: "Faced with persistent supply chain delays and long lead times affecting operations in North America, a fashion company needed a strategic solution to bridge the gap between their headquarters and Asian manufacturing facilities.",
            challenge: "The company was experiencing persistent delays and long lead times between their North American operations and Asian manufacturing facilities. Time zone differences, language barriers, and lack of real-time oversight meant that issues often went unresolved for days, compounding delays and affecting delivery schedules. Customer satisfaction was declining, and the company was losing competitive advantage.",
            solution: "Global Thread FZ facilitated the establishment of an in-office support team in China to bridge the gap between the North American operations and the manufacturing processes. This new setup allowed for real-time communication, quicker issue resolution, and enhanced collaboration with local suppliers:\n\n• Recruitment and training of dedicated China-based support team\n• Implementation of real-time communication protocols\n• Development of escalation procedures for quick issue resolution\n• Establishment of regular check-ins with local suppliers\n• Creation of performance dashboards for monitoring key metrics\n• Integration of local team with North American operations workflow",
            results: "As a result, the company experienced a 30% reduction in lead times and improved delivery schedules, significantly boosting customer satisfaction and operational efficiency. The local team became an invaluable extension of the North American operations, providing eyes and ears on the ground.",
            keyOutcomes: [
                "30% reduction in lead times",
                "Improved delivery schedule adherence",
                "Real-time issue resolution capability",
                "Enhanced supplier collaboration",
                "Significantly boosted customer satisfaction"
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
