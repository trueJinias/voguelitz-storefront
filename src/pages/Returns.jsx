import React from 'react';
import { useTranslation } from 'react-i18next';
import { Header } from '../components/layout/Header';
import { Footer } from '../components/layout/Footer';

export const Returns = () => {
    const { t } = useTranslation();
    return (
        <div className="min-h-screen flex flex-col pt-32 bg-bg-primary">
            <Header />
            <main className="flex-grow container mx-auto px-6 mb-20 max-w-4xl">
                <h1 className="text-4xl font-serif font-bold mb-8">{t('legal.returns_title')}</h1>
                <div className="prose dark:prose-invert max-w-none space-y-6 text-gray-600 dark:text-gray-300">
                    <h2 className="text-2xl font-bold text-black dark:text-white mt-8">{t('legal.returns_window_title')}</h2>
                    <p>{t('legal.returns_window_body')}</p>

                    <h2 className="text-2xl font-bold text-black dark:text-white mt-8">{t('legal.returns_eligibility_title')}</h2>
                    <p>{t('legal.returns_eligibility_body')}</p>

                    <h2 className="text-2xl font-bold text-black dark:text-white mt-8">{t('legal.returns_refunds_title')}</h2>
                    <p>{t('legal.returns_refunds_body')}</p>

                    <h2 className="text-2xl font-bold text-black dark:text-white mt-8">{t('legal.returns_shipping_title')}</h2>
                    <p>{t('legal.returns_shipping_body')}</p>
                </div>
            </main>
            <Footer />
        </div>
    );
};
