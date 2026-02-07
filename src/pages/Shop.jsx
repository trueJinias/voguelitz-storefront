import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import { Header } from '../components/layout/Header';
import { Footer } from '../components/layout/Footer';
import { ProductCard } from '../components/product/ProductCard';
import { GlassSurface } from '../components/ui/GlassSurface';

// Mock data - in a real app this would come from an API/Context
const ALL_PRODUCTS = [
    {
        id: 1,
        title: "Velvet Lounge Chair",
        price: "¥45,000",
        image: "https://images.unsplash.com/photo-1567538096630-e997191f7d53?q=80&w=1374&auto=format&fit=crop",
        category: "Chair"
    },
    {
        id: 2,
        title: "Minimalist Marble Table",
        price: "¥32,800",
        image: "https://images.unsplash.com/photo-1533090481720-856c6e3c1fdc?q=80&w=1376&auto=format&fit=crop",
        category: "Table"
    },
    {
        id: 3,
        title: "Art Deco Floor Lamp",
        price: "¥18,500",
        image: "https://images.unsplash.com/photo-1513519245088-0e12902e5a38?q=80&w=1470&auto=format&fit=crop",
        category: "Lighting"
    },
    {
        id: 4,
        title: "Nordic Soft Sofa",
        price: "¥89,000",
        image: "https://images.unsplash.com/photo-1555041469-a586c61ea9bc?q=80&w=1470&auto=format&fit=crop",
        category: "Sofa"
    },
    {
        id: 5,
        title: "Ceramic Vase Set",
        price: "¥12,000",
        image: "https://images.unsplash.com/photo-1581783342308-f792ca800c22?q=80&w=1470&auto=format&fit=crop",
        category: "Decor"
    },
    {
        id: 6,
        title: "Walnut Sideboard",
        price: "¥120,000",
        image: "https://images.unsplash.com/photo-1595428774754-71572d548bb7?q=80&w=1470&auto=format&fit=crop",
        category: "Storage"
    }
];

export const Shop = () => {
    const { t } = useTranslation();
    const [selectedCategory, setSelectedCategory] = React.useState('all');

    const filteredProducts = selectedCategory === 'all'
        ? ALL_PRODUCTS
        : ALL_PRODUCTS.filter(product => product.category.toLowerCase() === selectedCategory.toLowerCase());

    // Map category keys for comparison (simple mapping for now, ideally data driven)
    const getCategoryKey = (cat) => {
        if (cat === 'Chair') return 'chairs';
        if (cat === 'Table') return 'tables';
        if (cat === 'Lighting') return 'lighting';
        if (cat === 'Sofa') return 'sofas';
        if (cat === 'Decor') return 'decor';
        if (cat === 'Storage') return 'storage';
        return cat.toLowerCase();
    };

    // Update filter logic to match keys used in buttons
    const displayProducts = selectedCategory === 'all'
        ? ALL_PRODUCTS
        : ALL_PRODUCTS.filter(product => getCategoryKey(product.category) === selectedCategory);

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
                    <h1 className="text-4xl md:text-5xl font-serif font-bold mb-4">{t('header.shop')}</h1>
                    <p className="text-gray-500 max-w-xl mx-auto">
                        {t('shop.subtitle')}
                    </p>
                </motion.div>

                {/* Filters */}
                <div className="flex justify-center gap-4 mb-12 flex-wrap">
                    {[
                        { key: 'all', label: t('shop.filter.all') },
                        { key: 'chairs', label: t('shop.filter.chairs') },
                        { key: 'tables', label: t('shop.filter.tables') },
                        { key: 'lighting', label: t('shop.filter.lighting') },
                        { key: 'sofas', label: t('shop.filter.sofas') },
                        { key: 'decor', label: t('shop.filter.decor') }
                    ].map((cat) => (
                        <button
                            key={cat.key}
                            onClick={() => setSelectedCategory(cat.key)}
                            className={`px-4 py-2 rounded-full text-sm tracking-widest uppercase transition-all ${selectedCategory === cat.key
                                ? 'bg-black text-white dark:bg-white dark:text-black'
                                : 'hover:bg-gray-100 dark:hover:bg-gray-800'
                                }`}
                        >
                            {cat.label}
                        </button>
                    ))}
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    <AnimatePresence mode='popLayout'>
                        {displayProducts.map((product) => (
                            <motion.div
                                key={product.id}
                                layout
                                initial={{ opacity: 0, scale: 0.9 }}
                                animate={{ opacity: 1, scale: 1 }}
                                exit={{ opacity: 0, scale: 0.9 }}
                                transition={{ duration: 0.3 }}
                            >
                                <ProductCard product={product} />
                            </motion.div>
                        ))}
                    </AnimatePresence>
                    {displayProducts.length === 0 && (
                        <div className="col-span-full text-center py-20 text-gray-500">
                            <p>No products found in this category.</p>
                        </div>
                    )}
                </div>
            </main>

            <Footer />
        </div>
    );
};
