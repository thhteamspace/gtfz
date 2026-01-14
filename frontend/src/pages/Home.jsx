import React from 'react';
import Hero from '../components/Hero';
import Services from '../components/Services';
import TrustIndicator from '../components/TrustIndicator';
// import CapabilityTicker from '../components/CapabilityTicker'; // Replaced by HorizontalScroll
import HorizontalScroll from '../components/motion/HorizontalScroll';
import StrategicSplit from '../components/StrategicSplit';
import InsightHighlights from '../components/InsightHighlights';

const Home = () => {
    return (
        <>
            <Hero />
            <TrustIndicator />
            <StrategicSplit />
            <Services /> {/* Sticky Stacking Section */}
            <HorizontalScroll />
            <InsightHighlights />
        </>
    );
};

export default Home;
