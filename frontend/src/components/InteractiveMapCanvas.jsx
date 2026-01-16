import React, { useEffect, useRef } from 'react';

const InteractiveMapCanvas = () => {
    const canvasRef = useRef(null);
    const mouseRef = useRef({ x: 0, y: 0 });
    const dotsRef = useRef([]);

    useEffect(() => {
        const canvas = canvasRef.current;
        if (!canvas) return;

        const ctx = canvas.getContext('2d');
        const resizeCanvas = () => {
            canvas.width = window.innerWidth;
            canvas.height = window.innerHeight;
            generateDots();
        };

        // Generate dots in a world map pattern
        const generateDots = () => {
            dotsRef.current = [];
            const dotCount = 300; // Adjust for density

            for (let i = 0; i < dotCount; i++) {
                // Distribute dots more densely in "land" areas (simplified)
                const x = Math.random() * canvas.width;
                const y = Math.random() * canvas.height;

                dotsRef.current.push({
                    x,
                    y,
                    baseSize: 1.5 + Math.random() * 1.5,
                    glowSize: 0,
                    opacity: 0.3 + Math.random() * 0.3
                });
            }
        };

        const handleMouseMove = (e) => {
            mouseRef.current = {
                x: e.clientX,
                y: e.clientY
            };
        };

        const animate = () => {
            ctx.clearRect(0, 0, canvas.width, canvas.height);

            dotsRef.current.forEach(dot => {
                const dx = mouseRef.current.x - dot.x;
                const dy = mouseRef.current.y - dot.y;
                const distance = Math.sqrt(dx * dx + dy * dy);
                const maxDistance = 150; // Proximity threshold

                // Calculate glow based on distance
                if (distance < maxDistance) {
                    const intensity = 1 - (distance / maxDistance);
                    dot.glowSize = intensity * 15;

                    // Draw glow
                    const gradient = ctx.createRadialGradient(
                        dot.x, dot.y, 0,
                        dot.x, dot.y, dot.glowSize
                    );
                    gradient.addColorStop(0, `rgba(197, 160, 89, ${intensity * 0.8})`);
                    gradient.addColorStop(0.5, `rgba(197, 160, 89, ${intensity * 0.4})`);
                    gradient.addColorStop(1, 'rgba(197, 160, 89, 0)');

                    ctx.fillStyle = gradient;
                    ctx.fillRect(
                        dot.x - dot.glowSize,
                        dot.y - dot.glowSize,
                        dot.glowSize * 2,
                        dot.glowSize * 2
                    );
                } else {
                    dot.glowSize *= 0.9; // Fade out
                }

                // Draw dot
                ctx.beginPath();
                ctx.arc(dot.x, dot.y, dot.baseSize, 0, Math.PI * 2);
                ctx.fillStyle = `rgba(197, 160, 89, ${dot.opacity})`;
                ctx.fill();
            });

            requestAnimationFrame(animate);
        };

        resizeCanvas();
        window.addEventListener('resize', resizeCanvas);
        window.addEventListener('mousemove', handleMouseMove);
        animate();

        return () => {
            window.removeEventListener('resize', resizeCanvas);
            window.removeEventListener('mousemove', handleMouseMove);
        };
    }, []);

    return (
        <canvas
            ref={canvasRef}
            style={{
                position: 'absolute',
                inset: 0,
                zIndex: 2,
                pointerEvents: 'none',
                mixBlendMode: 'screen'
            }}
        />
    );
};

export default InteractiveMapCanvas;
