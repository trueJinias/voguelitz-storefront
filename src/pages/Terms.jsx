import React from 'react';
import { useTranslation } from 'react-i18next';
import { Header } from '../components/layout/Header';
import { Footer } from '../components/layout/Footer';

export const Terms = () => {
    const { t } = useTranslation();
    return (
        <div className="min-h-screen flex flex-col pt-32 bg-bg-primary">
            <Header />
            <main className="flex-grow container mx-auto px-6 mb-20 max-w-4xl">
                <h1 className="text-4xl font-serif font-bold mb-8">{t('legal.terms_title')}</h1>
                <div className="prose dark:prose-invert max-w-none space-y-6 text-gray-600 dark:text-gray-300">
                    <p>{t('legal.updated')}: {new Date().toLocaleDateString()}</p>

                    <h2 className="text-2xl font-bold text-black dark:text-white mt-8">{t('legal.terms_agreement_title')}</h2>
                    <p>{t('legal.terms_agreement_body')}</p>

                    <h2 className="text-2xl font-bold text-black dark:text-white mt-8">{t('legal.terms_ip_title')}</h2>
                    <p>{t('legal.terms_ip_body')}</p>

                    <h2 className="text-2xl font-bold text-black dark:text-white mt-8">{t('legal.terms_obligations_title')}</h2>
                    <p>{t('legal.terms_obligations_body')}</p>
                </div>
            </main>
            <Footer />
        </div>
    );
};
