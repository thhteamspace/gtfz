import React from 'react';
import Hero from '../components/Hero';
import Services from '../components/Services';
import TrustIndicator from '../components/TrustIndicator';
import HorizontalScroll from '../components/motion/HorizontalScroll';
import StrategicSplit from '../components/StrategicSplit';
import InsightHighlights from '../components/InsightHighlights';
import EditorialImage from '../components/motion/EditorialImage';

const Home = () => {
    return (
        <>
            <Hero />
            <TrustIndicator />

            {/* Editorial Image Break - Atelier/Craft */}
            <EditorialImage
                src="https://images.unsplash.com/photo-1558769132-cb1aea56c2e2?auto=format&fit=crop&q=80&w=2400"
                alt="Fashion atelier"
                caption="Crafted with Purpose"
                subcaption="Our Philosophy"
                description="We partner with fashion and lifestyle brands to solve complex sourcing, operational, and execution challenges. Our approach blends strategic thinking with hands-on execution—ensuring ideas don't just look good on paper, but work seamlessly on the ground."
                height={70}
                parallaxIntensity={40}
                overlay={0.35}
                captionPosition="bottom-left"
            />

            <StrategicSplit />
            <Services />

            {/* Editorial Image Break - Runway/Vision */}
            <EditorialImage
                src="https://images.unsplash.com/photo-1529139574466-a303027c1d8b?auto=format&fit=crop&q=80&w=2400"
                alt="Fashion runway"
                caption="From Vision to Reality"
                subcaption="Global Reach"
                height={80}
                parallaxIntensity={35}
                overlay={0.4}
                captionPosition="center"
            />

            <HorizontalScroll />
            <InsightHighlights />
        </>
    );
};

export default Home;
