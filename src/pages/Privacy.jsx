import React from 'react';
import { useTranslation } from 'react-i18next';
import { Header } from '../components/layout/Header';
import { Footer } from '../components/layout/Footer';

export const Privacy = () => {
    const { t } = useTranslation();
    return (
        <div className="min-h-screen flex flex-col pt-32 bg-bg-primary">
            <Header />
            <main className="flex-grow container mx-auto px-6 mb-20 max-w-4xl">
                <h1 className="text-4xl font-serif font-bold mb-8">{t('legal.privacy_title')}</h1>
                <div className="prose dark:prose-invert max-w-none space-y-6 text-gray-600 dark:text-gray-300">
                    <p>{t('legal.updated')}: {new Date().toLocaleDateString()}</p>

                    <h2 className="text-2xl font-bold text-black dark:text-white mt-8">{t('legal.privacy_intro_title')}</h2>
                    <p>{t('legal.privacy_intro_body')}</p>

                    <h2 className="text-2xl font-bold text-black dark:text-white mt-8">{t('legal.privacy_data_title')}</h2>
                    <p>{t('legal.privacy_data_body')}</p>
                    <ul className="list-disc pl-5 space-y-2">
                        <li>{t('legal.privacy_data_li1')}</li>
                        <li>{t('legal.privacy_data_li2')}</li>
                        <li>{t('legal.privacy_data_li3')}</li>
                    </ul>

                    <h2 className="text-2xl font-bold text-black dark:text-white mt-8">{t('legal.privacy_usage_title')}</h2>
                    <p>{t('legal.privacy_usage_body')}</p>
                    <ul className="list-disc pl-5 space-y-2">
                        <li>{t('legal.privacy_usage_li1')}</li>
                        <li>{t('legal.privacy_usage_li2')}</li>
                    </ul>
                </div>
            </main>
            <Footer />
        </div>
    );
};
