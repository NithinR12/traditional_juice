'use client';

import { useState, useMemo } from 'react';
import { useSearchParams } from 'next/navigation';
import { products } from '@/data/products';
import ProductCard from '@/components/ProductCard';
import { motion, AnimatePresence } from 'framer-motion';
import Image from 'next/image';
import clsx from 'clsx';

function ProductsContent() {
  const searchParams = useSearchParams();
  const initialCategory = searchParams.get('category');
  
  const [selectedCategory, setSelectedCategory] = useState<string>(initialCategory || 'All');

  const categories = ['All', 'Juice', 'Tea', 'Coffee', 'Snacks'];

  const filteredProducts = useMemo(() => {
    if (selectedCategory === 'All') {
      return products;
    }
    return products.filter((product) => product.category === selectedCategory);
  }, [selectedCategory]);

  const heroImage =
    selectedCategory === 'Juice'
      ? 'https://images.unsplash.com/photo-1610970881699-44a5587cabec?auto=format&fit=crop&q=80&w=2000'
      : 'https://images.unsplash.com/photo-1595981267035-7b04ca84a82d?auto=format&fit=crop&q=80&w=2000';
  const heroTitle = selectedCategory === 'Juice' ? 'Elixirs of Nature' : 'The Pure Selection';
  const heroSubtitle =
    selectedCategory === 'Juice'
      ? 'Masterfully cold-pressed elixirs, designed to rejuvenate your soul.'
      : 'A meticulous curation of earth&apos;s most extraordinary botanical treasures.';

  return (
    <>
      {/* Header */}
      <div className="relative h-[60vh] w-full overflow-hidden mb-20 rounded-[3rem] bg-stone-900 shadow-2xl">
        <motion.div
          key={selectedCategory}
          initial={{ scale: 1.1, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 1.5, ease: [0.22, 1, 0.36, 1] }}
          className="absolute inset-0"
        >
          <Image
            src={heroImage}
            alt={heroTitle}
            fill
            className="object-cover brightness-[0.5]"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/20 to-stone-900/40" />
          {selectedCategory === 'Juice' && (
            <div className="absolute inset-0 bg-gradient-to-tr from-green-900/40 via-emerald-800/20 to-transparent mix-blend-overlay" />
          )}
        </motion.div>
        
        <div className="relative z-10 h-full flex flex-col items-center justify-center text-white p-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.2 }}
          >
            <span className="text-[10px] font-black uppercase tracking-[0.4em] text-accent mb-6 block">Collection</span>
            <h1 className="text-5xl md:text-8xl font-serif font-bold mb-6 tracking-tighter leading-none">
              {heroTitle.split(' ').map((word, i) => (
                <span key={i} className={i === 1 ? "text-accent italic font-light" : ""}>
                  {word}{' '}
                </span>
              ))}
            </h1>
            <p className="text-lg md:text-xl max-w-2xl mx-auto text-stone-200 font-medium tracking-wide leading-relaxed text-balance">
              {heroSubtitle}
            </p>
          </motion.div>
        </div>
      </div>
      
      {/* Filters */}
      <div className="flex flex-wrap justify-center gap-6 mb-20">
        {categories.map((category, idx) => (
          <motion.button
            key={category}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 * idx }}
            onClick={() => setSelectedCategory(category)}
            className={clsx(
              'px-10 py-4 rounded-full text-[10px] font-black uppercase tracking-[0.2em] transition-all duration-500 border',
              selectedCategory === category
                ? 'bg-green-900 text-white border-green-900 shadow-[0_10px_30px_rgba(26,71,42,0.2)] scale-105'
                : 'bg-white text-stone-400 border-stone-100 hover:border-green-900 hover:text-green-900'
            )}
          >
            {category}
          </motion.button>
        ))}
      </div>

      {/* Product Grid */}
      <motion.div 
        layout
        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8"
      >
        <AnimatePresence>
          {filteredProducts.map((product) => (
            <motion.div
              layout
              key={product.id}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              transition={{ duration: 0.3 }}
            >
              <ProductCard product={product} />
            </motion.div>
          ))}
        </AnimatePresence>
      </motion.div>

      {filteredProducts.length === 0 && (
        <div className="text-center py-24">
          <p className="text-gray-500 text-lg">No products found in this category.</p>
        </div>
      )}
    </>
  );
}

export default function ProductsPage() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 pt-24">
      <ProductsContent />
    </div>
  );
}
