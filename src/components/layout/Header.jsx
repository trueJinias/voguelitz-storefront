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
        <header className="fixed top-0 left-0 right-0 z-50 pointer-events-none flex justify-center">
            <GlassSurface
                intensity={isScrolled ? "md" : "sm"}
                className="pointer-events-auto overflow-hidden"
                border={isScrolled}
                initial={false}
                animate={isScrolled ? 'scrolled' : 'top'}
                variants={{
                    top: {
                        width: '100%',
                        borderRadius: '0px',
                        y: 0,
                        marginTop: 0,
                        paddingTop: '1.5rem',
                        paddingBottom: '1.5rem',
                        backgroundColor: 'rgba(255, 255, 255, 0)',
                        backdropFilter: 'blur(0px)',
                    },
                    scrolled: {
                        width: '90%',
                        borderRadius: '9999px',
                        y: 0,
                        marginTop: 24,
                        paddingTop: '0.75rem',
                        paddingBottom: '0.75rem',
                        backgroundColor: 'rgba(255, 255, 255, 0.8)',
                        backdropFilter: 'blur(16px)',
                    }
                }}
                layout
                transition={{
                    type: "spring",
                    stiffness: 120,
                    damping: 20,
                    mass: 1
                }}
                style={{
                    width: isScrolled ? 'var(--header-width-scrolled, 90%)' : '100%',
                    maxWidth: isScrolled ? '64rem' : '100%',
                }}
            >
                <div className="container mx-auto px-6 flex justify-between items-center h-full">
                    <Link to="/" className="text-2xl font-serif font-bold tracking-tighter hover:text-accent-gold transition-colors">
                        VogueLITZ.
                    </Link>

                    <nav className="hidden lg:flex space-x-8 items-center">
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
                        <div className="hidden lg:block">
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
                            className="lg:hidden p-2"
                            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                        >
                            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
                        </button>
                    </div>
                </div>
            </GlassSurface>

            <AnimatePresence>
                {isMobileMenuOpen && (
                    <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: 'auto' }}
                        exit={{ opacity: 0, height: 0 }}
                        className="lg:hidden bg-white dark:bg-black border-t border-gray-100 dark:border-gray-800 pointer-events-auto absolute top-full left-0 right-0"
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
