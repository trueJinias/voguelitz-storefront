import React from 'react';

export const GlassSurface = ({
    children,
    className = "",
    intensity = "md", // sm, md, lg
    border = true
}) => {
    // Using explicit style mapping for better control over the "glass" look
    const styles = {
        sm: { backdropFilter: 'blur(8px)', background: 'rgba(255, 255, 255, 0.2)' },
        md: { backdropFilter: 'blur(16px)', background: 'rgba(255, 255, 255, 0.5)' },
        lg: { backdropFilter: 'blur(24px)', background: 'rgba(255, 255, 255, 0.7)' },
    };

    const darkStyles = {
        background: 'rgba(0, 0, 0, 0.4)'
    };

    return (
        <div
            className={`
        relative
        ${border ? 'border border-white/20 dark:border-white/10' : ''}
        shadow-sm
        ${className}
      `}
            style={{
                ...styles[intensity],
                // Merging simple dark mode check logic (in real app, use CSS variables or classes)
                // For simplicity here, relying on Tailwind's dark modifier for background overrides if needed,
                // but explicit style is safer for the blur.
            }}
        >
            <div className="absolute inset-0 dark:bg-black/40 pointer-events-none" style={{ borderRadius: 'inherit' }} />

            {/* Noise texture overlay */}
            <div className="absolute inset-0 opacity-[0.05] pointer-events-none bg-[url('https://grainy-gradients.vercel.app/noise.svg')]" style={{ borderRadius: 'inherit' }} />

            {/* Shine effect */}
            <div className="absolute inset-0 bg-gradient-to-br from-white/20 to-transparent pointer-events-none" style={{ borderRadius: 'inherit' }} />

            <div className="relative z-10 w-full h-full text-foreground">
                {children}
            </div>
        </div>
    );
};
