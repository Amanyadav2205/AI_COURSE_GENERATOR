"use client"
import React from 'react'
import Image from 'next/image'
import { UserButton } from '@clerk/nextjs'
import { ModeToggle } from '@/components/ui/ModeToggle'
import { Bell, MessageSquare } from 'lucide-react'
import { motion } from 'framer-motion'

function Header() {
  return (
    <motion.div 
      initial={{ y: -20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.3 }}
      className="flex justify-between items-center px-6 py-4 bg-white border-b border-gray-200 sticky top-0 z-20"
    >
      <div className="flex items-center gap-2">
        <Image src="/logo.svg" width={36} height={36} alt="Vaidik-AI  Logo" className="h-9 w-9" />
        <span className="font-semibold text-lg hidden sm:inline-block">Vaidik-AI </span>
      </div>
      
      {/*  */}
      
      <div className="flex items-center gap-4">
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="relative p-2 rounded-full hover:bg-gray-100 transition-colors"
        >
          <Bell size={20} className="text-gray-600" />
          <span className="absolute top-0 right-0 h-4 w-4 bg-red-500 rounded-full flex items-center justify-center text-white text-xs">
            3
          </span>
        </motion.button>
        
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="p-2 rounded-full hover:bg-gray-100 transition-colors"
        >
          <MessageSquare size={20} className="text-gray-600" />
        </motion.button>
        
        <Image 
          src="/image.png" 
          width={36} 
          height={36} 
          alt="Vaidik-AI  Image" 
          className="h-9 w-9 hidden sm:block"
        />
        
        <div className="border-l border-gray-200 h-8"></div>
        
        <ModeToggle />
        
        <div className="ml-1">
          <UserButton afterSignOutUrl="/" />
        </div>
      </div>
    </motion.div>
  )
}

export default Header