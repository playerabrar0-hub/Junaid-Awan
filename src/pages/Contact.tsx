import { motion } from 'motion/react';
import { Mail, MapPin, Phone, MessageCircle, Send, SendHorizontal, Facebook, Instagram } from 'lucide-react';

export default function Contact() {
  return (
    <div className="pb-24">
      <section className="pt-32 pb-16 bg-[#0A0A0A]">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-24">
            {/* Info */}
            <div>
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                className="flex items-center gap-2 text-red-600 font-bold uppercase tracking-widest text-xs mb-6"
              >
                <div className="w-2 h-2 bg-red-600 rounded-full animate-pulse" />
                Contact Our High-Energy Team
              </motion.div>
              <h1 className="text-6xl md:text-8xl font-black tracking-tighter mb-12">GET IN <br /><span className="text-red-600 italic">TOUCH.</span></h1>
              
              <div className="space-y-12">
                <div className="flex gap-6">
                  <div className="w-14 h-14 bg-white/5 border border-white/10 rounded-2xl flex items-center justify-center flex-shrink-0">
                    <Phone className="w-6 h-6 text-red-600" />
                  </div>
                  <div>
                    <h4 className="text-sm font-bold text-white/40 uppercase tracking-widest mb-1">Call Us</h4>
                    <p className="text-xl font-bold">+92 319 2042 694</p>
                  </div>
                </div>
                
                <div className="flex gap-6">
                  <div className="w-14 h-14 bg-white/5 border border-white/10 rounded-2xl flex items-center justify-center flex-shrink-0">
                    <Mail className="w-6 h-6 text-red-600" />
                  </div>
                  <div>
                    <h4 className="text-sm font-bold text-white/40 uppercase tracking-widest mb-1">Email Us</h4>
                    <p className="text-xl font-bold">playerabrar0@gmail.com</p>
                  </div>
                </div>

                <div className="flex gap-6">
                  <div className="w-14 h-14 bg-white/5 border border-white/10 rounded-2xl flex items-center justify-center flex-shrink-0">
                    <MapPin className="w-6 h-6 text-red-600" />
                  </div>
                  <div>
                    <h4 className="text-sm font-bold text-white/40 uppercase tracking-widest mb-1">HQ Location</h4>
                    <p className="text-xl font-bold">DHA Phase 6, Lahore, Pakistan</p>
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-8 pt-6">
                  <a href="#" className="flex items-center gap-4 group">
                    <div className="w-12 h-12 bg-white/5 border border-white/10 rounded-xl flex items-center justify-center group-hover:border-red-600 transition-colors">
                      <Facebook className="w-5 h-5 text-white/40 group-hover:text-red-600 transition-colors" />
                    </div>
                    <div>
                      <h4 className="text-[10px] font-bold text-white/40 uppercase tracking-widest">Facebook</h4>
                      <p className="font-bold">PK Drinks</p>
                    </div>
                  </a>
                  <a href="#" className="flex items-center gap-4 group">
                    <div className="w-12 h-12 bg-white/5 border border-white/10 rounded-xl flex items-center justify-center group-hover:border-red-600 transition-colors">
                      <Instagram className="w-5 h-5 text-white/40 group-hover:text-red-600 transition-colors" />
                    </div>
                    <div>
                      <h4 className="text-[10px] font-bold text-white/40 uppercase tracking-widest">Instagram</h4>
                      <p className="font-bold">@pkdrinks</p>
                    </div>
                  </a>
                </div>
              </div>

              <div className="mt-16 pt-16 border-t border-white/5">
                <a 
                  href="https://wa.me/923192042694" 
                  className="inline-flex items-center gap-4 bg-[#25D366] text-white px-8 py-5 rounded-full font-black text-lg hover:scale-105 transition-transform"
                >
                  <MessageCircle className="w-6 h-6 fill-current" />
                  WHATSAPP US SECURELY
                </a>
              </div>
            </div>

            {/* Form */}
            <div className="bg-white/5 border border-white/10 p-10 md:p-16 rounded-[40px] relative">
              <div className="absolute top-0 right-0 w-64 h-64 bg-red-600/5 blur-[80px] rounded-full -translate-y-1/2 translate-x-1/2" />
              <form className="space-y-8 relative z-10">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <div className="space-y-4">
                    <label className="text-xs font-bold uppercase tracking-widest text-white/40">Full Name</label>
                    <input
                      type="text"
                      className="w-full bg-black/40 border border-white/10 rounded-2xl px-6 py-4 focus:outline-none focus:border-red-600 transition-all"
                      placeholder="Ahmed Khan"
                    />
                  </div>
                  <div className="space-y-4">
                    <label className="text-xs font-bold uppercase tracking-widest text-white/40">Email Address</label>
                    <input
                      type="email"
                      className="w-full bg-black/40 border border-white/10 rounded-2xl px-6 py-4 focus:outline-none focus:border-red-600 transition-all"
                      placeholder="ahmed@example.com"
                    />
                  </div>
                </div>
                <div className="space-y-4">
                    <label className="text-xs font-bold uppercase tracking-widest text-white/40">Subject</label>
                    <select className="w-full bg-black/40 border border-white/10 rounded-2xl px-6 py-4 focus:outline-none focus:border-red-600 transition-all appearance-none cursor-pointer">
                       <option>Product Inquiry</option>
                       <option>Bulk Order Request</option>
                       <option>Partnership/Sponsorship</option>
                       <option>Other</option>
                    </select>
                </div>
                <div className="space-y-4">
                  <label className="text-xs font-bold uppercase tracking-widest text-white/40">Your Message</label>
                  <textarea
                    rows={6}
                    className="w-full bg-black/40 border border-white/10 rounded-2xl px-6 py-4 focus:outline-none focus:border-red-600 transition-all resize-none"
                    placeholder="Tell us how we can help..."
                  />
                </div>
                <button
                  type="submit"
                  className="w-full bg-white text-black font-black py-5 rounded-full flex items-center justify-center gap-3 hover:bg-red-600 hover:text-white transition-all transform active:scale-95 group"
                >
                  SEND MESSAGE
                  <SendHorizontal className="w-5 h-5 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Map Mockup */}
      <section className="py-24">
         <div className="max-w-7xl mx-auto px-6">
            <div className="h-[400px] w-full bg-white/5 rounded-[40px] border border-white/10 flex items-center justify-center relative overflow-hidden grayscale active:grayscale-0 transition-all cursor-pointer group">
               <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')] opacity-10" />
               <div className="relative text-center z-10 px-6">
                  <MapPin className="w-10 h-10 text-red-600 mx-auto mb-4 group-hover:scale-125 transition-transform" />
                  <h3 className="text-2xl font-bold tracking-tight">VISIT OUR EXPERIENCE CENTER</h3>
                  <p className="text-white/40 mt-2">DHA Phase 6 Block C, Lahore (Click to open Google Maps)</p>
               </div>
            </div>
         </div>
      </section>
    </div>
  );
}
