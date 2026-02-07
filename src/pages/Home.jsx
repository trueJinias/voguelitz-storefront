import React from 'react';
import { Header } from '../components/layout/Header';
import { Footer } from '../components/layout/Footer';
import { AnimatedText } from '../components/ui/AnimatedText';
import { MagneticButton } from '../components/ui/MagneticButton';
import { GlassSurface } from '../components/ui/GlassSurface';
import { GradualBlur } from '../components/ui/GradualBlur';
import { ProductCard } from '../components/product/ProductCard';
import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';

const MOCK_PRODUCTS = [
    {
        id: 1,
        title: "Velvet Lounge Chair",
        price: "¥45,000",
        image: "https://images.unsplash.com/photo-1567538096630-e997191f7d53?q=80&w=1374&auto=format&fit=crop"
    },
    {
        id: 2,
        title: "Minimalist Marble Table",
        price: "¥32,800",
        image: "https://images.unsplash.com/photo-1533090481720-856c6e3c1fdc?q=80&w=1376&auto=format&fit=crop"
    },
    {
        id: 3,
        title: "Art Deco Floor Lamp",
        price: "¥18,500",
        image: "https://images.unsplash.com/photo-1513519245088-0e12902e5a38?q=80&w=1470&auto=format&fit=crop"
    },
    {
        id: 4,
        title: "Nordic Soft Sofa",
        price: "¥89,000",
        image: "https://images.unsplash.com/photo-1555041469-a586c61ea9bc?q=80&w=1470&auto=format&fit=crop"
    }
];

export const Home = () => {
    const { t } = useTranslation();

    return (
        <div className="min-h-screen flex flex-col">
            <Header />

            <main className="flex-grow">
                {/* Hero Section */}
                <section className="relative h-screen flex items-center justify-center overflow-hidden">
                    <div className="absolute inset-0 z-0">
                        {/* Background Image / Video would go here */}
                        <div className="absolute inset-0 bg-neutral-100 dark:bg-stone-900" />
                        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?q=80&w=2000&auto=format&fit=crop')] opacity-10 bg-cover bg-center" />

                        {/* Gradual Blur on the bottom of hero image to blend with content */}
                        <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-white dark:from-black to-transparent z-10" />
                    </div>

                    <div className="container mx-auto px-6 relative z-10 text-center">
                        <motion.div
                            initial={{ opacity: 0, y: 30 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 1, delay: 0.2 }}
                        >
                            <h2 className="text-sm md:text-base font-serif italic mb-6 text-accent-gold tracking-widest">
                                {t('hero.est')}
                            </h2>
                        </motion.div>

                        <div className="mb-10 relative">
                            <AnimatedText
                                text={[t('hero.title_line1'), t('hero.title_line2')]}
                                className="text-4xl md:text-7xl font-serif font-bold tracking-tight leading-tight"
                                animation={{
                                    hidden: { opacity: 0, y: 40, skewY: 5 },
                                    visible: {
                                        opacity: 1,
                                        y: 0,
                                        skewY: 0,
                                        transition: { duration: 0.8, ease: "easeOut" }
                                    }
                                }}
                            />
                        </div>

                        <motion.p
                            className="max-w-xl mx-auto text-text-secondary mb-12 text-sm md:text-base leading-relaxed"
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ delay: 1, duration: 1 }}
                        >
                            {t('hero.subtitle')}
                        </motion.p>

                        <motion.div
                            initial={{ opacity: 0, scale: 0.9 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ delay: 1.2, duration: 0.5 }}
                        >
                            <MagneticButton>
                                {t('hero.cta')}
                            </MagneticButton>
                        </motion.div>
                    </div>
                </section>

                {/* Product Grid Section */}
                <section className="py-24 bg-white dark:bg-black">
                    <div className="container mx-auto px-6">
                        <div className="flex justify-between items-end mb-16">
                            <div>
                                <h3 className="text-3xl font-serif mb-2">Curated Arrivals</h3>
                                <p className="text-text-secondary text-sm">Timeless pieces for every corner.</p>
                            </div>
                            <a href="#" className="hidden md:block text-sm uppercase tracking-widest border-b border-black dark:border-white pb-1 hover:text-accent-gold hover:border-accent-gold transition-colors">
                                View All
                            </a>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-x-8 gap-y-12">
                            {MOCK_PRODUCTS.map((product) => (
                                <ProductCard key={product.id} product={product} />
                            ))}
                        </div>

                        <div className="mt-12 text-center md:hidden">
                            <a href="#" className="text-sm uppercase tracking-widest border-b border-black dark:border-white pb-1">
                                View All
                            </a>
                        </div>
                    </div>
                </section>

                {/* Feature/Shipping Info Section */}
                <section className="py-24 bg-stone-50 dark:bg-stone-900/50">
                    <div className="container mx-auto px-6">
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 text-center">
                            <div className="p-6">
                                <h4 className="font-serif text-xl mb-4">{t('product.made_to_order')}</h4>
                                <p className="text-sm text-text-secondary">{t('product.made_to_order_desc')}</p>
                            </div>
                            <div className="p-6">
                                <h4 className="font-serif text-xl mb-4">{t('product.global_shipping')}</h4>
                                <p className="text-sm text-text-secondary">{t('product.global_shipping_desc')}</p>
                            </div>
                            <div className="p-6">
                                <h4 className="font-serif text-xl mb-4">{t('product.quality_guarantee')}</h4>
                                <p className="text-sm text-text-secondary">{t('product.quality_guarantee_desc')}</p>
                            </div>
                        </div>
                    </div>
                </section>
            </main>

            <Footer />
        </div>
    );
};
