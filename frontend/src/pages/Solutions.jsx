import React, { useRef, useState } from 'react';
import { motion, useScroll, useTransform, AnimatePresence } from 'framer-motion';
import useMediaQuery from '../hooks/useMediaQuery';

// --- Monochrome Fashion Palette ---
const COLORS = {
    opticalWhite: '#FEFFFF',
    darkCharcoal: '#111111',
    bronze: '#C5A059',
    gold: '#D4AF37',
    // Derived grays
    text: '#111111',
    textSecondary: 'rgba(17, 17, 17, 0.6)',
    borderLight: 'rgba(17, 17, 17, 0.1)'
};

// --- Solution Cards Data ---
// --- SVG Icons ---
const SolutionIcons = {
    Procurement: () => (
        <svg width="100%" height="100%" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
            <rect x="3" y="3" width="18" height="18" rx="2" />
            <path d="M3 9h18M9 21V9" />
        </svg>
    ),
    Process: () => (
        <svg width="100%" height="100%" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
            <circle cx="12" cy="12" r="3" />
            <path d="M12 1v6m0 6v6M1 12h6m6 0h6" />
            <circle cx="12" cy="12" r="10" opacity="0.3" />
        </svg>
    ),
    Integration: () => (
        <svg width="100%" height="100%" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
            <path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71" />
            <path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71" />
        </svg>
    ),
    Advisory: () => (
        <svg width="100%" height="100%" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
            <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
            <path d="M9 12l2 2 4-4" />
        </svg>
    )
};

// --- Solution Cards Data ---
const SOLUTIONS = [
    {
        id: 'procurement',
        title: 'Intelligent Supply Enablement',
        subtitle: 'Sourcing & Cost Optimization',
        description: 'Optimize sourcing, reduce costs, and strengthen supplier performance without compromising on quality or compliance.',
        metrics: { value: 'Up to 30%', label: 'Cost Reduction' },
        icon: 'Procurement',
        bgImage: 'https://images.pexels.com/photos/5710046/pexels-photo-5710046.jpeg?auto=compress&cs=tinysrgb&w=1600',
        whatWeDo: [
            { title: 'Supply Chain Design & Optimization', desc: 'Redesign sourcing and supply flows to improve lead times, resilience, and total landed cost.' },
            { title: 'Global Supplier Identification & Integration', desc: 'Find, qualify, and onboard international suppliers; while ensuring they can meet your specs, timelines, and compliance needs.' },
            { title: 'Strategic Procurement Negotiations', desc: 'Secure better pricing, payment terms, MOQs, and service levels with risk and quality clauses built in.' },
            { title: 'Supplier Capacity Assessment', desc: 'Validate whether suppliers can truly scale (labor, machinery, quality systems, throughput) before you commit.' }
        ],
        problemsWeSolve: [
            'Costs rising but pricing pressure from customers is increasing',
            'Supplier delays, missed shipments, or inconsistent capacity during peak demand',
            'Over-dependence on a few vendors / limited geographic sourcing options',
            'Contracts that look good on paper but fail during execution'
        ],
        keyBenefits: [
            'Lower total procurement cost (not just unit price)',
            'Faster supplier onboarding and fewer sourcing surprises',
            'More reliable delivery performance and fewer escalations'
        ]
    },
    {
        id: 'process',
        title: 'Performance & Process Transformation',
        subtitle: 'Operational Excellence',
        description: 'Streamline operations, eliminate waste, and improve throughput with practical process improvements that stick.',
        metrics: { value: '45%', label: 'Efficiency Gain (Avg)' },
        icon: 'Process',
        bgImage: 'https://images.pexels.com/photos/3738088/pexels-photo-3738088.jpeg?auto=compress&cs=tinysrgb&w=1600',
        whatWeDo: [
            { title: 'Operational Excellence', desc: 'Improve efficiency and cost-effectiveness across functions with SOPs, controls, and performance routines.' },
            { title: 'Workflow & Process Optimization', desc: 'Streamline operations, optimize handoffs, and reduce bottlenecks to improve speed and quality across your supply chain.' }
        ],
        problemsWeSolve: [
            'Productivity is inconsistent across lines/sites/teams',
            'High rework/defects, firefighting culture, unclear ownership',
            'Long cycle times, frequent bottlenecks, and "hidden factories"',
            'Processes exist but are not followed (because they\'re not workable)'
        ],
        keyBenefits: [
            'Measurable improvements in throughput, quality, and labor efficiency',
            'Standardized SOPs along with practical governance to sustain gains',
            'Better predictability in daily/weekly performance'
        ]
    },
    {
        id: 'integration',
        title: 'Enterprise Connectivity & Traceability',
        subtitle: 'Data & Systems Harmony',
        description: 'Connect systems, standardize data, and create operational harmony across procurement, production, and compliance.',
        metrics: { value: '99.2%', label: 'Compliance (Global)' },
        icon: 'Integration',
        bgImage: 'https://images.pexels.com/photos/996329/pexels-photo-996329.jpeg?auto=compress&cs=tinysrgb&w=1600',
        whatWeDo: [
            { title: 'Product Traceability Solutions', desc: 'Implement traceability across the supply chain to track materials/products end-to-end for transparency and faster issue resolution.' },
            { title: 'Supplier Onboarding & Data Integration', desc: 'Create consistent supplier master data, documentation workflows, and connectivity so purchasing and operations run cleanly.' }
        ],
        problemsWeSolve: [
            'Data mismatch across teams',
            'Traceability gaps causing recalls, compliance issues, or customer disputes',
            'Slow approvals and fragmented workflows across procurement and operations',
            'Limited visibility into supplier performance and production status'
        ],
        keyBenefits: [
            'Cleaner master data and fewer operational errors',
            'Faster root-cause analysis when issues occur',
            'Better reporting, accountability, and audit readiness'
        ]
    },
    {
        id: 'advisory',
        title: 'Risk, Compliance & Growth Advisory',
        subtitle: 'Expert Strategic Guidance',
        description: 'Make confident decisions with expert guidance that is grounded in execution realities and market dynamics.',
        metrics: { value: '100%', label: 'Audit Success (Cases)' },
        icon: 'Advisory',
        bgImage: 'https://images.pexels.com/photos/6214476/pexels-photo-6214476.jpeg?auto=compress&cs=tinysrgb&w=1600',
        whatWeDo: [
            { title: 'Regulatory Compliance Advisory', desc: 'Translate standards into practical controls and workflows so teams comply without slowing the business.' },
            { title: 'Sourcing, Operations & Risk Advisory', desc: 'Strategy support for market shifts, supplier risk, cost pressures, expansion, and operational scaling.' }
        ],
        problemsWeSolve: [
            'Failing audits or unclear compliance requirements',
            'Policies exist, but controls aren\'t embedded into day-to-day operations',
            'Leadership decisions lack reliable data, benchmarks, or scenario clarity',
            'Expansion introduces new regulatory, supplier, and execution risks'
        ],
        keyBenefits: [
            'Audit preparedness and reduced compliance risk',
            'Clear roadmaps with "who-does-what-by-when" execution plans',
            'Stronger governance and decision-making confidence'
        ]
    }
];

