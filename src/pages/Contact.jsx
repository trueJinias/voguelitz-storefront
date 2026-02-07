import React from 'react';
import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import { Header } from '../components/layout/Header';
import { Footer } from '../components/layout/Footer';
import { GlassSurface } from '../components/ui/GlassSurface';

export const Contact = () => {
    const { t } = useTranslation();

    return (
        <div className="min-h-screen flex flex-col pt-32 bg-bg-primary">
            <Header />

            <main className="flex-grow container mx-auto px-6 mb-20">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    className="mb-12 text-center"
                >
                    <h1 className="text-4xl md:text-5xl font-serif font-bold mb-4">{t('contact.title')}</h1>
                    <p className="text-gray-500 max-w-xl mx-auto">
                        {t('contact.subtitle')}
                    </p>
                </motion.div>

                <div className="grid md:grid-cols-2 gap-12 max-w-5xl mx-auto">
                    <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.6 }}
                    >
                        <GlassSurface intensity="sm" className="p-8 rounded-2xl h-full">
                            <h2 className="text-2xl font-serif font-bold mb-6">{t('contact.get_in_touch')}</h2>
                            <form className="space-y-6">
                                <div>
                                    <label className="block text-sm font-medium mb-2">{t('contact.name')}</label>
                                    <input type="text" className="w-full p-3 border border-gray-200 rounded-lg bg-white/50 focus:outline-none focus:border-black" />
                                </div>
                                <div>
                                    <label className="block text-sm font-medium mb-2">{t('contact.email')}</label>
                                    <input type="email" className="w-full p-3 border border-gray-200 rounded-lg bg-white/50 focus:outline-none focus:border-black" />
                                </div>
                                <div>
                                    <label className="block text-sm font-medium mb-2">{t('contact.message')}</label>
                                    <textarea rows="5" className="w-full p-3 border border-gray-200 rounded-lg bg-white/50 focus:outline-none focus:border-black"></textarea>
                                </div>
                                <button className="w-full bg-black text-white py-4 rounded-lg hover:bg-gray-800 transition-colors">
                                    {t('contact.send')}
                                </button>
                            </form>
                        </GlassSurface>
                    </motion.div>

                    <div className="space-y-8">
                        <div>
                            <h3 className="text-xl font-bold mb-2">{t('contact.customer_service')}</h3>
                            <p className="text-gray-600">{t('contact.hours')}</p>
                            <p className="text-gray-600">support@voguelitz.com</p>
                        </div>
                        <div>
                            <h3 className="text-xl font-bold mb-2">{t('contact.press')}</h3>
                            <p className="text-gray-600">press@voguelitz.com</p>
                        </div>
                        <div>
                            <h3 className="text-xl font-bold mb-2">{t('contact.hq')}</h3>
                            <p className="text-gray-600">
                                {t('contact.address_line1')}<br />
                                {t('contact.address_line2')}
                            </p>
                        </div>
                    </div>
                </div>
            </main>

            <Footer />
        </div>
    );
};
