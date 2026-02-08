import React from 'react';
import { Outlet, ScrollRestoration, useLocation } from 'react-router-dom';
import Header from './Header';
import CustomCursor from './CustomCursor';
import Contact from './Contact';
import SmoothScroll from './motion/SmoothScroll';
import Preloader from './Preloader';
import CallToAction from './CallToAction';
import { ThemeTransitionProvider } from './ThemeTransitionContext';
import useScrollTheme from '../hooks/useScrollTheme';
import ScrollToTop from './ScrollToTop';

// Component that activates the scroll theme observer
const ThemeObserver = () => {
    useScrollTheme();
    return null;
};

const GlobalLayout = () => {
    const location = useLocation();
    const isContactPage = location.pathname === '/contact';

    return (
        <ThemeTransitionProvider>
            <SmoothScroll>
                <ScrollToTop />
                <ThemeObserver />
                <Preloader />
                <CustomCursor />
                <Header />
                <main style={{ minHeight: '100vh', paddingTop: 'var(--header-height)' }}>
                    <Outlet />
                </main>
                {!isContactPage && <CallToAction />}
                {/* Footer / Contact Section acts as global footer for now */}
                <Contact showForm={!isContactPage} />
                <ScrollRestoration />
            </SmoothScroll>
        </ThemeTransitionProvider>
    );
};

export default GlobalLayout;

