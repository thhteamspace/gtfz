import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

/**
 * EditorialImage - Full-screen cinematic image section
 * 
 * Props:
 * - src: image URL
 * - alt: image alt text
 * - caption: optional caption text
 * - subcaption: optional secondary caption
 * - description: optional description text below caption
 * - height: section height in vh (default: 80)
 * - parallaxIntensity: parallax movement intensity (default: 30)
 * - showGrain: show grain overlay (default: true)
 * - overlay: overlay gradient intensity 0-1 (default: 0.3)
 * - captionPosition: 'bottom-left' | 'bottom-right' | 'center' (default: 'bottom-left')
 */
const EditorialImage = ({
    src,
    alt,
    caption,
    subcaption,
    description,
    height = 80,
    parallaxIntensity = 30,
    showGrain = true,
    overlay = 0.3,
    captionPosition = 'bottom-left',
    className,
    style
}) => {
    const ref = useRef(null);
    const { scrollYProgress } = useScroll({
        target: ref,
        offset: ["start end", "end start"]
    });

    // Subtle parallax movement
    const y = useTransform(scrollYProgress, [0, 1], [-parallaxIntensity, parallaxIntensity]);
    const scale = useTransform(scrollYProgress, [0, 0.5, 1], [1.1, 1.05, 1.1]);
    const imageOpacity = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0.7, 1, 1, 0.7]);

    // Caption animation
    const captionY = useTransform(scrollYProgress, [0.2, 0.4], [20, 0]);
    const captionOpacity = useTransform(scrollYProgress, [0.2, 0.4, 0.7, 0.9], [0, 1, 1, 0]);

    const getCaptionStyles = () => {
        const base = {
            position: 'absolute',
            zIndex: 3,
            maxWidth: '600px'
        };

        switch (captionPosition) {
            case 'bottom-left':
                return { ...base, bottom: '3rem', left: '3rem' };
            case 'bottom-right':
                return { ...base, bottom: '3rem', right: '3rem', textAlign: 'right' };
            case 'center':
                return { ...base, top: '50%', left: '50%', transform: 'translate(-50%, -50%)', textAlign: 'center' };
            default:
                return { ...base, bottom: '3rem', left: '3rem' };
        }
    };

    return (
        <section
            ref={ref}
            className={className}
            style={{
                height: `${height}vh`,
                position: 'relative',
                overflow: 'hidden',
                ...style
            }}
        >
            {/* Parallax Image Container */}
            <motion.div
                style={{
                    position: 'absolute',
                    inset: '-10%',
                    y,
                    scale,
                    opacity: imageOpacity
                }}
            >
                <img
                    src={src}
                    alt={alt}
                    style={{
                        width: '100%',
                        height: '100%',
                        objectFit: 'cover',
                        filter: 'brightness(0.95) saturate(1.1)'
                    }}
                />
            </motion.div>

            {/* Overlay Gradient */}
            <div style={{
                position: 'absolute',
                inset: 0,
                background: `linear-gradient(to top, rgba(17, 17, 17, ${overlay * 1.5}) 0%, rgba(17, 17, 17, ${overlay * 0.5}) 50%, rgba(17, 17, 17, ${overlay * 0.3}) 100%)`,
                zIndex: 1
            }} />

            {/* Grain Overlay */}
            {showGrain && (
                <div style={{
                    position: 'absolute',
                    inset: 0,
                    backgroundImage: 'url("https://grainy-gradients.vercel.app/noise.svg")',
                    opacity: 0.06,
                    pointerEvents: 'none',
                    zIndex: 2,
                    mixBlendMode: 'overlay'
                }} />
            )}

            {/* Caption */}
            {caption && (
                <motion.div style={{ ...getCaptionStyles(), y: captionY, opacity: captionOpacity }}>
                    {subcaption && (
                        <div style={{
                            fontSize: '0.75rem',
                            color: 'var(--color-heritage-bronze)',
                            fontFamily: 'monospace',
                            letterSpacing: '0.15em',
                            textTransform: 'uppercase',
                            marginBottom: '1rem'
                        }}>
                            {subcaption}
                        </div>
                    )}
                    <h3 style={{
                        fontSize: 'clamp(1.5rem, 4vw, 3rem)',
                        fontWeight: 500,
                        lineHeight: 1.2,
                        color: '#FEFFFF',
                        fontFamily: 'Outfit, sans-serif',
                        margin: 0
                    }}>
                        {caption}
                    </h3>
                    {description && (
                        <p style={{
                            fontSize: 'clamp(0.9rem, 1.5vw, 1.1rem)',
                            lineHeight: 1.7,
                            color: 'rgba(255, 255, 255, 0.85)',
                            fontFamily: 'Outfit, sans-serif',
                            marginTop: '1.25rem',
                            maxWidth: '500px',
                            fontWeight: 300
                        }}>
                            {description}
                        </p>
                    )}
                </motion.div>
            )}
        </section>
    );
};

export default EditorialImage;