// ... (Timeline Data remains same)

// ... (Hero Section remains same)

// ...



// --- Timeline Data ---
const TIMELINE_STEPS = [
    { phase: '01', title: 'Diagnostic', desc: 'We audit your current chain.' },
    { phase: '02', title: 'Strategy', desc: 'We design the optimization roadmap.' },
    { phase: '03', title: 'Deployment', desc: 'We execute with boots on the ground.' },
    { phase: '04', title: 'Optimization', desc: 'Continuous improvement cycles.' }
];

// --- 1.0 Hero Section ---
const SolutionsHero = () => {
    const isMobile = useMediaQuery('(max-width: 768px)');
    const containerRef = useRef(null);
    const { scrollYProgress } = useScroll({ target: containerRef, offset: ["start start", "end start"] });

    const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);
    const scale = useTransform(scrollYProgress, [0, 0.5], [1, 0.98]);
    const y = useTransform(scrollYProgress, [0, 0.5], [0, isMobile ? -30 : -100]);

    return (
        <section ref={containerRef} style={{
            height: isMobile ? '80svh' : '100vh',
            background: COLORS.darkCharcoal,
            position: 'relative',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            overflow: 'hidden'
        }}>
            {/* Cinematic Animated Background */}
            <style>{`
                @keyframes solutionsZoom {
                    0%, 100% { transform: scale(1); }
                    50% { transform: scale(1.08); }
                }
            `}</style>

            <div style={{
                position: 'absolute',
                inset: 0,
                backgroundImage: 'url(https://images.unsplash.com/photo-1470309864661-68328b2cd0a5?auto=format&fit=crop&q=80&w=2574)',
                backgroundSize: 'cover',
                backgroundPosition: isMobile ? 'center center' : 'center 30%',
                filter: isMobile ? 'brightness(0.5) contrast(1.1)' : 'brightness(0.6) contrast(1.1)',
                animation: 'solutionsZoom 25s ease-in-out infinite',
                zIndex: 0
            }} />

            {/* Gradient Overlay */}
            <div style={{
                position: 'absolute',
                inset: 0,
                background: isMobile ? 'rgba(17,17,17,0.7)' : 'radial-gradient(circle at center, transparent 0%, rgba(17,17,17,0.8) 100%)',
                zIndex: 1
            }} />


            <motion.div style={{ opacity, scale, y, textAlign: 'left', zIndex: 10, padding: isMobile ? '0 1.5rem' : '0 4rem', maxWidth: '1400px', width: '100%' }}>
                <motion.h1
                    initial={{ opacity: 0, y: 50, scale: 0.97 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    transition={{ duration: 0.9, delay: 0.1, ease: [0.25, 0.1, 0.25, 1] }}
                    style={{
                        fontSize: 'clamp(2.5rem, 8vw, 7rem)',
                        fontWeight: 600,
                        color: COLORS.opticalWhite,
                        letterSpacing: '-0.03em',
                        lineHeight: 1.15,
                        marginBottom: '2rem',
                        fontFamily: 'Outfit, sans-serif'
                    }}
                >
                    Strategy with Intent.<br />Execution with Precision.<br />Partnerships Built to Last.
                </motion.h1>

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.7, delay: 0.25, ease: [0.25, 0.1, 0.25, 1] }}
                    style={{
                        display: 'inline-flex',
                        padding: '0.75rem 1.5rem',
                        background: 'rgba(255, 255, 255, 0.15)',
                        borderRadius: '2rem',
                        backdropFilter: 'blur(20px)',
                        WebkitBackdropFilter: 'blur(20px)',
                        boxShadow: '0 4px 30px rgba(0, 0, 0, 0.1)'
                    }}
                >
                    <span style={{
                        fontSize: '0.9rem',
                        color: '#EBCB8B', // Lighter bronze/gold for contrast
                        fontFamily: 'monospace',
                        fontWeight: 600,
                        letterSpacing: '0.1em',
                        textTransform: 'uppercase'
                    }}>Fashion Supply-Chain Consultancy</span>
                </motion.div>
            </motion.div>
        </section >
    );
};

