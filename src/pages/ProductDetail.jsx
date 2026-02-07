import React, { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowLeft, Clock, ShoppingBag, Truck, ShieldCheck, ChevronDown, ChevronUp } from 'lucide-react';
import { Header } from '../components/layout/Header';
import { Footer } from '../components/layout/Footer';
import { MagneticButton } from '../components/ui/MagneticButton';
import { useTranslation } from 'react-i18next';
import { useCart } from '../context/CartContext';

const MOCK_PRODUCT = {
    id: 1,
    title: "Velvet Lounge Chair",
    price: "¥45,000",
    description: "Experience unparalleled comfort with our signature Velvet Lounge Chair. Handcrafted with precision, featuring a solid oak frame and premium velvet upholstery. Perfect for your reading nook or living room centerpiece.",
    images: [
        "https://images.unsplash.com/photo-1567538096630-e997191f7d53?q=80&w=1374&auto=format&fit=crop",
        "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?q=80&w=1558&auto=format&fit=crop",
        "https://images.unsplash.com/photo-1598300042247-d088f8ab3a91?q=80&w=1365&auto=format&fit=crop"
    ],
    specs: [
        { label: "Dimensions", value: "H 85cm x W 75cm x D 80cm" },
        { label: "Material", value: "Premium Velvet, Solid Oak" },
        { label: "Assembly", value: "Minimal assembly required" }
    ]
};

const AccordionItem = ({ title, children, defaultOpen = false }) => {
    const [isOpen, setIsOpen] = useState(defaultOpen);

    return (
        <div className="border-b border-gray-200 dark:border-gray-800">
            <button
                className="w-full py-4 flex justify-between items-center text-left hover:text-accent-gold transition-colors"
                onClick={() => setIsOpen(!isOpen)}
            >
                <span className="font-serif text-lg">{title}</span>
                {isOpen ? <ChevronUp size={18} /> : <ChevronDown size={18} />}
            </button>
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: 'auto', opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        className="overflow-hidden"
                    >
                        <div className="pb-4 text-text-secondary text-sm leading-relaxed">
                            {children}
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    );
};

export const ProductDetail = () => {
    const { id } = useParams();
    const [selectedImage, setSelectedImage] = useState(0);
    const { t, i18n } = useTranslation();
    const { addToCart } = useCart();

    // In a real app, fetch product by ID. using mock for now.
    const product = MOCK_PRODUCT;

    // Formatting helper
    const formatPrice = (priceDefault) => {
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
        <div className="min-h-screen flex flex-col bg-white dark:bg-black text-text-primary transition-colors duration-500">
            <Header />

            <main className="flex-grow pt-24 pb-12">
                <div className="container mx-auto px-6">
                    <Link to="/" className="inline-flex items-center text-sm text-text-secondary hover:text-accent-gold mb-8 transition-colors">
                        <ArrowLeft size={16} className="mr-2" /> {t('product.back_to_collection')}
                    </Link>

                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-24">
                        {/* Gallery Section */}
                        <div className="space-y-4">
                            <motion.div
                                className="aspect-[4/5] bg-gray-100 dark:bg-gray-800 overflow-hidden relative"
                                layoutId={`product-image-${product.id}`}
                            >
                                <motion.img
                                    key={selectedImage}
                                    src={product.images[selectedImage]}
                                    alt={product.title}
                                    className="w-full h-full object-cover"
                                    initial={{ opacity: 0 }}
                                    animate={{ opacity: 1 }}
                                    transition={{ duration: 0.5 }}
                                />
                            </motion.div>
                            <div className="grid grid-cols-3 gap-4">
                                {product.images.map((img, index) => (
                                    <button
                                        key={index}
                                        onClick={() => setSelectedImage(index)}
                                        className={`aspect-square overflow-hidden bg-gray-100 dark:bg-gray-800 ${selectedImage === index ? 'ring-1 ring-accent-gold' : 'opacity-70 hover:opacity-100'} transition-all`}
                                    >
                                        <img src={img} alt="" className="w-full h-full object-cover" />
                                    </button>
                                ))}
                            </div>
                        </div>

                        {/* Info Section */}
                        <div className="lg:py-8">
                            <motion.h1
                                className="text-3xl md:text-5xl font-serif font-bold mb-4"
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: 0.2 }}
                            >
                                {product.title}
                            </motion.h1>

                            <motion.div
                                className="text-2xl text-accent-gold font-medium mb-8"
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                transition={{ delay: 0.3 }}
                            >
                                {formatPrice(product.price)}
                            </motion.div>

                            <motion.div
                                className="prose dark:prose-invert text-text-secondary mb-10 text-sm leading-relaxed"
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                transition={{ delay: 0.4 }}
                            >
                                <p>{product.description}</p>
                            </motion.div>

                            {/* Shipping Warning Box */}
                            <motion.div
                                className="bg-stone-50 dark:bg-white/5 p-4 mb-10 border-l-2 border-accent-gold"
                                initial={{ opacity: 0, x: -20 }}
                                animate={{ opacity: 1, x: 0 }}
                                transition={{ delay: 0.5 }}
                            >
                                <div className="flex items-start">
                                    <Clock className="text-accent-gold mt-1 mr-3 flex-shrink-0" size={20} />
                                    <div>
                                        <h4 className="font-serif font-medium mb-1">{t('product.made_to_order')}</h4>
                                        <p className="text-xs text-text-secondary">
                                            {t('product.made_to_order_desc')}
                                            <span className="block mt-1 font-medium text-text-primary">{t('product.standard_delivery')}</span>
                                        </p>
                                    </div>
                                </div>
                            </motion.div>



                            <div className="flex space-x-4 mb-12">
                                <MagneticButton
                                    onClick={() => addToCart(product)}
                                    className="flex-1 bg-black text-white dark:bg-white dark:text-black border-none py-4 hover:opacity-90"
                                >
                                    {t('product.add_to_cart')}
                                </MagneticButton>
                                <button className="p-4 border border-gray-200 dark:border-gray-800 rounded-full hover:border-accent-gold hover:text-accent-gold transition-colors">
                                    <ShoppingBag size={20} />
                                </button>
                            </div>

                            {/* Accordions */}
                            <div className="space-y-2">
                                <AccordionItem title={t('product.specs')} defaultOpen={true}>
                                    <ul className="space-y-2">
                                        {product.specs.map((spec, idx) => (
                                            <li key={idx} className="flex justify-between border-b border-dashed border-gray-200 dark:border-gray-800 pb-2 mb-2 last:border-0">
                                                <span className="font-medium">{spec.label}</span>
                                                <span>{spec.value}</span>
                                            </li>
                                        ))}
                                    </ul>
                                </AccordionItem>

                                <AccordionItem title={t('product.shipping_returns')}>
                                    <div className="space-y-4">
                                        <div className="flex items-start">
                                            <Truck size={16} className="mr-2 mt-0.5 text-accent-gold" />
                                            <div>
                                                <p className="font-medium mb-1">{t('product.global_shipping')}</p>
                                                <p>{t('product.global_shipping_desc')}</p>
                                            </div>
                                        </div>
                                        <div className="flex items-start">
                                            <ShieldCheck size={16} className="mr-2 mt-0.5 text-accent-gold" />
                                            <div>
                                                <p className="font-medium mb-1">{t('product.quality_guarantee')}</p>
                                                <p>{t('product.quality_guarantee_desc')}</p>
                                            </div>
                                        </div>
                                    </div>
                                </AccordionItem>
                            </div>

                        </div>
                    </div>
                </div>
            </main>

            <Footer />
        </div>
    );
};
