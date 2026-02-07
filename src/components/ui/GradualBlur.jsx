import React from 'react';
import { motion } from 'framer-motion';

export const GradualBlur = ({
    children,
    className = "",
    direction = "bottom", // top, bottom, left, right
    strength = "md", // sm, md, lg
    layers = 4,
    duration = 1
}) => {
    // Map strength to max blur pixels
    const blurStrengths = {
        sm: 4,
        md: 8,
        lg: 16
    };

    const maxBlur = blurStrengths[strength] || 8;

    // Generate masks based on direction
    const getMaskImage = () => {
        switch (direction) {
            case 'top': return 'linear-gradient(to bottom, transparent, black 100%)';
            case 'bottom': return 'linear-gradient(to top, transparent, black 100%)';
            case 'left': return 'linear-gradient(to right, transparent, black 100%)';
            case 'right': return 'linear-gradient(to left, transparent, black 100%)';
            default: return 'linear-gradient(to top, transparent, black 100%)';
        }
    };

    // Create layers with increasing blur
    const blurLayers = Array.from({ length: layers }).map((_, i) => {
        const blurAmount = (i / (layers - 1)) * maxBlur;
        const opacity = 1 / layers; // Simple stacking strategy

        return (
            <motion.div
                key={i}
                className="absolute inset-0 pointer-events-none"
                initial={{ filter: `blur(0px)`, opacity: 0 }}
                animate={{ filter: `blur(${blurAmount}px)`, opacity: 1 }}
                transition={{ duration: duration, delay: i * 0.1 }}
                style={{
                    zIndex: i,
                    mixBlendMode: 'normal'
                }}
            >
                {children}
            </motion.div>
        );
    });

    return (
        <div className={`relative ${className}`}>
            {/* Base content - sharp */}
            <div className="relative z-10">
                {children}
            </div>

            {/* 
         Note: True "Gradual Blur" usually involves masking the blur layers. 
         For a simpler implementation that works on text without complex masking issues, 
         we can use a mask-image approach on the container if the browser supports it,
         or simple stacked blurs if we want a "glow/bloom" effect.
         
         Here is a mask-based approach for accurate gradual blur:
      */}
            <div
                className="absolute inset-0 z-20 pointer-events-none"
                style={{
                    backdropFilter: `blur(${maxBlur}px)`,
                    maskImage: getMaskImage(),
                    WebkitMaskImage: getMaskImage(),
                }}
            />
        </div>
    );
};
