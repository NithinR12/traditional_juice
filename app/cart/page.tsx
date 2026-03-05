'use client';

import { useCart } from '@/context/CartContext';
import Link from 'next/link';
import Image from 'next/image';
import { Trash2, Plus, Minus, ArrowLeft, ShoppingBag, ShieldCheck, Truck, RefreshCw } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

export default function CartPage() {
  const { items, removeFromCart, updateQuantity, cartTotal } = useCart();

  if (items.length === 0) {
    return (
      <div className="min-h-[80vh] flex flex-col items-center justify-center px-4 sm:px-6 lg:px-8 text-center bg-white pt-20">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          className="max-w-md"
        >
          <div className="w-24 h-24 bg-stone-50 rounded-full flex items-center justify-center mx-auto mb-8 border border-stone-100">
            <ShoppingBag className="w-10 h-10 text-stone-300 stroke-[1.5px]" />
          </div>
          <h1 className="text-4xl font-serif font-bold text-green-900 mb-4 tracking-tight">Your Selection is Empty</h1>
          <p className="text-stone-500 mb-10 leading-relaxed font-medium">
            It seems you haven&apos;t curated your organic collection yet. Discover our pure, sustainable offerings and find what speaks to you.
          </p>
          <Link
            href="/traditional_juice/products/"
            className="group relative inline-flex items-center justify-center px-10 py-5 bg-green-900 text-white text-[10px] font-black uppercase tracking-[0.2em] rounded-full overflow-hidden transition-all hover:scale-105 active:scale-95 shadow-2xl"
          >
            <span className="relative z-10 flex items-center">
              Discover Products
              <ArrowLeft className="ml-3 h-4 w-4 rotate-180 transition-transform group-hover:translate-x-1" />
            </span>
            <div className="absolute inset-0 bg-accent translate-y-full group-hover:translate-y-0 transition-transform duration-500 ease-out" />
          </Link>
        </motion.div>
      </div>
    );
  }

  return (
    <div className="bg-[#fdfbf7] min-h-screen pt-32 pb-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="mb-12"
        >
          <span className="text-[10px] font-black uppercase tracking-[0.4em] text-accent mb-4 block text-center sm:text-left">Checkout</span>
          <h1 className="text-4xl md:text-6xl font-serif font-bold text-green-900 tracking-tighter text-center sm:text-left">
            Shopping Selection
          </h1>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-start">
          {/* Cart Items */}
          <div className="lg:col-span-8">
            <div className="space-y-8">
              <AnimatePresence mode="popLayout">
                {items.map((item, idx) => (
                  <motion.div
                    key={item.id}
                    layout
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, scale: 0.95 }}
                    transition={{ duration: 0.5, delay: idx * 0.05 }}
                    className="group flex flex-col sm:flex-row items-center gap-8 p-8 bg-white rounded-[2rem] border border-stone-200/60 shadow-[0_10px_40px_rgba(26,71,42,0.03)] hover:shadow-[0_20px_60px_rgba(26,71,42,0.06)] transition-all duration-700"
                  >
                    <div className="relative h-48 w-full sm:w-48 flex-shrink-0 rounded-2xl overflow-hidden bg-stone-100 shadow-sm">
                      <Image
                        src={item.image}
                        alt={item.name}
                        fill
                        className="object-cover transition-transform duration-1000 group-hover:scale-110"
                      />
                    </div>
                    
                    <div className="flex-grow flex flex-col justify-between h-full py-2">
                      <div className="flex flex-col sm:flex-row sm:justify-between items-start gap-4">
                        <div className="space-y-1">
                          <span className="text-[10px] font-bold text-accent uppercase tracking-[0.3em]">{item.category}</span>
                          <h3 className="text-2xl font-serif font-bold text-green-900 tracking-tight">
                            <Link href={`/products/${item.id}`} className="hover:text-accent transition-colors duration-300">
                              {item.name}
                            </Link>
                          </h3>
                          <p className="text-stone-400 text-sm font-medium">Unit Price: ${item.price.toFixed(2)}</p>
                        </div>
                        
                        <div className="flex flex-col items-end">
                          <p className="text-2xl font-serif font-bold text-green-900">
                            ${(item.price * item.quantity).toFixed(2)}
                          </p>
                        </div>
                      </div>
                      
                      <div className="flex items-center justify-between mt-8 pt-6 border-t border-stone-100">
                        <div className="flex items-center p-1 bg-stone-50 rounded-full border border-stone-200 shadow-inner">
                          <motion.button
                            whileTap={{ scale: 0.9 }}
                            onClick={() => updateQuantity(item.id, item.quantity - 1)}
                            className="p-2 text-stone-400 hover:text-green-900 transition-colors disabled:opacity-30"
                            disabled={item.quantity <= 1}
                          >
                            <Minus className="h-4 w-4 stroke-[2.5px]" />
                          </motion.button>
                          <span className="px-6 py-1 text-green-900 font-black text-xs tabular-nums">{item.quantity}</span>
                          <motion.button
                            whileTap={{ scale: 0.9 }}
                            onClick={() => updateQuantity(item.id, item.quantity + 1)}
                            className="p-2 text-stone-400 hover:text-green-900 transition-colors"
                          >
                            <Plus className="h-4 w-4 stroke-[2.5px]" />
                          </motion.button>
                        </div>

                        <motion.button
                          whileHover={{ scale: 1.1, color: '#ef4444' }}
                          whileTap={{ scale: 0.9 }}
                          onClick={() => removeFromCart(item.id)}
                          className="text-stone-300 p-2 transition-all duration-300"
                          aria-label="Remove selection"
                        >
                          <Trash2 className="h-5 w-5 stroke-[2px]" />
                        </motion.button>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </AnimatePresence>
            </div>
          </div>

          {/* Order Summary */}
          <div className="lg:col-span-4 space-y-8">
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="bg-green-900 text-white p-10 rounded-[3rem] shadow-2xl sticky top-32"
            >
              <h2 className="text-2xl font-serif font-bold mb-10 tracking-tight flex items-center gap-3">
                Order Summary
                <div className="h-px flex-grow bg-white/10" />
              </h2>
              
              <div className="space-y-6">
                <div className="flex items-center justify-between text-white/60 text-xs font-bold uppercase tracking-[0.2em]">
                  <span>Subtotal</span>
                  <span className="text-white font-black tabular-nums">${cartTotal.toFixed(2)}</span>
                </div>
                <div className="flex items-center justify-between text-white/60 text-xs font-bold uppercase tracking-[0.2em]">
                  <span>Logistics</span>
                  <span className="text-accent font-black">Complimentary</span>
                </div>
                
                <div className="pt-8 mt-8 border-t border-white/10">
                  <div className="flex items-end justify-between">
                    <div className="space-y-1">
                      <span className="text-[10px] font-bold text-accent uppercase tracking-[0.4em]">Total Payable</span>
                      <p className="text-4xl font-serif font-bold tracking-tighter tabular-nums">${cartTotal.toFixed(2)}</p>
                    </div>
                  </div>
                </div>

                <div className="pt-10 space-y-4">
                  <Link
                    href="/traditional_juice/checkout/"
                    className="group relative w-full inline-flex items-center justify-center px-10 py-5 bg-white text-green-900 text-[10px] font-black uppercase tracking-[0.2em] rounded-full overflow-hidden transition-all hover:scale-105 active:scale-95 shadow-2xl"
                  >
                    <span className="relative z-10 flex items-center gap-3">
                      Secure Checkout
                      <ShieldCheck className="w-4 h-4 stroke-[2.5px]" />
                    </span>
                    <div className="absolute inset-0 bg-accent translate-y-full group-hover:translate-y-0 transition-transform duration-500 ease-out" />
                  </Link>
                  
                  <Link
                    href="/traditional_juice/products/"
                    className="w-full inline-flex items-center justify-center py-4 text-white/40 hover:text-white transition-all text-[10px] font-black uppercase tracking-[0.2em] group"
                  >
                    <span className="w-0 group-hover:w-4 h-px bg-accent mr-0 group-hover:mr-2 transition-all duration-300" />
                    Continue Curation
                  </Link>
                </div>
              </div>

              {/* Trust Badges */}
              <div className="mt-12 grid grid-cols-3 gap-4 pt-10 border-t border-white/5">
                <div className="flex flex-col items-center text-center gap-3 group">
                  <div className="p-3 rounded-2xl bg-white/5 border border-white/10 group-hover:bg-white/10 transition-colors duration-500">
                    <Truck className="w-4 h-4 text-accent stroke-[2px]" />
                  </div>
                  <span className="text-[8px] font-bold uppercase tracking-widest text-white/40">Express</span>
                </div>
                <div className="flex flex-col items-center text-center gap-3 group">
                  <div className="p-3 rounded-2xl bg-white/5 border border-white/10 group-hover:bg-white/10 transition-colors duration-500">
                    <RefreshCw className="w-4 h-4 text-accent stroke-[2px]" />
                  </div>
                  <span className="text-[8px] font-bold uppercase tracking-widest text-white/40">Pure Return</span>
                </div>
                <div className="flex flex-col items-center text-center gap-3 group">
                  <div className="p-3 rounded-2xl bg-white/5 border border-white/10 group-hover:bg-white/10 transition-colors duration-500">
                    <ShieldCheck className="w-4 h-4 text-accent stroke-[2px]" />
                  </div>
                  <span className="text-[8px] font-bold uppercase tracking-widest text-white/40">Secure</span>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
}

