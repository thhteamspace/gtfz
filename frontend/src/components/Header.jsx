import React, { useState, useEffect, useRef } from 'react';
import { motion, useMotionValue, useSpring } from 'framer-motion';
import { Link, useLocation } from 'react-router-dom';

const MagneticLink = ({ children, to, isActive }) => {
    const ref = useRef(null);
    const position = { x: useMotionValue(0), y: useMotionValue(0) };

    const mouseMove = (e) => {
        const { clientX, clientY } = e;
        const { height, width, left, top } = ref.current.getBoundingClientRect();
        const middleX = clientX - (left + width / 2);
        const middleY = clientY - (top + height / 2);
        position.x.set(middleX * 0.3);
        position.y.set(middleY * 0.3);
    };

    const reset = () => {
        position.x.set(0);
        position.y.set(0);
    };

    const { x, y } = position;
    const springConfig = { stiffness: 150, damping: 15, mass: 0.1 };
    const animatedX = useSpring(x, springConfig);
    const animatedY = useSpring(y, springConfig);

    return (
        <motion.div
            ref={ref}
            onMouseMove={mouseMove}
            onMouseLeave={reset}
            style={{ x: animatedX, y: animatedY, display: 'inline-block', padding: '0.5rem 1rem' }}
            whileHover={{ scale: 1.1, color: 'white' }}
            whileTap={{ scale: 0.95 }}
        >
            <Link to={to} style={{
                fontSize: '0.9rem',
                fontWeight: 600,
                color: 'inherit',
                opacity: isActive ? 1 : 0.8,
                textDecoration: 'none',
                textShadow: isActive ? '0 0 15px rgba(255, 255, 255, 0.6)' : 'none'
            }}>
                {children}
            </Link>
        </motion.div>
    );
};

