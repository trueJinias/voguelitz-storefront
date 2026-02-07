import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import { Header } from '../components/layout/Header';
import { Footer } from '../components/layout/Footer';
import { useCart } from '../context/CartContext';
import { GlassSurface } from '../components/ui/GlassSurface';

export const Checkout = () => {
    const { t } = useTranslation();
    const { cartItems, cartTotal } = useCart();
    const [step, setStep] = useState(1); // 1: Info, 2: Payment, 3: Success

    const handleSubmit = (e) => {
        e.preventDefault();
        setStep(step + 1);
    };

    if (step === 3) {
        return (
            <div className="min-h-screen flex flex-col pt-32 bg-bg-primary">
                <Header />
                <main className="flex-grow container mx-auto px-6 mb-20 flex items-center justify-center">
                    <motion.div
                        initial={{ scale: 0.9, opacity: 0 }}
                        animate={{ scale: 1, opacity: 1 }}
                        className="text-center"
                    >
                        <div className="w-20 h-20 bg-green-100 text-green-600 rounded-full flex items-center justify-center mx-auto mb-6">
                            <svg className="w-10 h-10" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                            </svg>
                        </div>
                        <h1 className="text-3xl font-serif font-bold mb-4">{t('checkout.confirmed_title')}</h1>
                        <p className="text-gray-500 mb-8">{t('checkout.confirmed_desc')}</p>
                        <a href="/" className="bg-black text-white px-8 py-3 rounded-full hover:bg-gray-800 transition-colors">{t('checkout.return_home')}</a>
                    </motion.div>
                </main>
                <Footer />
            </div>
        );
    }

    return (
        <div className="min-h-screen flex flex-col pt-32 bg-bg-primary">
            <Header />

            <main className="flex-grow container mx-auto px-6 mb-20">
                <div className="grid md:grid-cols-2 gap-12">
                    {/* Form Section */}
                    <div>
                        <h1 className="text-3xl font-serif font-bold mb-8">
                            {step === 1 ? t('checkout.shipping_info') : t('checkout.payment_details')}
                        </h1>

                        <form onSubmit={handleSubmit} className="space-y-6">
                            {step === 1 ? (
                                <>
                                    <div className="grid grid-cols-2 gap-4">
                                        <div>
                                            <label className="block text-sm font-medium mb-2">{t('checkout.first_name')}</label>
                                            <input type="text" required className="w-full p-3 border border-gray-200 rounded-lg focus:outline-none focus:border-black" />
                                        </div>
                                        <div>
                                            <label className="block text-sm font-medium mb-2">{t('checkout.last_name')}</label>
                                            <input type="text" required className="w-full p-3 border border-gray-200 rounded-lg focus:outline-none focus:border-black" />
                                        </div>
                                    </div>
                                    <div>
                                        <label className="block text-sm font-medium mb-2">{t('checkout.email')}</label>
                                        <input type="email" required className="w-full p-3 border border-gray-200 rounded-lg focus:outline-none focus:border-black" />
                                    </div>
                                    <div>
                                        <label className="block text-sm font-medium mb-2">{t('checkout.address')}</label>
                                        <input type="text" required className="w-full p-3 border border-gray-200 rounded-lg focus:outline-none focus:border-black" />
                                    </div>
                                    <div className="grid grid-cols-2 gap-4">
                                        <div>
                                            <label className="block text-sm font-medium mb-2">{t('checkout.city')}</label>
                                            <input type="text" required className="w-full p-3 border border-gray-200 rounded-lg focus:outline-none focus:border-black" />
                                        </div>
                                        <div>
                                            <label className="block text-sm font-medium mb-2">{t('checkout.postal_code')}</label>
                                            <input type="text" required className="w-full p-3 border border-gray-200 rounded-lg focus:outline-none focus:border-black" />
                                        </div>
                                    </div>
                                    <button type="submit" className="w-full bg-black text-white py-4 rounded-lg mt-8 hover:bg-gray-800 transition-colors">
                                        {t('checkout.continue_payment')}
                                    </button>
                                </>
                            ) : (
                                <>
                                    <div className="p-4 border border-gray-200 rounded-lg mb-6 bg-gray-50">
                                        <p className="font-medium">{t('checkout.secure_payment')}</p>
                                        <p className="text-sm text-gray-500">{t('checkout.secure_payment_desc')}</p>
                                    </div>
                                    <div>
                                        <label className="block text-sm font-medium mb-2">{t('checkout.card_number')}</label>
                                        <input type="text" placeholder="0000 0000 0000 0000" className="w-full p-3 border border-gray-200 rounded-lg focus:outline-none focus:border-black" />
                                    </div>
                                    <div className="grid grid-cols-2 gap-4">
                                        <div>
                                            <label className="block text-sm font-medium mb-2">{t('checkout.expiry')}</label>
                                            <input type="text" placeholder="MM/YY" className="w-full p-3 border border-gray-200 rounded-lg focus:outline-none focus:border-black" />
                                        </div>
                                        <div>
                                            <label className="block text-sm font-medium mb-2">{t('checkout.cvc')}</label>
                                            <input type="text" placeholder="123" className="w-full p-3 border border-gray-200 rounded-lg focus:outline-none focus:border-black" />
                                        </div>
                                    </div>
                                    <div className="flex gap-4 mt-8">
                                        <button type="button" onClick={() => setStep(1)} className="w-1/3 border border-gray-300 py-4 rounded-lg hover:bg-gray-50 transition-colors">
                                            {t('checkout.back')}
                                        </button>
                                        <button type="submit" className="flex-1 bg-black text-white py-4 rounded-lg hover:bg-gray-800 transition-colors">
                                            {t('checkout.complete_order')}
                                        </button>
                                    </div>
                                </>
                            )}
                        </form>
                    </div>

                    {/* Order Summary */}
                    <div>
                        <GlassSurface intensity="sm" className="p-8 rounded-2xl sticky top-32">
                            <h2 className="text-xl font-serif font-bold mb-6">{t('checkout.order_summary')}</h2>
                            <div className="space-y-4 mb-6">
                                {cartItems.map((item) => (
                                    <div key={item.id} className="flex gap-4">
                                        <div className="w-16 h-16 bg-gray-100 rounded-md overflow-hidden">
                                            <img src={item.image} alt={item.title} className="w-full h-full object-cover" />
                                        </div>
                                        <div className="flex-1">
                                            <p className="font-medium text-sm">{item.title}</p>
                                            <p className="text-sm text-gray-500">Qty: {item.quantity}</p>
                                        </div>
                                        <p className="text-sm font-medium">{item.price}</p>
                                    </div>
                                ))}
                            </div>
                            <div className="border-t border-gray-200 dark:border-gray-700 pt-4 space-y-2">
                                <div className="flex justify-between">
                                    <span className="text-gray-500">{t('checkout.subtotal')}</span>
                                    <span>¥{cartTotal.toLocaleString()}</span>
                                </div>
                                <div className="flex justify-between">
                                    <span className="text-gray-500">{t('checkout.shipping')}</span>
                                    <span>{t('checkout.free')}</span>
                                </div>
                                <div className="flex justify-between font-bold text-lg pt-4 border-t border-gray-200 dark:border-gray-700">
                                    <span>{t('checkout.total')}</span>
                                    <span>¥{cartTotal.toLocaleString()}</span>
                                </div>
                            </div>
                        </GlassSurface>
                    </div>
                </div>
            </main>

            <Footer />
        </div>
    );
};
