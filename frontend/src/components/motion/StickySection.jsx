import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

/**
 * StickySection - Sticky scroll storytelling component
 * 
 * Props:
 * - stickyContent: React node for the sticky visual (left side)
 * - scrollContent: React node array for scrolling content (right side)
 * - stickyPosition: 'left' | 'right' (default: 'left')
 * - height: scroll container height in vh (default: 200)
 * - background: background color (default: '#FEFFFF')
 * - showProgress: show scroll progress indicator (default: true)
 */
const StickySection = ({
    stickyContent,
    scrollContent,
    stickyPosition = 'left',
    height = 200,
    background = '#FEFFFF',
    showProgress = true,
    className,
    style
}) => {
    const containerRef = useRef(null);
    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start start", "end end"]
    });

    // Progress bar height for visual storytelling
    const progressHeight = useTransform(scrollYProgress, [0, 1], ['0%', '100%']);
    const progressOpacity = useTransform(scrollYProgress, [0, 0.05, 0.95, 1], [0, 1, 1, 0]);

    const isLeft = stickyPosition === 'left';

    return (
        <section
            ref={containerRef}
            className={className}
            style={{
                minHeight: `${height}vh`,
                position: 'relative',
                background,
                ...style
            }}
        >
            <div className="container" style={{ height: '100%' }}>
                <div style={{
                    display: 'grid',
                    gridTemplateColumns: typeof window !== 'undefined' && window.innerWidth < 768 ? '1fr' : isLeft ? '5fr 6fr' : '6fr 5fr',
                    gap: 'var(--space-lg)',
                    position: 'relative'
                }}>
                    {/* Sticky Visual Side */}
                    <div style={{
                        order: isLeft ? 1 : 2,
                        position: 'sticky',
                        top: 'calc(var(--header-height) + 2rem)',
                        height: 'calc(100vh - var(--header-height) - 4rem)',
                        display: 'flex',
                        alignItems: 'center'
                    }}>
                        <div style={{ position: 'relative', width: '100%' }}>
                            {stickyContent}

                            {/* Progress Indicator */}
                            {showProgress && (
                                <motion.div
                                    style={{
                                        position: 'absolute',
                                        [isLeft ? 'right' : 'left']: '-2rem',
                                        top: 0,
                                        width: '2px',
                                        height: '100%',
                                        background: 'rgba(17, 17, 17, 0.1)',
                                        opacity: progressOpacity
                                    }}
                                >
                                    <motion.div
                                        style={{
                                            width: '100%',
                                            height: progressHeight,
                                            background: 'var(--color-heritage-bronze)',
                                            transformOrigin: 'top'
                                        }}
                                    />
                                </motion.div>
                            )}
                        </div>
                    </div>

                    {/* Scrolling Content Side */}
                    <div style={{
                        order: isLeft ? 2 : 1,
                        padding: 'var(--space-xl) 0',
                        display: 'flex',
                        flexDirection: 'column',
                        gap: '40vh',
                        justifyContent: 'center'
                    }}>
                        {scrollContent}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default StickySection;
