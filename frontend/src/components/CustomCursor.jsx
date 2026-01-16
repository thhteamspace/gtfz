import React, { useEffect, useState, useRef } from 'react';
import { motion } from 'framer-motion';

const CustomCursor = () => {
    const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
    const [hoveredElement, setHoveredElement] = useState(null);
    const rafRef = useRef(null);

    useEffect(() => {
        const mouseMove = (e) => {
            // Cancel previous RAF if exists
            if (rafRef.current) {
                cancelAnimationFrame(rafRef.current);
            }

            // Use RAF for smoother updates
            rafRef.current = requestAnimationFrame(() => {
                setMousePosition({
                    x: e.clientX,
                    y: e.clientY
                });

                // Check if hovering over interactive element
                const target = e.target;
                const interactive = target.closest('button, a, .btn, [role="button"]');

                if (interactive) {
                    const rect = interactive.getBoundingClientRect();
                    const computedStyle = window.getComputedStyle(interactive);
                    const borderRadius = computedStyle.borderRadius;

                    // Check if button has pill/circular styling
                    const isPillOrCircular = borderRadius.includes('50%') ||
                        borderRadius.includes('999px') ||
                        parseInt(borderRadius) > Math.min(rect.width, rect.height) / 2;

                    setHoveredElement({
                        x: rect.left + rect.width / 2,
                        y: rect.top + rect.height / 2,
                        width: rect.width,
                        height: rect.height,
                        isPillOrCircular
                    });
                } else {
                    setHoveredElement(null);
                }
            });
        };

        window.addEventListener("mousemove", mouseMove);

        return () => {
            window.removeEventListener("mousemove", mouseMove);
            if (rafRef.current) {
                cancelAnimationFrame(rafRef.current);
            }
        };
    }, []);

    const variants = {
        default: {
            x: mousePosition.x - 16,
            y: mousePosition.y - 16,
            width: 32,
            height: 32,
            backgroundColor: "transparent",
            border: "1px solid var(--color-cashmere-gold)",
        },
        ...(hoveredElement && {
            button: {
                x: hoveredElement.x - hoveredElement.width / 2 - 8,
                y: hoveredElement.y - hoveredElement.height / 2 - 8,
                width: hoveredElement.width + 16,
                height: hoveredElement.height + 16,
                backgroundColor: "rgba(197, 160, 89, 0.1)",
                border: "2px solid var(--color-heritage-bronze)",
            }
        })
    };

    const dotVariants = {
        default: {
            x: mousePosition.x - 4,
            y: mousePosition.y - 4,
            backgroundColor: "var(--color-heritage-bronze)"
        }
    }

    // Calculate border radius to match button's actual style
    const getBorderRadius = () => {
        if (!hoveredElement) return '50%';
        if (hoveredElement.isPillOrCircular) {
            // For pill buttons, use half the height to create perfect pill shape
            const radius = (hoveredElement.height + 16) / 2;
            return `${radius}px`;
        }
        return '12px';
    };

    return (
        <>
            {/* Main large ring */}
            <motion.div
                style={{
                    position: 'fixed',
                    top: 0,
                    left: 0,
                    borderRadius: getBorderRadius(),
                    pointerEvents: 'none',
                    zIndex: 9999,
                    mixBlendMode: 'difference'
                }}
                variants={variants}
                animate={hoveredElement ? "button" : "default"}
                transition={{
                    type: "spring",
                    stiffness: 400,
                    damping: 25,
                    mass: 0.4
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
                    stiffness: 800,
                    damping: 30,
                    mass: 0.3
                }}
            />
        </>
    );
};

export default CustomCursor;
