import React, { useState } from 'react';
import { motion, useMotionValue, useSpring } from 'framer-motion';
import RevealText from './motion/RevealText';

const AnimatedInput = ({ type, placeholder, rows }) => {
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
                        fontSize: '1.5rem',
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
                        fontSize: '1.5rem',
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
                    fontSize: '1.5rem',
                    color: '#333'
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

const Contact = () => {
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
                    <RevealText>Let's Build</RevealText>
                    <RevealText delay={0.1}><span style={{ color: 'var(--color-heritage-bronze)' }}>The Future.</span></RevealText>
                </h2>

                <div style={{ display: 'grid', gridTemplateColumns: window.innerWidth < 768 ? '1fr' : 'repeat(auto-fit, minmax(400px, 1fr))', gap: window.innerWidth < 768 ? '2rem' : '4rem' }}>

                    {/* Form Side */}
                    <form onSubmit={(e) => e.preventDefault()} style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                        <AnimatedInput type="text" placeholder="What's your name?" />
                        <AnimatedInput type="email" placeholder="Your email address" />
                        <AnimatedInput type="textarea" placeholder="Tell us about your vision" rows={1} />

                        <div style={{ marginTop: window.innerWidth < 768 ? '1.5rem' : '3rem' }}>
                            <button className="btn btn-primary" style={{ fontSize: window.innerWidth < 768 ? '1rem' : '1.2rem', padding: window.innerWidth < 768 ? '1rem 2rem' : '1.5rem 3rem', width: window.innerWidth < 768 ? '100%' : 'auto' }}>
                                Send Proposal
                            </button>
                        </div>
                    </form>

                    {/* Info Side */}
                    <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem', justifyContent: 'space-between', height: '100%', textAlign: window.innerWidth < 768 ? 'center' : 'left' }}>
                        <div>
                            <h4 style={{ color: '#666', marginBottom: '1rem', textTransform: 'uppercase', letterSpacing: '0.1em' }}>Contact</h4>
                            <a href="mailto:hello@gtfz.com" style={{ fontSize: window.innerWidth < 768 ? '1.25rem' : '2rem', display: 'block', color: '#333', textDecoration: 'none', marginBottom: '0.5rem' }}>hello@gtfz.com</a>
                            <a href="tel:+15550000000" style={{ fontSize: window.innerWidth < 768 ? '1.25rem' : '2rem', display: 'block', color: '#333', textDecoration: 'none' }}>+1 (555) 000-0000</a>
                        </div>

                        <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap', justifyContent: window.innerWidth < 768 ? 'center' : 'flex-start', marginTop: window.innerWidth < 768 ? '1rem' : '4rem' }}>
                            {['LinkedIn', 'Twitter', 'Instagram'].map(social => (
                                <a key={social} href="#" style={{
                                    color: '#1a1a1a',
                                    textDecoration: 'none',
                                    border: '2px solid #1a1a1a',
                                    padding: window.innerWidth < 768 ? '0.5rem 1rem' : '1rem 2rem',
                                    borderRadius: '50px',
                                    textTransform: 'uppercase',
                                    fontSize: '0.7rem',
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
                textAlign: 'center',
                color: '#333',
                fontSize: '0.9rem',
                display: 'flex',
                justifyContent: 'space-between',
                paddingLeft: '5vw',
                paddingRight: '5vw'
            }}>
                <span>© {new Date().getFullYear()} GTFZ Inc.</span>
                <span>Designed for Impact.</span>
            </div>
        </footer>
    );
};

export default Contact;
