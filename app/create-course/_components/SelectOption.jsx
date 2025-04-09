"use client"
import React, { useContext } from 'react';
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select";
import { Input } from '@/components/ui/input';
import { UserInputContext } from '@/app/_context/UserInputContext';
import { BookOpen, Clock, Video, Layers } from 'lucide-react';
import { motion } from 'framer-motion';

function SelectOption() {
    const { userCourseInput, setUserCourseInput } = useContext(UserInputContext);
    
    const handleInputChange = (fieldName, value) => {
        setUserCourseInput(prev => ({
            ...prev,
            [fieldName]: value,
        }));
    };
    
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
                        <Layers className="h-6 w-6 text-blue-600" />
                    </div>
                    <h2 className="text-2xl font-semibold text-gray-800">Course Structure</h2>
                </div>

                <p className="text-gray-600 mb-8">
                    Define the format and structure of your course. These details will help our AI generate appropriate content and organization.
                </p>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <motion.div 
                        initial={{ y: 10, opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        transition={{ delay: 0.2 }}
                    >
                        <label className="flex items-center gap-2 text-gray-700 font-medium mb-2">
                            <BookOpen className="h-5 w-5 text-blue-600" />
                            Difficulty Level
                        </label>
                        <Select
                            onValueChange={(value) => handleInputChange('level', value)}
                            defaultValue={userCourseInput?.level}
                        >
                            <SelectTrigger className="h-14 text-base border-blue-200 focus:border-blue-500 rounded-lg shadow-sm">
                                <SelectValue placeholder="Select difficulty" />
                            </SelectTrigger>
                            <SelectContent>
                                <SelectItem value="Beginner">Beginner</SelectItem>
                                <SelectItem value="Intermediate">Intermediate</SelectItem>
                                <SelectItem value="Advanced">Advanced</SelectItem>
                            </SelectContent>
                        </Select>
                        <p className="mt-2 text-xs text-gray-500">
                            Choose the appropriate level for your target audience.
                        </p>
                    </motion.div>

                    <motion.div 
                        initial={{ y: 10, opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        transition={{ delay: 0.3 }}
                    >
                        <label className="flex items-center gap-2 text-gray-700 font-medium mb-2">
                            <Clock className="h-5 w-5 text-blue-600" />
                            Course Duration
                        </label>
                        <Select
                            onValueChange={(value) => handleInputChange('duration', value)}
                            defaultValue={userCourseInput?.duration}
                        >
                            <SelectTrigger className="h-14 text-base border-blue-200 focus:border-blue-500 rounded-lg shadow-sm">
                                <SelectValue placeholder="Select duration" />
                            </SelectTrigger>
                            <SelectContent>
                                <SelectItem value="1 Hour">1 Hour</SelectItem>
                                <SelectItem value="2 Hour">2 Hour</SelectItem>
                                <SelectItem value="More than 3 Hours">More than 3 Hours</SelectItem>
                            </SelectContent>
                        </Select>
                        <p className="mt-2 text-xs text-gray-500">
                            How much time should the course take to complete.
                        </p>
                    </motion.div>

                    <motion.div 
                        initial={{ y: 10, opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        transition={{ delay: 0.4 }}
                    >
                        <label className="flex items-center gap-2 text-gray-700 font-medium mb-2">
                            <Video className="h-5 w-5 text-blue-600" />
                            Include Videos
                        </label>
                        <Select
                            onValueChange={(value) => handleInputChange('displayVideo', value)}
                            defaultValue={userCourseInput?.displayVideo}
                        >
                            <SelectTrigger className="h-14 text-base border-blue-200 focus:border-blue-500 rounded-lg shadow-sm">
                                <SelectValue placeholder="Select option" />
                            </SelectTrigger>
                            <SelectContent>
                                <SelectItem value="Yes">Yes</SelectItem>
                                <SelectItem value="No">No</SelectItem>
                            </SelectContent>
                        </Select>
                        <p className="mt-2 text-xs text-gray-500">
                            Choose whether to include video content in your course.
                        </p>
                    </motion.div>

                    <motion.div 
                        initial={{ y: 10, opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        transition={{ delay: 0.5 }}
                    >
                        <label className="flex items-center gap-2 text-gray-700 font-medium mb-2">
                            <Layers className="h-5 w-5 text-blue-600" />
                            Number of Chapters
                        </label>
                        <div className="relative">
                            <Input
                                type="number"
                                placeholder="e.g., 5"
                                className="h-14 text-lg pl-4 border-blue-200 focus:border-blue-500 rounded-lg shadow-sm"
                                defaultValue={userCourseInput?.noOfChapter}
                                onChange={(event) => handleInputChange('noOfChapter', event.target.value)}
                            />
                        </div>
                        <p className="mt-2 text-xs text-gray-500">
                            Specify how many chapters your course should contain.
                        </p>
                    </motion.div>
                </div>
            </div>
            
            <div className="bg-blue-50 border border-blue-100 rounded-lg p-4 flex items-start">
                <div className="bg-blue-100 p-2 rounded-full mr-3 mt-1">
                    <Clock className="h-4 w-4 text-blue-600" />
                </div>
                <div>
                    <p className="text-sm text-blue-800">
                        <strong>Pro Tip:</strong> More chapters with focused content are often better than fewer chapters with dense material. 
                        Consider your course duration when deciding on the number of chapters.
                    </p>
                </div>
            </div>
        </motion.div>
    );
}

export default SelectOption;