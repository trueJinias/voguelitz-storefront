import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Minus, Plus, ShoppingBag } from 'lucide-react';
import { useTranslation } from 'react-i18next';
import { useCart } from '../../context/CartContext';
import { GlassSurface } from '../ui/GlassSurface';
import { MagneticButton } from '../ui/MagneticButton';

export const CartDrawer = () => {
    const {
        isCartOpen,
        closeCart,
        cartItems,
        updateQuantity,
        removeFromCart,
        cartTotal
    } = useCart();
    const { t, i18n } = useTranslation(); // Use i18n for currency formatting if needed

    // Helper formats price based on current language/currency preference
    const formatPrice = (price) => {
        // This is a simplified formatter. Ideally usage of Intl.NumberFormat based on locale
        return new Intl.NumberFormat(i18n.language === 'ja' ? 'ja-JP' : 'en-US', {
            style: 'currency',
            currency: i18n.language === 'ja' ? 'JPY' : 'USD'
        }).format(price);
    };

    return (
        <AnimatePresence>
            {isCartOpen && (
                <>
                    {/* Backdrop */}
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        onClick={closeCart}
                        className="fixed inset-0 bg-black/40 backdrop-blur-sm z-[60]"
                    />

                    {/* Drawer */}
                    <motion.div
                        initial={{ x: '100%' }}
                        animate={{ x: 0 }}
                        exit={{ x: '100%' }}
                        transition={{ type: 'spring', damping: 25, stiffness: 200 }}
                        className="fixed top-0 right-0 h-full w-full max-w-md bg-white dark:bg-neutral-900 shadow-2xl z-[70] flex flex-col"
                    >
                        <div className="p-6 flex items-center justify-between border-b border-gray-100 dark:border-gray-800">
                            <h2 className="text-xl font-serif font-bold flex items-center gap-2">
                                <ShoppingBag size={20} />
                                {t('cart.title', 'Shopping Cart')}
                                <span className="text-sm font-sans font-normal text-gray-500">
                                    ({cartItems.length} {t('cart.items', 'items')})
                                </span>
                            </h2>
                            <button
                                onClick={closeCart}
                                className="p-2 hover:bg-gray-100 dark:hover:bg-gray-800 rounded-full transition-colors"
                            >
                                <X size={20} />
                            </button>
                        </div>

                        <div className="flex-1 overflow-y-auto p-6 space-y-6">
                            {cartItems.length === 0 ? (
                                <div className="text-center py-20 text-gray-500">
                                    <p>{t('cart.empty', 'Your cart is empty.')}</p>
                                </div>
                            ) : (
                                cartItems.map((item) => (
                                    <div key={item.id} className="flex gap-4">
                                        <div className="w-20 h-20 bg-gray-100 rounded-lg overflow-hidden flex-shrink-0">
                                            <img
                                                src={item.image}
                                                alt={item.title}
                                                className="w-full h-full object-cover"
                                            />
                                        </div>
                                        <div className="flex-1">
                                            <h3 className="font-medium mb-1">{item.title}</h3>
                                            <p className="text-sm text-gray-500 mb-2">{item.price}</p>
                                            {/* Using pre-formatted price string from item for now, or update to use raw numbers */}

                                            <div className="flex items-center gap-3">
                                                <button
                                                    onClick={() => updateQuantity(item.id, -1)}
                                                    className="p-1 hover:text-accent-gold transition-colors"
                                                >
                                                    <Minus size={14} />
                                                </button>
                                                <span className="text-sm w-4 text-center">{item.quantity}</span>
                                                <button
                                                    onClick={() => updateQuantity(item.id, 1)}
                                                    className="p-1 hover:text-accent-gold transition-colors"
                                                >
                                                    <Plus size={14} />
                                                </button>
                                            </div>
                                        </div>
                                        <button
                                            onClick={() => removeFromCart(item.id)}
                                            className="text-gray-400 hover:text-red-500 transition-colors self-start"
                                        >
                                            <X size={16} />
                                        </button>
                                    </div>
                                ))
                            )}
                        </div>

                        {cartItems.length > 0 && (
                            <div className="p-6 border-t border-gray-100 dark:border-gray-800 bg-gray-50 dark:bg-neutral-900/50">
                                <div className="flex justify-between items-center mb-6">
                                    <span className="text-lg font-medium">{t('cart.subtotal', 'Subtotal')}</span>
                                    {/* Displaying raw calculation if possible or formatted */}
                                    <span className="text-xl font-serif font-bold">
                                        {formatPrice(cartTotal)}
                                    </span>
                                </div>
                                <Link to="/checkout" onClick={closeCart}>
                                    <MagneticButton className="w-full bg-black dark:bg-white text-white dark:text-black py-4 font-medium tracking-wide">
                                        {t('cart.checkout', 'Proceed to Checkout')}
                                    </MagneticButton>
                                </Link>
                            </div>
                        )}
                    </motion.div>
                </>
            )}
        </AnimatePresence>
    );
};
