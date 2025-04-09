"use client"
import React from 'react'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'
import { BookOpen, FileText, LightbulbIcon } from 'lucide-react'
import { useContext } from 'react'
import { UserInputContext } from '@/app/_context/UserInputContext'
import { motion } from 'framer-motion'

function TopicDescription() {
  const { userCourseInput, setUserCourseInput } = useContext(UserInputContext)

  const handleInputChange = (fieldName, value) => {
    setUserCourseInput(prev => ({
      ...prev,
      [fieldName]: value
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
            <BookOpen className="h-6 w-6 text-blue-600" />
          </div>
          <h2 className="text-2xl font-semibold text-gray-800">Create Your Course</h2>
        </div>

        <p className="text-gray-600 mb-8">
          Begin by providing the main topic and description for your course. Our AI will use this information to generate comprehensive content tailored to your needs.
        </p>

        <motion.div 
          initial={{ y: 10, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.2 }}
          className="mb-8"
        >
          <label className="flex items-center gap-2 text-gray-700 font-medium mb-2">
            <FileText className="h-5 w-5 text-blue-600" />
            Course Topic
          </label>
          <div className="relative">
            <Input 
              placeholder="e.g., Introduction to Machine Learning" 
              className="h-14 text-lg pl-4 border-blue-200 focus:border-blue-500 rounded-lg shadow-sm"
              defaultValue={userCourseInput?.topic}
              onChange={(e) => handleInputChange('topic', e.target.value)}
            />
          </div>
          <p className="mt-2 text-xs text-gray-500">
            Be specific about the subject area you want to cover in your course.
          </p>
        </motion.div>

        <motion.div
          initial={{ y: 10, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.3 }}
        >
          <label className="flex items-center gap-2 text-gray-700 font-medium mb-2">
            <LightbulbIcon className="h-5 w-5 text-blue-600" />
            Course Description (Optional)
          </label>
          <div className="relative">
            <Textarea 
              placeholder="Describe your course objectives, target audience, special requirements, or any other details that will help our AI generate better content..." 
              className="min-h-32 text-base p-4 border-blue-200 focus:border-blue-500 rounded-lg shadow-sm"
              defaultValue={userCourseInput?.description}
              onChange={(e) => handleInputChange('description', e.target.value)}
            />
          </div>
          <p className="mt-2 text-xs text-gray-500">
            The more details you provide, the more tailored your course content will be.
          </p>
        </motion.div>
      </div>

      <div className="bg-blue-50 border border-blue-100 rounded-lg p-4 flex items-start">
        <div className="bg-blue-100 p-2 rounded-full mr-3 mt-1">
          <LightbulbIcon className="h-4 w-4 text-blue-600" />
        </div>
        <div>
          <p className="text-sm text-blue-800">
            <strong>Pro Tip:</strong> For the best results, include your intended audience skill level, learning objectives, 
            and any specific topics you want to emphasize. This helps our AI create more relevant content.
          </p>
        </div>
      </div>
    </motion.div>
  )
}

export default TopicDescription