import { PRODUCTS } from '../../constants';
import { Link } from 'react-router-dom';
import { motion } from 'motion/react';
import { ShoppingCart, Star, TrendingUp } from 'lucide-react';
import { useCart } from '../../context/CartContext';
import { formatPrice } from '../../lib/utils';

export default function BestSellers() {
  const { addToCart } = useCart();
  const topProducts = PRODUCTS.slice(0, 3);

  return (
    <section id="flavors" className="py-24 bg-[#0A0A0A] overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16">
          <div>
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              className="flex items-center gap-2 text-red-600 font-bold uppercase tracking-widest text-xs mb-4"
            >
              <Star className="w-4 h-4 fill-current" />
              Best Sellers
            </motion.div>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              className="text-4xl md:text-6xl font-bold tracking-tighter"
            >
              TASTE THE <span className="text-red-600 italic">ENERGY.</span>
            </motion.h2>
          </div>
          <Link to="/#all" className="text-sm font-bold border-b-2 border-red-600 pb-1 hover:text-red-600 transition-colors uppercase tracking-widest">
            View All Collection
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {topProducts.map((product, index) => (
            <motion.div
              key={product.id}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              viewport={{ once: true }}
              className="group relative bg-[#151515] rounded-3xl p-6 border border-white/5 hover:border-red-600/50 transition-all duration-500"
            >
              {product.trending && (
                <div className="absolute top-6 left-6 z-10 flex items-center gap-1.5 bg-red-600 text-white text-[10px] font-black px-2.5 py-1 rounded-full uppercase tracking-tighter italic">
                  <TrendingUp className="w-3 h-3" />
                  Trending in Pakistan
                </div>
              )}
              
              <Link to={`/product/${product.id}`} className="block aspect-[3/4] mb-8 overflow-hidden rounded-2xl relative">
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex items-end p-6 opacity-0 group-hover:opacity-100 transition-opacity">
                  <button
                    onClick={(e) => {
                      e.preventDefault();
                      addToCart(product);
                    }}
                    className="w-full py-4 bg-white text-black font-bold rounded-xl flex items-center justify-center gap-2 hover:bg-red-600 hover:text-white transition-all transform translate-y-4 group-hover:translate-y-0 duration-300"
                  >
                    <ShoppingCart className="w-5 h-5" />
                    Quick Add
                  </button>
                </div>
              </Link>

              <div className="space-y-2">
                <div className="flex justify-between items-start">
                  <div>
                    <h3 className="text-xl font-bold tracking-tight">{product.name}</h3>
                    <p className="text-white/40 text-sm">{product.flavor}</p>
                  </div>
                  <p className="text-xl font-black text-red-600">{formatPrice(product.price)}</p>
                </div>
                
                <div className="pt-4 flex flex-wrap gap-2">
                  {product.benefits.slice(0, 2).map((benefit) => (
                    <span key={benefit} className="text-[10px] uppercase font-bold text-white/50 bg-white/5 px-2 py-1 rounded">
                      {benefit}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
