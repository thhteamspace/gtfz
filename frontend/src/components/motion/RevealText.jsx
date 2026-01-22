import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';

const RevealText = ({ children, width = "fit-content", delay = 0.2, forceVisible = false }) => {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: false, margin: "0px 0px -20% 0px", amount: 0.5 });

    return (
        <div ref={ref} style={{ position: "relative", width, overflow: "hidden", paddingBottom: "0.15em" }}>
            <motion.div
                variants={{
                    hidden: { opacity: 0, y: 75 },
                    visible: { opacity: 1, y: 0 },
                }}
                initial="hidden"
                animate={forceVisible || isInView ? "visible" : "hidden"}
                transition={{ duration: 0.8, delay: delay, ease: [0.25, 1, 0.5, 1] }}
            >
                {children}
            </motion.div>
        </div>
    );
};

export default RevealText;
