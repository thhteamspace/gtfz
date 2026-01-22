import React, { useState } from 'react';
import { motion, useMotionValue, useSpring } from 'framer-motion';
import RevealText from './motion/RevealText';
import useMediaQuery from '../hooks/useMediaQuery';

const AnimatedInput = ({ type, placeholder, rows, isMobile }) => {
    const [focused, setFocused] = useState(false);
    return (
        <div style={{ position: 'relative', overflow: 'hidden' }}>
            {type === 'textarea' ? (
                <textarea
                    rows={rows}
                    onFocus={() => setFocused(true)}
                    onBlur={() => setFocused(false)}
                    style={{
                        width: '100%',
                        background: 'transparent',
                        border: 'none',
                        borderBottom: '1px solid rgba(0,0,0,0.4)',
                        padding: '1.5rem 0',
                        color: '#333',
                        fontSize: isMobile ? '1.2rem' : '1.5rem',
                        fontFamily: 'inherit',
                        resize: 'none',
                        outline: 'none',
                        position: 'relative',
                        zIndex: 1
                    }}
                />
            ) : (
                <input
                    type={type}
                    onFocus={() => setFocused(true)}
                    onBlur={() => setFocused(false)}
                    style={{
                        width: '100%',
                        background: 'transparent',
                        border: 'none',
                        borderBottom: '1px solid rgba(0,0,0,0.4)',
                        padding: '1.5rem 0',
                        color: '#333',
                        fontSize: isMobile ? '1.2rem' : '1.5rem',
                        fontFamily: 'inherit',
                        outline: 'none',
                        position: 'relative',
                        zIndex: 1
                    }}
                />
            )}

            {/* Label Animation */}
            <motion.label
                animate={{
                    y: focused ? -25 : 0,
                    scale: focused ? 0.7 : 1,
                    opacity: focused ? 0.7 : 0.5,
                    originX: 0
                }}
                style={{
                    position: 'absolute',
                    top: '1.5rem',
                    left: 0,
                    pointerEvents: 'none',
                    fontSize: isMobile ? '1.1rem' : '1.5rem',
                    color: '#333',
                    width: '100%', // Ensure it can wrap if needed, but width helps
                    whiteSpace: 'pre-wrap', // Allow wrapping
                    lineHeight: 1.2
                }}
            >
                {placeholder}
            </motion.label>

            {/* Underline Animation */}
            <motion.div
                animate={{ scaleX: focused ? 1 : 0 }}
                style={{
                    position: 'absolute',
                    bottom: 0,
                    left: 0,
                    width: '100%',
                    height: '2px',
                    background: '#B8860B',
                    originX: 0
                }}
            />
        </div>
    )
}

const AnimatedSelect = ({ placeholder, options, isMobile }) => {
    const [focused, setFocused] = useState(false);
    const [selected, setSelected] = useState('');

    return (
        <div style={{ position: 'relative', overflow: 'visible' }}>
            <select
                value={selected}
                onChange={(e) => setSelected(e.target.value)}
                onFocus={() => setFocused(true)}
                onBlur={() => setFocused(false)}
                style={{
                    width: '100%',
                    background: 'transparent',
                    border: 'none',
                    borderBottom: '1px solid rgba(0,0,0,0.4)',
                    padding: '1.5rem 0',
                    paddingRight: '2rem',
                    color: selected ? '#333' : 'transparent',
                    fontSize: isMobile ? '1.2rem' : '1.5rem',
                    fontFamily: 'inherit',
                    outline: 'none',
                    position: 'relative',
                    zIndex: 1,
                    cursor: 'pointer',
                    appearance: 'none',
                    WebkitAppearance: 'none',
                    MozAppearance: 'none'
                }}
            >
                <option value="" disabled hidden style={{ display: 'none' }}>{placeholder}</option>
                {options.map((opt, idx) => (
                    <option
                        key={idx}
                        value={opt}
                        style={{
                            backgroundColor: '#fff',
                            color: '#333',
                            padding: '10px',
                            fontSize: isMobile ? '1rem' : '1.2rem'
                        }}
                    >
                        {opt}
                    </option>
                ))}
            </select>

            {/* Dropdown Arrow */}
            <div style={{
                position: 'absolute',
                right: '0.5rem',
                top: '50%',
                transform: 'translateY(-50%)',
                pointerEvents: 'none',
                fontSize: '1rem',
                color: '#999',
                zIndex: 2
            }}>▼</div>

            {/* Label Animation */}
            <motion.label
                animate={{
                    y: (focused || selected) ? -25 : 0,
                    scale: (focused || selected) ? 0.7 : 1,
                    opacity: (focused || selected) ? 0.7 : 0.5,
                    originX: 0
                }}
                style={{
                    position: 'absolute',
                    top: '1.5rem',
                    left: 0,
                    pointerEvents: 'none',
                    fontSize: isMobile ? '1.1rem' : '1.5rem',
                    color: '#333',
                    whiteSpace: 'nowrap',
                    zIndex: 0
                }}
            >
                {placeholder}
            </motion.label>

            {/* Underline Animation */}
            <motion.div
                animate={{ scaleX: focused ? 1 : 0 }}
                style={{
                    position: 'absolute',
                    bottom: 0,
                    left: 0,
                    width: '100%',
                    height: '2px',
                    background: '#B8860B',
                    originX: 0
                }}
            />
        </div>
    );
};

