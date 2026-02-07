import React from 'react';
import { motion } from 'framer-motion';

const defaultAnimations = {
    hidden: {
        opacity: 0,
        y: 20,
    },
    visible: {
        opacity: 1,
        y: 0,
        transition: {
            duration: 0.8,
            ease: [0.2, 0.65, 0.3, 0.9],
        },
    },
};

export const AnimatedText = ({
    text,
    el: Wrapper = 'p',
    className,
    once = true,
    repeatDelay,
    animation = defaultAnimations,
}) => {
    const textArray = Array.isArray(text) ? text : [text];

    return (
        <Wrapper className={className}>
            <span className="sr-only">{text}</span>
            <motion.span
                initial="hidden"
                whileInView="visible"
                viewport={{ once }}
                transition={{ staggerChildren: 0.05, delayChildren: 0.1 }}
                aria-hidden
            >
                {textArray.map((line, lineIndex) => (
                    <span className="block" key={`${line}-${lineIndex}`}>
                        {line.split(' ').map((word, wordIndex) => (
                            <span className="inline-block" key={`${word}-${wordIndex}`}>
                                {word.split('').map((char, charIndex) => (
                                    <motion.span
                                        key={`${char}-${charIndex}`}
                                        className="inline-block"
                                        variants={animation}
                                    >
                                        {char}
                                    </motion.span>
                                ))}
                                <span className="inline-block">&nbsp;</span>
                            </span>
                        ))}
                    </span>
                ))}
            </motion.span>
        </Wrapper>
    );
};
