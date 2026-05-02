import Hero from '../components/home/Hero';
import BestSellers from '../components/home/BestSellers';
import Features from '../components/home/Features';
import { motion } from 'motion/react';
import { MessageSquare, Clock, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function Home() {
  const reviews = [
    {
      name: 'Ahmed Khan',
      city: 'Lahore',
      text: 'PK Energy Max is literally the best fuel for my late-night study sessions. The kick is real!',
      rating: 5
    },
    {
      name: 'Sarah Malik',
      city: 'Islamabad',
      text: 'Finally a Pakistani brand that matches international standards in both taste and branding.',
      rating: 5
    },
    {
      name: 'Zain Abbas',
      city: 'Karachi',
      text: 'Refresh Cola is my new go-to. Super crisp and perfectly carbonated. Delivery was super fast.',
      rating: 5
    }
  ];

  return (
    <div className="pb-24">
      <Hero />
      <BestSellers />
      
      {/* Coundown Offer Banner */}
      <section className="py-20 bg-red-600 overflow-hidden relative">
        <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')] opacity-20" />
        <div className="max-w-7xl mx-auto px-6 relative z-10 flex flex-col md:flex-row items-center justify-between gap-12">
          <div className="text-center md:text-left">
            <h2 className="text-4xl md:text-6xl font-black tracking-tighter text-white mb-4 italic">
              FLASH SALE: 30% OFF ON ALL BUNDLES
            </h2>
            <div className="flex items-center gap-4 text-white/80 font-bold uppercase tracking-widest text-sm">
              <Clock className="w-5 h-5" />
              Limited Time Left: 08h 45m 22s
            </div>
          </div>
          <motion.div
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <Link 
              to="/#flavors" 
              className="px-10 py-5 bg-black text-white font-black rounded-full text-lg hover:shadow-[0_0_30px_rgba(0,0,0,0.5)] transition-all"
            >
              GRAB THE DEAL
            </Link>
          </motion.div>
        </div>
      </section>

      <Features />

      {/* Reviews Section */}
      <section className="py-24 bg-[#0A0A0A]">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <MessageSquare className="w-8 h-8 text-red-600 mx-auto mb-4" />
            <h2 className="text-4xl md:text-5xl font-bold tracking-tighter mb-4">WHAT THE <span className="text-red-600">NATION</span> SAYS</h2>
            <p className="text-white/50">Trusted by thousands of high performers across Pakistan.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {reviews.map((review, index) => (
              <motion.div
                key={review.name}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ delay: index * 0.1 }}
                className="bg-white/5 p-8 rounded-3xl border border-white/10 hover:border-red-600 transition-all flex flex-col justify-between"
              >
                <div className="space-y-4">
                  <div className="flex gap-1">
                    {[...Array(5)].map((_, i) => (
                      <div key={i} className="w-3 h-3 bg-red-600 rounded-full" />
                    ))}
                  </div>
                  <p className="text-white/80 italic line-height-relaxed">"{review.text}"</p>
                </div>
                <div className="mt-8">
                  <div className="font-bold text-lg">{review.name}</div>
                  <div className="text-white/40 text-xs uppercase tracking-widest">{review.city}</div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Preview or CTA */}
      <section className="py-24 bg-[#050505]">
        <div className="max-w-7xl mx-auto px-6">
          <div className="bg-gradient-to-br from-red-600 to-red-900 rounded-[40px] p-12 md:p-24 relative overflow-hidden text-center md:text-left">
            <div className="absolute top-0 right-0 w-96 h-96 bg-black/20 blur-[100px] rounded-full -translate-y-1/2 translate-x-1/2" />
            <div className="max-w-2xl relative z-10">
              <h2 className="text-4xl md:text-7xl font-black text-white italic tracking-tighter mb-8 leading-none">
                JOIN THE <br /> PK ENERGY REVOLUTION.
              </h2>
              <p className="text-white/80 mb-10 text-lg md:text-xl">
                Ready to take your game to the next level? Order your first pack today and experience the difference.
              </p>
              <form className="flex flex-col sm:flex-row gap-4">
                <input
                  type="email"
                  placeholder="Your Email for Drops"
                  className="bg-black/20 border border-white/20 rounded-full px-8 py-5 text-lg focus:outline-none focus:border-white transition-all flex-1 backdrop-blur-md placeholder:text-white/40"
                />
                <button className="px-10 py-5 bg-white text-red-600 font-black rounded-full text-lg hover:bg-black hover:text-white transition-all">
                  GET UPDATES
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
