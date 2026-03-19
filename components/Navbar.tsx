'use client';

import Link from 'next/link';
import { ShoppingCart, Menu, X, Search } from 'lucide-react';
import { useState, useEffect } from 'react';
import { useCart } from '@/context/CartContext';
import { motion, AnimatePresence } from 'framer-motion';
import clsx from 'clsx';
import { usePathname } from 'next/navigation';

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const { cartCount } = useCart();
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const isTransparent = pathname === '/' && !isScrolled && !isMenuOpen;

  return (
    <nav
      className={clsx(
        'fixed top-0 left-0 right-0 z-50 transition-all duration-500 ease-in-out',
        isTransparent 
          ? 'bg-transparent py-8' 
          : 'bg-white/80 backdrop-blur-xl border-b border-white/20 shadow-[0_4px_30px_rgba(0,0,0,0.03)] py-4'
      )}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <Link href="/" className="flex-shrink-0 z-50 group">
            <span
              className={clsx(
                'text-2xl font-serif font-bold tracking-tighter transition-all duration-500',
                isTransparent ? 'text-white' : 'text-green-900'
              )}
            >
              Purity<span className="text-accent italic font-light ml-1">of</span>Nature
            </span>
            <div className={clsx(
              "h-0.5 w-0 group-hover:w-full transition-all duration-500",
              isTransparent ? "bg-white" : "bg-green-900"
            )} />
          </Link>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-12">
            {['Home', 'Products', 'Our Story', 'Contact'].map((item) => (
              <Link
                key={item}
                href={item === 'Home' ? '/' : `/${item.toLowerCase().replace(' ', '-')}`}
                className={clsx(
                  'text-xs font-bold uppercase tracking-[0.2em] transition-all duration-300 relative group py-2',
                  isTransparent ? 'text-white/80' : 'text-gray-900/70 hover:text-green-900'
                )}
              >
                {item}
                <span className={clsx(
                  "absolute bottom-0 left-0 w-0 h-0.5 transition-all duration-500 group-hover:w-full",
                  isTransparent ? "bg-white" : "bg-green-900"
                )} />
              </Link>
            ))}

            <div className="flex items-center space-x-6 pl-8 border-l border-gray-200/30">
              <button
                className={clsx(
                  'p-2 hover:scale-110 transition-transform duration-300',
                  isTransparent ? 'text-white/80' : 'text-gray-900/70 hover:text-green-900'
                )}
              >
                <Search className="h-4 w-4 stroke-[2.5px]" />
              </button>
              
              <Link
                href="/cart"
                className={clsx(
                  'relative p-2 hover:scale-110 transition-transform duration-300',
                  isTransparent ? 'text-white/80' : 'text-gray-900/70 hover:text-green-900'
                )}
              >
                <ShoppingCart className="h-4 w-4 stroke-[2.5px]" />
                {cartCount > 0 && (
                  <motion.span
                    initial={{ scale: 0, y: 10 }}
                    animate={{ scale: 1, y: 0 }}
                    className="absolute top-0 right-0 inline-flex items-center justify-center w-4 h-4 text-[10px] font-bold text-white bg-accent rounded-full shadow-lg"
                  >
                    {cartCount}
                  </motion.span>
                )}
              </Link>
            </div>
          </div>

          {/* Mobile menu button */}
          <div className="flex items-center md:hidden z-50">
             <Link
                href="/cart"
                className={clsx(
                  'relative p-2 mr-2 hover:text-green-500 transition-colors',
                  isTransparent ? 'text-white/90' : 'text-gray-700'
                )}
              >
                <ShoppingCart className="h-6 w-6" />
                {cartCount > 0 && (
                  <span className="absolute -top-1 -right-1 inline-flex items-center justify-center w-5 h-5 text-xs font-bold text-white bg-green-600 rounded-full">
                    {cartCount}
                  </span>
                )}
              </Link>
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className={clsx(
                'p-2 rounded-md focus:outline-none',
                isTransparent ? 'text-white' : 'text-gray-900'
              )}
            >
              {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="absolute top-0 left-0 w-full bg-white shadow-lg md:hidden pt-20 pb-6 px-4"
          >
            <div className="flex flex-col space-y-4">
              {['Home', 'Products', 'About', 'Contact'].map((item) => (
                <Link
                  key={item}
                  href={item === 'Home' ? '/' : `/${item.toLowerCase()}`}
                  className="text-lg font-medium text-gray-900 hover:text-green-600"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item}
                </Link>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
