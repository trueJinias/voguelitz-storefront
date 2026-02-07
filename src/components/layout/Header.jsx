import React, { useState, useEffect } from 'react';
import { ShoppingBag, Menu, X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';
import { LanguageSwitcher } from '../features/LanguageSwitcher';
import { GlassSurface } from '../ui/GlassSurface';
import { useCart } from '../../context/CartContext';

export const Header = () => {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const { t } = useTranslation();
    const { toggleCart, cartCount } = useCart();

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 50);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const navItems = [
        { key: 'home', label: t('header.home'), path: '/' },
        { key: 'shop', label: t('header.shop'), path: '/shop' },
        { key: 'collections', label: t('header.collections'), path: '/collections' },
        { key: 'about', label: t('header.about'), path: '/about' },
    ];

    return (
        <header className="fixed top-0 left-0 right-0 z-50 pointer-events-none">
            <div className={`transition-all duration-500 ease-in-out flex justify-center ${isScrolled ? 'pt-6' : 'pt-0'}`}>
                <GlassSurface
                    intensity={isScrolled ? "md" : "sm"}
                    className={`pointer-events-auto transition-all duration-500 ease-in-out ${isScrolled
                        ? 'w-[90%] md:w-[80%] max-w-5xl rounded-full py-3 px-6 shadow-2xl'
                        : 'w-full rounded-none py-6 px-6 bg-transparent border-transparent shadow-none backdrop-blur-none backdrop-filter-none'
                        }`}
                    border={isScrolled}
                >
                    <div className="container mx-auto px-6 flex justify-between items-center h-full">
                        <Link to="/" className="text-2xl font-serif font-bold tracking-tighter hover:text-accent-gold transition-colors">
                            VogueLITZ.
                        </Link>

                        <nav className="hidden md:flex space-x-8 items-center">
                            {navItems.map((item) => (
                                <Link
                                    key={item.key}
                                    to={item.path}
                                    className="text-sm uppercase tracking-widest hover:text-accent-gold transition-colors"
                                >
                                    {item.label}
                                </Link>
                            ))}
                        </nav>

                        <div className="flex items-center space-x-6">
                            <div className="hidden md:block">
                                <LanguageSwitcher />
                            </div>

                            <button
                                onClick={toggleCart}
                                className="relative p-2 hover:text-accent-gold transition-colors"
                            >
                                <ShoppingBag size={20} />
                                {cartCount > 0 && (
                                    <span className="absolute top-0 right-0 w-4 h-4 text-[10px] bg-accent-gold text-white rounded-full flex items-center justify-center">
                                        {cartCount}
                                    </span>
                                )}
                            </button>

                            <button
                                className="md:hidden p-2"
                                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                            >
                                {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
                            </button>
                        </div>
                    </div>
                </GlassSurface>
            </div>

            <AnimatePresence>
                {isMobileMenuOpen && (
                    <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: 'auto' }}
                        exit={{ opacity: 0, height: 0 }}
                        className="md:hidden bg-white dark:bg-black border-t border-gray-100 dark:border-gray-800 pointer-events-auto"
                    >
                        <nav className="flex flex-col p-6 space-y-4">
                            {navItems.map((item) => (
                                <Link
                                    key={item.key}
                                    to={item.path}
                                    className="text-lg font-serif hover:text-accent-gold"
                                    onClick={() => setIsMobileMenuOpen(false)}
                                >
                                    {item.label}
                                </Link>
                            ))}
                            <div className="pt-4 mt-4 border-t border-gray-100 dark:border-gray-800">
                                <LanguageSwitcher />
                            </div>
                        </nav>
                    </motion.div>
                )}
            </AnimatePresence>
        </header>
    );
};
