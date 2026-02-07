import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { Header } from '../components/layout/Header';
import { Footer } from '../components/layout/Footer';
import { GlassSurface } from '../components/ui/GlassSurface';

const COLLECTIONS = [
    {
        id: 1,
        title: "Modern Living",
        image: "https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?q=80&w=2000&auto=format&fit=crop",
        desc: "Sleek lines and contemporary aesthetics."
    },
    {
        id: 2,
        title: "Timeless Bedroom",
        image: "https://images.unsplash.com/photo-1505693314120-0d443867891c?q=80&w=1518&auto=format&fit=crop",
        desc: "Serene comfort for your sanctuary."
    },
    {
        id: 3,
        title: "Artisan Lighting",
        image: "https://images.unsplash.com/photo-1513519245088-0e12902e5a38?q=80&w=1470&auto=format&fit=crop",
        desc: "Illuminate your space with sculptural pieces."
    },
    {
        id: 4,
        title: "Home Office",
        image: "https://images.unsplash.com/photo-1497215842964-222b4bef46cd?q=80&w=1470&auto=format&fit=crop",
        desc: "Productivity meets elegance."
    }
];

export const Collections = () => {
    const { t } = useTranslation();

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
                    <h1 className="text-4xl md:text-5xl font-serif font-bold mb-4">{t('header.collections')}</h1>
                    <p className="text-gray-500 max-w-xl mx-auto">
                        {t('collections.subtitle')}
                    </p>
                </motion.div>

                <div className="space-y-12">
                    {[
                        {
                            id: 1,
                            title: t('collections.modern_living'),
                            desc: t('collections.modern_living_desc'),
                            image: "https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?q=80&w=2000&auto=format&fit=crop"
                        },
                        {
                            id: 2,
                            title: t('collections.timeless_bedroom'),
                            desc: t('collections.timeless_bedroom_desc'),
                            image: "https://images.unsplash.com/photo-1505693314120-0d443867891c?q=80&w=1518&auto=format&fit=crop"
                        },
                        {
                            id: 3,
                            title: t('collections.artisan_lighting'),
                            desc: t('collections.artisan_lighting_desc'),
                            image: "https://images.unsplash.com/photo-1513519245088-0e12902e5a38?q=80&w=1470&auto=format&fit=crop"
                        },
                        {
                            id: 4,
                            title: t('collections.home_office'),
                            desc: t('collections.home_office_desc'),
                            image: "https://images.unsplash.com/photo-1497215842964-222b4bef46cd?q=80&w=1470&auto=format&fit=crop"
                        }
                    ].map((collection, index) => (
                        <motion.div
                            key={collection.id}
                            initial={{ opacity: 0, y: 40 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.8, delay: index * 0.1 }}
                            className="group relative h-[60vh] overflow-hidden rounded-2xl"
                        >
                            <img
                                src={collection.image}
                                alt={collection.title}
                                className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                            />
                            <div className="absolute inset-0 bg-black/30 group-hover:bg-black/40 transition-colors" />

                            <div className="absolute inset-0 flex flex-col items-center justify-center text-white text-center p-6">
                                <h2 className="text-3xl md:text-5xl font-serif font-bold mb-4">{collection.title}</h2>
                                <p className="text-lg mb-8 opacity-90">{collection.desc}</p>
                                <Link to="/shop">
                                    <GlassSurface intensity="sm" className="px-8 py-3 rounded-full hover:bg-white/20 transition-colors cursor-pointer">
                                        {t('collections.view_products')}
                                    </GlassSurface>
                                </Link>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </main>

            <Footer />
        </div>
    );
};
