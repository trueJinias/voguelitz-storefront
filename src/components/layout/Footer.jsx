import React from 'react';
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';

export const Footer = () => {
    const { t } = useTranslation();

    return (
        <footer className="bg-zinc-900 pt-20 pb-10 mt-20">
            <div className="container mx-auto px-6">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
                    <div className="space-y-4">
                        <h3 className="text-xl font-serif font-bold">VogueLITZ.</h3>
                        <p className="text-text-secondary text-sm leading-relaxed">
                            {t('footer.description')}
                        </p>
                    </div>

                    <div>
                        <h4 className="font-bold mb-6 uppercase text-xs tracking-widest text-accent-gold">{t('footer.shop')}</h4>
                        <ul className="space-y-3 text-sm text-text-secondary">
                            <li><Link to="/shop" className="hover:text-primary transition-colors">New Arrivals</Link></li>
                            <li><Link to="/shop" className="hover:text-primary transition-colors">Best Sellers</Link></li>
                            <li><Link to="/collections" className="hover:text-primary transition-colors">Collections</Link></li>
                            <li><Link to="/shop" className="hover:text-primary transition-colors">Decor</Link></li>
                        </ul>
                    </div>

                    <div>
                        <h4 className="font-bold mb-6 uppercase text-xs tracking-widest text-accent-gold">{t('footer.support')}</h4>
                        <ul className="space-y-3 text-sm text-text-secondary">
                            <li><Link to="/about" className="hover:text-primary transition-colors">About Us</Link></li>
                            <li><Link to="/contact" className="hover:text-primary transition-colors">Contact Us</Link></li>
                            <li><Link to="/faq" className="hover:text-primary transition-colors">FAQs</Link></li>
                            <li><Link to="/returns" className="hover:text-primary transition-colors">Return Policy</Link></li>
                        </ul>
                    </div>

                    <div>
                        <h4 className="font-bold mb-6 uppercase text-xs tracking-widest text-accent-gold">{t('footer.important')}</h4>
                        <ul className="space-y-3 text-sm text-text-secondary">
                            <li><Link to="/faq" className="hover:text-primary transition-colors font-medium">{t('footer.shipping_delivery')}</Link></li>
                            <li className="text-xs text-stone-500">
                                {t('footer.shipping_note')}
                            </li>
                            <li><Link to="/privacy" className="hover:text-primary transition-colors">Privacy Policy</Link></li>
                            <li><Link to="/terms" className="hover:text-primary transition-colors">Terms of Service</Link></li>
                        </ul>
                    </div>
                </div>

                <div className="border-t border-gray-800 pt-8 flex flex-col md:flex-row justify-between items-center text-xs text-text-secondary">
                    <p>&copy; {new Date().getFullYear()} VogueLITZ. {t('footer.rights_reserved')}</p>
                    <p className="opacity-50 hover:opacity-100 transition-opacity" title="Build: v1.1.0 (MCM)">v1.1.0 • {t('footer.designed_with')}</p>
                </div>
            </div>
        </footer>
    );
};
