import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import RevealText from '../components/motion/RevealText';

const COLORS = {
    opticalWhite: '#FEFFFF',
    darkCharcoal: '#111111',
    bronze: '#C5A059',
    gold: '#D4AF37',
    text: '#111111',
    textSecondary: 'rgba(17, 17, 17, 0.6)',
    borderLight: 'rgba(17, 17, 17, 0.1)'
};

const ContactHero = () => {
    return (
        <section style={{
            height: '100vh',
            background: COLORS.darkCharcoal,
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            position: 'sticky',
            top: 0,
            overflow: 'hidden'
        }}>
            {/* Cinematic Fashion Production Video */}
            <video
                autoPlay
                muted
                loop
                playsInline
                style={{
                    position: 'absolute',
                    inset: 0,
                    width: '100%',
                    height: '100%',
                    objectFit: 'cover',
                    filter: 'brightness(0.4) saturate(1.1)',
                    zIndex: 0
                }}
                onError={(e) => {
                    e.target.style.display = 'none';
                    if (e.target.nextElementSibling) {
                        e.target.nextElementSibling.style.display = 'block';
                    }
                }}
            >
                <source src="https://assets.mixkit.co/videos/preview/mixkit-fashion-designer-cutting-fabric-42828-large.mp4" type="video/mp4" />
            </video>

            {/* Fallback Image */}
            <div style={{
                display: 'none',
                position: 'absolute',
                inset: 0,
                backgroundImage: 'url(https://images.unsplash.com/photo-1558769132-cb1aea56c2e2?auto=format&fit=crop&q=80&w=2574)',
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                filter: 'brightness(0.5) saturate(1.1)',
                zIndex: 0
            }} />

            <div className="container" style={{ position: 'relative', zIndex: 2, textAlign: 'center' }}>
                <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                    <h1 style={{
                        fontSize: 'clamp(4rem, 10vw, 8rem)',
                        fontWeight: 500,
                        lineHeight: 0.9,
                        color: COLORS.opticalWhite,
                        marginBottom: '2rem',
                        fontFamily: 'Outfit, sans-serif',
                        letterSpacing: '-0.03em',
                        display: 'flex',
                        justifyContent: 'center'
                    }}>
                        <RevealText>Let's Talk</RevealText>
                    </h1>

                    <div style={{
                        fontSize: '1.25rem', // Slightly larger
                        lineHeight: 1.6,
                        color: 'rgba(255, 255, 255, 0.85)', // Much sharper/brighter
                        maxWidth: '800px', // Wider to avoid cramped wrapping
                        margin: '0 auto',
                        fontFamily: 'Inter, sans-serif',
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: 'center'
                    }}>
                        <RevealText delay={0.5}>A focused conversation on sourcing, production, and compliance</RevealText>
                        <RevealText delay={0.6}>Discreet. Strategic. Execution-driven.</RevealText>
                    </div>
                </div>
            </div>
        </section>
    );
};

const InputField = ({ label, type = "text", placeholder }) => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
        <label style={{
            fontSize: '0.75rem',
            color: COLORS.bronze,
            textTransform: 'uppercase',
            letterSpacing: '0.15em',
            fontFamily: 'monospace'
        }}>
            {label}
        </label>
        <input
            type={type}
            placeholder={placeholder}
            style={{
                background: 'transparent',
                border: 'none',
                borderBottom: `1px solid ${COLORS.borderLight}`,
                padding: '1rem 0',
                color: COLORS.text,
                fontSize: '1rem',
                outline: 'none',
                borderRadius: 0,
                transition: 'border-color var(--duration-normal) var(--ease-fabric)',
                fontFamily: 'Inter, sans-serif'
            }}
            onFocus={(e) => e.target.style.borderBottom = `1px solid ${COLORS.bronze}`}
            onBlur={(e) => e.target.style.borderBottom = `1px solid rgba(17,17,17,0.1)`}
        />
    </div>
);