// --- Categories Component ---
const Categories = () => {
    const isMobile = useMediaQuery('(max-width: 768px)');
    const categories = [
        // Kidswear: Stylish child model
        { name: "Kidswear", img: "https://images.unsplash.com/photo-1503919545889-aef636e10ad4?auto=format&fit=crop&q=80&w=600" },
        // Activewear: Yoga/Gym aesthetic
        { name: "Activewear", img: "https://images.unsplash.com/photo-1518310383802-640c2de311b2?auto=format&fit=crop&q=80&w=600" },
        // Intimates: Soft, silk/texture vibe - NEW IMAGE
        { name: "Intimates", img: "https://images.unsplash.com/photo-1469334031218-e382a71b716b?auto=format&fit=crop&q=80&w=600" },
        // Swimwear: Pool/Beach editorial - NEW IMAGE
        { name: "Swimwear", img: "https://images.unsplash.com/photo-1532453288672-3a27e9be9efd?auto=format&fit=crop&q=80&w=600" },
        // Sportswear: Outdoor/Performance
        { name: "Sportswear", img: "https://images.unsplash.com/photo-1517836357463-d25dfeac3438?auto=format&fit=crop&q=80&w=600" },
        // Outerwear: Coat/Winter fashion
        { name: "Outerwear", img: "https://images.unsplash.com/photo-1544022613-e87ca75a784a?auto=format&fit=crop&q=80&w=600" }
    ];

    return (
        <section style={{
            background: COLORS.darkCharcoal,
            padding: isMobile ? '4rem 1rem' : '8rem 4rem',
            paddingBottom: '0'
        }}>
            <div className="container" style={{ maxWidth: '1400px' }}>
                <motion.div
                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: false, amount: 0.2 }}
                    transition={{ duration: 0.8 }}
                    style={{ textAlign: 'center', marginBottom: '5rem' }}
                >
                    <h2 style={{
                        fontSize: 'clamp(2.5rem, 4vw, 3.5rem)',
                        fontFamily: 'Playfair Display, serif',
                        fontStyle: 'italic',
                        color: COLORS.opticalWhite,
                        marginBottom: '1rem'
                    }}>
                        Categories We Master
                    </h2>
                </motion.div>

                <div style={{
                    display: 'grid',
                    gridTemplateColumns: isMobile ? 'repeat(2, 1fr)' : 'repeat(6, 1fr)',
                    gap: isMobile ? '1rem' : '1.5rem'
                }}>
                    {categories.map((cat, i) => (
                        <motion.div
                            key={i}
                            initial={{ opacity: 0, y: 50, rotateX: 10 }}
                            whileInView={{ opacity: 1, y: 0, rotateX: 0 }}
                            viewport={{ once: false, amount: 0.1 }}
                            transition={{
                                delay: i * 0.1,
                                duration: 0.8,
                                type: "spring",
                                stiffness: 50
                            }}
                            whileHover={{ y: -10, transition: { duration: 0.3 } }}
                            style={{
                                position: 'relative',
                                height: isMobile ? '250px' : '500px',
                                overflow: 'hidden',
                                borderRadius: '4px',
                                cursor: 'default',
                                boxShadow: '0 10px 30px rgba(0,0,0,0.3)'
                            }}
                        >
                            <motion.img
                                src={cat.img}
                                alt={cat.name}
                                style={{
                                    width: '100%',
                                    height: '100%',
                                    objectFit: 'cover',
                                    filter: 'grayscale(100%) brightness(0.9)'
                                }}
                                whileHover={{
                                    scale: 1.1,
                                    filter: 'grayscale(0%) brightness(1)',
                                }}
                                transition={{ duration: 0.5 }}
                            />

                            {/* Overlay Gradient */}
                            <div style={{
                                position: 'absolute',
                                bottom: 0,
                                left: 0,
                                width: '100%',
                                height: '50%',
                                background: 'linear-gradient(to top, rgba(0,0,0,0.9), transparent)',
                                pointerEvents: 'none',
                                zIndex: 1
                            }} />

                            <div style={{
                                position: 'absolute',
                                bottom: '1.5rem',
                                left: 0,
                                width: '100%',
                                textAlign: 'center',
                                zIndex: 2,
                                pointerEvents: 'none'
                            }}>
                                <span style={{
                                    color: '#fff',
                                    fontFamily: 'Outfit, sans-serif',
                                    fontSize: isMobile ? '1rem' : '1.2rem',
                                    fontWeight: 500,
                                    letterSpacing: '0.15em',
                                    textTransform: 'uppercase',
                                    textShadow: '0 2px 10px rgba(0,0,0,0.5)'
                                }}>
                                    {cat.name}
                                </span>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

// --- 2.0 Solutions Slides - Simple Scrolling ---

// --- Solution Detail Modal ---
const SolutionDetailModal = ({ solution, onClose }) => {
    const isMobile = useMediaQuery('(max-width: 768px)');

    // Lock body scroll when modal is open
    React.useEffect(() => {
        document.body.style.overflow = 'hidden';
        return () => {
            document.body.style.overflow = 'unset';
        };
    }, []);

    if (!solution) return null;

    return (
        <AnimatePresence>
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                onClick={onClose}
                onWheel={(e) => e.stopPropagation()}
                onTouchMove={(e) => e.stopPropagation()}
                style={{
                    position: 'fixed',
                    inset: 0,
                    backgroundColor: 'rgba(0,0,0,0.95)',
                    zIndex: 10000,
                    overflowY: 'auto',
                    overflowX: 'hidden',
                    padding: isMobile ? '2rem 1rem' : '4rem 2rem',
                    WebkitOverflowScrolling: 'touch', // Smooth scrolling on iOS
                    cursor: 'default' // Ensure cursor is always visible
                }}
            >
                <motion.div
                    initial={{ scale: 0.9, y: 50 }}
                    animate={{ scale: 1, y: 0 }}
                    exit={{ scale: 0.9, y: 50 }}
                    onClick={(e) => e.stopPropagation()}
                    style={{
                        maxWidth: '1200px',
                        margin: '0 auto',
                        background: '#0f0f0f',
                        borderRadius: '24px',
                        overflow: 'hidden',
                        border: `1px solid ${COLORS.bronze}`,
                        cursor: 'auto' // Ensure cursor is visible on content
                    }}
                >
                    {/* Header with Background Image */}
                    <div style={{
                        position: 'relative',
                        height: isMobile ? '200px' : '300px',
                        backgroundImage: `url(${solution.bgImage})`,
                        backgroundSize: 'cover',
                        backgroundPosition: 'center'
                    }}>
                        <div style={{
                            position: 'absolute',
                            inset: 0,
                            background: 'linear-gradient(to bottom, rgba(0,0,0,0.6), rgba(15,15,15,1))'
                        }} />

                        {/* Close Button */}
                        <button
                            onClick={(e) => {
                                e.stopPropagation();
                                onClose();
                            }}
                            style={{
                                position: 'absolute',
                                top: '1.5rem',
                                right: '1.5rem',
                                background: 'rgba(0,0,0,0.6)',
                                border: `2px solid ${COLORS.bronze}`,
                                borderRadius: '50%',
                                width: '48px',
                                height: '48px',
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'center',
                                cursor: 'pointer',
                                color: COLORS.opticalWhite,
                                fontSize: '1.75rem',
                                fontWeight: 300,
                                backdropFilter: 'blur(10px)',
                                zIndex: 1000,
                                transition: 'all 0.2s ease'
                            }}
                            onMouseEnter={(e) => {
                                e.currentTarget.style.background = COLORS.bronze;
                                e.currentTarget.style.color = '#0a0a0a';
                                e.currentTarget.style.transform = 'scale(1.1)';
                            }}
                            onMouseLeave={(e) => {
                                e.currentTarget.style.background = 'rgba(0,0,0,0.6)';
                                e.currentTarget.style.color = COLORS.opticalWhite;
                                e.currentTarget.style.transform = 'scale(1)';
                            }}
                        >
                            ×
                        </button>

                        {/* Title Section */}
                        <div style={{
                            position: 'absolute',
                            bottom: '2rem',
                            left: isMobile ? '1.5rem' : '3rem',
                            right: isMobile ? '1.5rem' : '3rem'
                        }}>
                            <div style={{
                                display: 'inline-block',
                                padding: '0.5rem 1rem',
                                background: 'rgba(184, 134, 11, 0.15)',
                                border: `1px solid ${COLORS.bronze}`,
                                borderRadius: '50px',
                                fontSize: '0.75rem',
                                fontWeight: 500,
                                letterSpacing: '0.1em',
                                textTransform: 'uppercase',
                                color: COLORS.bronze,
                                marginBottom: '1rem',
                                fontFamily: 'monospace'
                            }}>
                                {solution.subtitle}
                            </div>
                            <h2 style={{
                                fontSize: isMobile ? '1.75rem' : '2.5rem',
                                fontWeight: 600,
                                color: COLORS.opticalWhite,
                                margin: 0,
                                fontFamily: 'Outfit, sans-serif'
                            }}>
                                {solution.title}
                            </h2>
                        </div>
                    </div>

                    {/* Content */}
                    <div style={{
                        padding: isMobile ? '2rem 1.5rem' : '3rem'
                    }}>
                        {/* Description */}
                        <p style={{
                            fontSize: '1.1rem',
                            lineHeight: 1.7,
                            color: 'rgba(255,255,255,0.8)',
                            marginBottom: '3rem',
                            fontFamily: 'Inter, sans-serif'
                        }}>
                            {solution.description}
                        </p>

                        {/* What We Do */}
                        <section style={{ marginBottom: '3rem' }}>
                            <h3 style={{
                                fontSize: '1.5rem',
                                fontWeight: 600,
                                color: COLORS.bronze,
                                marginBottom: '1.5rem',
                                fontFamily: 'Outfit, sans-serif'
                            }}>
                                What We Do
                            </h3>
                            <div style={{
                                display: 'grid',
                                gap: '1.5rem'
                            }}>
                                {solution.whatWeDo.map((item, idx) => (
                                    <div key={idx} style={{
                                        padding: '1.5rem',
                                        background: 'rgba(255,255,255,0.03)',
                                        borderRadius: '12px',
                                        border: '1px solid rgba(255,255,255,0.1)'
                                    }}>
                                        <h4 style={{
                                            fontSize: '1.1rem',
                                            fontWeight: 600,
                                            color: COLORS.opticalWhite,
                                            marginBottom: '0.75rem',
                                            fontFamily: 'Outfit, sans-serif'
                                        }}>
                                            {item.title}
                                        </h4>
                                        <p style={{
                                            fontSize: '0.95rem',
                                            lineHeight: 1.6,
                                            color: 'rgba(255,255,255,0.7)',
                                            margin: 0,
                                            fontFamily: 'Inter, sans-serif'
                                        }}>
                                            {item.desc}
                                        </p>
                                    </div>
                                ))}
                            </div>
                        </section>

                        {/* Problems We Solve */}
                        <section style={{ marginBottom: '3rem' }}>
                            <h3 style={{
                                fontSize: '1.5rem',
                                fontWeight: 600,
                                color: COLORS.bronze,
                                marginBottom: '1.5rem',
                                fontFamily: 'Outfit, sans-serif'
                            }}>
                                Problems We Solve
                            </h3>
                            <ul style={{
                                listStyle: 'none',
                                padding: 0,
                                margin: 0,
                                display: 'grid',
                                gap: '1rem'
                            }}>
                                {solution.problemsWeSolve.map((problem, idx) => (
                                    <li key={idx} style={{
                                        display: 'flex',
                                        alignItems: 'flex-start',
                                        gap: '1rem',
                                        fontSize: '1rem',
                                        lineHeight: 1.6,
                                        color: 'rgba(255,255,255,0.8)',
                                        fontFamily: 'Inter, sans-serif'
                                    }}>
                                        <span style={{ color: COLORS.bronze, fontSize: '1.5rem', lineHeight: 1 }}>•</span>
                                        {problem}
                                    </li>
                                ))}
                            </ul>
                        </section>

                        {/* Key Benefits */}
                        <section>
                            <h3 style={{
                                fontSize: '1.5rem',
                                fontWeight: 600,
                                color: COLORS.bronze,
                                marginBottom: '1.5rem',
                                fontFamily: 'Outfit, sans-serif'
                            }}>
                                Key Benefits
                            </h3>
                            <ul style={{
                                listStyle: 'none',
                                padding: 0,
                                margin: 0,
                                display: 'grid',
                                gap: '1rem'
                            }}>
                                {solution.keyBenefits.map((benefit, idx) => (
                                    <li key={idx} style={{
                                        display: 'flex',
                                        alignItems: 'flex-start',
                                        gap: '1rem',
                                        fontSize: '1rem',
                                        lineHeight: 1.6,
                                        color: 'rgba(255,255,255,0.8)',
                                        fontFamily: 'Inter, sans-serif'
                                    }}>
                                        <span style={{ color: COLORS.bronze, fontSize: '1.5rem', lineHeight: 1 }}>✓</span>
                                        {benefit}
                                    </li>
                                ))}
                            </ul>
                        </section>
                    </div>
                </motion.div>
            </motion.div>
        </AnimatePresence>
    );
};

// --- Mobile Stacked Layout (Accordion) ---
const MobileSolutionStack = () => {
    const [activeId, setActiveId] = useState(SOLUTIONS[0].id);
    const [selectedSolution, setSelectedSolution] = useState(null);

    return (
        <section style={{ padding: '6rem 1rem', background: '#0a0a0a' }}>
            <div className="container">
                <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                    {SOLUTIONS.map((solution) => {
                        const isActive = activeId === solution.id;
                        return (
                            <motion.div
                                key={solution.id}
                                layout
                                onClick={() => setActiveId(solution.id)}
                                style={{
                                    position: 'relative',
                                    borderRadius: '24px',
                                    overflow: 'hidden',
                                    cursor: 'pointer',
                                    height: isActive ? '500px' : '100px', // Collapsed vs Expanded
                                    border: isActive ? `1px solid ${COLORS.bronze}` : '1px solid rgba(255,255,255,0.1)'
                                }}
                                transition={{ type: 'spring', stiffness: 300, damping: 30 }}
                            >
                                {/* Background Image */}
                                <div style={{
                                    position: 'absolute',
                                    inset: 0,
                                    backgroundImage: `url(${solution.bgImage})`,
                                    backgroundSize: 'cover',
                                    backgroundPosition: 'center',
                                    filter: isActive ? 'brightness(0.6)' : 'brightness(0.3)',
                                    transition: 'filter 0.5s ease'
                                }} />

                                {/* Content Overlay */}
                                <div style={{
                                    position: 'absolute',
                                    inset: 0,
                                    padding: '1.5rem',
                                    display: 'flex',
                                    flexDirection: 'column',
                                    justifyContent: isActive ? 'flex-end' : 'center',
                                    background: isActive
                                        ? 'linear-gradient(to top, rgba(0,0,0,0.9), transparent)'
                                        : 'rgba(0,0,0,0.4)'
                                }}>
                                    {/* Header (Title + Subtitle) */}
                                    <motion.div layout="position" style={{
                                        display: 'flex',
                                        alignItems: 'center',
                                        justifyContent: 'space-between',
                                        width: '100%',
                                        marginBottom: isActive ? '1rem' : '0'
                                    }}>
                                        <h3 style={{
                                            margin: 0,
                                            fontSize: isActive ? '2rem' : '1.25rem',
                                            color: COLORS.opticalWhite,
                                            fontFamily: 'Outfit, sans-serif',
                                            fontWeight: 500
                                        }}>
                                            {solution.title}
                                        </h3>
                                        {!isActive && (
                                            <span style={{ fontSize: '1.5rem', color: COLORS.bronze }}>+</span>
                                        )}
                                    </motion.div>

                                    {/* Expanded Content (Description + Metrics) */}
                                    <AnimatePresence>
                                        {isActive && (
                                            <motion.div
                                                initial={{ opacity: 0 }}
                                                animate={{ opacity: 1 }}
                                                exit={{ opacity: 0 }}
                                                transition={{ duration: 0.3 }}
                                            >
                                                <div style={{
                                                    fontSize: '0.75rem',
                                                    color: COLORS.bronze,
                                                    textTransform: 'uppercase',
                                                    letterSpacing: '0.1em',
                                                    marginBottom: '1rem',
                                                    fontFamily: 'monospace'
                                                }}>
                                                    {solution.subtitle}
                                                </div>
                                                <p style={{
                                                    color: 'rgba(255,255,255,0.8)',
                                                    fontSize: '1rem',
                                                    lineHeight: 1.5,
                                                    marginBottom: '1.5rem',
                                                    fontFamily: 'Inter, sans-serif'
                                                }}>
                                                    {solution.description}
                                                </p>

                                                {/* View Details Button */}
                                                <button
                                                    onClick={(e) => {
                                                        e.stopPropagation();
                                                        setSelectedSolution(solution);
                                                    }}
                                                    style={{
                                                        padding: '0.75rem 1.5rem',
                                                        background: COLORS.bronze,
                                                        color: '#0a0a0a',
                                                        border: 'none',
                                                        borderRadius: '50px',
                                                        fontSize: '0.9rem',
                                                        fontWeight: 600,
                                                        cursor: 'pointer',
                                                        fontFamily: 'Outfit, sans-serif',
                                                        width: '100%'
                                                    }}
                                                >
                                                    View Details →
                                                </button>
                                            </motion.div>
                                        )}
                                    </AnimatePresence>
                                </div>
                            </motion.div>
                        );
                    })}
                </div>
            </div>

            {/* Render Detail Modal */}
            {selectedSolution && (
                <SolutionDetailModal
                    solution={selectedSolution}
                    onClose={() => setSelectedSolution(null)}
                />
            )}
        </section>
    );
};

// Desktop Stacked Scroll Component
const DesktopStackedScroll = () => {
    const targetRef = useRef(null);
    const [selectedSolution, setSelectedSolution] = useState(null);
    const { scrollYProgress } = useScroll({
        target: targetRef,
        offset: ["start start", "end end"]
    });

    return (
        <>
            <section
                ref={targetRef}
                style={{
                    position: 'relative',
                    height: `${100 + (SOLUTIONS.length - 1) * 100}vh`, // Total scroll height
                    background: '#0a0a0a'
                }}
            >
                <div style={{
                    position: 'sticky',
                    top: 0,
                    height: '100vh',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    overflow: 'hidden'
                }}>
                    {SOLUTIONS.map((solution, index) => (
                        <StackedCard
                            key={solution.id}
                            solution={solution}
                            index={index}
                            progress={scrollYProgress}
                            totalCards={SOLUTIONS.length}
                            onClick={() => setSelectedSolution(solution)}
                        />
                    ))}
                </div>
            </section>

            {/* Render Detail Modal */}
            {selectedSolution && (
                <SolutionDetailModal
                    solution={selectedSolution}
                    onClose={() => setSelectedSolution(null)}
                />
            )}
        </>
    );
};

const StackedCard = ({ solution, index, progress, totalCards, onClick }) => {
    const cardStart = index / totalCards;
    const cardEnd = (index + 1) / totalCards;

    // Scale: Cards scale down slightly as new ones stack on top
    const scale = useTransform(
        progress,
        [cardStart, cardEnd],
        [1, 0.94] // Subtle scale down when a new card appears
    );

    // Y Position: All cards slide to center (Y=0) creating stacked effect
    const y = useTransform(
        progress,
        [cardStart, cardEnd],
        [index === 0 ? '0%' : '100%', '0%'] // All cards end at same position
    );

    // Opacity: Cards remain visible when stacked
    const opacity = useTransform(
        progress,
        [cardStart - 0.05, cardStart, cardEnd],
        [index === 0 ? 1 : 0, 1, 1] // Fade in and stay visible
    );

    return (
        <motion.div
            onClick={onClick}
            style={{
                position: 'absolute',
                width: 'min(90%, 1100px)',
                height: '75vh',
                maxHeight: '650px',
                borderRadius: '24px',
                overflow: 'hidden',
                boxShadow: '0 20px 60px rgba(0,0,0,0.5)',
                backgroundColor: '#0a0a0a',
                scale,
                y,
                opacity,
                zIndex: index, // Later cards stack on top (index 1 > index 0)
                cursor: 'pointer',
                willChange: 'transform, opacity'
            }}
        >
            {/* Background Image */}
            <div style={{
                position: 'absolute',
                inset: 0,
                backgroundImage: `url(${solution.bgImage})`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                filter: 'brightness(0.5) saturate(1.1)'
            }} />

            {/* Darker Gradient Overlay for full opacity */}
            <div style={{
                position: 'absolute',
                inset: 0,
                background: 'linear-gradient(135deg, rgba(0,0,0,0.85) 0%, rgba(0,0,0,0.65) 100%)'
            }} />

            {/* Content */}
            <div style={{
                position: 'relative',
                zIndex: 10,
                height: '100%',
                padding: '3rem',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-between',
                color: COLORS.opticalWhite
            }}>
                {/* Top Section: Badge + Title */}
                <div>
                    {/* Subtitle Badge */}
                    <div style={{
                        display: 'inline-block',
                        padding: '0.4rem 1rem',
                        background: 'rgba(184, 134, 11, 0.12)',
                        border: `1px solid ${COLORS.bronze}`,
                        borderRadius: '50px',
                        fontSize: '0.7rem',
                        fontWeight: 600,
                        letterSpacing: '0.12em',
                        textTransform: 'uppercase',
                        color: COLORS.bronze,
                        marginBottom: '2rem',
                        fontFamily: 'monospace'
                    }}>
                        {solution.subtitle}
                    </div>

                    {/* Title */}
                    <h2 style={{
                        fontSize: 'clamp(2.5rem, 4.5vw, 4rem)',
                        fontWeight: 600,
                        lineHeight: 1,
                        marginBottom: '0',
                        fontFamily: 'Outfit, sans-serif',
                        letterSpacing: '-0.02em'
                    }}>
                        {solution.title}
                    </h2>
                </div>


                {/* Bottom Section: Description + Button */}
                <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem', maxWidth: '70%' }}>
                    {/* Description */}
                    <p style={{
                        fontSize: '1.1rem',
                        lineHeight: 1.7,
                        color: 'rgba(255,255,255,0.85)',
                        margin: 0,
                        fontFamily: 'Inter, sans-serif',
                        fontWeight: 300
                    }}>
                        {solution.description}
                    </p>

                    {/* Learn More Button */}
                    <button
                        onClick={(e) => {
                            e.stopPropagation();
                            onClick();
                        }}
                        style={{
                            display: 'inline-flex',
                            alignItems: 'center',
                            gap: '0.5rem',
                            padding: '0.875rem 1.75rem',
                            background: COLORS.bronze,
                            color: '#0a0a0a',
                            border: 'none',
                            borderRadius: '50px',
                            fontSize: '0.95rem',
                            fontWeight: 600,
                            cursor: 'pointer',
                            fontFamily: 'Outfit, sans-serif',
                            alignSelf: 'flex-start',
                            transition: 'all 0.3s ease',
                            boxShadow: '0 4px 15px rgba(197, 160, 89, 0.3)'
                        }}
                        onMouseEnter={(e) => {
                            e.currentTarget.style.transform = 'translateY(-2px)';
                            e.currentTarget.style.boxShadow = '0 6px 20px rgba(197, 160, 89, 0.4)';
                        }}
                        onMouseLeave={(e) => {
                            e.currentTarget.style.transform = 'translateY(0)';
                            e.currentTarget.style.boxShadow = '0 4px 15px rgba(197, 160, 89, 0.3)';
                        }}
                    >
                        Learn More →
                    </button>
                </div>
            </div>
        </motion.div>
    );
};

const BentoGrid = () => {
    const isMobile = useMediaQuery('(max-width: 768px)');

    if (isMobile) {
        return <MobileSolutionStack />;
    }

    return <DesktopStackedScroll />;
};

const SolutionSlide = ({ solution, index }) => {
    const isMobile = useMediaQuery('(max-width: 768px)');
    const containerRef = useRef(null);
    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start end", "end start"]
    });

    // Smooth scale and fade effects
    const scale = useTransform(scrollYProgress, [0, 0.3, 0.7, 1], [isMobile ? 1 : 0.9, 1.05, 1.05, isMobile ? 1 : 0.9]);
    const opacity = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [isMobile ? 0.3 : 0, 1, 1, isMobile ? 0.3 : 0]);

    // Multi-layer parallax
    const bgY = useTransform(scrollYProgress, [0, 1], ['-10%', '10%']);

    // Mask Reveal Animations (Staggered)
    const subtitleY = useTransform(scrollYProgress, [0.1, 0.35], ['100%', '0%']);
    const titleY = useTransform(scrollYProgress, [0.15, 0.4], ['100%', '0%']);
    const descY = useTransform(scrollYProgress, [0.2, 0.45], ['100%', '0%']);
    const metricsY = useTransform(scrollYProgress, [0.25, 0.5], ['100%', '0%']);

    return (
        <section
            ref={containerRef}
            style={{
                minHeight: isMobile ? '90vh' : '100vh',
                position: 'relative',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                overflow: 'hidden',
                perspective: '1500px'
            }}
        >
            {/* Animated Background with Parallax */}
            <motion.div
                style={{
                    position: 'absolute',
                    inset: 0,
                    width: '100%',
                    height: '100%',
                    backgroundImage: `url(${solution.bgImage})`,
                    backgroundSize: 'cover',
                    backgroundPosition: isMobile ? 'center 20%' : 'center center',
                    filter: isMobile ? 'brightness(0.5) saturate(1.1)' : 'brightness(0.85) saturate(1.15)',
                    y: bgY,
                    scale
                }}
            />

            {/* Dark Overlay for Monochrome Effect */}
            <div style={{
                position: 'absolute',
                inset: 0,
                background: 'linear-gradient(to bottom, rgba(17,17,17,0.3), rgba(17,17,17,0.85))',
                zIndex: 1
            }} />

            {/* Main Content - Editorial Layout */}
            <motion.div
                style={{
                    position: 'relative',
                    zIndex: 10,
                    width: '100%',
                    height: '100%',
                    padding: isMobile ? '10svh 2rem 8svh 2rem' : '6rem 4rem',
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'flex-end',
                    alignItems: 'flex-start',
                    textAlign: 'left'
                }}
            >
                <div style={{
                    width: '100%',
                    maxWidth: '1400px',
                    margin: '0 auto',
                    display: 'flex',
                    flexDirection: isMobile ? 'column' : 'row',
                    justifyContent: 'space-between',
                    alignItems: isMobile ? 'flex-start' : 'flex-end',
                    gap: isMobile ? '2.5rem' : '4rem'
                }}>
                    {/* Left Block: Text */}
                    <div style={{ flex: 1, minWidth: isMobile ? '100%' : '300px', opacity: 1, transform: 'translateY(0)' }}>
                        {/* Subtitle Badge */}
                        <motion.div style={{
                            display: 'inline-block',
                            padding: '0.5rem 1.25rem',
                            border: `1px solid ${COLORS.bronze}`,
                            borderRadius: '2rem',
                            background: 'rgba(17, 17, 17, 0.4)',
                            backdropFilter: 'blur(10px)',
                            marginBottom: isMobile ? '1.5rem' : '2rem',
                            y: subtitleY
                        }}>
                            <span style={{
                                fontSize: '0.75rem',
                                color: COLORS.bronze,
                                fontFamily: 'monospace',
                                letterSpacing: '0.15em',
                                textTransform: 'uppercase'
                            }}>
                                {solution.subtitle}
                            </span>
                        </motion.div>

                        {/* Title */}
                        <div style={{ overflow: 'hidden', marginBottom: isMobile ? '1.25rem' : '2rem', paddingBottom: '0.5rem' }}>
                            <motion.h2 style={{
                                fontSize: isMobile ? '3.2rem' : 'clamp(4rem, 9vw, 8rem)',
                                fontWeight: 600,
                                color: COLORS.opticalWhite,
                                letterSpacing: '-0.02em',
                                lineHeight: 1,
                                fontFamily: 'Outfit, sans-serif',
                                margin: 0,
                                y: titleY
                            }}>
                                {solution.title}
                            </motion.h2>
                        </div>

                        {/* Description - Compact */}
                        <div style={{ overflow: 'hidden', maxWidth: '600px', paddingBottom: '0.5rem', margin: '0' }}>
                            <motion.p style={{
                                color: 'rgba(255,255,255,0.85)',
                                fontSize: isMobile ? '1rem' : '1.2rem',
                                lineHeight: 1.6,
                                fontWeight: 300,
                                y: descY
                            }}>
                                {solution.description}
                            </motion.p>
                        </div>
                    </div>

                    {/* Right Block: Metrics (Big Number) */}
                    <div style={{ overflow: 'hidden' }}>
                        <motion.div style={{
                            display: 'flex',
                            flexDirection: 'column',
                            alignItems: isMobile ? 'flex-start' : 'flex-end',
                            y: metricsY
                        }}>
                            <motion.div
                                style={{
                                    fontSize: 'clamp(4.5rem, 10vw, 9rem)',
                                    fontWeight: 800,
                                    color: COLORS.opticalWhite,
                                    letterSpacing: '-0.04em',
                                    lineHeight: 0.9
                                }}
                            >
                                {solution.metrics.value}
                            </motion.div>
                            <div style={{
                                fontSize: '0.85rem',
                                color: COLORS.bronze,
                                textTransform: 'uppercase',
                                letterSpacing: '0.2em',
                                fontFamily: 'monospace',
                                marginTop: '0.5rem'
                            }}>
                                {solution.metrics.label}
                            </div>
                        </motion.div>
                    </div>
                </div>
            </motion.div>

            {/* Gradient Overlay for Readability at Bottom */}
            <div style={{
                position: 'absolute',
                inset: 0,
                background: 'linear-gradient(to top, rgba(17,17,17,0.9) 0%, rgba(17,17,17,0.4) 50%, transparent 100%)',
                zIndex: 1
            }} />
        </section>
    );
};

