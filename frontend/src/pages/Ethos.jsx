import React, { useRef } from 'react';
import { motion, useScroll, useTransform, useMotionValue } from 'framer-motion';

// --- Assets / Icons ---
// Updated to high-quality Unsplash Images for consistent "High-Tech/Dark" aesthetic
const IMAGES = {
    heroNodes: "https://images.unsplash.com/photo-1614728853911-04df86576839?auto=format&fit=crop&q=80&w=2574", // Golden Global Network
    triadGrid: "https://images.unsplash.com/photo-1550684848-fac1c5b4e853?auto=format&fit=crop&q=80&w=2670", // Abstract Grid/Blueprint
    tunnel1: "https://images.unsplash.com/photo-1519608487953-e999c86e7455?auto=format&fit=crop&q=80&w=2670",   // Glass/Light/Transparency
    tunnel2: "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?auto=format&fit=crop&q=80&w=2670",  // Agility: Cybersecurity/Speed
    tunnel3: "https://images.unsplash.com/photo-1563986768609-322da13575f3?auto=format&fit=crop&q=80&w=2670",  // Compliance: Digital Security/Shield
    founder: "/assets/karina-founder.jpg" // Karina - Founder
};

const Icons = {
    Transparency: () => (
        <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
            <path d="M2 12h20M12 2v20" opacity="0.2" />
            <circle cx="12" cy="12" r="8" />
            <path d="M12 8v4h4" />
        </svg>
    ),
    Agility: () => (
        <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
            <path d="M12 2v4M12 18v4M4.93 4.93l2.83 2.83M16.24 16.24l2.83 2.83M2 12h4M18 12h4M4.93 19.07l2.83-2.83M16.24 7.76l2.83-2.83" />
        </svg>
    ),
    Compliance: () => (
        <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
            <rect x="3" y="11" width="18" height="10" rx="2" />
            <circle cx="12" cy="5" r="3" />
            <path d="M12 8v3" />
        </svg>
    )
};

// --- 5.1 Scroll Progress Sidebar (From Sketch) ---
const ScrollProgressTracker = () => {
    const { scrollYProgress } = useScroll();
    const thumbY = useTransform(scrollYProgress, [0, 1], ['5vh', '95vh']);

    return (
        <div style={{ position: 'fixed', top: 0, right: '25px', height: '100vh', width: '2px', zIndex: 50, pointerEvents: 'none' }}>
            {/* Track */}
            <div style={{ position: 'absolute', top: '5vh', bottom: '5vh', width: '1px', background: 'rgba(255,255,255,0.1)' }} />
            {/* Thumb */}
            <motion.div style={{
                y: thumbY, position: 'absolute', top: 0, left: '-2px',
                width: '6px', height: '30px', background: '#fff', borderRadius: '1px',
                boxShadow: '0 0 10px rgba(255,255,255,0.5)'
            }} />
        </div>
    );
};

// --- 5.0 Global Spine: "The Meandering Data Path" ---
const GlobalSpine = () => {
    const { scrollYProgress } = useScroll();

    // Path Concept: "Ghum kr jaye" (Winds through the entire page content)
    // UPDATED: Start at 22% (After Hero Section) from Left
    // M 0 22 -> Starts at 0% X, 22% Y (approx 200vh down)
    // Then curves into the main flow
    const pathDefinition = "M 0 22 C 10 25, 50 28, 50 35 S 10 45, 10 50 S 90 60, 90 70 S 50 80, 50 90 L 50 95 C 50 98, 95 98, 95 100";

    return (
        <div style={{
            position: 'absolute', top: 0, left: 0, right: 0, bottom: 0,
            zIndex: 1, pointerEvents: 'none', overflow: 'hidden'
        }}>
            <svg
                style={{ width: '100%', height: '100%', filter: 'drop-shadow(0 0 10px rgba(197, 160, 89, 0.5))' }}
                viewBox="0 0 100 100"
                preserveAspectRatio="none"
            >
                {/* Active Fill - Traveling Pulse (Worm) */}
                <motion.path
                    d={pathDefinition}
                    fill="none"
                    stroke="url(#spineGradient)"
                    strokeWidth="4"
                    strokeLinecap="round"
                    vectorEffect="non-scaling-stroke"
                    style={{
                        pathLength: 0.15,
                        pathSpacing: 1,
                        // Start animation when user reaches approx 15-20% scroll (End of Hero)
                        pathOffset: useTransform(scrollYProgress, [0.15, 1], [-0.15, 1]),
                        // Fade in quickly at that point
                        opacity: useTransform(scrollYProgress, [0.15, 0.2], [0, 1])
                    }}
                />

                <defs>
                    <linearGradient id="spineGradient" x1="0%" y1="0%" x2="0%" y2="100%">
                        <stop offset="0%" stopColor="var(--color-heritage-bronze)" />
                        <stop offset="50%" stopColor="var(--color-cashmere-gold)" />
                        <stop offset="100%" stopColor="#fff" />
                    </linearGradient>
                </defs>
            </svg>
        </div>
    )
}

