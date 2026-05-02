import { Link } from 'react-router-dom';
import { Zap, Instagram, Twitter, Facebook, MessageCircle } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-[#050505] border-t border-white/5 pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
          <div className="col-span-1 md:col-span-1">
            <Link to="/" className="flex items-center gap-2 mb-6">
              <Zap className="w-6 h-6 text-red-600 fill-current" />
              <span className="text-xl font-bold tracking-tighter">PK DRINKS</span>
            </Link>
            <p className="text-white/50 text-sm leading-relaxed mb-6">
              Pakistan's premium beverage brand. Fueling the next generation of bold thinkers and high performers.
            </p>
            <div className="flex items-center gap-4">
              <a href="https://instagram.com/pkdrinks" target="_blank" rel="noopener noreferrer" className="p-2 rounded-full border border-white/10 text-white/50 hover:text-white hover:border-white transition-all">
                <Instagram className="w-4 h-4" />
              </a>
              <a href="https://twitter.com/pkdrinks" target="_blank" rel="noopener noreferrer" className="p-2 rounded-full border border-white/10 text-white/50 hover:text-white hover:border-white transition-all">
                <Twitter className="w-4 h-4" />
              </a>
              <a href="https://facebook.com/pkdrinks" target="_blank" rel="noopener noreferrer" className="p-2 rounded-full border border-white/10 text-white/50 hover:text-white hover:border-white transition-all">
                <Facebook className="w-4 h-4" />
              </a>
            </div>
          </div>

          <div>
            <h4 className="text-sm font-bold uppercase tracking-widest mb-6">Shop</h4>
            <ul className="space-y-4">
              <li><Link to="/#flavors" className="text-white/50 hover:text-white text-sm transition-colors">Energy Drinks</Link></li>
              <li><Link to="/#flavors" className="text-white/50 hover:text-white text-sm transition-colors">Soft Drinks</Link></li>
              <li><Link to="/#flavors" className="text-white/50 hover:text-white text-sm transition-colors">Limited Offers</Link></li>
              <li><Link to="/#flavors" className="text-white/50 hover:text-white text-sm transition-colors">Bundles</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="text-sm font-bold uppercase tracking-widest mb-6">Support</h4>
            <ul className="space-y-4">
              <li><Link to="/contact" className="text-white/50 hover:text-white text-sm transition-colors">Contact Us</Link></li>
              <li><Link to="/about" className="text-white/50 hover:text-white text-sm transition-colors">About Story</Link></li>
              <li><a href="#" className="text-white/50 hover:text-white text-sm transition-colors">Shipping Info</a></li>
              <li><a href="#" className="text-white/50 hover:text-white text-sm transition-colors">Refund Policy</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-sm font-bold uppercase tracking-widest mb-6">Stay Energetic</h4>
            <p className="text-white/50 text-sm mb-4">Join our community for exclusive drops and fitness tips.</p>
            <form className="flex gap-2">
              <input
                type="email"
                placeholder="Email Address"
                className="bg-white/5 border border-white/10 rounded-lg px-4 py-2 text-sm focus:outline-none focus:border-red-600 transition-colors flex-1"
              />
              <button
                type="submit"
                className="bg-red-600 hover:bg-red-700 text-white p-2 rounded-lg transition-colors"
              >
                Join
              </button>
            </form>
            <div className="mt-8 space-y-3">
              <div className="flex items-center gap-3 text-red-500 font-bold">
                <MessageCircle className="w-5 h-5 fill-current" />
                <span className="text-sm">WhatsApp: +92 319 2042 694</span>
              </div>
              <div className="flex items-center gap-3 text-red-500 font-bold">
                <Zap className="w-5 h-5 fill-current" />
                <span className="text-sm">Email: playerabrar0@gmail.com</span>
              </div>
              <div className="flex items-center gap-3 text-red-500 font-bold">
                <Facebook className="w-5 h-5 fill-current" />
                <span className="text-sm">Facebook: PK Drinks</span>
              </div>
              <div className="flex items-center gap-3 text-red-500 font-bold">
                <Instagram className="w-5 h-5 fill-current" />
                <span className="text-sm">Instagram: @pkdrinks</span>
              </div>
            </div>
          </div>
        </div>

        <div className="pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-white/30 text-xs">
            © 2026 PK Drinks. All rights reserved. Built for Pakistan with Pride.
          </p>
          <div className="flex items-center gap-6">
            <span className="text-[10px] uppercase tracking-tighter text-white/30">Secure Payments</span>
            <div className="flex gap-4 grayscale opacity-50">
              <span className="text-xs font-bold text-white/30">JazzCash</span>
              <span className="text-xs font-bold text-white/30">Easypaisa</span>
              <span className="text-xs font-bold text-white/30">COD</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