// --- 3.0 Timeline ---
const EngagementTimeline = () => {
    const isMobile = useMediaQuery('(max-width: 768px)');
    const containerRef = useRef(null);
    const { scrollYProgress } = useScroll({ target: containerRef, offset: ["start start", "end end"] });

    // Move all useTransform hooks to the top level
    const galleryOpacity = useTransform(scrollYProgress, [0, 0.1], [0, 1]);
    const progressWidth = useTransform(scrollYProgress, [0, 1], ['0%', '100%']);

    return (
        <section ref={containerRef} style={{ height: isMobile ? '300vh' : '400vh', background: COLORS.opticalWhite, position: 'relative' }}>
            <div style={{ position: 'sticky', top: 0, height: '100vh', display: 'flex', alignItems: 'center', justifyContent: 'center', overflow: 'hidden' }}>
                {/* Pattern Background */}
                <motion.div style={{
                    position: 'absolute',
                    inset: 0,
                    backgroundImage: `
                        repeating-linear-gradient(0deg, transparent, transparent 19px, rgba(17, 17, 17, 0.015) 19px, rgba(17, 17, 17, 0.015) 20px),
                        repeating-linear-gradient(90deg, transparent, transparent 19px, rgba(17, 17, 17, 0.015) 19px, rgba(17, 17, 17, 0.015) 20px)
                    `,
                    backgroundSize: '20px 20px',
                    opacity: 1
                }} />

                <div style={{ maxWidth: '1400px', width: '100%', padding: isMobile ? '0 1.5rem' : '0 4rem', zIndex: 10, display: 'flex', flexDirection: 'column', height: '100%', justifyContent: isMobile ? 'flex-start' : 'center', paddingTop: isMobile ? '6rem' : '0' }}>

                    {/* Top Row: Header + Dynamic Image */}
                    <div style={{ display: 'flex', flexDirection: isMobile ? 'column' : 'row', justifyContent: 'space-between', alignItems: 'center', marginBottom: isMobile ? '2rem' : '4rem', gap: isMobile ? '2rem' : '4rem' }}>

                        {/* Left: Header Text */}
                        <motion.div
                            initial={{ opacity: 0, y: 40 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.8 }}
                            style={{
                                maxWidth: '600px',
                                textAlign: isMobile ? 'center' : 'left',
                                display: 'flex',
                                flexDirection: 'column',
                                alignItems: isMobile ? 'center' : 'flex-start'
                            }}
                        >
                            <div style={{
                                display: 'inline-flex',
                                padding: '0.4rem 1.2rem',
                                background: 'rgba(17, 17, 17, 0.05)',
                                border: '1px solid rgba(17, 17, 17, 0.1)',
                                borderRadius: '2rem',
                                marginBottom: '2rem'
                            }}>
                                <span style={{
                                    fontSize: '0.7rem',
                                    color: COLORS.bronze,
                                    fontFamily: 'monospace',
                                    letterSpacing: '0.15em',
                                    textTransform: 'uppercase'
                                }}>ENGAGEMENT PROCESS</span>
                            </div>

                            <motion.h2
                                style={{
                                    fontSize: 'clamp(2.5rem, 6vw, 5rem)',
                                    fontWeight: 500,
                                    color: COLORS.text,
                                    lineHeight: 1.1,
                                    fontFamily: 'Outfit, sans-serif',
                                    letterSpacing: '-0.03em'
                                }}
                            >
                                From Diagnostic<br />to Deployment
                            </motion.h2>
                        </motion.div>

                        {/* Right: Dynamic Image Display */}
                        <motion.div
                            style={{
                                width: isMobile ? '280px' : '350px',
                                height: isMobile ? '280px' : '350px',
                                position: 'relative',
                                borderRadius: '50%',
                                overflow: 'hidden',
                                boxShadow: '0 20px 40px rgba(0,0,0,0.1)',
                                opacity: galleryOpacity,
                                marginTop: isMobile ? '2.5rem' : '0'
                            }}
                        >
                            <TimelineGallery scrollYProgress={scrollYProgress} isMobile={isMobile} />
                        </motion.div>
                    </div>

                    {/* Bottom Row: Timeline Steps */}
                    <div style={{ display: 'flex', gap: isMobile ? '1rem' : '3rem', alignItems: 'flex-start', position: 'relative', width: '100%' }}>
                        {TIMELINE_STEPS.map((step, idx) => (
                            <TimelineStep key={step.phase} step={step} index={idx} scrollProgress={scrollYProgress} isMobile={isMobile} />
                        ))}

                        {/* Progress Line */}
                        {!isMobile && (
                            <motion.div style={{
                                position: 'absolute',
                                top: '25px',
                                left: '25px',
                                right: '0',
                                width: '100%',
                                height: '1px',
                                background: 'rgba(197, 160, 89, 0.2)',
                                zIndex: 0
                            }}>
                                <motion.div style={{
                                    height: '100%',
                                    background: COLORS.bronze,
                                    width: progressWidth
                                }} />
                            </motion.div>
                        )}
                    </div>
                </div>
            </div>
        </section>
    );
};

