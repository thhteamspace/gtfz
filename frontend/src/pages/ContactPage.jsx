import React, { useState } from 'react';
import { motion, useScroll, useTransform, AnimatePresence } from 'framer-motion';

const COLORS = {
    obsidian: '#0A0E1A',
    charcoal: '#121212',
    gold: '#D4AF6A',
    bronze: '#C5A059',
    white: '#F5F5F5',
    text: '#CCCCCC'
};

const ContactHero = () => {
    const { scrollY } = useScroll();
    const scrollRange = [0, 800];

    // Scroll Exit Transforms (Outer Wrapper)
    const scale = useTransform(scrollY, scrollRange, [1, 0.6]);
    const scrollYExit = useTransform(scrollY, scrollRange, [0, -120]);
    const opacity = useTransform(scrollY, scrollRange, [1, 0.2]);

    return (
        <section
            className="contact-hero"
            style={{
                height: '100vh',
                background: '#000',
                marginTop: 'calc(var(--header-height, 80px) * -1)',
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                position: 'sticky',
                top: 0,
                zIndex: 0,
                overflow: 'hidden'
            }}
        >
            {/* 1. SCROLL WRAPPER (Handles the Exit on Scroll) */}
            <motion.div
                className="hero-logo-scroll-wrapper"
                style={{
                    position: 'absolute',
                    top: '50%',
                    left: '50%',
                    x: '-50%',
                    y: scrollYExit, // Moves up on scroll
                    scale,          // Shrinks on scroll
                    opacity,        // Fades on scroll
                    marginTop: '-5%',
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center'
                }}
            >
                {/* 2. ENTRANCE WRAPPER (Handles the Premium Reveal) */}
                <div
                    className="hero-logo-entrance"
                    style={{
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: 'center'
                    }}
                >
                    {/* Masked Reveal Container */}
                    <div style={{ overflow: 'hidden' }}>
                        <h1 style={{
                            fontSize: 'clamp(6rem, 18vw, 16rem)',
                            fontWeight: 700,
                            color: COLORS.white,
                            letterSpacing: '0.05em',
                            lineHeight: 1.1,
                            margin: 0,
                            whiteSpace: 'nowrap',
                            display: 'flex',
                            padding: '1rem'
                        }}>
                            {['G', 'T', 'F', 'Z'].map((letter, index) => (
                                <motion.span
                                    key={index}
                                    initial={{ y: '110%' }} // Start completely below
                                    animate={{ y: '0%' }}   // Rise up
                                    transition={{
                                        duration: 1.2,
                                        ease: [0.22, 1, 0.36, 1], // Power3.out - Smooth & Premium
                                        delay: 0.1 + (index * 0.1) // Subtle stagger
                                    }}
                                    style={{ display: 'inline-block' }}
                                >
                                    {letter}
                                </motion.span>
                            ))}
                        </h1>
                    </div>

                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 1, duration: 1 }}
                        style={{
                            marginTop: '1rem',
                            color: COLORS.bronze,
                            letterSpacing: '0.3em',
                            fontFamily: 'monospace',
                            fontSize: '0.9rem',
                            textTransform: 'uppercase'
                        }}
                    >
                        Global Thread Free Zone
                    </motion.div>
                </div>
            </motion.div>

            <div style={{
                position: 'absolute',
                inset: 0,
                opacity: 0.05,
                backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.65' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)' opacity='1'/%3E%3C/svg%3E")`,
                pointerEvents: 'none',
                zIndex: -1
            }} />
        </section>
    );
};

// --- Form Components ---
const InputField = ({ label, type = "text", placeholder }) => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
        <label style={{ fontSize: '0.8rem', color: COLORS.bronze, textTransform: 'uppercase', letterSpacing: '0.1em' }}>{label}</label>
        <input
            type={type}
            placeholder={placeholder}
            style={{
                background: 'transparent',
                border: 'none',
                borderBottom: '1px solid rgba(255,255,255,0.2)',
                padding: '1rem 0',
                color: COLORS.white,
                fontSize: '1rem',
                outline: 'none',
                borderRadius: 0,
                transition: 'border-color 0.3s'
            }}
            onFocus={(e) => e.target.style.borderBottom = `1px solid ${COLORS.bronze}`}
            onBlur={(e) => e.target.style.borderBottom = '1px solid rgba(255,255,255,0.2)'}
        />
    </div>
);