// --- 1.0 Hero: "The Architectural Blueprint" ---
// --- 1.0 Hero: "The Architectural Blueprint" ---
const EthosHero = () => {
    const containerRef = useRef(null);
    const { scrollYProgress } = useScroll({ target: containerRef, offset: ["start start", "end end"] });

    // Scroll-Driven Reveals
    const protectOpacity = useTransform(scrollYProgress, [0, 0.15], [0, 1]);
    const protectBlur = useTransform(scrollYProgress, [0, 0.15], ['blur(20px)', 'blur(0px)']);
    const protectX = useTransform(scrollYProgress, [0, 0.15], [-50, 0]);

    const optOpacity = useTransform(scrollYProgress, [0.15, 0.3], [0, 1]);
    const optBlur = useTransform(scrollYProgress, [0.15, 0.3], ['blur(20px)', 'blur(0px)']);
    const optX = useTransform(scrollYProgress, [0.15, 0.3], [50, 0]);

    return (
        <section
            ref={containerRef}
            style={{
                height: '200vh',
                marginTop: 'calc(var(--header-height) * -1)',
                position: 'relative',
                background: '#050505',
            }}
        >
            {/* Sticky Container */}
            <div style={{ position: 'sticky', top: 0, height: '100vh', overflow: 'hidden', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>

                {/* New "Dark Fiber" Background - Updated to Golden Global Network */}
                <motion.div
                    style={{
                        position: 'absolute', inset: 0,
                        backgroundImage: `url(${IMAGES.heroNodes})`,
                        backgroundSize: 'cover', backgroundPosition: 'center',
                        opacity: 0.5, // Standard visibility
                        filter: 'grayscale(20%) contrast(1.2) brightness(0.8)', // Gold tint preserved
                        scale: 1.1
                    }}
                />
                {/* Overlay Gradient */}
                <div style={{ position: 'absolute', inset: 0, background: 'radial-gradient(circle at center, transparent 0%, #050505 90%)' }} />

                {/* Content Container - Asymmetric Layout */}
                <motion.div style={{ zIndex: 10, width: '100%', maxWidth: '1600px', padding: '0 4vw' }}>

                    {/* Line 1: Left Aligned */}
                    <div style={{ display: 'flex', alignItems: 'baseline', gap: '2rem', marginBottom: '4rem' }}>
                        <motion.h2
                            style={{
                                opacity: protectOpacity, filter: protectBlur, x: protectX,
                                fontSize: 'clamp(4rem, 9vw, 10rem)', fontWeight: 800, color: '#fff', letterSpacing: '-0.03em', lineHeight: 0.9
                            }}
                        >
                            Protecting
                        </motion.h2>
                        <motion.span
                            initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 1, delay: 0.5 }}
                            style={{ fontSize: 'clamp(1rem, 2vw, 2rem)', fontFamily: 'monospace', color: '#888', textTransform: 'uppercase', letterSpacing: '0.1em' }}
                        >
                            The Product
                        </motion.span>
                    </div>

                    {/* Line 2: Right Aligned */}
                    <div style={{ display: 'flex', alignItems: 'baseline', justifyContent: 'flex-end', gap: '2rem' }}>
                        <motion.span
                            initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 1, delay: 0.5 }}
                            style={{ fontSize: 'clamp(1rem, 2vw, 2rem)', fontFamily: 'monospace', color: 'var(--color-heritage-bronze)', textTransform: 'uppercase', letterSpacing: '0.1em', textAlign: 'right' }}
                        >
                            The Process
                        </motion.span>
                        <motion.h2
                            style={{
                                opacity: optOpacity, filter: optBlur, x: optX,
                                fontSize: 'clamp(4rem, 9vw, 10rem)', fontWeight: 800, color: 'var(--color-heritage-bronze)', letterSpacing: '-0.03em', lineHeight: 0.9, textAlign: 'right'
                            }}
                        >
                            Optimizing
                        </motion.h2>
                    </div>

                </motion.div>
            </div>
        </section>
    );
};