const TimelineStep = ({ step, index, scrollProgress, isMobile }) => {
    // Dynamic logic for mobile/desktop
    const stepCount = TIMELINE_STEPS.length;
    const start = index * (1 / stepCount);
    const end = (index + 1) * (1 / stepCount);

    const opacity = useTransform(scrollProgress, [start, start + 0.1, end - 0.1, end], [0, 1, 1, isMobile ? 0 : 1]);
    const y = useTransform(scrollProgress, [start, start + 0.1], [30, 0]);

    return (
        <motion.div style={{
            opacity,
            y,
            flex: isMobile ? 'none' : 1,
            position: isMobile ? 'absolute' : 'relative',
            inset: isMobile ? '0' : 'auto',
            display: isMobile ? 'flex' : 'block',
            flexDirection: 'column',
            alignItems: isMobile ? 'center' : 'flex-start',
            justifyContent: 'flex-start',
            textAlign: isMobile ? 'center' : 'left',
            zIndex: 10,
            pointerEvents: isMobile ? 'none' : 'auto',
            paddingTop: isMobile ? '2rem' : '0',
            width: isMobile ? '100%' : 'auto'
        }}>
            {/* Phase Number Badge - Hidden on mobile */}
            {!isMobile && (
                <div style={{
                    width: '50px',
                    height: '50px',
                    borderRadius: '50%',
                    background: COLORS.opticalWhite,
                    border: `1px solid ${COLORS.bronze}`,
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    fontSize: '1.2rem',
                    fontWeight: 500,
                    color: COLORS.bronze,
                    marginBottom: '1.5rem',
                    fontFamily: 'Outfit, sans-serif'
                }}>
                    {step.phase}
                </div>
            )}

            {/* Title */}
            <h3 style={{
                fontSize: isMobile ? '2rem' : '1.5rem',
                fontWeight: 500,
                color: COLORS.text,
                marginBottom: isMobile ? '1rem' : '1rem',
                fontFamily: 'Outfit, sans-serif',
                letterSpacing: '-0.02em'
            }}>
                {step.title}
            </h3>

            {/* Description */}
            <p style={{
                color: COLORS.textSecondary,
                lineHeight: 1.7,
                fontSize: isMobile ? '1rem' : '0.95rem',
                fontFamily: 'Inter, sans-serif',
                maxWidth: isMobile ? '320px' : 'none',
                margin: isMobile ? '0 auto' : '0'
            }}>
                {step.desc}
            </p>
        </motion.div>
    );
};

