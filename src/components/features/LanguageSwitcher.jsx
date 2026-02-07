import React, { useState, useRef, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { Globe, ChevronDown } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const LANGUAGES = [
    { code: 'ja', label: 'JPN', name: '日本語', currency: '¥' },
    { code: 'en', label: 'USA', name: 'English', currency: '$' },
    { code: 'ko', label: 'KOR', name: '한국어', currency: '₩' },
    { code: 'de', label: 'DEU', name: 'Deutsch', currency: '€' },
    { code: 'fr', label: 'FRA', name: 'Français', currency: '€' },
    { code: 'it', label: 'ITA', name: 'Italiano', currency: '€' },
];

export const LanguageSwitcher = () => {
    const { i18n } = useTranslation();
    const [isOpen, setIsOpen] = useState(false);
    const dropdownRef = useRef(null);

    const currentLang = LANGUAGES.find(lang => lang.code === i18n.resolvedLanguage) || LANGUAGES.find(lang => lang.code === i18n.language.split('-')[0]) || LANGUAGES[1];

    const handleLanguageChange = (lang) => {
        i18n.changeLanguage(lang.code);
        setIsOpen(false);
    };

    useEffect(() => {
        const handleClickOutside = (event) => {
            if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
                setIsOpen(false);
            }
        };
        document.addEventListener('mousedown', handleClickOutside);
        return () => document.removeEventListener('mousedown', handleClickOutside);
    }, []);

    return (
        <div className="relative" ref={dropdownRef}>
            <button
                onClick={() => setIsOpen(!isOpen)}
                className="flex items-center space-x-1 text-xs font-medium uppercase tracking-wider hover:text-accent-gold transition-colors py-2"
            >
                <Globe size={14} className="mr-1" />
                <span>{currentLang.label}</span>
            </button>

            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: 10 }}
                        className="absolute right-0 mt-2 w-32 bg-white dark:bg-stone-900 border border-gray-100 dark:border-gray-800 shadow-xl rounded-sm overflow-hidden z-50"
                    >
                        {LANGUAGES.map((lang) => (
                            <button
                                key={lang.code}
                                onClick={() => handleLanguageChange(lang)}
                                className={`w-full text-left px-4 py-2 text-xs hover:bg-gray-50 dark:hover:bg-white/5 transition-colors flex justify-between ${currentLang.code === lang.code ? 'text-accent-gold font-bold' : 'text-text-secondary'}`}
                            >
                                <span>{lang.name}</span>
                                <span className="opacity-50">{lang.code.toUpperCase()}</span>
                            </button>
                        ))}
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    );
};
