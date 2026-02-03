import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import useMediaQuery from '../hooks/useMediaQuery';

const COLORS = {
    opticalWhite: '#FEFFFF',
    darkCharcoal: '#111111',
    bronze: '#C5A059',
    gold: '#D4AF37',
    textSecondary: 'rgba(255, 255, 255, 0.7)',
    lightGrey: 'rgba(255, 255, 255, 0.05)'
};

const stages = [
    {
        id: 'design',
        label: 'Design',
        cx: 300, cy: 100, // Top
        description: "From concept to design brief, the design process translates trends into products that meet the needs of today's demanding consumer. We leverage 3D Virtual Sampling to reduce lead times."
    },
    {
        id: 'sourcing',
        label: 'Sourcing',
        cx: 473, cy: 200, // Top Right
        description: "Our extensive network allows us to source the right factories for your product, ensuring quality, compliance, and cost-efficiency across multiple geographies."
    },
    {
        id: 'production',
        label: 'Production',
        cx: 473, cy: 400, // Bottom Right
        description: "Real-time visibility into production lines allows for proactive quality control and timeline management. We ensure your specifications are met with precision."
    },
    {
        id: 'logistics',
        label: 'Logistics',
        cx: 300, cy: 500, // Bottom
        description: "Seamless global logistics solutions moving goods from factory floor to distribution centers. We optimize routes and simplify customs brokerage."
    },
    {
        id: 'retail',
        label: 'Retail',
        cx: 127, cy: 300, // Left
        description: "Empowering retailers with data-driven insights and agile supply chains to react to market demands instantly and reduce inventory risks."
    }
];

// Re-calculated positions for a perfect circle of radius 150 centered at 300,300
// 0 deg is right (3:00). We want Design at top (-90 deg).
// Design (-90): 300, 150
// Sourcing (-18): 442, 253  (72 deg step)
// Production (54): 388, 421
// Logistics (126): 211, 421
// Retail (198 - actually 198 is left-ish? Let's stick to visible visual placement)
// Let's use simple trigonometry for 5 points starting from -90deg (top).
const center = { x: 300, y: 300 };
const radius = 180;
const points = stages.map((stage, i) => {
    const angle = (i * 72 - 90) * (Math.PI / 180);
    return {
        ...stage,
        cx: center.x + radius * Math.cos(angle),
        cy: center.y + radius * Math.sin(angle)
    };
});


