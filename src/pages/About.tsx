import { motion } from 'motion/react';
import { Zap, Heart, ShieldCheck, Award, Users, MapPin } from 'lucide-react';

export default function About() {
  return (
    <div className="pb-24">
      {/* Hero Section */}
      <section className="relative h-[60vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-black/60 z-10" />
          <img
            src="https://images.unsplash.com/photo-1542601906990-b4d3fb75ec43?auto=format&fit=crop&q=80&w=1920"
            alt="About PK Drinks"
            className="w-full h-full object-cover"
            referrerPolicy="no-referrer"
          />
        </div>
        <div className="relative z-20 text-center max-w-4xl px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="flex items-center justify-center gap-2 text-red-600 font-bold uppercase tracking-[0.3em] text-xs mb-6"
          >
            <Zap className="w-5 h-5 fill-current" />
            Empowering Pakistan
          </motion.div>
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-5xl md:text-8xl font-black tracking-tighter italic mb-8"
          >
            OUR STORY, <br /> OUR <span className="text-red-600">STRENGTH.</span>
          </motion.h1>
        </div>
      </section>

      {/* Philosophy */}
      <section className="py-24 bg-[#0A0A0A]">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-24 items-center">
            <motion.div
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="space-y-8"
            >
              <h2 className="text-4xl md:text-6xl font-bold tracking-tighter leading-[0.9]">
                BEYOND JUST A <br /> <span className="text-red-600">BEVERAGE.</span>
              </h2>
              <p className="text-lg text-white/60 leading-relaxed">
                Founded in 2022, PK Drinks started with a simple observation: Pakistan deserved a premium beverage brand that understands the energy and ambition of its youth. We aren't just selling drinks; we are selling a lifestyle of performance, boldness, and relentless pursuit of goals.
              </p>
              <div className="grid grid-cols-2 gap-8 pt-8">
                <div>
                   <div className="text-4xl font-black text-red-600 mb-2">2022</div>
                   <div className="text-[10px] font-bold uppercase tracking-widest text-white/40">Founded in Lahore</div>
                </div>
                <div>
                   <div className="text-4xl font-black text-red-600 mb-2">1M+</div>
                   <div className="text-[10px] font-bold uppercase tracking-widest text-white/40">Cans Sold Monthly</div>
                </div>
              </div>
            </motion.div>
            <div className="relative">
               <img 
                 src="https://images.unsplash.com/photo-1510627489930-0c1b0ba8fa7e?auto=format&fit=crop&q=80&w=800"
                 className="rounded-[40px] shadow-2xl relative z-10 grayscale hover:grayscale-0 transition-all duration-700"
                 referrerPolicy="no-referrer"
               />
               <div className="absolute -bottom-8 -right-8 w-64 h-64 bg-red-600/10 blur-[80px] rounded-full" />
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-24 bg-[#050505]">
        <div className="max-w-7xl mx-auto px-6">
           <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
              <div className="bg-white/5 p-12 rounded-[40px] border border-white/5 space-y-6">
                 <div className="w-16 h-16 bg-red-600/10 rounded-2xl flex items-center justify-center">
                    <Heart className="w-8 h-8 text-red-600" />
                 </div>
                 <h3 className="text-2xl font-bold">Unmatched Passion</h3>
                 <p className="text-white/50 leading-relaxed">Every flavor is crafted with passion and tested against hundreds of variations until we find perfection.</p>
              </div>
              <div className="bg-white/5 p-12 rounded-[40px] border border-white/5 space-y-6">
                 <div className="w-16 h-16 bg-red-600/10 rounded-2xl flex items-center justify-center">
                    <ShieldCheck className="w-8 h-8 text-red-600" />
                 </div>
                 <h3 className="text-2xl font-bold">Zero Compromise</h3>
                 <p className="text-white/50 leading-relaxed">We maintain international hygiene standards and source only the finest ingredients globally.</p>
              </div>
              <div className="bg-white/5 p-12 rounded-[40px] border border-white/5 space-y-6">
                 <div className="w-16 h-16 bg-red-600/10 rounded-2xl flex items-center justify-center">
                    <Award className="w-8 h-8 text-red-600" />
                 </div>
                 <h3 className="text-2xl font-bold">Innovation First</h3>
                 <p className="text-white/50 leading-relaxed">We are constantly researching new ways to provide better hydration and cleaner energy sources.</p>
              </div>
           </div>
        </div>
      </section>

      {/* Vision */}
      <section className="py-24 border-t border-white/5">
        <div className="max-w-7xl mx-auto px-6 text-center">
           <div className="max-w-3xl mx-auto space-y-12">
              <Users className="w-12 h-12 text-red-600 mx-auto" />
              <h2 className="text-5xl font-black italic tracking-tighter text-white">"TO BECOME THE FUEL FOR EVERY BRAVE AMBITION IN PAKISTAN."</h2>
              <div className="space-y-4">
                 <div className="w-16 h-px bg-red-600 mx-auto" />
                 <p className="font-bold uppercase tracking-[0.4em] text-xs text-white/40">Our Vision</p>
              </div>
           </div>
        </div>
      </section>
    </div>
  );
}
