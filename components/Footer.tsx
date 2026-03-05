import Link from 'next/link';
import { Facebook, Twitter, Instagram, Linkedin, Mail } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-stone-900 text-white pt-32 pb-12 border-t border-stone-800/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-16 mb-24">
          {/* Brand Column */}
          <div className="lg:col-span-4 space-y-8">
            <Link href="/traditional_juice/" className="group inline-block">
              <h3 className="text-3xl font-serif font-bold text-white tracking-tighter transition-all duration-500">
                Purity<span className="text-accent italic font-light ml-1">of</span>Nature
              </h3>
              <div className="h-0.5 w-0 group-hover:w-full transition-all duration-500 bg-accent" />
            </Link>
            <p className="text-stone-400 leading-relaxed text-sm font-medium max-w-sm">
              Curating the finest organic essentials for a life well-lived. Pure, sustainable, and ethically sourced from nature&apos;s bounty.
            </p>
            <div className="flex space-x-6">
              {[Facebook, Twitter, Instagram, Linkedin].map((Icon, i) => (
                <a key={i} href="#" className="text-stone-500 hover:text-accent transition-all duration-300 hover:-translate-y-1">
                  <Icon className="h-5 w-5 stroke-[1.5px]" />
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div className="lg:col-span-2">
            <h4 className="text-[10px] font-bold uppercase tracking-[0.3em] mb-10 text-stone-500">Explore</h4>
            <ul className="space-y-5">
              {['Home', 'Products', 'Our Story', 'Contact'].map((item) => (
                <li key={item}>
                  <Link 
                    href={item === 'Home' ? '/traditional_juice/' : `/traditional_juice/${item.toLowerCase().replace(' ', '-')}/`}
                    className="text-stone-400 hover:text-white transition-all duration-300 text-xs font-bold uppercase tracking-widest group flex items-center"
                  >
                    <span className="w-0 group-hover:w-4 h-px bg-accent mr-0 group-hover:mr-2 transition-all duration-300" />
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Categories */}
          <div className="lg:col-span-2">
            <h4 className="text-[10px] font-bold uppercase tracking-[0.3em] mb-10 text-stone-500">Collections</h4>
            <ul className="space-y-5">
              {['Juice', 'Tea', 'Coffee', 'Snacks'].map((item) => (
                <li key={item}>
                  <Link 
                    href={`/traditional_juice/products/?category=${item}`}
                    prefetch={false}
                    className="text-stone-400 hover:text-white transition-all duration-300 text-xs font-bold uppercase tracking-widest group flex items-center"
                  >
                    <span className="w-0 group-hover:w-4 h-px bg-accent mr-0 group-hover:mr-2 transition-all duration-300" />
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Newsletter */}
          <div className="lg:col-span-4">
            <h4 className="text-[10px] font-bold uppercase tracking-[0.3em] mb-10 text-stone-500">Stay Connected</h4>
            <p className="text-stone-400 mb-8 text-sm font-medium">Subscribe to receive updates, access to exclusive deals, and more.</p>
            <form className="flex flex-col gap-4">
              <div className="relative group">
                <input 
                  type="email" 
                  placeholder="Enter your email" 
                  className="w-full bg-stone-800/50 border border-stone-700/50 rounded-full py-4 px-6 text-xs font-bold uppercase tracking-widest text-white placeholder-stone-600 focus:outline-none focus:border-accent transition-all duration-500"
                />
                <button type="submit" className="absolute right-2 top-1/2 -translate-y-1/2 p-2 bg-accent text-white rounded-full hover:scale-110 transition-all duration-300">
                  <Mail className="h-4 w-4" />
                </button>
              </div>
            </form>
          </div>
        </div>

        <div className="border-t border-stone-800/50 pt-12 flex flex-col md:flex-row justify-between items-center gap-8 text-[10px] font-bold uppercase tracking-[0.2em] text-stone-500">
          <p className="order-2 md:order-1">&copy; {new Date().getFullYear()} Purity of Nature. All rights reserved.</p>
          <div className="flex space-x-10 order-1 md:order-2">
            <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
            <a href="#" className="hover:text-white transition-colors">Cookie Policy</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