// --- 2.0 Triad: "The Extraction" ---
const TRIAD_DATA = [
    {
        icon: Icons.Transparency,
        label: "INTEGRITY",
        sub: "The Core Foundation",
        angle: 0, // 0 deg relative to container (Right Side)
        description: "The foundation of trust. Every process is transparent, traceable, and accountable."
    },
    {
        icon: Icons.Compliance,
        label: "SAFETY",
        sub: "Risk Elimination",
        angle: 120, // 120 deg
        description: "Mitigating risk before it manifests. Built-in compliance with industry standards."
    },
    {
        icon: Icons.Agility,
        label: "AGILITY",
        sub: "High-Speed Protocol",
        angle: 240, // 240 deg
        description: "Speed without sacrifice. Adapting to change while maintaining precision."
    }
];

const GTTriad = () => {
    const containerRef = useRef(null);
    const { scrollYProgress } = useScroll({ target: containerRef, offset: ["start start", "end end"] });

    // PHASE 1: Expansion (0-15%)
    const expansion = useTransform(scrollYProgress, [0, 0.15], [0, 300]);
    // PHASE 2: Panel moves left (15-20%) -> NO SCALING, just move left
    // Panel stays left - next section scrolls in
    const panelX = useTransform(scrollYProgress, [0.15, 0.20], ['0%', '-35%']);
    const panelScale = 1; // Keep same size throughout


    // ROTATION LOGIC: "Spin then Stop"
    // Node 1 (0deg) Active (0.2-0.4): Rotation 0.
    // Spin to Node 2 (120deg) (0.4-0.45): Rotation -120.
    // Node 2 Active (0.45-0.65): Rotation -120.
    // Spin to Node 3 (240deg) (0.65-0.7): Rotation -240.
    // Node 3 Active (0.7-0.9): Rotation -240.

    const turbineRotate = useTransform(scrollYProgress,
        [0.2, 0.4, 0.45, 0.65, 0.7, 0.9],
        [0, 0, -120, -120, -240, -240]
    );

    return (
        <section ref={containerRef} style={{ height: '700vh', background: '#080808', position: 'relative' }}>
            {/* Tech Background */}
            <div style={{
                position: 'absolute', inset: 0,
                backgroundImage: `url(${IMAGES.triadGrid})`,
                backgroundSize: 'cover', backgroundPosition: 'center',
                opacity: 0.1, mixBlendMode: 'screen', filter: 'grayscale(100%)'
            }} />

            <div style={{ position: 'sticky', top: 0, height: '100vh', display: 'flex', alignItems: 'center', justifyContent: 'center', zIndex: 10 }}>

                {/* Turbine Panel */}
                <motion.div style={{
                    x: panelX,
                    scale: panelScale,
                    rotate: turbineRotate,
                    position: 'absolute',
                    width: '800px', height: '800px',
                    display: 'flex', alignItems: 'center', justifyContent: 'center',
                    zIndex: 10 // Ensure Turbine/Nodes sit ABOVE the GlobalSpine (z=1)
                }}>
                    {/* Turbine Blocking Background (Hides Spine) */}
                    <div style={{ position: 'absolute', width: '200px', height: '200px', background: '#080808', borderRadius: '50%', boxShadow: '0 0 50px #000' }} />

                    {/* Turbine Core Rings */}
                    <div style={{ position: 'absolute', width: '200px', height: '200px', border: '2px dashed #444', borderRadius: '50%' }} />
                    <div style={{ position: 'absolute', width: '350px', height: '350px', border: '1px solid var(--color-heritage-bronze)', borderRadius: '50%', opacity: 0.3 }} />
                    <div style={{ position: 'absolute', width: '600px', height: '600px', border: '1px solid rgba(255,255,255,0.05)', borderRadius: '50%' }} />

                    {/* Nodes - Integrated Fly-out Logic */}
                    <TriadNode
                        item={TRIAD_DATA[0]} expansion={expansion} progress={scrollYProgress}
                        activeRange={[0.2, 0.4]} turbineRotate={turbineRotate}
                    />
                    <TriadNode
                        item={TRIAD_DATA[1]} expansion={expansion} progress={scrollYProgress}
                        activeRange={[0.45, 0.65]} turbineRotate={turbineRotate}
                    />
                    <TriadNode
                        item={TRIAD_DATA[2]} expansion={expansion} progress={scrollYProgress}
                        activeRange={[0.7, 0.9]} turbineRotate={turbineRotate}
                    />

                </motion.div>
            </div>
        </section>
    );
};

