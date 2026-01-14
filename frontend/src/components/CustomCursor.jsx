import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

const CustomCursor = () => {
    const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

    useEffect(() => {
        const mouseMove = (e) => {
            setMousePosition({
                x: e.clientX,
                y: e.clientY
            });
        };

        window.addEventListener("mousemove", mouseMove);

        return () => {
            window.removeEventListener("mousemove", mouseMove);
        };
    }, []);

    const variants = {
        default: {
            x: mousePosition.x - 16,
            y: mousePosition.y - 16,
            backgroundColor: "transparent",
            border: "1px solid var(--color-cashmere-gold)",
        }
    };

    const dotVariants = {
        default: {
            x: mousePosition.x - 4,
            y: mousePosition.y - 4,
            backgroundColor: "var(--color-heritage-bronze)"
        }
    }

    return (
        <>
            {/* Main large ring */}
            <motion.div
                style={{
                    position: 'fixed',
                    top: 0,
                    left: 0,
                    width: '32px',
                    height: '32px',
                    borderRadius: '50%',
                    pointerEvents: 'none',
                    zIndex: 9999,
                    mixBlendMode: 'difference'
                }}
                variants={variants}
                animate="default"
                transition={{
                    type: "spring",
                    stiffness: 100,
                    damping: 20
                }}
            />
            {/* Center dot */}
            <motion.div
                style={{
                    position: 'fixed',
                    top: 0,
                    left: 0,
                    width: '8px',
                    height: '8px',
                    borderRadius: '50%',
                    pointerEvents: 'none',
                    zIndex: 9999
                }}
                variants={dotVariants}
                animate="default"
                transition={{
                    type: "spring",
                    stiffness: 1500,
                    damping: 40
                }}
            />
        </>
    );
};

export default CustomCursor;
