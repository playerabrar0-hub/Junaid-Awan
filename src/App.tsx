/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { CartProvider } from './context/CartContext';
import Navbar from './components/layout/Navbar';
import Footer from './components/layout/Footer';
import Home from './pages/Home';
import ProductDetails from './pages/ProductDetails';
import About from './pages/About';
import Contact from './pages/Contact';
import Cart from './pages/Cart';
import Checkout from './pages/Checkout';
import AdminDashboard from './pages/AdminDashboard';
import { motion, AnimatePresence } from 'motion/react';

const PageTransition = ({ children }: { children: React.ReactNode }) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    exit={{ opacity: 0, y: -20 }}
    transition={{ duration: 0.3, ease: 'easeOut' }}
  >
    {children}
  </motion.div>
);

export default function App() {
  return (
    <CartProvider>
      <Router>
        <div className="min-h-screen bg-[#0A0A0A] text-white font-sans selection:bg-red-600 selection:text-white">
          <Routes>
            <Route path="/admin" element={<AdminDashboard />} />
            <Route path="*" element={
              <>
                <Navbar />
                <main className="pt-20">
                  <AnimatePresence mode="wait">
                    <Routes>
                      <Route path="/" element={<PageTransition><Home /></PageTransition>} />
                      <Route path="/product/:id" element={<PageTransition><ProductDetails /></PageTransition>} />
                      <Route path="/about" element={<PageTransition><About /></PageTransition>} />
                      <Route path="/contact" element={<PageTransition><Contact /></PageTransition>} />
                      <Route path="/cart" element={<PageTransition><Cart /></PageTransition>} />
                      <Route path="/checkout" element={<PageTransition><Checkout /></PageTransition>} />
                    </Routes>
                  </AnimatePresence>
                </main>
                <Footer />
              </>
            } />
          </Routes>
        </div>
      </Router>
    </CartProvider>
  );
}