const Contact = () => {
    const isMobile = useMediaQuery('(max-width: 768px)');
    return (
        <footer data-theme-trigger="light" style={{ background: 'transparent', position: 'relative', overflow: 'hidden', paddingTop: '10vh' }}>



            {/* Massive CTA Section */}
            <div className="container" style={{ marginBottom: '10vh' }}>
                <h2 style={{
                    fontSize: 'clamp(3rem, 8vw, 8rem)',
                    lineHeight: 0.9,
                    textTransform: 'uppercase',
                    marginBottom: 'var(--space-xl)',
                    fontWeight: 800
                }}>
                    <RevealText>Let’s strengthen your</RevealText>
                    <RevealText delay={0.1}><span style={{ color: 'var(--color-heritage-bronze)' }}>supply chain execution</span></RevealText>
                </h2>

                <div style={{ display: 'grid', gridTemplateColumns: isMobile ? '1fr' : 'repeat(auto-fit, minmax(400px, 1fr))', gap: isMobile ? '4rem' : '4rem' }}>

                    {/* Form Side */}
                    <form onSubmit={(e) => e.preventDefault()} style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                        <AnimatedInput type="text" placeholder="Full Name *" isMobile={isMobile} />
                        <AnimatedInput type="email" placeholder="Work Email *" isMobile={isMobile} />
                        <AnimatedInput type="text" placeholder="Company / Organization" isMobile={isMobile} />
                        <AnimatedSelect
                            placeholder="Subject"
                            options={[
                                'General Enquiry',
                                'Consulting / Services',
                                'Partnership',
                                'Careers',
                                'Media / Other'
                            ]}
                            isMobile={isMobile}
                        />
                        <AnimatedInput type="textarea" placeholder="Message *" rows={1} isMobile={isMobile} />

                        <div style={{ marginTop: isMobile ? '2rem' : '3rem' }}>
                            <button className="btn btn-primary" style={{ fontSize: isMobile ? '1rem' : '1.2rem', padding: isMobile ? '1rem 2rem' : '1.5rem 3rem', width: isMobile ? '100%' : 'auto' }}>
                                Submit
                            </button>
                        </div>
                    </form>

                    {/* Info Side */}
                    <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem', justifyContent: 'space-between', height: '100%', textAlign: isMobile ? 'center' : 'left' }}>
                        <div>
                            <h4 style={{ color: '#666', marginBottom: '1.5rem', textTransform: 'uppercase', letterSpacing: '0.1em' }}>Connect</h4>
                            <p style={{ fontSize: isMobile ? '0.95rem' : '1.1rem', color: '#666', marginBottom: '2rem', lineHeight: 1.6 }}>Whether you're considering a partnership, need expert perspective, or have a question, we'll be in touch soon.</p>

                            <div style={{ marginBottom: '1.5rem' }}>
                                <span style={{ display: 'block', fontSize: '0.8rem', color: '#888', marginBottom: '0.25rem', textTransform: 'uppercase', letterSpacing: '0.05em' }}>Email</span>
                                <a href="mailto:partnerships@gtfz.com" style={{ fontSize: isMobile ? '1.25rem' : '1.75rem', display: 'block', color: '#333', textDecoration: 'none' }}>partnerships@gtfz.com</a>
                            </div>

                            <div>
                                <span style={{ display: 'block', fontSize: '0.8rem', color: '#888', marginBottom: '0.25rem', textTransform: 'uppercase', letterSpacing: '0.05em' }}>Phone</span>
                                <a href="tel:+15550000000" style={{ fontSize: isMobile ? '1.25rem' : '1.75rem', display: 'block', color: '#333', textDecoration: 'none' }}>+1 (555) 000-0000</a>
                            </div>
                        </div>

                        <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap', justifyContent: isMobile ? 'center' : 'flex-start', marginTop: isMobile ? '2rem' : '4rem' }}>
                            {['LinkedIn', 'Twitter', 'Instagram'].map(social => (
                                <a key={social} href="#" style={{
                                    color: '#1a1a1a',
                                    textDecoration: 'none',
                                    border: '2px solid #1a1a1a',
                                    padding: isMobile ? '0.6rem 1.2rem' : '1rem 2rem',
                                    borderRadius: '50px',
                                    textTransform: 'uppercase',
                                    fontSize: isMobile ? '0.75rem' : '0.7rem',
                                    letterSpacing: '0.1em',
                                    fontWeight: 600
                                }}>
                                    {social}
                                </a>
                            ))}
                        </div>
                    </div>
                </div>
            </div>

            {/* Bottom Bar */}
            <div style={{
                borderTop: '1px solid rgba(0,0,0,0.15)',
                padding: '2rem 0',
                textAlign: isMobile ? 'center' : 'left',
                color: '#333',
                fontSize: '0.9rem',
                display: 'flex',
                flexDirection: isMobile ? 'column' : 'row',
                justifyContent: isMobile ? 'center' : 'space-between',
                alignItems: 'center',
                gap: isMobile ? '1rem' : '0',
                paddingLeft: '5vw',
                paddingRight: '5vw'
            }}>
                <div style={{ display: 'flex', flexDirection: isMobile ? 'column' : 'row', gap: isMobile ? '0.5rem' : '2rem', alignItems: 'center' }}>
                    <span>© {new Date().getFullYear()} GTFZ — Fashion Supply-Chain Consultancy. All rights reserved.</span>
                    <span style={{ fontSize: '0.85rem', color: '#666' }}>Montreal • Dubai</span>
                </div>
                <a href="/privacy-policy" style={{ color: '#666', textDecoration: 'none', borderBottom: '1px solid #666' }}>Privacy Policy</a>
            </div>
        </footer>
    );
};

export default Contact;
