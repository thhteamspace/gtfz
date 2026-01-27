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
                            {[
                                { name: 'LinkedIn', icon: <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor"><path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" /></svg> },
                                { name: 'Twitter', icon: <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" /></svg> },
                                { name: 'Instagram', icon: <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" /></svg> }
                            ].map((social) => (
                                <a key={social.name} href="#" aria-label={social.name} style={{
                                    color: '#1a1a1a',
                                    textDecoration: 'none',
                                    border: '1px solid rgba(26, 26, 26, 0.2)',
                                    width: isMobile ? '44px' : '52px',
                                    height: isMobile ? '44px' : '52px',
                                    display: 'flex',
                                    alignItems: 'center',
                                    justifyContent: 'center',
                                    borderRadius: '50%',
                                    transition: 'all 0.3s cubic-bezier(0.25, 0.46, 0.45, 0.94)'
                                }}
                                    onMouseEnter={(e) => {
                                        e.currentTarget.style.background = '#1a1a1a';
                                        e.currentTarget.style.color = '#fff';
                                        e.currentTarget.style.border = '1px solid #1a1a1a';
                                        e.currentTarget.style.transform = 'translateY(-2px)';
                                    }}
                                    onMouseLeave={(e) => {
                                        e.currentTarget.style.background = 'transparent';
                                        e.currentTarget.style.color = '#1a1a1a';
                                        e.currentTarget.style.border = '1px solid rgba(26, 26, 26, 0.2)';
                                        e.currentTarget.style.transform = 'translateY(0)';
                                    }}>
                                    {social.icon}
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
