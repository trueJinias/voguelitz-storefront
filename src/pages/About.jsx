import React from 'react';
import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import { Header } from '../components/layout/Header';
import { Footer } from '../components/layout/Footer';
import { GlassSurface } from '../components/ui/GlassSurface';

export const About = () => {
    const { t } = useTranslation();

    return (
        <div className="min-h-screen flex flex-col pt-32 bg-bg-primary">
            <Header />

            <main className="flex-grow container mx-auto px-6 mb-20">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    className="mb-16 text-center"
                >
                    <h1 className="text-4xl md:text-5xl font-serif font-bold mb-4">{t('header.about', 'About Us')}</h1>
                </motion.div>

                <section className="grid md:grid-cols-2 gap-12 items-center mb-24">
                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                    >
                        <img
                            src="https://images.unsplash.com/photo-1616486338812-3dadae4b4f9d?q=80&w=1740&auto=format&fit=crop"
                            alt="Craftsmanship"
                            className="rounded-2xl shadow-xl w-full h-[500px] object-cover"
                        />
                    </motion.div>
                    <motion.div
                        initial={{ opacity: 0, x: 30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                        className="space-y-6"
                    >
                        <h2 className="text-3xl font-serif font-bold">{t('about.subtitle')}</h2>
                        <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                            {t('about.p1')}
                        </p>
                        <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                            {t('about.p2')}
                        </p>
                    </motion.div>
                </section>

                <section className="mb-24">
                    <GlassSurface intensity="sm" className="p-12 rounded-3xl text-center">
                        <h2 className="text-2xl font-serif font-bold mb-8">{t('about.values')}</h2>
                        <div className="grid md:grid-cols-3 gap-8">
                            <div>
                                <div className="text-3xl mb-4">🌿</div>
                                <h3 className="font-bold mb-2">{t('about.sustainable')}</h3>
                                <p className="text-sm text-gray-500">{t('about.sustainable_desc')}</p>
                            </div>
                            <div>
                                <div className="text-3xl mb-4">💎</div>
                                <h3 className="font-bold mb-2">{t('about.quality')}</h3>
                                <p className="text-sm text-gray-500">{t('about.quality_desc')}</p>
                            </div>
                            <div>
                                <div className="text-3xl mb-4">🌍</div>
                                <h3 className="font-bold mb-2">{t('about.global')}</h3>
                                <p className="text-sm text-gray-500">{t('about.global_desc')}</p>
                            </div>
                        </div>
                    </GlassSurface>
                </section>
            </main>

            <Footer />
        </div>
    );
};
