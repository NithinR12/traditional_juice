'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';
import { Leaf, Award, Heart } from 'lucide-react';

export default function AboutPage() {
  return (
    <div className="bg-white">
      {/* Hero Section */}
      <div className="relative h-[60vh] min-h-[500px] w-full overflow-hidden flex items-center justify-center">
        <Image
          src="https://images.unsplash.com/photo-1505751172876-fa1923c5c528?auto=format&fit=crop&q=80&w=2000"
          alt="Organic Farm Landscape"
          fill
          className="object-cover brightness-[0.6]"
          priority
          unoptimized
        />
        <div className="relative z-10 text-center text-white px-4 max-w-4xl mx-auto">
          <motion.h1 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-5xl md:text-7xl font-serif font-bold mb-6"
          >
            Rooted in Nature
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-xl md:text-2xl font-light text-gray-100"
          >
            We are dedicated to bringing you the finest organic products from nature&apos;s bounty.
          </motion.p>
        </div>

      {/* Story Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center mb-24">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <span className="text-green-800 font-bold tracking-widest uppercase text-sm mb-4 block">Our Story</span>
            <h2 className="text-4xl md:text-5xl font-serif font-bold text-gray-900 mb-8 leading-tight">
              A Passion for Pure Living
            </h2>
            <div className="space-y-6 text-lg text-gray-600 leading-relaxed">
              <p>
                Founded with a passion for healthy living and sustainability, Purity of Nature began as a small family initiative to source the best organic ingredients.
              </p>
              <p>
                We believe that what you consume matters. That&apos;s why we partner directly with farmers who share our commitment to organic farming practices, ensuring that every product we offer is free from harmful chemicals and rich in nutrients.
              </p>
              <p>
                From our refreshing juices to our artisanal coffees and wholesome snacks, every item is curated to help you live a healthier, more vibrant life.
              </p>
            </div>
          </motion.div>
          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative h-[600px] rounded-2xl overflow-hidden shadow-2xl"
          >
            <Image
              src="https://images.unsplash.com/photo-1526401485004-2aa7c0c4c3f8?auto=format&fit=crop&q=80&w=1000"
              alt="Organic Ingredients"
              fill
              className="object-cover"
              unoptimized
            />
          </motion.div>
        </div>
      </div>

      {/* Values Section */}
      <div className="bg-stone-50 rounded-3xl p-12 md:p-24 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-serif font-bold text-gray-900 mb-4">Our Core Values</h2>
            <div className="w-24 h-1 bg-green-800 mx-auto opacity-20"></div>
          </motion.div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {[
              { 
                icon: Leaf, 
                title: 'Sustainability', 
                desc: 'We prioritize eco-friendly packaging and support sustainable farming to protect our planet for future generations.' 
              },
              { 
                icon: Award, 
                title: 'Quality', 
                desc: 'We never compromise on quality. Every batch is tested to ensure it meets our high standards for purity and taste.' 
              },
              { 
                icon: Heart, 
                title: 'Community', 
                desc: 'We believe in building a community of health-conscious individuals and supporting the farmers who grow our food.' 
              }
            ].map((value, index) => (
              <motion.div
                key={value.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.2, duration: 0.6 }}
                className="flex flex-col items-center"
              >
                <div className="w-16 h-16 rounded-full bg-green-100 flex items-center justify-center text-green-800 mb-6">
                  <value.icon className="h-8 w-8" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">{value.title}</h3>
                <p className="text-gray-600 leading-relaxed">
                  {value.desc}
                </p>
              </motion.div>
            ))}
          </div>
        </div>

        <div className="mt-24">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-serif font-bold text-gray-900 mb-4">Our Pillars</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">The people who uphold our mission and drive us forward.</p>
            <div className="w-24 h-1 bg-green-800 mx-auto opacity-20"></div>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-10">
            {[
              {
                name: 'Ava Thompson',
                role: 'Founder & CEO',
                image: 'https://images.unsplash.com/photo-1544723795-3fb6469f5b39?auto=format&fit=crop&q=80&w=500'
              },
              {
                name: 'Liam Patel',
                role: 'Head of Sourcing',
                image: 'https://images.unsplash.com/photo-1549351512-c5e12b6e1f43?auto=format&fit=crop&q=80&w=500'
              },
              {
                name: 'Maya Chen',
                role: 'Chief Nutritionist',
                image: 'https://images.unsplash.com/photo-1527980965255-d3b416303d12?auto=format&fit=crop&q=80&w=500'
              },
              {
                name: 'Noah Garcia',
                role: 'Sustainability Lead',
                image: 'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&q=80&w=500'
              }
            ].map((person, idx) => (
              <motion.div
                key={person.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: idx * 0.05 }}
                className="bg-white rounded-2xl shadow-sm p-6"
              >
                <div className="relative w-28 h-28 mx-auto rounded-full overflow-hidden mb-4">
                  <Image
                    src={person.image}
                    alt={person.name}
                    fill
                    className="object-cover"
                    unoptimized
                  />
                </div>
                <h3 className="text-lg font-bold text-gray-900">{person.name}</h3>
                <p className="text-green-700 font-medium">{person.role}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