const InquirySection = () => {
    return (
        <section style={{
            minHeight: '100vh',
            background: COLORS.opticalWhite,
            padding: '8rem 2rem',
            display: 'flex',
            alignItems: 'center',
            position: 'relative',
            zIndex: 10,
            borderTopLeftRadius: '2rem',
            borderTopRightRadius: '2rem',
            boxShadow: '0 -20px 60px rgba(0,0,0,0.15)',
            marginTop: '-2rem',
            borderBottom: 'none',
            overflow: 'hidden'
        }}>
            <div style={{
                maxWidth: '1200px',
                width: '100%',
                margin: '0 auto',
                display: 'grid',
                gridTemplateColumns: window.innerWidth < 768 ? '1fr' : '1fr 1.2fr',
                gap: '6rem'
            }}>
                {/* LEFT: Info */}
                <motion.div
                    initial={{ opacity: 0, y: 60 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: false, amount: 0.3 }}
                    transition={{ duration: 1, ease: [0.25, 0.1, 0.25, 1] }}
                    style={{ display: 'flex', flexDirection: 'column', gap: '3rem' }}
                >
                    <div>
                        <motion.div
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: false, amount: 0.5 }}
                            transition={{ duration: 0.8, delay: 0.1, ease: [0.25, 0.1, 0.25, 1] }}
                            style={{
                                display: 'inline-flex',
                                padding: '0.5rem 1.5rem',
                                background: 'rgba(17, 17, 17, 0.05)',
                                border: '1px solid rgba(17, 17, 17, 0.1)',
                                borderRadius: '2rem',
                                marginBottom: '2rem'
                            }}
                        >
                            <span style={{
                                fontSize: '0.75rem',
                                color: COLORS.bronze,
                                fontFamily: 'monospace',
                                letterSpacing: '0.15em',
                                textTransform: 'uppercase'
                            }}>GET IN TOUCH</span>
                        </motion.div>

                        <motion.h2
                            initial={{ opacity: 0, y: 40 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: false, amount: 0.5 }}
                            transition={{ duration: 0.9, delay: 0.2, ease: [0.25, 0.1, 0.25, 1] }}
                            style={{
                                fontSize: 'clamp(2rem, 4vw, 3rem)',
                                fontWeight: 500,
                                color: COLORS.text,
                                lineHeight: 1.2,
                                marginBottom: '2rem',
                                fontFamily: 'Outfit, sans-serif'
                            }}
                        >
                            Start Optimizing Your <span style={{ color: COLORS.bronze }}>Fashion Supply Chain</span>
                        </motion.h2>

                        <motion.p
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: false, amount: 0.5 }}
                            transition={{ duration: 0.8, delay: 0.3, ease: [0.25, 0.1, 0.25, 1] }}
                            style={{
                                color: COLORS.textSecondary,
                                fontSize: '1rem',
                                lineHeight: 1.7,
                                fontFamily: 'Inter, sans-serif'
                            }}
                        >
                            Whether you need to optimize sourcing, strengthen factory compliance, or improve production efficiency, our team supports fashion brands with hands-on execution.
                        </motion.p>
                    </div>

                    <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}>
                        <div>
                            <h4 style={{
                                fontSize: '0.75rem',
                                color: COLORS.bronze,
                                textTransform: 'uppercase',
                                letterSpacing: '0.15em',
                                marginBottom: '1rem',
                                fontFamily: 'monospace'
                            }}>OUR PRESENCE</h4>
                            <ul style={{
                                listStyle: 'none',
                                padding: 0,
                                margin: 0,
                                color: COLORS.text,
                                fontSize: '1.1rem',
                                display: 'flex',
                                flexDirection: 'column',
                                gap: '0.5rem',
                                fontFamily: 'Inter, sans-serif'
                            }}>
                                <li>Montreal</li>
                                <li>Dubai</li>
                            </ul>
                        </div>
                        <div>
                            <h4 style={{
                                fontSize: '0.75rem',
                                color: COLORS.bronze,
                                textTransform: 'uppercase',
                                letterSpacing: '0.15em',
                                marginBottom: '1rem',
                                fontFamily: 'monospace'
                            }}>EMAIL</h4>
                            <a href="mailto:partnerships@gtfz.com" style={{
                                color: COLORS.text,
                                fontSize: '1.1rem',
                                textDecoration: 'none',
                                fontFamily: 'Inter, sans-serif',
                                borderBottom: `1px solid ${COLORS.bronze}`,
                                paddingBottom: '0.25rem',
                                transition: 'all var(--duration-normal) var(--ease-fabric)'
                            }}>
                                partnerships@gtfz.com
                            </a>
                        </div>
                    </div>
                </motion.div>

                {/* RIGHT: Form */}
                <motion.div
                    initial={{ opacity: 0, x: 150 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: false, amount: 0.2 }}
                    transition={{ duration: 1.2, delay: 0.1, ease: [0.25, 0.1, 0.25, 1] }}
                    style={{
                        background: 'rgba(17,17,17,0.02)',
                        padding: '3rem',
                        border: `1px solid rgba(17,17,17,0.1)`
                    }}
                >
                    <form style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}>
                        <div style={{
                            display: 'grid',
                            gridTemplateColumns: window.innerWidth < 768 ? '1fr' : '1fr 1fr',
                            gap: '2rem'
                        }}>
                            <InputField label="Name" placeholder="Jane Doe" />
                            <InputField label="Title" placeholder="Director of Sourcing" />
                        </div>

                        <InputField label="Company" placeholder="Global Brands Inc." />
                        <InputField label="Email" type="email" placeholder="jane@company.com" />

                        <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
                            <label style={{
                                fontSize: '0.75rem',
                                color: COLORS.bronze,
                                textTransform: 'uppercase',
                                letterSpacing: '0.15em',
                                fontFamily: 'monospace'
                            }}>MESSAGE</label>
                            <textarea
                                rows="4"
                                placeholder="Tell us about your sourcing, production, or compliance challenge..."
                                style={{
                                    background: 'transparent',
                                    border: 'none',
                                    borderBottom: `1px solid rgba(17,17,17,0.1)`,
                                    padding: '1rem 0',
                                    color: COLORS.text,
                                    fontSize: '1rem',
                                    outline: 'none',
                                    borderRadius: 0,
                                    resize: 'vertical',
                                    fontFamily: 'Inter, sans-serif'
                                }}
                            />
                        </div>

                        <button
                            type="button"
                            className="btn btn-primary"
                            style={{
                                marginTop: '1rem',
                                padding: '1.2rem 3rem',
                                background: COLORS.darkCharcoal,
                                color: COLORS.opticalWhite,
                                border: `1px solid ${COLORS.darkCharcoal}`,
                                fontSize: '0.9rem',
                                fontWeight: 500,
                                letterSpacing: '0.02em',
                                cursor: 'pointer',
                                alignSelf: 'flex-start',
                                borderRadius: '2rem',
                                transition: 'all var(--duration-normal) var(--ease-fabric)'
                            }}
                        >
                            Start a Conversation
                        </button>
                    </form>
                </motion.div>
            </div>
        </section>
    );
};

