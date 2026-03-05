'use client';

import { useEffect, useState, use } from 'react';
import { motion } from 'framer-motion';
import { CheckCircle, Package, Truck, Home } from 'lucide-react';
import Link from 'next/link';

interface Order {
  id: string;
  customerName: string;
  totalAmount: number;
  status: string;
  createdAt: string;
  items: {
    id: string;
    quantity: number;
    price: number;
    product: {
      name: string;
      image: string;
    };
  }[];
}

export default function OrderPage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = use(params);
  const [order, setOrder] = useState<Order | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchOrder() {
      try {
        const response = await fetch(`/api/orders/${id}`);
        if (response.ok) {
          const data = await response.json();
          setOrder(data);
        }
      } catch (error) {
        console.error('Error fetching order:', error);
      } finally {
        setLoading(false);
      }
    }

    fetchOrder();
  }, [id]);

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-green-700"></div>
      </div>
    );
  }

  if (!order) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center p-4">
        <h1 className="text-2xl font-bold text-gray-900 mb-4">Order Not Found</h1>
        <Link href="/" className="text-green-600 hover:text-green-700">
          Return Home
        </Link>
      </div>
    );
  }

  const steps = [
    { name: 'Order Placed', icon: CheckCircle, status: 'completed' },
    { name: 'Processing', icon: Package, status: order.status === 'pending' ? 'current' : 'completed' },
    { name: 'Shipped', icon: Truck, status: order.status === 'shipped' ? 'current' : 'upcoming' },
    { name: 'Delivered', icon: Home, status: order.status === 'delivered' ? 'current' : 'upcoming' },
  ];

  return (
    <div className="bg-gray-50 min-h-screen py-12">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="bg-white rounded-2xl shadow-sm overflow-hidden"
        >
          {/* Header */}
          <div className="bg-green-700 px-8 py-12 text-center text-white">
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ delay: 0.2, type: 'spring', stiffness: 200 }}
              className="w-16 h-16 bg-white rounded-full flex items-center justify-center mx-auto mb-6"
            >
              <CheckCircle className="h-8 w-8 text-green-700" />
            </motion.div>
            <h1 className="text-3xl font-bold mb-2">Thank you for your order!</h1>
            <p className="text-green-100">Order #{order.id.slice(0, 8)}</p>
          </div>

          <div className="p-8">
            {/* Order Tracking */}
            <div className="mb-12">
              <h2 className="text-lg font-semibold mb-6">Order Status</h2>
              <div className="relative">
                <div className="absolute top-1/2 left-0 w-full h-1 bg-gray-200 -translate-y-1/2 hidden sm:block" />
                <div className="grid grid-cols-1 sm:grid-cols-4 gap-8 relative z-10">
                  {steps.map((step) => (
                    <div key={step.name} className="flex flex-col items-center text-center bg-white sm:bg-transparent p-2 sm:p-0">
                      <div
                        className={`w-10 h-10 rounded-full flex items-center justify-center border-2 mb-2 ${
                          step.status === 'completed' || step.status === 'current'
                            ? 'bg-green-600 border-green-600 text-white'
                            : 'bg-white border-gray-300 text-gray-400'
                        }`}
                      >
                        <step.icon className="h-5 w-5" />
                      </div>
                      <p
                        className={`text-sm font-medium ${
                          step.status === 'current' ? 'text-green-600' : 'text-gray-500'
                        }`}
                      >
                        {step.name}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Order Details */}
            <div className="border-t border-gray-100 pt-8">
              <h2 className="text-lg font-semibold mb-6">Order Details</h2>
              <div className="space-y-4">
                {order.items.map((item) => (
                  <div key={item.id} className="flex justify-between items-center">
                    <div className="flex items-center gap-4">
                      <div className="relative w-16 h-16 rounded-lg overflow-hidden bg-gray-100">
                        {/* eslint-disable-next-line @next/next/no-img-element */}
                        <img src={item.product.image} alt={item.product.name} className="object-cover w-full h-full" />
                      </div>
                      <div>
                        <p className="font-medium text-gray-900">{item.product.name}</p>
                        <p className="text-sm text-gray-500">Qty: {item.quantity}</p>
                      </div>
                    </div>
                    <p className="font-medium">${(item.price * item.quantity).toFixed(2)}</p>
                  </div>
                ))}
              </div>
              <div className="border-t border-gray-100 mt-6 pt-6 flex justify-between items-center">
                <span className="text-lg font-bold text-gray-900">Total Paid</span>
                <span className="text-2xl font-bold text-green-700">${order.totalAmount.toFixed(2)}</span>
              </div>
            </div>

            <div className="mt-8 text-center">
              <Link
                href="/"
                className="inline-flex items-center justify-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-green-700 bg-green-100 hover:bg-green-200 transition-colors"
              >
                Continue Shopping
              </Link>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
