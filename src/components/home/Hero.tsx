import { motion } from 'motion/react';
import { ArrowRight, Zap, Flame, ShieldCheck, ShoppingCart } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function Hero() {
  return (
    <section className="relative h-[90vh] min-h-[600px] flex items-center overflow-hidden">
      {/* Background with motion */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-r from-black via-black/80 to-transparent z-10" />
        <motion.img
          initial={{ scale: 1.1 }}
          animate={{ scale: 1 }}
          transition={{ duration: 10, repeat: Infinity, repeatType: 'reverse' }}
          src="https://images.unsplash.com/photo-1543253687-c931c8e01820?auto=format&fit=crop&q=80&w=1920"
          alt="PK Drinks Background"
          className="w-full h-full object-cover opacity-60"
          referrerPolicy="no-referrer"
        />
      </div>

      <div className="max-w-7xl mx-auto px-6 relative z-20 w-full">
        <div className="max-w-2xl">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2 }}
            className="flex items-center gap-2 text-red-600 font-black uppercase tracking-[0.3em] text-xs mb-6"
          >
            <Flame className="w-4 h-4 fill-current" />
            Pakistan's Premium Power
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="text-6xl md:text-8xl font-black tracking-tighter leading-[0.9] mb-8"
          >
            REFUEL YOUR <br />
            <span className="text-red-600 italic">AMBITION.</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="text-lg md:text-xl text-white/70 mb-10 leading-relaxed max-w-lg"
          >
            The boldest flavors, the purest energy, and the ultimate refreshment for Gen Z and high performers in Pakistan.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
            className="flex flex-col sm:flex-row gap-4"
          >
            <Link
              to="/#flavors"
              className="px-8 py-5 bg-red-600 text-white font-black rounded-full flex items-center justify-center gap-3 hover:bg-red-700 transition-all group hover:scale-105 active:scale-95"
            >
              SHOP COLLECTION
              <ShoppingCart className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Link>
            <Link
              to="/about"
              className="px-8 py-5 bg-white/10 backdrop-blur-md text-white font-black rounded-full flex items-center justify-center gap-3 hover:bg-white/20 transition-all border border-white/10"
            >
              OUR MISSION
              <ArrowRight className="w-5 h-5" />
            </Link>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1 }}
            className="mt-16 flex items-center gap-8 grayscale opacity-50"
          >
            <div className="flex items-center gap-2">
              <Zap className="w-4 h-4" />
              <span className="text-[10px] font-bold uppercase tracking-widest">Instant Boost</span>
            </div>
            <div className="flex items-center gap-2">
              <ShieldCheck className="w-4 h-4" />
              <span className="text-[10px] font-bold uppercase tracking-widest">Natural Sugar</span>
            </div>
            <div className="flex items-center gap-2">
              <Flame className="w-4 h-4" />
              <span className="text-[10px] font-bold uppercase tracking-widest">Pakistan's Top Choice</span>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Floating Elements for Premium Feel */}
      <motion.div
        animate={{ 
          y: [0, -20, 0],
          rotate: [0, 5, 0]
        }}
        transition={{ 
          duration: 6, 
          repeat: Infinity, 
          ease: 'easeInOut' 
        }}
        className="absolute right-12 bottom-24 hidden lg:block"
      >
        <div className="bg-gradient-to-br from-red-600 to-red-900 w-64 h-96 rounded-3xl p-1 shadow-2xl shadow-red-600/20">
          <div className="bg-black w-full h-full rounded-[20px] p-6 flex flex-col justify-between overflow-hidden relative">
            <div className="absolute top-0 right-0 w-32 h-32 bg-red-600/20 blur-3xl rounded-full" />
            <h3 className="text-4xl font-black italic text-red-600 mb-4 tracking-tighter">MAX ENERGY</h3>
            <img 
               src="https://images.unsplash.com/photo-1622483767028-3f66f32aef97?auto=format&fit=crop&q=80&w=400"
               className="w-full object-contain transform -rotate-12 scale-110"
               referrerPolicy="no-referrer"
            />
            <div className="flex justify-between items-end mt-4">
              <div className="text-[10px] font-bold uppercase tracking-widest">250 ML / 8.4 FL OZ</div>
              <div className="text-xl font-black">Rs. 150</div>
            </div>
          </div>
        </div>
      </motion.div>
    </section>
  );
}
