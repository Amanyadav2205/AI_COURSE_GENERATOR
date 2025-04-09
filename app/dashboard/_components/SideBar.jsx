"use client";
import React from 'react'
import Image from 'next/image';
import { HiOutlineHome, HiArrowLeftOnRectangle, HiOutlinePuzzlePiece, HiOutlineMagnifyingGlass } from "react-icons/hi2";
import { usePathname } from 'next/navigation';
import Link from 'next/link';
import { Progress } from "@/components/ui/progress"
import { motion } from 'framer-motion';

function SideBar() {
    const Menu = [
        {
            id: 1,
            name: 'Home',
            icon: <HiOutlineHome />,
            path: '/dashboard'
        },
        {
            id: 2,
            name: 'Explore',
            icon: <HiOutlineMagnifyingGlass />,
            path: '/dashboard/explore'
        },
        {
            id: 3,
            name: 'Upgrade',
            icon: <HiOutlinePuzzlePiece />,
            path: '/dashboard/upgrade'
        },
        {
            id: 4,
            name: 'Logout',
            icon: <HiArrowLeftOnRectangle />,
            path: '/dashboard/logout'
        }
    ]

    const path = usePathname();

    return (
        <motion.div 
            initial={{ x: -100, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.5 }}
            className="fixed h-full md:w-64 bg-white border-r border-gray-200 p-6 shadow-sm z-10 flex flex-col justify-between"
        >
            {/* Top section */}
            <div>
                <div className="flex items-center gap-3 mb-8">
                    <Image src="/logo2.svg" width={40} height={40} alt="Vaidik-AI  Logo" className="h-10 w-10" />
                    <h1 className="text-xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-indigo-600">
                        Vaidik-AI 
                    </h1>
                </div>

                <div className="mb-6">
                    <div className="text-xs font-medium text-gray-400 uppercase tracking-wider mb-2">Menu</div>
                    <ul className="space-y-1">
                        {Menu.map((item) => (
                            <Link href={item.path} key={item.id}>
                                <motion.li
                                    whileHover={{ x: 4 }}
                                    className={`flex items-center gap-3 py-3 px-4 rounded-lg transition-all duration-200 ${
                                        item.path === path 
                                        ? 'bg-gradient-to-r from-blue-50 to-indigo-50 text-blue-700 border-l-4 border-blue-600' 
                                        : 'text-gray-600 hover:bg-gray-50'
                                    }`}
                                >
                                    <div className={`text-xl ${item.path === path ? 'text-blue-600' : 'text-gray-500'}`}>
                                        {item.icon}
                                    </div>
                                    <span className="font-medium">{item.name}</span>

                                    {item.name === 'Upgrade' && (
                                        <span className="ml-auto bg-amber-100 text-amber-700 text-xs px-2 py-1 rounded-full">
                                            PRO
                                        </span>
                                    )}
                                </motion.li>
                            </Link>
                        ))}
                    </ul>
                </div>
            </div>

            {/* Bottom section: Upgrade Box */}
            <div className="pt-6 border-t border-gray-200">
                <div className="bg-gradient-to-r from-blue-50 to-indigo-50 p-4 rounded-lg">
                    <div className="flex items-center justify-between mb-2">
                        <span className="text-sm font-medium text-gray-700">Free Plan</span>
                        <span className="text-xs font-medium bg-blue-100 text-blue-700 px-2 py-1 rounded-full">1/5</span>
                    </div>
                    
                    <Progress 
                        value={20} 
                        className="h-2 bg-blue-100" 
                        indicatorClassName="bg-gradient-to-r from-blue-600 to-indigo-600"
                    />
                    
                    <div className="mt-3 space-y-2">
                        <p className="text-xs text-gray-600">1 out of 5 courses created</p>
                        <Link href="/dashboard/upgrade">
                            <motion.button 
                                whileHover={{ scale: 1.03 }}
                                whileTap={{ scale: 0.98 }}
                                className="w-full bg-gradient-to-r from-blue-600 to-indigo-600 text-white text-sm py-2 rounded-md font-medium shadow-sm"
                            >
                                Upgrade for Unlimited Access
                            </motion.button>
                        </Link>
                    </div>
                </div>
            </div>
        </motion.div>
    );
}

export default SideBar;
