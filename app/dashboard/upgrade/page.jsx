"use client"

import React from 'react'
import { motion } from 'framer-motion';
import { Crown, Gem, ShieldCheck, TrendingUp } from 'lucide-react';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import Pricing from '@/app/_components/Pricing';

function Upgrade() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-50 to-purple-50 p-8 rounded-md">
      <div className="max-w-5xl mx-auto">
        {/* Header */}
        <div className="bg-white p-6 rounded-xl shadow-md border border-purple-100 mb-10">
          <h2 className="text-3xl font-bold text-gray-800 mb-2">
            Unlock Premium Features with
            <span className="ml-2 bg-clip-text text-transparent bg-gradient-to-r from-purple-600 to-indigo-600">
              Vaidik-AI  Pro
            </span>
          </h2>
          <p className="text-gray-500">
            Boost your teaching experience with powerful tools and exclusive benefits.
          </p>
        </div>

        {/* Benefits Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="bg-white rounded-xl p-6 shadow-md border border-purple-100 flex items-center"
          >
            <div className="bg-purple-100 p-3 rounded-full mr-4">
              <Crown className="h-6 w-6 text-purple-600" />
            </div>
            <div>
              <p className="text-sm text-gray-500">Priority Support</p>
              <p className="text-lg font-semibold text-gray-800">24/7 help from our team</p>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="bg-white rounded-xl p-6 shadow-md border border-purple-100 flex items-center"
          >
            <div className="bg-indigo-100 p-3 rounded-full mr-4">
              <Gem className="h-6 w-6 text-indigo-600" />
            </div>
            <div>
              <p className="text-sm text-gray-500">Advanced Analytics</p>
              <p className="text-lg font-semibold text-gray-800">Deeper insights into students</p>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="bg-white rounded-xl p-6 shadow-md border border-purple-100 flex items-center"
          >
            <div className="bg-green-100 p-3 rounded-full mr-4">
              <ShieldCheck className="h-6 w-6 text-green-600" />
            </div>
            <div>
              <p className="text-sm text-gray-500">Enhanced Security</p>
              <p className="text-lg font-semibold text-gray-800">Top-level data protection</p>
            </div>
          </motion.div>
        </div>

        {/* Call to Action Section */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4 }}
          className="bg-gradient-to-r from-purple-600 to-indigo-600 rounded-2xl p-8 text-white shadow-xl relative overflow-hidden"
        >
          <div className="absolute top-0 right-0 opacity-10">
            <svg width="400" height="400" viewBox="0 0 200 200">
              <path
                fill="white"
                d="M46.5,-78.3C59.9,-71.8,70.3,-59.3,77.5,-45.2C84.8,-31.1,88.8,-15.5,88.2,-0.3C87.7,14.9,82.5,29.7,73.8,42.3C65.1,54.8,52.8,65,39.1,73.4C25.4,81.7,10.2,88.2,-5.8,90.3C-21.9,92.4,-38.9,90.1,-52.4,81.7C-65.9,73.3,-75.8,58.9,-82.1,43.4C-88.4,27.9,-91,11.4,-88.8,-3.7C-86.6,-18.8,-79.6,-32.5,-69.8,-43.9C-60,-55.3,-47.4,-64.4,-34.2,-71.1C-21,-77.7,-7.1,-81.9,7.5,-84.4C22,-86.9,46.5,-87.8,46.5,-78.3Z"
                transform="translate(100 100)"
              />
            </svg>
          </div>

          <div className="relative z-10 max-w-lg">
            <h3 className="text-2xl font-bold mb-4">Upgrade Today & Level Up</h3>
            <p className="mb-6">
              Take your teaching to the next level. With Vaidik-AI  Pro, gain exclusive tools and insights that empower your success.
            </p>
            <Link href="/pricing">
              <Button className="bg-white text-purple-600 hover:bg-purple-50 px-6 py-2">View Plans</Button>
            </Link>
          </div>
        </motion.div>
      </div>
      <div className='mt-10 rounded-lg'> 
      <Pricing />
      </div>
    </div>
  )
}

export default Upgrade;
