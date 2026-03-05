'use client';

import { motion } from 'framer-motion';
import { MapPin, Phone, Mail, Clock, Send } from 'lucide-react';

export default function ContactPage() {
  return (
    <div className="bg-white min-h-screen pt-24 pb-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-20"
        >
          <h1 className="text-4xl md:text-6xl font-serif font-bold text-gray-900 mb-6">Get in Touch</h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto font-light">
            We&apos;d love to hear from you. Whether you have a question about our products, sustainability practices, or just want to say hello.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          {/* Contact Form */}
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="bg-stone-50 rounded-3xl p-8 md:p-12"
          >
            <h2 className="text-2xl font-serif font-bold text-gray-900 mb-8">Send us a message</h2>
            <form className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                    Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    className="w-full bg-white border border-gray-200 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-green-500/20 focus:border-green-500 transition-all"
                    placeholder="Your Name"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    className="w-full bg-white border border-gray-200 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-green-500/20 focus:border-green-500 transition-all"
                    placeholder="you@example.com"
                  />
                </div>
              </div>
              <div>
                <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-2">
                  Subject
                </label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  className="w-full bg-white border border-gray-200 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-green-500/20 focus:border-green-500 transition-all"
                  placeholder="How can we help?"
                />
              </div>
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={6}
                  className="w-full bg-white border border-gray-200 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-green-500/20 focus:border-green-500 transition-all resize-none"
                  placeholder="Write your message here..."
                />
              </div>
              <button
                type="button"
                className="w-full bg-green-800 text-white py-4 px-6 rounded-lg font-medium hover:bg-green-900 transition-all duration-300 flex items-center justify-center gap-2 group"
                onClick={() => alert('Message sent! (This is a demo)')}
              >
                Send Message
                <Send className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </button>
            </form>
          </motion.div>

          {/* Contact Info */}
          <motion.div 
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="space-y-12 py-8"
          >
            <div>
              <h2 className="text-2xl font-serif font-bold text-gray-900 mb-8">Contact Information</h2>
              <ul className="space-y-8">
                <li className="flex items-start gap-6">
                  <div className="w-12 h-12 rounded-full bg-green-50 flex items-center justify-center text-green-700 flex-shrink-0">
                    <MapPin className="h-6 w-6" />
                  </div>
                  <div>
                    <h3 className="font-bold text-gray-900 mb-1">Our Location</h3>
                    <p className="text-gray-600 leading-relaxed">
                      123 Nature Way, Suite 100<br />
                      Green City, GC 12345<br />
                      United States
                    </p>
                  </div>
                </li>
                <li className="flex items-start gap-6">
                  <div className="w-12 h-12 rounded-full bg-green-50 flex items-center justify-center text-green-700 flex-shrink-0">
                    <Phone className="h-6 w-6" />
                  </div>
                  <div>
                    <h3 className="font-bold text-gray-900 mb-1">Phone</h3>
                    <p className="text-gray-600">+1 (555) 123-4567</p>
                    <p className="text-gray-500 text-sm mt-1">Mon-Fri 9am-6pm EST</p>
                  </div>
                </li>
                <li className="flex items-start gap-6">
                  <div className="w-12 h-12 rounded-full bg-green-50 flex items-center justify-center text-green-700 flex-shrink-0">
                    <Mail className="h-6 w-6" />
                  </div>
                  <div>
                    <h3 className="font-bold text-gray-900 mb-1">Email</h3>
                    <p className="text-gray-600">contact@purityofnature.com</p>
                    <p className="text-gray-500 text-sm mt-1">We reply within 24 hours</p>
                  </div>
                </li>
              </ul>
            </div>

            <div className="border-t border-gray-100 pt-12">
              <h3 className="font-bold text-gray-900 mb-6 flex items-center gap-2">
                <Clock className="w-5 h-5 text-green-700" />
                Business Hours
              </h3>
              <div className="grid grid-cols-2 gap-4 text-gray-600">
                <div>
                  <p className="font-medium text-gray-900">Monday - Friday</p>
                  <p>9:00 AM - 6:00 PM</p>
                </div>
                <div>
                  <p className="font-medium text-gray-900">Saturday</p>
                  <p>10:00 AM - 4:00 PM</p>
                </div>
                <div>
                  <p className="font-medium text-gray-900">Sunday</p>
                  <p>Closed</p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
