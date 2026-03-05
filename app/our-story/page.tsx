'use client';

import React, { useRef } from 'react';
import Image from 'next/image';
import { motion, useScroll, useTransform, AnimatePresence } from 'framer-motion';
import { Sparkles, Quote } from 'lucide-react';

import Link from 'next/link';

const FadeInWhenInView = ({ children, delay = 0 }: { children: React.ReactNode, delay?: number }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 1, delay, ease: [0.22, 1, 0.36, 1] }}
    >
      {children}
    </motion.div>
  );
};

const RevealText = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="overflow-hidden">
      <motion.div
        initial={{ y: "100%" }}
        whileInView={{ y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
      >
        {children}
      </motion.div>
    </div>
  );
};

const FloatingElement = ({ children, className, delay = 0 }: { children: React.ReactNode, className?: string, delay?: number }) => {
  return (
    <motion.div
      animate={{ 
        y: [0, -20, 0],
        rotate: [0, 2, 0]
      }}
      transition={{ 
        duration: 6, 
        repeat: Infinity, 
        ease: "easeInOut",
        delay 
      }}
      className={className}
    >
      {children}
    </motion.div>
  );
};

export default function OurStoryPage() {
  const containerRef = useRef(null);
  const [isLoaded, setIsLoaded] = React.useState(false);

  React.useEffect(() => {
    // Artificial delay to ensure fonts and layout are ready for a smooth reveal
    const timer = setTimeout(() => setIsLoaded(true), 500);
    return () => clearTimeout(timer);
  }, []);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"]
  });

  const heroOpacity = useTransform(scrollYProgress, [0, 0.15], [1, 0]);
  const heroScale = useTransform(scrollYProgress, [0, 0.15], [1, 1.1]);
  const bgColor = useTransform(
    scrollYProgress, 
    [0, 0.2, 0.5, 0.8], 
    ["#fdfbf7", "#fdfbf7", "#1a472a", "#fdfbf7"]
  );

  return (
    <motion.div 
      ref={containerRef} 
      style={{ backgroundColor: bgColor }}
      className="selection:bg-accent selection:text-white transition-colors duration-1000"
    >
      {/* Premium Page Transition Overlay */}
      <AnimatePresence>
        {!isLoaded && (
          <motion.div
            initial={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 1, ease: "easeInOut" }}
            className="fixed inset-0 z-[100] bg-[#fdfbf7] flex items-center justify-center"
          >
            <div className="flex flex-col items-center gap-8">
              <motion.div 
                animate={{ 
                  scale: [1, 1.1, 1],
                  opacity: [0.3, 1, 0.3]
                }}
                transition={{ duration: 2, repeat: Infinity }}
                className="w-16 h-16 rounded-full border-2 border-accent border-t-transparent animate-spin"
              />
              <span className="text-[10px] font-black uppercase tracking-[0.6em] text-accent">Purity of Nature</span>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Film Grain Texture Overlay */}
      <div className="fixed inset-0 pointer-events-none z-[99] opacity-[0.03] bg-[url('https://grainy-gradients.vercel.app/noise.svg')]" />

      {/* Immersive Hero */}
      <section className="relative h-screen w-full flex items-center justify-center overflow-hidden">
        <motion.div style={{ opacity: heroOpacity, scale: heroScale }} className="absolute inset-0 z-0 will-change-transform">
          <div className="absolute inset-0 bg-stone-900" />
          <Image
            src="https://images.unsplash.com/photo-1500622944204-b135684e99fd?auto=format&fit=crop&q=80&w=2000"
            alt="Nature Background"
            fill
            className="object-cover opacity-40 mix-blend-luminosity"
            priority
            sizes="100vw"
          />
          <video
            autoPlay
            loop
            muted
            playsInline
            preload="auto"
            className="absolute inset-0 w-full h-full object-cover brightness-[0.4] mix-blend-overlay"
          >
            <source src="https://cdn.pixabay.com/video/2020/09/25/51155-464366601_large.mp4" type="video/mp4" />
          </video>
          <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-transparent to-[#fdfbf7]" />
        </motion.div>

        {/* Decorative Floating Hero Elements */}
        <FloatingElement className="absolute top-1/4 left-[10%] w-32 h-32 opacity-20 z-10 pointer-events-none hidden md:block">
          <Image src="https://images.unsplash.com/photo-1530076886461-ce58ea8abe24?auto=format&fit=crop&q=80&w=500" alt="Leaf" width={200} height={200} className="rounded-full grayscale brightness-200" />
        </FloatingElement>
        <FloatingElement className="absolute bottom-1/4 right-[10%] w-48 h-48 opacity-10 z-10 pointer-events-none hidden md:block" delay={2}>
          <Image src="https://images.unsplash.com/photo-1474904200416-6b2b7930f9a1?auto=format&fit=crop&q=80&w=500" alt="Plant" width={300} height={300} className="rounded-full grayscale brightness-200" />
        </FloatingElement>

        <div className="relative z-10 text-center px-6">
          <motion.div
            initial={{ opacity: 0, y: 100 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.5, ease: [0.22, 1, 0.36, 1] }}
          >
            <span className="text-accent font-black uppercase tracking-[0.6em] text-[10px] mb-8 block drop-shadow-sm">The Origin</span>
            <h1 className="text-7xl md:text-[12rem] font-serif font-bold text-white tracking-tighter leading-none mb-12 drop-shadow-2xl">
              Born from<br/>
              <span className="italic font-light text-accent">Pure</span> Earth
            </h1>
            <p className="text-white/90 text-lg md:text-xl font-medium tracking-widest uppercase max-w-2xl mx-auto leading-relaxed drop-shadow-lg">
              A journey of a thousand miles that started with a single, organic seed.
            </p>
          </motion.div>
        </div>

        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 2, duration: 1 }}
          className="absolute bottom-12 left-1/2 -translate-x-1/2 text-white/60 flex flex-col items-center gap-4"
        >
          <span className="text-[10px] font-black uppercase tracking-[0.4em] drop-shadow-sm">Scroll to Discover</span>
          <div className="w-px h-12 bg-gradient-to-b from-white/60 to-transparent" />
        </motion.div>
      </section>

      {/* The Vision Section */}
      <section className="relative py-32 md:py-64 max-w-7xl mx-auto px-6 overflow-visible">
        {/* Background Decorative Elements */}
        <FloatingElement className="absolute top-0 right-0 w-64 h-64 opacity-5 pointer-events-none" delay={1}>
          <Image src="https://images.unsplash.com/photo-1515871204537-49a5fe66a31f?auto=format&fit=crop&q=80&w=500" alt="Nature texture" width={500} height={500} className="rounded-full" loading="lazy" />
        </FloatingElement>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-24 items-center">
          <FadeInWhenInView>
            <div className="space-y-12">
              <div className="inline-flex items-center gap-4 p-2 pr-6 rounded-full bg-stone-100 border border-stone-200/60">
                <div className="w-10 h-10 rounded-full bg-green-900 flex items-center justify-center text-white">
                  <Sparkles className="w-5 h-5" />
                </div>
                <span className="text-[10px] font-black uppercase tracking-widest text-green-900">Our Vision</span>
              </div>
              <RevealText>
                <h2 className="text-5xl md:text-8xl font-serif font-bold text-green-900 tracking-tighter leading-[0.9]">
                  More than a brand,<br/>
                  <span className="text-accent italic font-light">a lifestyle.</span>
                </h2>
              </RevealText>
              <p className="text-stone-500 text-xl md:text-2xl leading-relaxed font-medium max-w-xl">
                We didn&apos;t just want to sell products; we wanted to ignite a movement. A movement that celebrates the raw, unadulterated beauty of nature and brings it into every home.
              </p>
              <div className="flex items-center gap-8 pt-12">
                <div className="flex flex-col">
                  <span className="text-4xl font-serif font-bold text-green-900 tracking-tighter">100%</span>
                  <span className="text-[10px] font-black uppercase tracking-widest text-stone-500">Pure Organic</span>
                </div>
                <div className="w-px h-12 bg-stone-200" />
                <div className="flex flex-col">
                  <span className="text-4xl font-serif font-bold text-green-900 tracking-tighter">24k+</span>
                  <span className="text-[10px] font-black uppercase tracking-widest text-stone-500">Hearts Touched</span>
                </div>
              </div>
            </div>
          </FadeInWhenInView>

          <div className="relative">
            <FadeInWhenInView delay={0.2}>
              <motion.div 
                whileHover={{ scale: 1.02 }}
                transition={{ duration: 0.8 }}
                className="relative h-[800px] w-full rounded-[4rem] overflow-hidden shadow-[0_50px_100px_rgba(26,71,42,0.1)] will-change-transform"
              >
                <video
                  autoPlay
                  loop
                  muted
                  playsInline
                  preload="metadata"
                  className="absolute inset-0 w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110"
                >
                  <source src="https://cdn.pixabay.com/video/2021/08/13/84937-587841775_large.mp4" type="video/mp4" />
                </video>
                <div className="absolute inset-0 bg-gradient-to-t from-green-900/40 to-transparent" />
              </motion.div>
            </FadeInWhenInView>
            
            {/* Floating Element */}
            <motion.div
              animate={{ y: [0, -20, 0] }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
              className="absolute -bottom-12 -left-12 glass-morphism p-10 rounded-[3rem] shadow-2xl max-w-xs hidden md:block z-20 will-change-transform"
            >
              <Quote className="w-8 h-8 text-accent mb-6" />
              <p className="text-green-900 font-serif italic text-lg leading-relaxed mb-6">
                &quot;Nature does not hurry, yet everything is accomplished.&quot;
              </p>
              <div className="h-px w-12 bg-accent" />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Community Section - Re-imagined */}
      <section className="relative py-32 md:py-64 overflow-hidden">
        <FloatingElement className="absolute top-1/2 left-0 w-96 h-96 opacity-[0.03] pointer-events-none -translate-x-1/2" delay={2}>
          <Image src="https://images.unsplash.com/photo-1501854140801-50d01698950b?auto=format&fit=crop&q=80&w=1000" alt="Nature background" width={1000} height={1000} className="rounded-full" loading="lazy" />
        </FloatingElement>

        <div className="max-w-7xl mx-auto px-6 mb-32 relative z-10">
          <FadeInWhenInView>
            <div className="flex flex-col md:flex-row md:items-end justify-between gap-12 text-current">
              <div className="max-w-3xl">
                <span className="text-accent font-black uppercase tracking-[0.4em] text-[10px] mb-6 block">Our Global Tribe</span>
                <RevealText>
                  <h2 className="text-6xl md:text-9xl font-serif font-bold tracking-tighter leading-[0.85] mb-12">
                    A Symphony of<br/>
                    <span className="text-accent italic font-light">Shared Hearts.</span>
                  </h2>
                </RevealText>
                <p className="text-stone-500 text-xl md:text-2xl font-medium leading-relaxed max-w-2xl">
                  Purity is not just our promise—it&apos;s the thread that weaves our global community together. Every story shared is a testament to nature&apos;s enduring power.
                </p>
              </div>
              <div className="hidden md:flex flex-col items-end gap-4 text-right">
                <div className="text-6xl font-serif font-bold tracking-tighter">50k+</div>
                <span className="text-[10px] font-black uppercase tracking-[0.3em] text-stone-400">Stories Shared</span>
              </div>
            </div>
          </FadeInWhenInView>
        </div>

        {/* Unique Draggable/Infinite Scroll Experience */}
        <div className="relative group cursor-grab active:cursor-grabbing overflow-hidden">
          <motion.div 
            animate={{ x: [0, -2000] }}
            transition={{ duration: 60, repeat: Infinity, ease: "linear" }}
            className="flex gap-8 px-6 will-change-transform"
          >
            {[1, 2, 3, 4, 5, 6, 7, 8].map((i) => (
              <div key={i} className="flex-shrink-0 w-[350px] md:w-[500px] aspect-[4/5] relative rounded-[3rem] overflow-hidden group/card">
                {i % 4 === 0 ? (
                  <video
                    autoPlay
                    loop
                    muted
                    playsInline
                    preload="none"
                    className="absolute inset-0 w-full h-full object-cover transition-transform duration-1000 group-hover/card:scale-110"
                  >
                    <source src="https://cdn.pixabay.com/video/2020/07/28/45791-445657457_large.mp4" type="video/mp4" />
                  </video>
                ) : (
                  <Image
                    src={`https://images.unsplash.com/photo-${1500000000000 + i * 1111111}?auto=format&fit=crop&q=80&w=1000`}
                    alt="Community Life"
                    fill
                    className="object-cover transition-transform duration-1000 group-hover/card:scale-110"
                    loading="lazy"
                    sizes="(max-width: 768px) 350px, 500px"
                  />
                )}
                
                {/* Minimalist Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-green-900/80 via-transparent to-transparent opacity-0 group-hover/card:opacity-100 transition-all duration-700 p-12 flex flex-col justify-end">
                  <div className="translate-y-10 group-hover/card:translate-y-0 transition-transform duration-700 ease-out">
                    <Quote className="w-8 h-8 text-accent mb-6" />
                    <p className="text-white font-serif italic text-xl whitespace-normal leading-relaxed mb-6">
                      &quot;A sanctuary of purity in a busy world.&quot;
                    </p>
                    <div className="flex items-center gap-4">
                      <div className="w-8 h-px bg-accent" />
                      <span className="text-[10px] font-black uppercase tracking-widest text-white/60">Verified Member</span>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </motion.div>
          
          {/* Subtle Progress Indicator */}
          <div className="max-w-7xl mx-auto px-6 mt-20 flex items-center justify-between opacity-30">
            <span className="text-[8px] font-black uppercase tracking-[0.4em] text-stone-400">Drag to Explore</span>
            <div className="h-px flex-grow mx-10 bg-stone-200" />
            <span className="text-[8px] font-black uppercase tracking-[0.4em] text-stone-400">Est. 2026</span>
          </div>
        </div>
      </section>

      {/* The Pillars Section (Simplified/Emotional) */}
      <section className="relative py-32 md:py-64 max-w-7xl mx-auto px-6 text-center overflow-visible">
        {/* Decorative Background Image */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full opacity-[0.02] pointer-events-none -z-10">
          <Image 
            src="https://images.unsplash.com/photo-1518531933037-91b2f5f229cc?auto=format&fit=crop&q=80&w=2000" 
            alt="Nature pattern" 
            fill 
            className="object-cover"
          />
        </div>

        <FadeInWhenInView>
          <span className="text-accent font-black uppercase tracking-[0.6em] text-[10px] mb-8 block">The Soul</span>
          <RevealText>
            <h2 className="text-5xl md:text-8xl font-serif font-bold tracking-tighter leading-tight mb-32">
              The Architects of<br/>
              <span className="text-accent italic font-light">Purity.</span>
            </h2>
          </RevealText>
        </FadeInWhenInView>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {[
            {
              name: 'Ava Thompson',
              role: 'Visionary Founder',
              image: 'https://images.unsplash.com/photo-1544723795-3fb6469f5b39?auto=format&fit=crop&q=80&w=500',
              desc: 'Inspired by the ancient forests of her childhood.'
            },
            {
              name: 'Liam Patel',
              role: 'Sourcing Alchemist',
              image: 'https://images.unsplash.com/photo-1549351512-c5e12b6e1f43?auto=format&fit=crop&q=80&w=500',
              desc: 'Traversing the globe to find nature&apos;s hidden treasures.'
            },
            {
              name: 'Maya Chen',
              role: 'Pure Nutritionist',
              image: 'https://images.unsplash.com/photo-1527980965255-d3b416303d12?auto=format&fit=crop&q=80&w=500',
              desc: 'Blending science with the wisdom of the earth.'
            },
            {
              name: 'Noah Garcia',
              role: 'Earth Protector',
              image: 'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&q=80&w=500',
              desc: 'Ensuring our footprint is as light as a falling leaf.'
            }
          ].map((person, idx) => (
            <FadeInWhenInView key={person.name} delay={idx * 0.1}>
              <div className="group relative">
                <div className="relative w-full aspect-[4/5] rounded-[3rem] overflow-hidden mb-8 shadow-xl will-change-transform">
                  <Image
                    src={person.image}
                    alt={person.name}
                    fill
                    className="object-cover transition-transform duration-1000 group-hover:scale-110"
                    loading="lazy"
                    sizes="(max-width: 768px) 100vw, 25vw"
                  />
                  <div className="absolute inset-0 bg-green-900/20 group-hover:bg-green-900/40 transition-colors duration-500" />
                </div>
                <h3 className="text-2xl font-serif font-bold text-green-900 mb-2">{person.name}</h3>
                <p className="text-accent font-black uppercase tracking-[0.2em] text-[10px] mb-4">{person.role}</p>
                <p className="text-stone-600 text-sm font-medium italic">{person.desc}</p>
              </div>
            </FadeInWhenInView>
          ))}
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-32 md:py-64 text-center px-6">
        <FadeInWhenInView>
          <h2 className="text-5xl md:text-9xl font-serif font-bold text-green-900 tracking-tighter leading-tight mb-16">
            Join the<br/>
            <span className="text-accent italic font-light">Movement.</span>
          </h2>
          <Link
            href="/products"
            className="group relative inline-flex items-center justify-center px-16 py-8 bg-green-900 text-white text-xs font-black uppercase tracking-[0.3em] rounded-full overflow-hidden transition-all hover:scale-105 active:scale-95 shadow-2xl"
          >
            <span className="relative z-10 flex items-center gap-4">
              Explore the Selection
              <Sparkles className="w-5 h-5 text-accent" />
            </span>
            <div className="absolute inset-0 bg-accent translate-y-full group-hover:translate-y-0 transition-transform duration-500 ease-out" />
          </Link>
        </FadeInWhenInView>
      </section>
    </motion.div>
  );
}