// Node that lives on the turbine but can "detach" and fly right
const TriadNode = ({ item, expansion, progress, activeRange, turbineRotate }) => {
    const Icon = item.icon;
    const rad = item.angle * (Math.PI / 180);

    // Calculate Fly-Out Distance
    // Reduced distance so nodes stay visible
    const flyOutDist = useTransform(progress,
        [activeRange[0], activeRange[0] + 0.05, activeRange[1] - 0.05, activeRange[1]],
        [0, 400, 400, 0]
    );

    // Scale Up when flying out (moderate scale)
    const activeScale = useTransform(progress,
        [activeRange[0], activeRange[0] + 0.05, activeRange[1] - 0.05, activeRange[1]],
        [1, 1.5, 1.5, 1]
    );

    // Counter-rotate to keep text upright (Ferris Wheel effect)
    const counterRotate = useTransform(turbineRotate, r => -r);

    // Combine expansion and flyOut to get total distance from center
    const currentDist = useTransform([expansion, flyOutDist], ([e, f]) => e + f);
    const x = useTransform(currentDist, d => Math.cos(rad) * d);
    const y = useTransform(currentDist, d => Math.sin(rad) * d);

    // Content Reveal
    const contentOpacity = useTransform(progress,
        [activeRange[0] + 0.05, activeRange[0] + 0.1, activeRange[1] - 0.1, activeRange[1] - 0.05],
        [0, 1, 1, 0]
    );

    return (
        <React.Fragment>
            {/* Mechanical Tether Line */}
            <motion.div style={{
                position: 'absolute',
                top: '50%', left: '50%',
                height: '1px',
                background: 'linear-gradient(90deg, transparent, var(--color-heritage-bronze), transparent)',
                width: currentDist,
                originX: 0,
                rotate: item.angle, // Rotate to match the node's angle
                zIndex: 0,
                opacity: 0.6
            }} />

            <motion.div style={{
                x, y,
                scale: activeScale,
                rotate: counterRotate,
                position: 'absolute',
                top: '50%', left: '50%', // Origin Point
                width: 0, height: 0,
                zIndex: 1,
                display: 'flex', alignItems: 'center', justifyContent: 'center'
            }}>

                {/* The Node Icon - Centered on the Point */}
                <div style={{
                    position: 'absolute',
                    top: '-30px', left: '-30px',
                    width: '60px', height: '60px',
                    background: 'rgba(20,20,25,0.95)', border: '1px solid rgba(255,255,255,0.2)', borderRadius: '50%',
                    display: 'flex', alignItems: 'center', justifyContent: 'center',
                    color: 'var(--color-heritage-bronze)',
                    boxShadow: '0 0 30px rgba(0,0,0,0.5)',
                    flexShrink: 0
                }}>
                    <Icon />
                </div>

                {/* Details Text - Positioned BELOW the Node */}
                <motion.div style={{
                    opacity: contentOpacity,
                    position: 'absolute',
                    top: '80px', // Below the 60px icon (+ gap)
                    left: '50%',
                    transform: 'translateX(-50%)',
                    width: '400px', // Limit width for readability
                    textAlign: 'center',
                    pointerEvents: 'none',
                    display: 'flex', flexDirection: 'column', alignItems: 'center',
                    // Clean text only, no card background
                }}>
                    <h3 style={{ color: '#fff', fontSize: '1.5rem', fontWeight: 700, marginBottom: '0.5rem' }}>{item.label}</h3>
                    <span style={{ color: 'var(--color-heritage-bronze)', fontFamily: 'monospace', display: 'block', marginBottom: '1rem' }}>{item.sub}</span>
                    <p style={{ color: '#aaa', fontSize: '0.9rem', lineHeight: 1.6 }}>{item.description}</p>
                </motion.div>

            </motion.div>
        </React.Fragment>
    );
};