const InquirySection = () => {
    // Removed internal scroll transforms to prevent transparency/messy overlap

    return (
        <section
            style={{
                minHeight: '100vh',
                background: COLORS.charcoal,
                position: 'sticky', // Sticky to allow FAQ to scroll over it cleanly
                top: 0,
                zIndex: 10,
                padding: '8rem 2rem',
                display: 'flex',
                alignItems: 'center',
                boxShadow: '0 -4px 30px rgba(0,0,0,0.5)' // Shadow for depth
            }}
        >
            <div
                style={{
                    maxWidth: '1200px',
                    width: '100%',
                    margin: '0 auto',
                    display: 'grid',
                    gridTemplateColumns: '1fr 1.2fr',
                    gap: '6rem'
                }}
            >
                {/* LEFT SIDE: Contextual Info */}
                <div style={{ display: 'flex', flexDirection: 'column', gap: '3rem' }}>
                    <div>
                        <h2 style={{ fontSize: '3rem', fontWeight: 300, color: COLORS.white, lineHeight: 1.2, marginBottom: '2rem' }}>
                            Let's discuss your <span style={{ color: COLORS.bronze, fontWeight: 600 }}>supply chain architecture.</span>
                        </h2>
                        <p style={{ color: COLORS.text, fontSize: '1.1rem', lineHeight: 1.6 }}>
                            Whether you need to optimize an existing network or build from the ground up, our team is ready to deploy.
                        </p>
                    </div>

                    <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}>
                        <div>
                            <h4 style={{ fontSize: '0.9rem', color: COLORS.bronze, textTransform: 'uppercase', letterSpacing: '0.1em', marginBottom: '1rem' }}>Locations</h4>
                            <ul style={{ listStyle: 'none', padding: 0, margin: 0, color: COLORS.white, fontSize: '1.2rem', display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
                                <li>Montreal, QC</li>
                                <li>Shanghai, CN</li>
                            </ul>
                        </div>
                        <div>
                            <h4 style={{ fontSize: '0.9rem', color: COLORS.bronze, textTransform: 'uppercase', letterSpacing: '0.1em', marginBottom: '1rem' }}>Contact</h4>
                            <a href="mailto:hello@gtfz.global" style={{ color: COLORS.white, fontSize: '1.2rem', textDecoration: 'none' }}>hello@gtfz.global</a>
                        </div>
                    </div>
                </div>

                {/* RIGHT SIDE: The Inquiry Form */}
                <div style={{ background: 'rgba(255,255,255,0.02)', padding: '3rem', borderRadius: '4px', border: '1px solid rgba(255,255,255,0.05)' }}>
                    <form style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}>
                        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '2rem' }}>
                            <InputField label="Name" placeholder="Jane Doe" />
                            <InputField label="Title" placeholder="Director of Sourcing" />
                        </div>
                        <InputField label="Company" placeholder="Global Brands Inc." />

                        <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
                            <label style={{ fontSize: '0.8rem', color: COLORS.bronze, textTransform: 'uppercase', letterSpacing: '0.1em' }}>Sector</label>
                            <select style={{
                                background: 'transparent',
                                border: 'none',
                                borderBottom: '1px solid rgba(255,255,255,0.2)',
                                padding: '1rem 0',
                                color: COLORS.white,
                                fontSize: '1rem',
                                outline: 'none',
                                borderRadius: 0
                            }}>
                                <option value="" disabled selected style={{ color: '#333' }}>Select your sector</option>
                                <option value="apparel" style={{ color: '#333' }}>Apparel</option>
                                <option value="footwear" style={{ color: '#333' }}>Footwear</option>
                                <option value="textile" style={{ color: '#333' }}>Textile</option>
                            </select>
                        </div>

                        <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
                            <label style={{ fontSize: '0.8rem', color: COLORS.bronze, textTransform: 'uppercase', letterSpacing: '0.1em' }}>Challenge Area</label>
                            <textarea
                                rows="4"
                                placeholder="Briefly describe your current supply chain challenges..."
                                style={{
                                    background: 'transparent',
                                    border: 'none',
                                    borderBottom: '1px solid rgba(255,255,255,0.2)',
                                    padding: '1rem 0',
                                    color: COLORS.white,
                                    fontSize: '1rem',
                                    outline: 'none',
                                    borderRadius: 0,
                                    resize: 'vertical'
                                }}
                            />
                        </div>

                        <button
                            type="button"
                            style={{
                                marginTop: '1rem',
                                padding: '1.2rem 3rem',
                                background: COLORS.bronze,
                                color: COLORS.obsidian,
                                border: 'none',
                                fontSize: '0.9rem',
                                fontWeight: 700,
                                textTransform: 'uppercase',
                                letterSpacing: '0.1em',
                                cursor: 'pointer',
                                alignSelf: 'flex-start'
                            }}
                        >
                            Send Inquiry
                        </button>
                    </form>
                </div>
            </div>
        </section>
    );
};

