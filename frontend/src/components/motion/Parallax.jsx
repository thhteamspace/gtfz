import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

const Parallax = ({ children, offset = 50, className, style }) => {
    const ref = useRef(null);
    const { scrollYProgress } = useScroll({
        target: ref,
        offset: ["start end", "end start"]
    });

    const y = useTransform(scrollYProgress, [0, 1], [-offset, offset]);

    return (
        <div ref={ref} className={className} style={{ ...style, position: 'relative', overflow: 'hidden' }}>
            <motion.div style={{ y }}>
                {children}
            </motion.div>
        </div>
    );
};

export default Parallax;