const FAQAccordion = ({ question, answer }) => {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <div style={{ borderBottom: `1px solid rgba(17,17,17,0.1)` }}>
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
                <h4 style={{
                    fontSize: '1.2rem',
                    fontWeight: 500,
                    color: COLORS.text,
                    margin: 0,
                    fontFamily: 'Outfit, sans-serif'
                }}>
                    {question}
                </h4>
                <div style={{
                    color: COLORS.bronze,
                    fontSize: '1.5rem',
                    transform: isOpen ? 'rotate(45deg)' : 'rotate(0)',
                    transition: 'transform var(--duration-normal) var(--ease-fabric)'
                }}>
                    +
                </div>
            </div>
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: 'auto', opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.3, ease: [0.4, 0, 0.2, 1] }}
                        style={{ overflow: 'hidden' }}
                    >
                        <p style={{
                            paddingBottom: '2rem',
                            color: COLORS.textSecondary,
                            lineHeight: 1.7,
                            fontFamily: 'Inter, sans-serif'
                        }}>
                            {answer}
                        </p>
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    );
};

const FAQSection = () => {
    const faqs = [
        {
            q: "Do you work with emerging fashion brands and startups?",
            a: "We primarily work with established fashion brands, but we do partner with high-growth startups that have secured Series A funding or beyond."
        },
        {
            q: "What sourcing and production regions do you cover?",
            a: "We have active on-ground operations in China, Vietnam, Bangladesh, and Turkey, with headquarters in Montreal."
        },
        {
            q: "How is your advisory engagement structured?",
            a: "We typically operate on a retainer basis for advisory services, or a percentage-of-savings model for sourcing optimization."
        },
        {
            q: "What does a typical engagement timeline look like?",
            a: "Initial diagnostic phase takes 2-4 weeks, followed by 3-6 months implementation depending on scope and complexity."
        }
    ];

    return (
        <section style={{
            minHeight: '80vh',
            padding: '8rem 2rem',
            background: COLORS.opticalWhite
        }}>
            <div style={{ maxWidth: '900px', margin: '0 auto' }}>
                <motion.div
                    initial={{ opacity: 0, y: 40, scale: 0.97 }}
                    whileInView={{ opacity: 1, y: 0, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8, ease: [0.25, 0.1, 0.25, 1] }}
                    style={{ marginBottom: '4rem' }}
                >
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: 0.1, ease: [0.25, 0.1, 0.25, 1] }}
                        style={{
                            display: 'inline-flex',
                            padding: '0.5rem 1.5rem',
                            background: 'rgba(17, 17, 17, 0.05)',
                            border: '1px solid rgba(17, 17, 17, 0.1)',
                            borderRadius: '2rem',
                            marginBottom: '2rem'
                        }}
                    >
                        <span style={{
                            fontSize: '0.75rem',
                            color: COLORS.bronze,
                            fontFamily: 'monospace',
                            letterSpacing: '0.15em',
                            textTransform: 'uppercase'
                        }}>FAQ</span>
                    </motion.div>

                    <motion.h2
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.7, delay: 0.2, ease: [0.25, 0.1, 0.25, 1] }}
                        style={{
                            fontSize: 'clamp(2.5rem, 6vw, 4rem)',
                            fontWeight: 500,
                            color: COLORS.text,
                            lineHeight: 1.1,
                            fontFamily: 'Outfit, sans-serif',
                            letterSpacing: '-0.03em'
                        }}
                    >
                        Before We <span style={{ color: COLORS.bronze }}>Connect</span>
                    </motion.h2>
                </motion.div>

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
        <main style={{ background: COLORS.darkCharcoal }}>
            {/* Scroll container with sticky hero */}
            <div style={{ position: 'relative' }}>
                {/* Sticky Hero - stays fixed while scrolling through container */}
                <div style={{
                    position: 'sticky',
                    top: 0,
                    height: '100vh',
                    zIndex: 1
                }}>
                    <ContactHero />
                </div>

                {/* Content that overlays the hero from below */}
                <div style={{
                    position: 'relative',
                    zIndex: 10,
                    marginTop: '-100vh'
                }}>
                    {/* Spacer to allow seeing hero first */}
                    <div style={{ height: '100vh', pointerEvents: 'none' }} />

                    {/* Actual content */}
                    <InquirySection />
                    <FAQSection />
                </div>
            </div>
        </main>
    );
};

export default ContactPage;