const FAQAccordion = ({ question, answer }) => {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <div style={{ borderBottom: '1px solid rgba(255,255,255,0.1)' }}>
            <div
                onClick={() => setIsOpen(!isOpen)}
                style={{
                    padding: '2rem 0',
                    display: 'flex',
                    justifyContent: 'space-between',
                    alignItems: 'center',
                    cursor: 'pointer'
                }}
            >
                <h4 style={{ fontSize: '1.2rem', fontWeight: 500, color: COLORS.white, margin: 0 }}>{question}</h4>
                <div style={{ color: COLORS.bronze, fontSize: '1.5rem', transform: isOpen ? 'rotate(45deg)' : 'rotate(0)', transition: 'transform 0.3s' }}>
                    +
                </div>
            </div>
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: 'auto', opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        style={{ overflow: 'hidden' }}
                    >
                        <p style={{ paddingBottom: '2rem', color: COLORS.text, lineHeight: 1.6 }}>{answer}</p>
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    );
};

const FAQSection = () => {
    const faqs = [
        { q: "Do you work with startups?", a: "We primarily work with established enterprise brands, but we do partner with high-growth startups that have secured Series B funding or beyond." },
        { q: "What regions do you cover?", a: "We have active on-ground operations in China, Vietnam, Bangladesh, and Turkey, with headquarters in Montreal." },
        { q: "How does your pricing model work?", a: "We typically operate on a retainer basis for advisory services, or a percentage-of-savings model for procurement optimization." }
    ];

    return (
        <section
            style={{
                minHeight: '80vh',
                padding: '8rem 2rem',
                background: COLORS.obsidian,
                position: 'relative', // Relative will scroll OVER the sticky InquirySection
                zIndex: 20,
                boxShadow: '0 -4px 30px rgba(0,0,0,0.5)'
            }}
        >
            <div style={{ maxWidth: '800px', margin: '0 auto' }}>
                <h2 style={{ fontSize: '2.5rem', fontWeight: 300, color: COLORS.white, marginBottom: '4rem', textAlign: 'center' }}>
                    Frequently Asked <span style={{ color: COLORS.bronze }}>Questions</span>
                </h2>
                <div>
                    {faqs.map((faq, i) => (
                        <FAQAccordion key={i} question={faq.q} answer={faq.a} />
                    ))}
                </div>
            </div>
        </section>
    );
};

const ContactPage = () => {
    return (
        <div style={{ background: COLORS.obsidian, minHeight: '200vh' }}>
            <ContactHero />
            <InquirySection />
            <FAQSection />
        </div>
    );
};

export default ContactPage;
