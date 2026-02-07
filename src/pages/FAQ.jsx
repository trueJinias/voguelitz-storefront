import React from 'react';
import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';
import { Header } from '../components/layout/Header';
import { Footer } from '../components/layout/Footer';
import { GlassSurface } from '../components/ui/GlassSurface';

const Accordion = ({ question, answer }) => {
    const [isOpen, setIsOpen] = React.useState(false);

    return (
        <div className="border-b border-gray-200 dark:border-gray-800">
            <button
                className="w-full py-6 flex justify-between items-center text-left"
                onClick={() => setIsOpen(!isOpen)}
            >
                <span className="font-medium text-lg">{question}</span>
                <span className="text-2xl font-light">{isOpen ? '−' : '+'}</span>
            </button>
            <motion.div
                initial={false}
                animate={{ height: isOpen ? 'auto' : 0, opacity: isOpen ? 1 : 0 }}
                className="overflow-hidden"
            >
                <div className="pb-6 text-gray-600 dark:text-gray-400">
                    {answer}
                </div>
            </motion.div>
        </div>
    );
};

export const FAQ = () => {
    const { t } = useTranslation();
    return (
        <div className="min-h-screen flex flex-col pt-32 bg-bg-primary">
            <Header />

            <main className="flex-grow container mx-auto px-6 mb-20 max-w-4xl">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    className="mb-16 text-center"
                >
                    <h1 className="text-4xl md:text-5xl font-serif font-bold mb-4">{t('faq.title')}</h1>
                </motion.div>

                <div className="space-y-2">
                    <Accordion
                        question={t('faq.q1')}
                        answer={t('faq.a1')}
                    />
                    <Accordion
                        question={t('faq.q2')}
                        answer={t('faq.a2')}
                    />
                    <Accordion
                        question={t('faq.q3')}
                        answer={t('faq.a3')}
                    />
                    <Accordion
                        question={t('faq.q4')}
                        answer={t('faq.a4')}
                    />
                </div>
            </main>

            <Footer />
        </div>
    );
};
