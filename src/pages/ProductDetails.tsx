import { useParams, Link } from 'react-router-dom';
import { PRODUCTS } from '../constants';
import { useCart } from '../context/CartContext';
import { motion } from 'motion/react';
import { ShoppingCart, Star, CheckCircle, Flame, Plus, Minus, TrendingUp, ShieldCheck } from 'lucide-react';
import { useState } from 'react';
import { formatPrice } from '../lib/utils';

export default function ProductDetails() {
  const { id } = useParams();
  const { addToCart } = useCart();
  const [quantity, setQuantity] = useState(1);
  const [selectedBundle, setSelectedBundle] = useState('single');

  const product = PRODUCTS.find((p) => p.id === id);

  if (!product) {
    return (
      <div className="min-h-[60vh] flex flex-col items-center justify-center">
        <h2 className="text-2xl font-bold mb-4">Product Not Found</h2>
        <Link to="/" className="text-red-600 hover:underline">Back to Home</Link>
      </div>
    );
  }

  const bundles = [
    { id: 'single', name: 'Single Pack', discount: 0, price: product.price },
    { id: 'pack6', name: 'Pack of 6', discount: 10, price: product.price * 6 * 0.9 },
    { id: 'pack12', name: 'Pack of 12 (Best Value)', discount: 20, price: product.price * 12 * 0.8 },
  ];

  const currentPrice = bundles.find(b => b.id === selectedBundle)?.price || product.price;

  return (
    <div className="min-h-screen pb-24">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 py-12">
          {/* Image Gallery */}
          <div className="space-y-6">
             <motion.div
               initial={{ opacity: 0, scale: 0.9 }}
               animate={{ opacity: 1, scale: 1 }}
               className="aspect-square bg-[#151515] rounded-[40px] overflow-hidden border border-white/5 sticky top-24"
             >
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-full object-cover"
                  referrerPolicy="no-referrer"
                />
                
                {product.trending && (
                  <div className="absolute top-8 left-8 bg-red-600 text-white font-black px-4 py-2 rounded-full text-xs uppercase tracking-widest flex items-center gap-2">
                    <TrendingUp className="w-4 h-4" />
                    Trending in Pakistan
                  </div>
                )}
             </motion.div>
          </div>

          {/* Product Info */}
          <div className="space-y-10">
            <div>
              <div className="flex items-center gap-2 text-red-600 font-bold uppercase tracking-widest text-xs mb-4">
                <Star className="w-4 h-4 fill-current" />
                Premium Collection / {product.category}
              </div>
              <h1 className="text-5xl md:text-7xl font-black tracking-tighter mb-4 leading-none">{product.name}</h1>
              <div className="flex items-center gap-6">
                <p className="text-4xl font-black text-red-600">{formatPrice(currentPrice)}</p>
                <div className="h-8 w-px bg-white/10" />
                <div className="flex items-center gap-1.5 bg-white/5 px-3 py-1.5 rounded-full border border-white/10">
                   <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
                   <span className="text-[10px] font-bold uppercase tracking-widest text-white/60">In Stock - Ships Tomorrow</span>
                </div>
              </div>
            </div>

            <p className="text-lg text-white/60 leading-relaxed max-w-lg">
              {product.description}
            </p>

            {/* Flavor Section */}
            <div className="space-y-4">
              <h4 className="text-sm font-bold uppercase tracking-widest text-white/40">Flavor Profile</h4>
              <div className="flex items-center gap-3">
                <div className="bg-red-600/10 border border-red-600/20 px-6 py-3 rounded-2xl flex items-center gap-3">
                   <Flame className="w-5 h-5 text-red-600" />
                   <span className="font-bold tracking-tight">{product.flavor}</span>
                </div>
              </div>
            </div>

            {/* Bundles */}
            <div className="space-y-4">
              <h4 className="text-sm font-bold uppercase tracking-widest text-white/40">Select Bundle Offer</h4>
              <div className="grid grid-cols-1 gap-3">
                {bundles.map((bundle) => (
                  <button
                    key={bundle.id}
                    onClick={() => setSelectedBundle(bundle.id)}
                    className={`flex items-center justify-between p-5 rounded-2xl border-2 transition-all ${
                      selectedBundle === bundle.id
                        ? 'border-red-600 bg-red-600/5'
                        : 'border-white/10 bg-white/5 hover:border-white/20'
                    }`}
                  >
                    <div className="flex items-center gap-4">
                      <div className={`w-5 h-5 rounded-full border-2 flex items-center justify-center ${
                        selectedBundle === bundle.id ? 'border-red-600' : 'border-white/20'
                      }`}>
                        {selectedBundle === bundle.id && <div className="w-2.5 h-2.5 bg-red-600 rounded-full" />}
                      </div>
                      <div className="text-left">
                        <div className="font-bold text-lg">{bundle.name}</div>
                        {bundle.discount > 0 && <div className="text-[10px] font-bold text-red-600 uppercase tracking-widest">Save {bundle.discount}%</div>}
                      </div>
                    </div>
                    <div className="font-black text-xl">{formatPrice(bundle.price)}</div>
                  </button>
                ))}
              </div>
            </div>

            {/* Actions */}
            <div className="space-y-6 pt-6">
              <div className="flex flex-col sm:flex-row gap-4">
                <div className="flex items-center bg-white/5 rounded-full border border-white/10 p-2 min-w-[140px] justify-between">
                  <button 
                    onClick={() => setQuantity(q => Math.max(1, q - 1))}
                    className="w-10 h-10 flex items-center justify-center rounded-full hover:bg-white/10 transition-colors"
                  >
                    <Minus className="w-4 h-4" />
                  </button>
                  <span className="font-black text-xl w-8 text-center">{quantity}</span>
                  <button 
                    onClick={() => setQuantity(q => q + 1)}
                    className="w-10 h-10 flex items-center justify-center rounded-full hover:bg-white/10 transition-colors"
                  >
                    <Plus className="w-4 h-4" />
                  </button>
                </div>
                <button
                  onClick={() => addToCart(product, quantity)}
                  className="flex-1 bg-red-600 hover:bg-red-700 text-white font-black py-5 rounded-full flex items-center justify-center gap-3 transition-all transform active:scale-95 group shadow-2xl shadow-red-600/20"
                >
                  <ShoppingCart className="w-6 h-6 group-hover:rotate-12 transition-transform" />
                  ADD TO CART
                </button>
              </div>
              
              <div className="flex items-center gap-8 justify-center sm:justify-start grayscale opacity-50">
                <div className="flex items-center gap-2 text-[10px] font-bold uppercase tracking-widest">
                   <ShieldCheck className="w-4 h-4" />
                   Quality Tested
                </div>
                <div className="flex items-center gap-2 text-[10px] font-bold uppercase tracking-widest">
                   <TrendingUp className="w-4 h-4" />
                   Top Rated
                </div>
                <div className="flex items-center gap-2 text-[10px] font-bold uppercase tracking-widest">
                   <Flame className="w-4 h-4" />
                   PK Signature
                </div>
              </div>
            </div>

            {/* Nutrition Accordion (Simplified) */}
            <div className="pt-10 border-t border-white/10 grid grid-cols-2 sm:grid-cols-4 gap-8">
               <div>
                  <div className="text-white/40 text-[10px] font-bold uppercase tracking-widest mb-1">Calories</div>
                  <div className="text-2xl font-black tracking-tighter">{product.nutrition.calories}</div>
               </div>
               <div>
                  <div className="text-white/40 text-[10px] font-bold uppercase tracking-widest mb-1">Sugar</div>
                  <div className="text-2xl font-black tracking-tighter">{product.nutrition.sugar}</div>
               </div>
               {product.nutrition.caffeine && (
                 <div>
                    <div className="text-white/40 text-[10px] font-bold uppercase tracking-widest mb-1">Caffeine</div>
                    <div className="text-2xl font-black tracking-tighter">{product.nutrition.caffeine}</div>
                 </div>
               )}
               <div>
                  <div className="text-white/40 text-[10px] font-bold uppercase tracking-widest mb-1">Volume</div>
                  <div className="text-2xl font-black tracking-tighter">{product.nutrition.volume}</div>
               </div>
            </div>
          </div>
        </div>

        {/* Product Details Section */}
        <section className="py-24 border-t border-white/5">
           <div className="grid grid-cols-1 md:grid-cols-2 gap-24 items-center">
              <div>
                 <h2 className="text-4xl font-bold tracking-tighter mb-8 leading-tight">WHY <span className="text-red-600">PK ENERGY MAX</span> IS DIFFERENT?</h2>
                 <div className="space-y-8">
                    {product.benefits.map((benefit, i) => (
                      <div key={i} className="flex gap-4">
                         <div className="flex-shrink-0 w-8 h-8 bg-red-600/10 rounded-lg flex items-center justify-center">
                            <CheckCircle className="w-5 h-5 text-red-600" />
                         </div>
                         <div>
                            <h4 className="font-bold text-lg mb-1">{benefit}</h4>
                            <p className="text-white/50 text-sm">Engineered with high precision to ensure standard safety and maximum effectiveness in every sip.</p>
                         </div>
                      </div>
                    ))}
                 </div>
              </div>
              <div className="relative">
                 <div className="absolute inset-0 bg-red-600/10 blur-[100px] rounded-full" />
                 <img 
                    src="https://images.unsplash.com/photo-1510627489930-0c1b0ba8fa7e?auto=format&fit=crop&q=80&w=800"
                    alt="Process"
                    className="rounded-[40px] relative z-10 border border-white/5"
                    referrerPolicy="no-referrer"
                 />
              </div>
           </div>
        </section>
      </div>
    </div>
  );
}
