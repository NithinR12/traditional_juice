'use client';

import Link from 'next/link';
import Image from 'next/image';
import { products } from '@/data/products';
import ProductCard from '@/components/ProductCard';
import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';
import { ArrowRight, Leaf, Droplets, Truck } from 'lucide-react';

export default function Home() {
  const featuredProducts = products.slice(0, 4);
  const targetRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: targetRef,
    offset: ["start start", "end start"]
  });

  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);
  const scale = useTransform(scrollYProgress, [0, 0.5], [1, 1.1]);
  const y = useTransform(scrollYProgress, [0, 0.5], [0, 100]);

  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section ref={targetRef} className="relative h-screen flex items-center justify-center overflow-hidden bg-stone-900">
        <motion.div 
          style={{ scale, opacity, y }}
          className="absolute inset-0 z-0"
        >
          <div className="absolute left-0 top-0 h-full w-[38%]">
            <Image
              src="https://images.unsplash.com/photo-1610970881699-44a5587cabec?auto=format&fit=crop&q=80&w=2000"
              alt="Fresh Juice"
              fill
              className="object-cover brightness-[0.7]"
              priority
            />
          </div>
          <div className="absolute left-1/2 -translate-x-1/2 top-0 h-full w-[30%]">
            <Image
              src="https://images.unsplash.com/photo-1597481499750-3e6b22637e12?auto=format&fit=crop&q=80&w=2000"
              alt="Premium Tea"
              fill
              className="object-cover brightness-[0.7]"
              priority
            />
          </div>
          <div className="absolute right-0 top-0 h-full w-[38%]">
            <Image
              src="https://images.unsplash.com/photo-1590080875515-8a3a8dc5735e?auto=format&fit=crop&q=80&w=2000"
              alt="Organic Snacks"
              fill
              className="object-cover brightness-[0.7]"
              priority
            />
          </div>
          <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/20 to-stone-900/90" />
          <div className="absolute inset-0 bg-gradient-to-tr from-emerald-700/20 via-green-600/10 to-transparent mix-blend-overlay" />
        </motion.div>
        
        <div className="relative z-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-white pointer-events-none">
          <motion.div
            initial={{ opacity: 0, y: 60 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
            className="pointer-events-auto"
          >
            <div className="reveal-container mb-4">
              <motion.span 
                initial={{ y: "100%" }}
                animate={{ y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="block text-accent font-bold tracking-[0.4em] uppercase text-sm"
              >
                Est. 2026
              </motion.span>
            </div>
            
            <h1 className="text-6xl md:text-9xl font-serif font-bold tracking-tighter mb-8 leading-[0.9] text-balance">
              Purity<span className="text-accent italic font-light ml-2">of</span>Nature
            </h1>
            
            <p className="text-lg md:text-xl max-w-xl mx-auto mb-12 font-medium text-white/80 leading-relaxed tracking-wide text-balance">
              Redefining organic living through curated botanical essentials. 
              Pure. Sustainable. <span className="text-white italic">Extraordinary.</span>
            </p>
            
            <div className="flex flex-col sm:flex-row gap-8 justify-center items-center">
              <Link
                href="/traditional_juice/products/"
                prefetch={false}
                className="group relative inline-flex items-center justify-center px-10 py-5 bg-white text-green-900 text-xs font-bold uppercase tracking-[0.2em] rounded-full overflow-hidden transition-all hover:scale-105 active:scale-95 shadow-2xl"
              >
                <span className="relative z-10 flex items-center">
                  Explore Collection
                  <ArrowRight className="ml-3 h-4 w-4 transition-transform group-hover:translate-x-1" />
                </span>
                <div className="absolute inset-0 bg-accent translate-y-full group-hover:translate-y-0 transition-transform duration-500 ease-out" />
              </Link>
              
              <Link
                href="/traditional_juice/our-story/"
                className="text-xs font-bold uppercase tracking-[0.2em] border-b border-white/30 hover:border-white transition-all pb-1"
              >
                Our Story
              </Link>
            </div>
          </motion.div>
        </div>
        
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1, duration: 1 }}
          className="absolute bottom-10 left-1/2 -translate-x-1/2 text-white/80 animate-bounce z-20"
        >
          <span className="text-sm tracking-widest uppercase">Scroll to Explore</span>
        </motion.div>
      </section>

      {/* Categories Section */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-serif font-bold text-gray-900 mb-4">Curated Categories</h2>
            <div className="w-24 h-1 bg-green-800 mx-auto opacity-20"></div>
          </motion.div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { name: 'Juice', image: 'https://images.unsplash.com/photo-1610970881699-44a5587cabec?auto=format&fit=crop&q=80&w=800' },
              { name: 'Tea', image: 'https://images.unsplash.com/photo-1597481499750-3e6b22637e12?auto=format&fit=crop&q=80&w=800' },
              { name: 'Coffee', image: 'https://images.unsplash.com/photo-1497935586351-b67a49e012bf?auto=format&fit=crop&q=80&w=800' },
              { name: 'Snacks', image: 'https://images.unsplash.com/photo-1590080875515-8a3a8dc5735e?auto=format&fit=crop&q=80&w=800' }
            ].map((category, index) => (
              <motion.div
                key={category.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1, duration: 0.6 }}
              >
                <Link
                  href={`/products?category=${category.name}`}
                  prefetch={false}
                  className="group block relative h-[400px] overflow-hidden rounded-2xl shadow-sm"
                >
                  <Image
                    src={category.image}
                    alt={category.name}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent opacity-80 transition-opacity duration-300 group-hover:opacity-90" />
                  <div className="absolute bottom-0 left-0 right-0 p-8 text-center transform translate-y-4 transition-transform duration-300 group-hover:translate-y-0">
                    <h3 className="text-3xl font-serif font-bold text-white mb-2">{category.name}</h3>
                    <span className="text-white/80 text-sm tracking-widest uppercase opacity-0 group-hover:opacity-100 transition-opacity duration-300 delay-100 block">
                      View Products
                    </span>
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Products Section */}
      <section className="py-24 bg-stone-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-4xl md:text-5xl font-serif font-bold text-gray-900 mb-4">Featured Collection</h2>
              <p className="text-gray-600 max-w-md">Handpicked favorites that embody our commitment to quality and organic purity.</p>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <Link href="/products" prefetch={false} className="group inline-flex items-center text-green-800 font-medium hover:text-green-600 transition-colors">
                View All Products
                <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
              </Link>
            </motion.div>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {featuredProducts.map((product, index) => (
              <motion.div
                key={product.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1, duration: 0.6 }}
              >
                <ProductCard product={product} />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Philosophy Section */}
      <section className="py-24 bg-green-900 text-white overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-4xl md:text-5xl font-serif font-bold mb-8 leading-tight">
                Cultivating a Healthier <br/> Future for All
              </h2>
              <p className="text-green-100 text-lg mb-8 leading-relaxed">
                We believe that the best products come directly from nature, untouched by harmful chemicals. Our commitment goes beyond just selling products; it&apos;s about fostering a community that values sustainability, health, and ethical consumption.
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-8">
                <div className="flex flex-col gap-3">
                  <div className="w-12 h-12 rounded-full bg-white/10 flex items-center justify-center text-green-300">
                    <Leaf className="h-6 w-6" />
                  </div>
                  <h3 className="font-bold text-lg">100% Organic</h3>
                </div>
                <div className="flex flex-col gap-3">
                  <div className="w-12 h-12 rounded-full bg-white/10 flex items-center justify-center text-green-300">
                    <Droplets className="h-6 w-6" />
                  </div>
                  <h3 className="font-bold text-lg">Pure Sourcing</h3>
                </div>
                <div className="flex flex-col gap-3">
                  <div className="w-12 h-12 rounded-full bg-white/10 flex items-center justify-center text-green-300">
                    <Truck className="h-6 w-6" />
                  </div>
                  <h3 className="font-bold text-lg">Eco Shipping</h3>
                </div>
              </div>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="relative h-[600px] rounded-2xl overflow-hidden"
            >
              <Image 
                src="https://images.unsplash.com/photo-1530836369250-ef72a3f5cda8?auto=format&fit=crop&q=80&w=1000"
                alt="Organic Farming"
                fill
                className="object-cover"
              />
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
}
