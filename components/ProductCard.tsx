'use client';

import Image from 'next/image';
import { Product } from '@/data/products';
import { useCart } from '@/context/CartContext';
import { Plus, ShoppingBag } from 'lucide-react';
import { motion } from 'framer-motion';

interface ProductCardProps {
  product: Product;
}

export default function ProductCard({ product }: ProductCardProps) {
  const { addToCart } = useCart();

  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
      className="group relative bg-white rounded-3xl overflow-hidden border border-stone-200/60 transition-all duration-700 hover:shadow-[0_20px_50px_rgba(26,71,42,0.08)]"
    >
      {/* Image Container */}
      <div className="relative h-[400px] w-full overflow-hidden bg-stone-100">
        <Image
          src={product.image}
          alt={product.name}
          fill
          className="object-cover transition-transform duration-1000 ease-out group-hover:scale-110"
        />
        
        {/* Badges */}
        <div className="absolute top-6 left-6 flex flex-col gap-2">
          {product.isOrganic && (
            <span className="glass-morphism text-green-900 text-[10px] font-black px-4 py-1.5 rounded-full uppercase tracking-[0.2em] shadow-sm">
              Organic
            </span>
          )}
        </div>

        {/* Quick Add Overlay */}
        <div className="absolute inset-0 bg-green-900/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-center justify-center backdrop-blur-[2px]">
          <motion.button
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            onClick={(e) => {
              e.preventDefault();
              addToCart(product);
            }}
            className="bg-white text-green-900 px-8 py-4 rounded-full text-xs font-bold uppercase tracking-[0.2em] shadow-2xl transform translate-y-8 group-hover:translate-y-0 transition-all duration-700 ease-out flex items-center gap-3 hover:bg-green-900 hover:text-white"
          >
            <ShoppingBag className="w-4 h-4 stroke-[2.5px]" />
            Add to Selection
          </motion.button>
        </div>
      </div>

      {/* Content */}
      <div className="p-8">
        <div className="flex justify-between items-start mb-4">
          <span className="text-[10px] font-bold text-accent uppercase tracking-[0.3em]">{product.category}</span>
          <span className="text-sm font-serif italic text-stone-400">0{product.id}</span>
        </div>
        <h3 className="text-xl font-serif font-bold text-green-900 mb-3 group-hover:text-accent transition-colors duration-500 leading-tight">
          {product.name}
        </h3>
        <p className="text-stone-500 text-sm mb-8 line-clamp-2 leading-relaxed font-medium">
          {product.description}
        </p>
        <div className="flex items-center justify-between pt-6 border-t border-stone-100">
          <div className="flex flex-col">
            <span className="text-[10px] text-stone-400 uppercase tracking-widest mb-1">Price</span>
            <span className="text-xl font-serif font-bold text-green-900">
              ${product.price.toFixed(2)}
            </span>
          </div>
          <motion.button 
            whileHover={{ rotate: 90 }}
            onClick={() => addToCart(product)}
            className="p-3 bg-stone-50 text-green-900 rounded-full border border-stone-200 hover:bg-green-900 hover:text-white transition-all duration-500"
          >
            <Plus className="w-5 h-5 stroke-[2.5px]" />
          </motion.button>
        </div>
      </div>
    </motion.div>
  );
}
