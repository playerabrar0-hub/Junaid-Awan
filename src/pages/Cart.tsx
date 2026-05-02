import { useCart } from '../context/CartContext';
import { Link } from 'react-router-dom';
import { Trash2, Plus, Minus, ArrowRight, ShoppingBag } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { formatPrice } from '../lib/utils';

export default function Cart() {
  const { cart, updateQuantity, removeFromCart, totalPrice, totalItems } = useCart();

  if (cart.length === 0) {
    return (
      <div className="min-h-[70vh] flex flex-col items-center justify-center px-6 text-center">
        <div className="w-24 h-24 bg-white/5 rounded-full flex items-center justify-center mb-8 border border-white/10">
          <ShoppingBag className="w-10 h-10 text-white/20" />
        </div>
        <h2 className="text-4xl font-black tracking-tighter mb-4">YOUR CART IS EMPTY</h2>
        <p className="text-white/40 mb-10 max-w-sm">Looks like you haven't fueled up yet. Check out our latest flavors and bundles.</p>
        <Link 
          to="/#flavors" 
          className="px-10 py-5 bg-red-600 text-white font-black rounded-full hover:bg-red-700 transition-all flex items-center gap-3"
        >
          EXPLORE FLAVORS
          <ArrowRight className="w-5 h-5" />
        </Link>
      </div>
    );
  }

  return (
    <div className="pb-24 pt-12">
      <div className="max-w-7xl mx-auto px-6">
        <h1 className="text-5xl font-black tracking-tighter mb-12 italic">SHOPPING <span className="text-red-600">CART ({totalItems})</span></h1>
        
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-16">
          <div className="lg:col-span-2 space-y-6">
            <AnimatePresence>
              {cart.map((item) => (
                <motion.div
                  key={item.id}
                  layout
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: 20 }}
                  className="flex flex-col sm:flex-row items-center gap-6 p-6 bg-white/5 rounded-3xl border border-white/10 group hover:border-white/20 transition-all"
                >
                  <div className="w-32 h-32 flex-shrink-0 rounded-2xl overflow-hidden bg-black border border-white/5">
                    <img 
                      src={item.image} 
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" 
                      referrerPolicy="no-referrer"
                    />
                  </div>
                  
                  <div className="flex-1 text-center sm:text-left">
                    <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-4">
                      <div>
                        <h3 className="text-xl font-bold tracking-tight">{item.name}</h3>
                        <p className="text-white/40 text-sm">{item.flavor}</p>
                      </div>
                      <p className="text-2xl font-black text-red-600">{formatPrice(item.price * item.quantity)}</p>
                    </div>
                    
                    <div className="flex flex-col sm:flex-row items-center gap-6">
                      <div className="flex items-center bg-black/40 rounded-full border border-white/10 p-1">
                        <button 
                          onClick={() => updateQuantity(item.id, item.quantity - 1)}
                          className="w-8 h-8 flex items-center justify-center rounded-full hover:bg-white/10 transition-colors"
                        >
                          <Minus className="w-3 h-3" />
                        </button>
                        <span className="font-bold text-lg w-10 text-center">{item.quantity}</span>
                        <button 
                          onClick={() => updateQuantity(item.id, item.quantity + 1)}
                          className="w-8 h-8 flex items-center justify-center rounded-full hover:bg-white/10 transition-colors"
                        >
                          <Plus className="w-3 h-3" />
                        </button>
                      </div>
                      
                      <button 
                        onClick={() => removeFromCart(item.id)}
                        className="text-white/30 hover:text-red-500 transition-colors flex items-center gap-2 text-xs font-bold uppercase tracking-widest"
                      >
                        <Trash2 className="w-4 h-4" />
                        Remove
                      </button>
                    </div>
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
          </div>

          {/* Summary Card */}
          <div className="lg:col-span-1">
             <div className="bg-white/5 border border-white/10 p-10 rounded-[40px] sticky top-32 space-y-8">
                <h3 className="text-2xl font-bold tracking-tight">ORDER SUMMARY</h3>
                
                <div className="space-y-4 pt-4 border-t border-white/5">
                  <div className="flex justify-between text-white/50">
                    <span>Subtotal</span>
                    <span>{formatPrice(totalPrice)}</span>
                  </div>
                  <div className="flex justify-between text-white/50">
                    <span>Estimated Shipping</span>
                    <span className="text-green-500 font-bold uppercase tracking-widest text-[10px]">Free</span>
                  </div>
                  <div className="flex justify-between text-white/50">
                    <span>Tax (GST Included)</span>
                    <span>{formatPrice(totalPrice * 0.17)}</span>
                  </div>
                  <div className="pt-6 border-t border-white/10 flex justify-between items-end">
                    <span className="font-bold text-lg">Total</span>
                    <span className="text-4xl font-black text-red-600">{formatPrice(totalPrice)}</span>
                  </div>
                </div>

                <div className="space-y-4">
                  <Link 
                    to="/checkout" 
                    className="w-full bg-red-600 hover:bg-red-700 text-white font-black py-5 rounded-full flex items-center justify-center gap-3 transition-all transform active:scale-95 group shadow-2xl shadow-red-600/20"
                  >
                    CHECKOUT NOW
                    <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                  </Link>
                  <Link 
                    to="/#flavors" 
                    className="w-full bg-white/5 hover:bg-white/10 text-white font-bold py-5 rounded-full flex items-center justify-center gap-3 transition-all border border-white/10"
                  >
                    KEEP SHOPPING
                  </Link>
                </div>

                <div className="pt-6 text-center">
                  <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-white/20 mb-4">Secure Checkout Powered by PK DRINKS</p>
                  <div className="flex justify-center gap-4 opacity-30 grayscale items-center">
                     <span className="text-xs font-bold">JazzCash</span>
                     <span className="text-xs font-bold">Easypaisa</span>
                     <span className="text-xs font-bold">COD</span>
                  </div>
                </div>
             </div>
          </div>
        </div>
      </div>
    </div>
  );
}
