import React from 'react';
import { Outlet, ScrollRestoration } from 'react-router-dom';
import Header from './Header';
import CustomCursor from './CustomCursor';
import Contact from './Contact';
import SmoothScroll from './motion/SmoothScroll';
import Preloader from './Preloader';
import CallToAction from './CallToAction';
import { ThemeTransitionProvider } from './ThemeTransitionContext';
import useScrollTheme from '../hooks/useScrollTheme';

// Component that activates the scroll theme observer
const ThemeObserver = () => {
    useScrollTheme();
    return null;
};

const GlobalLayout = () => {
    return (
        <ThemeTransitionProvider>
            <SmoothScroll>
                <ThemeObserver />
                <Preloader />
                <CustomCursor />
                <Header />
                <main style={{ minHeight: '100vh', paddingTop: 'var(--header-height)' }}>
                    <Outlet />
                </main>
                <CallToAction />
                {/* Footer / Contact Section acts as global footer for now */}
                <Contact />
                <ScrollRestoration />
            </SmoothScroll>
        </ThemeTransitionProvider>
    );
};

export default GlobalLayout;

