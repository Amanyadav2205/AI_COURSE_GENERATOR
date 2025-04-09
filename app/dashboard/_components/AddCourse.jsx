"use client"

import { useUser } from '@clerk/nextjs'
import React, { useEffect } from 'react'
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { BookOpen, Plus, Sparkles, Star, TrendingUp } from 'lucide-react';
import { motion } from 'framer-motion';
import UserCourseList from './UserCourseList';

function AddCourse() {
  const { user } = useUser();

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-50 p-8 rounded-md">
      <div className="max-w-6xl mx-auto">
        {/* Header section */}
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between mb-12 bg-white rounded-xl p-6 shadow-md border border-blue-100">
          <div>
            <h2 className="text-3xl font-semibold text-gray-800">
              Welcome back, {" "}
              <span className="font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-indigo-600">
                {user?.fullName || "Teacher"}
              </span>
            </h2>
            <p className="text-gray-500 mt-2 flex items-center">
              <Sparkles className="h-4 w-4 mr-2 text-amber-400" />
              Create and manage your courses with Vaidik-AI 
            </p>
          </div>
          
          <Link href="/create-course">
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Button className="mt-4 md:mt-0 bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white px-6 py-2 rounded-lg shadow-lg flex items-center">
                <Plus className="h-5 w-5 mr-2" />
                Create New Course
              </Button>
            </motion.div>
          </Link>
        </div>

        {/* Stats dashboard */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="bg-white rounded-xl p-6 shadow-md border border-blue-100 flex items-center"
          >
            <div className="bg-blue-100 p-3 rounded-full mr-4">
              <BookOpen className="h-6 w-6 text-blue-600" />
            </div>
            <div>
              <p className="text-sm text-gray-500">Active Courses</p>
              <p className="text-2xl font-bold text-gray-800">3</p>
            </div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="bg-white rounded-xl p-6 shadow-md border border-blue-100 flex items-center"
          >
            <div className="bg-amber-100 p-3 rounded-full mr-4">
              <Star className="h-6 w-6 text-amber-600" />
            </div>
            <div>
              <p className="text-sm text-gray-500">Total Students</p>
              <p className="text-2xl font-bold text-gray-800">257</p>
            </div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="bg-white rounded-xl p-6 shadow-md border border-blue-100 flex items-center"
          >
            <div className="bg-green-100 p-3 rounded-full mr-4">
              <TrendingUp className="h-6 w-6 text-green-600" />
            </div>
            <div>
              <p className="text-sm text-gray-500">Monthly Growth</p>
              <p className="text-2xl font-bold text-gray-800">+24%</p>
            </div>
          </motion.div>
        </div>

        {/* Hero section */}
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4 }}
          className="bg-gradient-to-r from-blue-600 to-indigo-600 rounded-2xl p-8 text-white shadow-xl mb-12 relative overflow-hidden"
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
            <h3 className="text-2xl font-bold mb-4">Transform Your Knowledge Into Impact</h3>
            <p className="mb-6">Create engaging courses that inspire students and showcase your expertise. Our platform provides all the tools you need to succeed.</p>
            <Link href="/create-course">
              <Button className="bg-white text-blue-600 hover:bg-blue-50 px-6 py-2">Get Started</Button>
            </Link>
          </div>
        </motion.div>

        {/* Your courses section with UserCourseList component */}
        <div className="mb-6">
          <h3 className="text-xl font-semibold text-gray-800 mb-4">Your Courses</h3>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
            className="bg-white rounded-xl p-6 shadow-md border border-blue-100"
          >
            <UserCourseList />
          </motion.div>
        </div>
      </div>
    </div>
  )
}

export default AddCourse