const SupplyChainOrchestration = () => {
    const isMobile = useMediaQuery('(max-width: 900px)');
    const [activeStage, setActiveStage] = useState(points[0]);
    const [isHovered, setIsHovered] = useState(false);

    return (
        <div style={{ marginTop: '8rem', color: COLORS.opticalWhite }}>

            {/* INTRO SECTION with IMAGE */}
            <div style={{
                display: 'grid',
                gridTemplateColumns: isMobile ? '1fr' : '1fr 1fr',
                gap: '4rem',
                alignItems: 'center',
                marginBottom: isMobile ? '3rem' : '8rem'
            }}>
                <motion.div
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: false, amount: 0.1, margin: "-50px" }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                >
                    <h3 style={{
                        fontSize: 'clamp(2rem, 4vw, 3rem)',
                        fontFamily: 'Playfair Display, serif',
                        color: COLORS.bronze,
                        marginBottom: '2rem',
                        lineHeight: 1.1
                    }}>
                        Supply Chain Innovation
                    </h3>
                    <p style={{
                        fontSize: '1.1rem',
                        lineHeight: 1.8,
                        color: COLORS.textSecondary,
                        marginBottom: '1.5rem',
                        fontFamily: 'Inter, sans-serif'
                    }}>
                        We convene the global supply chain creating customized, end-to-end supply chain and logistics solutions for brands and retailers. What sets us apart is our high degree of flexibility and scalability which is unrivaled in our industry.
                    </p>
                    <p style={{
                        fontSize: '1.1rem',
                        lineHeight: 1.8,
                        color: COLORS.textSecondary,
                        fontFamily: 'Inter, sans-serif'
                    }}>
                        Millions of consumer goods pass through our supply chain every year. For that to happen, we connect thousands of suppliers and vendors with leading brands, all with the goal of meeting consumer demand.
                    </p>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    onHoverStart={() => setIsHovered(true)}
                    onHoverEnd={() => setIsHovered(false)}
                    viewport={{ once: false, amount: 0.3 }} // Ensures animation plays every scroll
                    transition={{ duration: 0.8 }}
                    style={{
                        position: 'relative',
                        height: '450px',
                        width: '100%',
                        borderRadius: '4px',
                        overflow: 'hidden',
                        cursor: 'pointer',
                        border: `1px solid ${COLORS.bronze}`, // Keep the frame border
                    }}
                >
                    {/* Global Supply Chain Visualization Image */}
                    <img
                        src="/assets/images/supply_chain_network_background.png"
                        alt="Global Supply Chain Network"
                        style={{
                            width: '100%',
                            height: '100%',
                            objectFit: 'cover', // Fills the frame completely (no gaps)
                            filter: 'brightness(0.9) contrast(1.1)',
                            transition: 'transform 0.5s ease',
                            transform: isHovered ? 'scale(1.05)' : 'scale(1)'
                        }}
                    />
                    <motion.div
                        initial={{ opacity: 0, x: 20 }}
                        animate={{
                            opacity: isHovered ? 1 : 0,
                            x: isHovered ? 0 : 20
                        }}
                        transition={{ duration: 0.3, ease: "easeOut" }}
                        style={{
                            position: 'absolute',
                            bottom: '20px',
                            right: '20px',
                            background: 'rgba(0,0,0,0.85)',
                            padding: '10px 20px',
                            borderLeft: `2px solid ${COLORS.bronze}`,
                            color: 'white',
                            fontFamily: 'Outfit, sans-serif',
                            fontSize: '0.9rem',
                            backdropFilter: 'blur(4px)'
                        }}
                    >
                        Global Network Visualization
                    </motion.div>
                </motion.div>
            </div>


            {/* ORCHESTRATION CIRCLE SECTION */}
            <motion.h3
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: false, amount: 0.1, margin: "-50px" }}
                transition={{ duration: 0.8, ease: "easeOut" }}
                style={{
                    fontSize: 'clamp(2rem, 3vw, 2.5rem)',
                    fontFamily: 'Outfit, sans-serif',
                    color: COLORS.opticalWhite,
                    marginBottom: isMobile ? '0rem' : '4rem',
                    textAlign: 'center',
                    borderTop: `1px solid ${COLORS.lightGrey}`,
                    paddingTop: isMobile ? '3rem' : '4rem'
                }}>
                Supply Chain <span style={{ color: COLORS.bronze, fontFamily: 'Playfair Display, serif', fontStyle: 'italic' }}>Orchestration</span>
            </motion.h3>

            <div style={{
                display: 'flex',
                flexDirection: isMobile ? 'column' : 'row',
                alignItems: 'center',
                justifyContent: 'center',
                gap: isMobile ? '0rem' : '4rem'
            }}>
                {/* SVG CIRCLE */}
                <div style={{
                    position: 'relative',
                    width: '600px',
                    height: '600px',
                    maxWidth: '100vw',
                    maxHeight: '100vw',
                    transform: isMobile ? 'scale(0.9)' : 'none',
                    marginTop: isMobile ? '-40px' : '0',
                    marginBottom: isMobile ? '-40px' : '0'
                }}>
                    <svg width="100%" height="100%" viewBox="0 0 600 600">
                        {/* Connecting Circle */}
                        <circle cx="300" cy="300" r={radius} fill="none" stroke={COLORS.bronze} strokeWidth="1" opacity="0.3" />

                        {/* Points */}
                        {points.map((point, i) => {
                            const isActive = activeStage.id === point.id;
                            return (
                                <g
                                    key={point.id}
                                    onClick={() => setActiveStage(point)}
                                    onMouseEnter={() => !isMobile && setActiveStage(point)}
                                    style={{ cursor: 'pointer' }}
                                >
                                    {/* Hover Area / Click Area */}
                                    <circle cx={point.cx} cy={point.cy} r="40" fill="transparent" />

                                    {/* Visible Dot */}
                                    <motion.circle
                                        cx={point.cx}
                                        cy={point.cy}
                                        r={isActive ? 8 : 5}
                                        fill={isActive ? COLORS.bronze : COLORS.darkCharcoal}
                                        stroke={COLORS.bronze}
                                        strokeWidth={isActive ? 0 : 2}
                                        animate={{ r: isActive ? 10 : 5 }}
                                    />

                                    {/* Label */}
                                    <text
                                        x={point.cx}
                                        y={point.cy - 25}
                                        textAnchor="middle"
                                        fill={isActive ? COLORS.bronze : COLORS.textSecondary}
                                        style={{
                                            fontSize: '14px',
                                            fontFamily: 'Outfit, sans-serif',
                                            fontWeight: isActive ? 600 : 400,
                                            textTransform: 'uppercase',
                                            letterSpacing: '1px'
                                        }}
                                    >
                                        {point.label}
                                    </text>
                                </g>
                            );
                        })}
                    </svg>
                </div>

                {/* CONTENT PANEL */}
                <div style={{
                    flex: 1,
                    maxWidth: '500px',
                    padding: '2rem',
                    background: 'rgba(255,255,255,0.02)',
                    borderLeft: `1px solid ${COLORS.bronze}`,
                    minHeight: '250px',
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'center'
                }}>
                    <AnimatePresence mode="wait">
                        <motion.div
                            key={activeStage.id}
                            initial={{ opacity: 0, y: 10 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: -10 }}
                            transition={{ duration: 0.3 }}
                        >
                            <h4 style={{
                                fontSize: '2rem',
                                color: COLORS.bronze,
                                marginBottom: '1.5rem',
                                fontFamily: 'Playfair Display, serif'
                            }}>
                                {activeStage.label}
                            </h4>
                            <p style={{
                                fontSize: '1.1rem',
                                lineHeight: 1.7,
                                color: COLORS.textSecondary,
                                fontFamily: 'Inter, sans-serif'
                            }}>
                                {activeStage.description}
                            </p>
                        </motion.div>
                    </AnimatePresence>
                </div>
            </div>

        </div>
    );
};

export default SupplyChainOrchestration;