// --- 3.0 Values: "The Z-Axis Tunnel" ---
const ValueTunnel = () => {
    const containerRef = useRef(null);
    const { scrollYProgress } = useScroll({ target: containerRef, offset: ["start start", "end end"] });

    return (
        <section ref={containerRef} style={{ height: '400vh', background: '#000', position: 'relative' }}>
            <div style={{ position: 'sticky', top: 0, height: '100vh', overflow: 'hidden', display: 'flex', alignItems: 'center', justifyContent: 'center', zIndex: 10 }}>

                {/* Moving Grid Background */}
                <motion.div style={{
                    position: 'absolute', inset: -100,
                    backgroundImage: 'linear-gradient(rgba(255,255,255,0.05) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.05) 1px, transparent 1px)',
                    backgroundSize: '100px 100px',
                    scale: useTransform(scrollYProgress, [0, 1], [1, 3]),
                    opacity: 0.3
                }} />

                <TunnelStage progress={scrollYProgress} range={[0, 0.35]} title="TRANSPARENCY" sub="ABSOLUTE VISIBILITY" img={IMAGES.tunnel1} />
                <TunnelStage progress={scrollYProgress} range={[0.35, 0.7]} title="AGILITY" sub="HIGH-SPEED ADAPTATION" img={IMAGES.tunnel2} />
                <TunnelStage progress={scrollYProgress} range={[0.7, 1]} title="COMPLIANCE" sub="ENGINEERED SAFETY" img={IMAGES.tunnel3} />



            </div>
        </section>
    );
};

const TunnelStage = ({ progress, range, title, sub, img }) => {
    // New Animation: "Holographic 3D Flip"
    const opacity = useTransform(progress, [range[0], range[0] + 0.1, range[1] - 0.1, range[1]], [0, 1, 1, 0]);
    const scale = useTransform(progress, [range[0], range[1]], [0.9, 1.05]); // Subtle breathe
    const rotateX = useTransform(progress, [range[0], range[1]], [25, 0]); // Reduced tilt for visibility
    const y = useTransform(progress, [range[0], range[1]], [100, -50]);

    // Scanline motion
    const scanTop = useTransform(progress, [range[0], range[1]], ['0%', '100%']);

    return (
        <motion.div style={{
            opacity, scale, rotateX, y,
            transformPerspective: 1200,
            position: 'absolute', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center',
            width: '100%', height: '100%'
        }}>
            {/* Holographic Frame - Upscaled & Premium */}
            <div style={{
                width: '80vw', height: '65vh',  // SIGNIFICANTLY LARGER
                maxWidth: '1400px', maxHeight: '900px',
                overflow: 'hidden', borderRadius: '4px', marginBottom: '3rem', position: 'relative',
                background: '#050505',
                border: '1px solid rgba(197, 160, 89, 0.2)', // Thinner, elegant border
                boxShadow: '0 20px 80px rgba(0,0,0,0.8), 0 0 0 1px rgba(197, 160, 89, 0.1)' // Deep shadow + subtle ring
            }}>
                {/* Tech Corner Markers */}
                <div style={{ position: 'absolute', top: 0, left: 0, width: '10px', height: '10px', borderTop: '2px solid var(--color-heritage-bronze)', borderLeft: '2px solid var(--color-heritage-bronze)', zIndex: 2 }}></div>
                <div style={{ position: 'absolute', bottom: 0, right: 0, width: '10px', height: '10px', borderBottom: '2px solid var(--color-heritage-bronze)', borderRight: '2px solid var(--color-heritage-bronze)', zIndex: 2 }}></div>

                <img src={img} alt={title} style={{ width: '100%', height: '100%', objectFit: 'cover', opacity: 0.9, filter: 'contrast(1.2)' }} />

                {/* The Scanline */}
                <motion.div style={{
                    position: 'absolute', top: scanTop, left: 0, right: 0, height: '2px',
                    background: 'rgba(255,255,255,0.8)',
                    boxShadow: '0 0 10px rgba(255,255,255,1)',
                    zIndex: 3
                }} />

                <div style={{ position: 'absolute', bottom: 0, left: 0, right: 0, height: '50%', background: 'linear-gradient(to top, black, transparent)' }} />
            </div>

            <h2 style={{ fontSize: 'clamp(3rem, 8vw, 6rem)', fontWeight: 800, color: '#fff', lineHeight: 0.9, textShadow: '0 0 20px #000, 0 0 10px #000' }}>{title}</h2>
            <span style={{ color: 'var(--color-heritage-bronze)', fontFamily: 'monospace', letterSpacing: '0.2em', textShadow: '0 0 10px #000' }}>{sub}</span>
        </motion.div>
    )
};


