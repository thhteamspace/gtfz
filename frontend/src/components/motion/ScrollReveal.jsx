import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

/**
 * ScrollReveal - Enhanced scroll-based reveal with movement + scale
 * 
 * Props:
 * - direction: 'up' | 'down' | 'left' | 'right' (default: 'up')
 * - delay: stagger delay in seconds (default: 0)
 * - distance: travel distance in px (default: 60)
 * - scaleFrom: starting scale (default: 0.95)
 * - rotate: subtle rotation on entry in degrees (default: 0)
 * - once: animate only once (default: false)
 * - className, style: passthrough
 */
const ScrollReveal = ({
    children,
    direction = 'up',
    delay = 0,
    distance = 60,
    scaleFrom = 0.95,
    rotate = 0,
    once = false,
    className,
    style,
    ...props
}) => {
    const ref = useRef(null);
    const { scrollYProgress } = useScroll({
        target: ref,
        offset: ["start end", "end start"]
    });

    // Calculate initial position based on direction
    const getInitialTransform = () => {
        switch (direction) {
            case 'up': return { x: 0, y: distance };
            case 'down': return { x: 0, y: -distance };
            case 'left': return { x: distance, y: 0 };
            case 'right': return { x: -distance, y: 0 };
            default: return { x: 0, y: distance };
        }
    };

    const initial = getInitialTransform();

    // Scroll-linked transforms for depth
    const opacity = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0, 1, 1, 0.9]);
    const scale = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [scaleFrom, 1, 1, 0.98]);

    return (
        <div ref={ref} className={className} style={{ ...style, position: 'relative' }} {...props}>
            <motion.div
                initial={{
                    opacity: 0,
                    x: initial.x,
                    y: initial.y,
                    scale: scaleFrom,
                    rotate: rotate
                }}
                whileInView={{
                    opacity: 1,
                    x: 0,
                    y: 0,
                    scale: 1,
                    rotate: 0
                }}
                viewport={{ once, margin: "-10% 0px" }}
                transition={{
                    duration: 0.9,
                    delay,
                    ease: [0.25, 0.1, 0.25, 1] // Smooth fabric-like easing
                }}
                style={{
                    opacity,
                    scale,
                    willChange: 'transform, opacity'
                }}
            >
                {children}
            </motion.div>
        </div>
    );
};

export default ScrollReveal;