const TimelineGallery = ({ scrollYProgress, isMobile }) => {
    const op0 = useTransform(scrollYProgress, [0, 0.2, 0.25], [1, 1, 0]);
    const op1 = useTransform(scrollYProgress, [0.25, 0.3, 0.5, 0.55], [0, 1, 1, 0]);
    const op2 = useTransform(scrollYProgress, [0.5, 0.55, 0.75, 0.8], [0, 1, 1, 0]);
    const op3 = useTransform(scrollYProgress, [0.75, 0.8, 1], [0, 1, 1]);

    const imageOpacities = [op0, op1, op2, op3];

    const STEP_IMAGES = [
        'https://images.pexels.com/photos/4614119/pexels-photo-4614119.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
        'https://images.pexels.com/photos/461035/pexels-photo-461035.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
        'https://images.pexels.com/photos/996329/pexels-photo-996329.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
        'https://images.pexels.com/photos/298863/pexels-photo-298863.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
    ];

    return (
        <>
            {STEP_IMAGES.map((imgSrc, idx) => (
                <motion.div
                    key={idx}
                    style={{
                        position: 'absolute',
                        inset: 0,
                        backgroundImage: `url(${imgSrc})`,
                        backgroundSize: 'cover',
                        backgroundPosition: isMobile ? 'center 20%' : 'center',
                        opacity: imageOpacities[idx],
                        filter: isMobile ? 'grayscale(0%) contrast(1.05) brightness(0.9)' : 'grayscale(30%) contrast(1.1)'
                    }}
                />
            ))}
        </>
    );
};

const Solutions = () => {
    const isMobile = useMediaQuery('(max-width: 768px)');
    return (
        <main style={{ background: COLORS.obsidian }}>
            <SolutionsHero />
            <Categories />

            <BentoGrid />
            <EngagementTimeline />
        </main>
    );
};

export default Solutions;
