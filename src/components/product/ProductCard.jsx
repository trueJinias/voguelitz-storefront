import React from 'react';
import { motion } from 'framer-motion';
import { Clock } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

export const ProductCard = ({ product }) => {
    const { t, i18n } = useTranslation();

    // Helper to format currency based on language
    // In a real app, this would use an exchange rate currency converter
    const formatPrice = (priceDefault) => {
        // Simplistic conversion for demo
        const basePrice = parseInt(priceDefault.replace(/[^0-9]/g, ''));
        switch (i18n.language) {
            case 'en': return `$${Math.round(basePrice * 0.0067).toLocaleString()}`;
            case 'ko': return `₩${Math.round(basePrice * 9).toLocaleString()}`;
            case 'de':
            case 'fr':
            case 'it': return `€${Math.round(basePrice * 0.0061).toLocaleString()}`;
            default: return `¥${basePrice.toLocaleString()}`; // ja
        }
    };

    return (
        <motion.div
            className="group"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
        >
            <Link to={`/product/${product.id}`} className="block">
                <div className="relative overflow-hidden aspect-[4/5] bg-gray-100 dark:bg-gray-800 mb-4">
                    <img
                        src={product.image}
                        alt={product.title}
                        className="object-cover w-full h-full transition-transform duration-700 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors duration-300" />

                    <div className="absolute bottom-4 left-0 right-0 flex justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 transform translate-y-2 group-hover:translate-y-0">
                        <span className="bg-white dark:bg-black text-black dark:text-white px-6 py-2 text-sm uppercase tracking-wider font-medium shadow-lg hover:bg-accent-gold hover:text-white transition-colors">
                            {t('product.view_details')}
                        </span>
                    </div>
                </div>

                <h3 className="text-lg font-serif font-medium mb-1 group-hover:text-accent-gold transition-colors">{product.title}</h3>
                <p className="text-sm text-text-secondary mb-2">{formatPrice(product.price)}</p>

                {/* Shipping Warning */}
                <div className="flex items-center text-xs text-stone-500 bg-gray-50 dark:bg-white/5 py-1 px-2 rounded w-fit">
                    <Clock size={12} className="mr-1.5" />
                    <span>{t('product.delivery_time')}</span>
                </div>
            </Link>
        </motion.div>
    );
};