const Header = () => {
    const [scrolled, setScrolled] = useState(false);
    const location = useLocation();

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 50);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const navLinks = [
        { name: 'Home', path: '/' },
        { name: 'Ethos', path: '/ethos' },
        { name: 'Solutions', path: '/solutions' },
        { name: 'Impact', path: '/impact' }
    ];

    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

    const toggleMenu = () => setMobileMenuOpen(!mobileMenuOpen);

    return (
        <>
            <motion.header
                initial={{ y: -100 }}
                animate={{ y: 0 }}
                transition={{ duration: 0.8, ease: "easeOut" }}
                style={{
                    position: 'fixed',
                    top: 0,
                    left: 0,
                    width: '100%',
                    height: 'var(--header-height)',
                    zIndex: 9999,
                    display: 'flex',
                    alignItems: 'center',
                    padding: '0 var(--space-md)',
                    mixBlendMode: mobileMenuOpen ? 'normal' : 'difference',
                    color: 'white',
                    backgroundColor: mobileMenuOpen ? 'var(--color-obsidian-slate)' : 'transparent'
                }}
            >
                <div style={{
                    display: 'flex',
                    justifyContent: 'space-between',
                    alignItems: 'center',
                    width: '100%',
                    position: 'relative', // Ensure relative positioning context
                    zIndex: 1002 // Ensure logo and clutter stay above menu background if needed
                }}>
                    {/* LOGO */}
                    <Link to="/" onClick={() => setMobileMenuOpen(false)} style={{
                        textDecoration: 'none',
                        zIndex: 1003, // Higher than menu background
                        display: 'flex',
                        alignItems: 'center'
                    }}>
                        <motion.img
                            initial={{ opacity: 0, scale: 0.9 }}
                            animate={{ opacity: 1, scale: 1 }}
                            whileHover={{ scale: 1.05 }}
                            transition={{ duration: 1.2, ease: "easeOut" }}
                            src="/assets/images/gtfz-logo.png"
                            alt="GTFZ Logo"
                            style={{
                                height: 'clamp(24px, 4vw, 36px)',
                                width: 'auto',
                                mixBlendMode: 'screen',
                                filter: 'contrast(1.5) brightness(1.1)'
                            }}
                        />
                    </Link>

                    {/* DESKTOP NAVIGATION */}
                    <nav className="desktop-only" style={{ gap: '1rem', alignItems: 'center' }}>
                        {navLinks.map((link) => (
                            <MagneticLink
                                key={link.name}
                                to={link.path}
                                isActive={location.pathname === link.path}
                            >
                                {link.name}
                            </MagneticLink>
                        ))}

                        {/* CTA Pill */}
                        <Link
                            to="/contact"
                            style={{
                                padding: '0.8rem 2rem',
                                fontSize: '0.8rem',
                                borderRadius: '50px',
                                background: 'transparent',
                                border: '1px solid currentColor',
                                color: 'inherit',
                                fontWeight: 700,
                                textTransform: 'uppercase',
                                marginLeft: '2rem',
                                textDecoration: 'none',
                                boxShadow: location.pathname === '/contact' ? '0 0 20px rgba(255, 255, 255, 0.4)' : 'none',
                                borderColor: location.pathname === '/contact' ? 'white' : 'currentColor'
                            }}
                        >
                            Contact
                        </Link>
                    </nav>

                    {/* BURGER BUTTON (Mobile Only) */}
                    <div className="mobile-only" onClick={toggleMenu} style={{ cursor: 'pointer', zIndex: 1003, padding: '10px' }}>
                        <div style={{
                            width: '25px',
                            height: '2px',
                            background: 'white',
                            marginBottom: mobileMenuOpen ? '0' : '6px',
                            transform: mobileMenuOpen ? 'rotate(45deg) translate(0, 0)' : 'none',
                            transition: '0.3s'
                        }} />
                        <div style={{
                            width: '25px',
                            height: '2px',
                            background: 'white',
                            transform: mobileMenuOpen ? 'rotate(-45deg) translate(0, 0)' : 'none',
                            transition: '0.3s'
                        }} />
                    </div>
                </div>
            </motion.header >

            {/* MOBILE MENU OVERLAY */}
            < motion.div
                initial={{ opacity: 0, x: '100%' }
                }
                animate={{ opacity: mobileMenuOpen ? 1 : 0, x: mobileMenuOpen ? 0 : '100%' }}
                transition={{ type: 'spring', damping: 25, stiffness: 200 }}
                style={{
                    position: 'fixed',
                    inset: 0,
                    background: 'var(--color-obsidian-slate)',
                    zIndex: 9998,
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'center',
                    alignItems: 'center',
                    padding: 'var(--space-xl) var(--space-md)'
                }}
            >
                <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem', textAlign: 'center' }}>
                    {navLinks.map((link, i) => (
                        <motion.div
                            key={link.name}
                            initial={{ y: 20, opacity: 0 }}
                            animate={{ y: mobileMenuOpen ? 0 : 20, opacity: mobileMenuOpen ? 1 : 0 }}
                            transition={{ delay: 0.1 + (i * 0.1) }}
                        >
                            <Link
                                to={link.path}
                                onClick={() => setMobileMenuOpen(false)}
                                style={{ fontSize: '2.5rem', fontWeight: 700, color: 'white' }}
                            >
                                {link.name}
                            </Link>
                        </motion.div>
                    ))}
                    <motion.div
                        initial={{ y: 20, opacity: 0 }}
                        animate={{ y: mobileMenuOpen ? 0 : 20, opacity: mobileMenuOpen ? 1 : 0 }}
                        transition={{ delay: 0.5 }}
                        style={{ marginTop: '2rem' }}
                    >
                        <Link
                            to="/contact"
                            onClick={() => setMobileMenuOpen(false)}
                            className="btn btn-primary"
                            style={{ borderRadius: '50px' }}
                        >
                            Get Started
                        </Link>
                    </motion.div>
                </div>
            </motion.div >
        </>
    );
};

export default Header;
