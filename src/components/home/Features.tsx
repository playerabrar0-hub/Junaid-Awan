import { motion } from 'motion/react';
import { ShieldCheck, Truck, Zap, RefreshCcw, Heart, Users } from 'lucide-react';

export default function Features() {
  const features = [
    {
      icon: <Zap className="w-8 h-8 text-red-600" />,
      title: 'INSTANT ENERGY',
      description: 'Proprietary formula designed for rapid absorption and long-lasting focus.'
    },
    {
      icon: <ShieldCheck className="w-8 h-8 text-red-600" />,
      title: 'PREMIUM QUALITY',
      description: 'Manufactured in state-of-the-art facilities following international standards.'
    },
    {
      icon: <Truck className="w-8 h-8 text-red-600" />,
      title: 'FAST SHIPPING',
      description: 'Next-day delivery in major cities like Lahore, Karachi, and Islamabad.'
    },
    {
      icon: <Heart className="w-8 h-8 text-red-600" />,
      title: 'BOLD FLAVORS',
      description: 'Curated flavors specifically for the Pakistani palate.'
    }
  ];

  const stats = [
    { label: 'DELIGHTED ADVENTURERS', value: '500K+' },
    { label: 'CITIES COVERED', value: '50+' },
    { label: 'PRODUCT VARIATIONS', value: '12+' },
    { label: 'BRAND RECALL', value: '98%' }
  ];

  return (
    <section className="py-24 bg-[#050505]">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-24">
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              viewport={{ once: true }}
              className="space-y-4"
            >
              <div className="bg-white/5 w-16 h-16 flex items-center justify-center rounded-2xl border border-white/10 group hover:border-red-600 transition-all">
                 {feature.icon}
              </div>
              <h3 className="text-xl font-bold tracking-tight">{feature.title}</h3>
              <p className="text-white/50 text-sm leading-relaxed">{feature.description}</p>
            </motion.div>
          ))}
        </div>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 border-y border-white/10 py-16">
          {stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ delay: index * 0.1 }}
              viewport={{ once: true }}
              className="text-center"
            >
              <div className="text-4xl md:text-6xl font-black italic text-red-600 mb-2 tracking-tighter">
                {stat.value}
              </div>
              <div className="text-[10px] font-bold uppercase tracking-[0.2em] text-white/40">
                {stat.label}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
