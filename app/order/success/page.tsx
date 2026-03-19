'use client';

import { motion } from 'framer-motion';
import { CheckCircle, ArrowRight, ShoppingBag } from 'lucide-react';
import Link from 'next/link';
import { useEffect } from 'react';

export default function OrderSuccessPage() {
  return (
    <div className="bg-[#fdfbf7] min-h-screen py-32 flex items-center justify-center">
      <div className="max-w-2xl mx-auto px-4 text-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          className="bg-white p-12 md:p-20 rounded-[3rem] shadow-[0_20px_60px_rgba(26,71,42,0.05)] border border-stone-100"
        >
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ delay: 0.3, type: 'spring', stiffness: 200 }}
            className="w-24 h-24 bg-green-900 rounded-full flex items-center justify-center mx-auto mb-10 shadow-2xl"
          >
            <CheckCircle className="h-12 w-12 text-accent" />
          </motion.div>
          
          <span className="text-accent font-black uppercase tracking-[0.4em] text-[10px] mb-6 block">Order Confirmed</span>
          <h1 className="text-4xl md:text-6xl font-serif font-bold text-green-900 tracking-tighter mb-8 leading-tight">
            Thank you for your curation.
          </h1>
          
          <p className="text-stone-500 text-lg md:text-xl font-medium leading-relaxed mb-12 max-w-md mx-auto">
            Your selection of nature&apos;s finest elixirs has been received. We are preparing your botanical treasures with care.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
            <Link
              href="/products"
              className="group relative inline-flex items-center justify-center px-10 py-5 bg-green-900 text-white text-[10px] font-black uppercase tracking-[0.2em] rounded-full overflow-hidden transition-all hover:scale-105 active:scale-95 shadow-2xl"
            >
              <span className="relative z-10 flex items-center gap-3">
                Continue Curation
                <ShoppingBag className="w-4 h-4 stroke-[2.5px]" />
              </span>
              <div className="absolute inset-0 bg-accent translate-y-full group-hover:translate-y-0 transition-transform duration-500 ease-out" />
            </Link>
            
            <Link
              href="/"
              className="text-[10px] font-black uppercase tracking-[0.2em] text-stone-400 hover:text-green-900 transition-colors flex items-center gap-2 group"
            >
              Return Home
              <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
            </Link>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