// --- 4.0 Founder: "Decryption Terminal" ---
const FounderUnknown = () => {
    const containerRef = useRef(null);
    const { scrollYProgress } = useScroll({ target: containerRef, offset: ["start end", "end end"] });

    // Decrypt effect
    const maskWidth = useTransform(scrollYProgress, [0.2, 0.5], ['100%', '0%']);

    return (
        <section ref={containerRef} style={{ height: '200vh', background: '#050505', position: 'relative' }}>
            <div style={{ position: 'sticky', top: 0, height: '100vh', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                <div style={{ maxWidth: '1000px', width: '100%', padding: '2rem', display: 'flex', gap: '4rem', alignItems: 'center' }}>

                    {/* Image with Decryption Mask */}
                    <div style={{ flex: 1, position: 'relative' }}>
                        <img
                            src={IMAGES.founder}
                            alt="Karina"
                            style={{ width: '100%', filter: 'contrast(1.2)' }}
                        />
                        <motion.div style={{
                            position: 'absolute', inset: 0, background: '#050505',
                            width: maskWidth, right: 0, left: 'auto',
                            borderLeft: '2px solid var(--color-heritage-bronze)'
                        }} />
                    </div>

                    {/* Terminal Text */}
                    <div style={{ flex: 1 }}>
                        <div style={{ fontFamily: 'monospace', color: 'var(--color-heritage-bronze)', marginBottom: '1.5rem' }}>
                            DECRYPTING_MESSAGE...
                        </div>

                        <h2 style={{ fontSize: '3rem', fontWeight: 700, color: '#fff', marginBottom: '1.5rem', lineHeight: 1.1 }}>
                            "We do not build.<br /> We evolve."
                        </h2>
                        <p style={{ color: '#888', lineHeight: 1.6, fontFamily: 'monospace' }}>
                            &gt; The objective is not just to deliver.<br />
                            &gt; It is to redefine the standard of delivery.<br />
                            &gt; Precision is our only currency.
                        </p>
                        <div style={{ marginTop: '2rem', border: '1px solid #333', padding: '1rem', display: 'inline-block', fontFamily: 'monospace', fontSize: '0.9rem', letterSpacing: '0.1em' }}>
                            Karina Khalife
                        </div>
                    </div>

                </div>
            </div>
        </section>
    );
}

const Ethos = () => {
    return (
        <main style={{ position: 'relative' }}>
            <GlobalSpine />
            <EthosHero />
            <GTTriad />
            <ValueTunnel />
            <FounderUnknown />
        </main>
    );
};

export default Ethos;
