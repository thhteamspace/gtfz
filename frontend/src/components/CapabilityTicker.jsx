import React from 'react';
import { motion } from 'framer-motion';

const CapabilityTicker = () => {
    const items = [
        "STRATEGY", "INNOVATION", "TRANSFORMATION", "GROWTH", "EFFICIENCY",
        "ANALYTICS", "INTELLIGENCE", "LEADERSHIP", "CULTURE", "EXECUTION"
    ];

    return (
        <div style={{
            background: 'var(--color-strategic-navy)',
            padding: 'var(--space-md) 0',
            overflow: 'hidden',
            borderTop: '1px solid rgba(255,255,255,0.05)',
            borderBottom: '1px solid rgba(255,255,255,0.05)'
        }}>
            <motion.div
                animate={{ x: ["-50%", "0%"] }}
                transition={{ repeat: Infinity, duration: 15, ease: "linear" }}
                style={{ display: 'flex', gap: '2rem', whiteSpace: 'nowrap' }}
            >
                {[...items, ...items].map((item, index) => (
                    <div key={index} style={{ display: 'flex', alignItems: 'center', gap: '2rem' }}>
                        <span style={{
                            fontSize: 'clamp(2rem, 5vw, 4rem)',
                            fontWeight: 800,
                            color: 'transparent',
                            WebkitTextStroke: '1px rgba(255,255,255,0.2)',
                            textTransform: 'uppercase'
                        }}>
                            {item}
                        </span>
                        <span style={{
                            height: '10px',
                            width: '10px',
                            background: 'var(--color-heritage-bronze)',
                            borderRadius: '50%'
                        }} />
                    </div>
                ))}
            </motion.div>
        </div>
    );
};

export default CapabilityTicker;
