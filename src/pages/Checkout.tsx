import React, { useState } from 'react';
import { useCart } from '../context/CartContext';
import { Link, useNavigate } from 'react-router-dom';
import { CreditCard, Truck, ShieldCheck, CheckCircle2, ArrowRight, MessageCircle } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { formatPrice } from '../lib/utils';

export default function Checkout() {
  const { cart, totalPrice, clearCart } = useCart();
  const navigate = useNavigate();
  const [method, setMethod] = useState<'cod' | 'jazzcash' | 'easypaisa'>('cod');
  const [isSuccess, setIsSuccess] = useState(false);

  const handleOrder = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSuccess(true);
    setTimeout(() => {
      clearCart();
      navigate('/');
    }, 3000);
  };

  if (isSuccess) {
    return (
      <div className="min-h-screen flex items-center justify-center px-6">
        <motion.div 
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          className="text-center space-y-8"
        >
          <div className="w-32 h-32 bg-green-500 rounded-full flex items-center justify-center mx-auto shadow-[0_0_50px_rgba(34,197,94,0.3)]">
            <CheckCircle2 className="w-16 h-16 text-white" />
          </div>
          <h2 className="text-5xl font-black tracking-tighter italic">ORDER PLACED!</h2>
          <div className="space-y-4">
            <p className="text-white/60 text-lg max-w-sm mx-auto">Thank you for fueling up with PK Drinks. Check your WhatsApp for the order confirmation.</p>
            <div className="flex flex-col gap-2 p-6 bg-white/5 rounded-3xl border border-white/10 max-w-xs mx-auto">
               <div className="flex justify-between text-sm">
                  <span className="text-white/40">Order ID:</span>
                  <span className="font-bold">#PK-2026-9842</span>
               </div>
               <div className="flex justify-between text-sm">
                  <span className="text-white/40">Status:</span>
                  <span className="text-orange-500 font-bold">Processing</span>
               </div>
            </div>
          </div>
          <p className="text-white/20 text-xs animate-pulse">Redirecting you to home...</p>
        </motion.div>
      </div>
    );
  }

  return (
    <div className="pb-24 pt-12">
      <div className="max-w-7xl mx-auto px-6">
         <div className="grid grid-cols-1 lg:grid-cols-2 gap-24">
            {/* Form */}
            <div className="space-y-12">
               <div>
                  <h1 className="text-5xl font-black tracking-tighter mb-4 italic">CHECKOUT INFORMATION</h1>
                  <p className="text-white/40">Complete your details for express delivery across Pakistan.</p>
               </div>

               <form onSubmit={handleOrder} className="space-y-8">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                       <label className="text-[10px] font-bold uppercase tracking-widest text-white/40">Full Name</label>
                       <input required className="w-full bg-white/5 border border-white/10 rounded-2xl px-6 py-4 focus:border-red-600 transition-all outline-none" placeholder="Ahmed Khan" />
                    </div>
                    <div className="space-y-2">
                       <label className="text-[10px] font-bold uppercase tracking-widest text-white/40">WhatsApp Number</label>
                       <input required className="w-full bg-white/5 border border-white/10 rounded-2xl px-6 py-4 focus:border-red-600 transition-all outline-none" placeholder="+92 3XX XXXXXXX" />
                    </div>
                  </div>

                  <div className="space-y-2">
                     <label className="text-[10px] font-bold uppercase tracking-widest text-white/40">Delivery Address</label>
                     <input required className="w-full bg-white/5 border border-white/10 rounded-2xl px-6 py-4 focus:border-red-600 transition-all outline-none" placeholder="Street Address, Block, Area" />
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                       <label className="text-[10px] font-bold uppercase tracking-widest text-white/40">City</label>
                       <select className="w-full bg-white/5 border border-white/10 rounded-2xl px-6 py-4 focus:border-red-600 transition-all outline-none appearance-none">
                          <option>Lahore</option>
                          <option>Karachi</option>
                          <option>Islamabad</option>
                          <option>Faisalabad</option>
                          <option>Rawalpindi</option>
                       </select>
                    </div>
                    <div className="space-y-2">
                       <label className="text-[10px] font-bold uppercase tracking-widest text-white/40">Province</label>
                       <select className="w-full bg-white/5 border border-white/10 rounded-2xl px-6 py-4 focus:border-red-600 transition-all outline-none appearance-none">
                          <option>Punjab</option>
                          <option>Sindh</option>
                          <option>KPK</option>
                          <option>Balochistan</option>
                       </select>
                    </div>
                  </div>

                  {/* Payment Method */}
                  <div className="space-y-4">
                     <h3 className="text-xl font-bold tracking-tight">PAYMENT METHOD</h3>
                     <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                        {[
                           { id: 'cod', name: 'Cash on Delivery', icon: <Truck className="w-5 h-5" /> },
                           { id: 'jazzcash', name: 'JazzCash Mobile', icon: <CreditCard className="w-5 h-5" /> },
                           { id: 'easypaisa', name: 'Easypaisa Mobile', icon: <CreditCard className="w-5 h-5" /> },
                        ].map((p) => (
                           <button
                             key={p.id}
                             type="button"
                             onClick={() => setMethod(p.id as any)}
                             className={`flex flex-col items-center justify-center p-6 rounded-3xl border-2 transition-all gap-3 ${
                               method === p.id 
                                 ? 'border-red-600 bg-red-600/10' 
                                 : 'border-white/10 bg-white/5 hover:border-white/20'
                             }`}
                           >
                              <div className={method === p.id ? 'text-red-600' : 'text-white/40'}>{p.icon}</div>
                              <span className="text-[10px] font-bold uppercase tracking-widest">{p.name}</span>
                           </button>
                        ))}
                     </div>
                  </div>

                  <button
                    type="submit"
                    className="w-full bg-red-600 hover:bg-red-700 text-white font-black py-6 rounded-full text-xl flex items-center justify-center gap-4 transition-all group shadow-2xl shadow-red-600/20 active:scale-95"
                  >
                    PLACE ORDER NOW
                    <ArrowRight className="w-6 h-6 group-hover:translate-x-1 transition-transform" />
                  </button>
               </form>
            </div>

            {/* Sidebar Summary */}
            <div className="lg:pl-12">
               <div className="bg-white/5 border border-white/10 rounded-[40px] p-10 space-y-8 sticky top-32">
                  <h3 className="text-2xl font-bold tracking-tight">YOUR SELECTION</h3>
                  <div className="space-y-6 max-h-[400px] overflow-y-auto pr-2 custom-scrollbar">
                     {cart.map((item) => (
                       <div key={item.id} className="flex gap-4 items-center">
                          <div className="w-16 h-16 bg-black rounded-xl overflow-hidden border border-white/10">
                             <img src={item.image} className="w-full h-full object-cover" />
                          </div>
                          <div className="flex-1">
                             <h4 className="font-bold text-sm">{item.name}</h4>
                             <p className="text-[10px] text-white/40 uppercase tracking-widest">{item.quantity} units x {formatPrice(item.price)}</p>
                          </div>
                          <div className="font-bold">{formatPrice(item.price * item.quantity)}</div>
                       </div>
                     ))}
                  </div>

                  <div className="space-y-4 pt-8 border-t border-white/10">
                     <div className="flex justify-between items-center text-white/50 text-sm">
                        <span>Items Subtotal</span>
                        <span>{formatPrice(totalPrice)}</span>
                     </div>
                     <div className="flex justify-between items-center text-white/50 text-sm">
                        <span>Shipping Fee</span>
                        <span className="text-green-500 font-bold uppercase tracking-widest text-[10px]">Free Delivery</span>
                     </div>
                     <div className="flex justify-between items-center pt-4">
                        <span className="text-xl font-black">TOTAL</span>
                        <span className="text-3xl font-black text-red-600">{formatPrice(totalPrice)}</span>
                     </div>
                  </div>

                  <div className="bg-[#25D366]/10 p-6 rounded-3xl border border-[#25D366]/20 space-y-3">
                     <div className="flex items-center gap-2 text-[#25D366] font-bold text-sm">
                        <MessageCircle className="w-5 h-5 fill-current" />
                        WHATSAPP SUPPORT
                     </div>
                     <p className="text-white/60 text-xs">Need help with your order? Hit us up on WhatsApp. We typically reply in 5 minutes.</p>
                  </div>
               </div>
            </div>
         </div>
      </div>
    </div>
  );
}
