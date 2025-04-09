"use client"
import CategoryList from '@/app/_shared/CategoryList'
import React, { useContext } from 'react'
import Image from 'next/image'
import { UserInputContext } from '@/app/_context/UserInputContext'
import { BookOpen, Grid } from 'lucide-react'
import { motion } from 'framer-motion'

function SelectCategory() {
  const { userCourseInput, setUserCourseInput } = useContext(UserInputContext);

  const handleCategoryChange = (category) => {
    setUserCourseInput(prev => ({
      ...prev,
      category: category
    }))
  }

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="max-w-3xl mx-auto px-6 py-8"
    >
      <div className="bg-white rounded-xl shadow-md border border-blue-100 p-6 mb-8">
        <div className="flex items-center mb-6">
          <div className="bg-blue-100 p-3 rounded-full mr-4">
            <Grid className="h-6 w-6 text-blue-600" />
          </div>
          <h2 className="text-2xl font-semibold text-gray-800">Select Course Category</h2>
        </div>

        <p className="text-gray-600 mb-8">
          Choose a category that best represents your course content. This helps organize your course and makes it easier for learners to find.
        </p>

        <motion.div
          initial={{ y: 10, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.2 }}
        >
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
            {CategoryList.map((item, index) => (
              <motion.div
                key={index}
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.98 }}
                className={`flex flex-col items-center justify-center p-5 border rounded-xl cursor-pointer transition-all duration-200 
                  ${userCourseInput?.category === item.name 
                    ? 'border-blue-500 bg-blue-50 shadow-md' 
                    : 'border-gray-200 hover:border-blue-300 hover:bg-blue-50'}`}
                onClick={() => handleCategoryChange(item.name)}
              >
                <div className="mb-3">
                  <Image 
                    src={item.icon} 
                    width={50} 
                    height={50}
                    alt={item.name}
                  />
                </div>
                <h3 className="font-medium text-gray-800">{item.name}</h3>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>

      <div className="bg-blue-50 border border-blue-100 rounded-lg p-4 flex items-start">
        <div className="bg-blue-100 p-2 rounded-full mr-3 mt-1">
          <BookOpen className="h-4 w-4 text-blue-600" />
        </div>
        <div>
          <p className="text-sm text-blue-800">
            <strong>Pro Tip:</strong> Selecting the right category helps our AI generate more relevant content and ensures your course has the appropriate structure for the subject matter.
          </p>
        </div>
      </div>
    </motion.div>
  );
}

export default SelectCategory;