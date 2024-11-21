import React from 'react'
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select"
import {Input} from '@/components/ui/input'
import { useContext } from 'react';
import { UserInputContext } from '@/app/_context/UserInputContext';




function SelectOption() {

    const { userCourseInput, setUserCourseInput } = useContext(UserInputContext);


    const handleInputChange = (feildName, value) => {
  
      setUserCourseInput(prev => ({
        ...prev,
        [feildName]: value
      }))
    }


    return (
        <div className = 'px-10 md:px-20 lg:px-44'>
            <div className='grid grid-cols-2 gap-10'>
                
                <div>
                    <label className = 'text-sm'> Difficulty Level</label>
                <Select onValueChange = {(value)=> handleInputChange('level',value)}
                    defaultValue = {userCourseInput?.level}

                    >
                    <SelectTrigger className="">
                        <SelectValue placeholder="Select" />
                    </SelectTrigger>
                    <SelectContent>
                        <SelectItem value="Begginer">Begginer</SelectItem>
                        <SelectItem value="Intermediate">Intermediate</SelectItem>
                        <SelectItem value="Advance">Advance</SelectItem>
                    </SelectContent>
                </Select>
                </div>

                <div>
                    <label className = 'text-sm'> Course Duration </label>
                <Select onValueChange = {(value)=> handleInputChange('duration',value)}
                    defaultValue = {userCourseInput?.duration}
                    >
                    <SelectTrigger className="">
                        <SelectValue placeholder="Select" />
                    </SelectTrigger>
                    <SelectContent>
                        <SelectItem value="1 Hour">1 Hour</SelectItem>
                        <SelectItem value="2 Hour">2 Hour</SelectItem>
                        <SelectItem value="More than 3 Hours">More than 3 Hours</SelectItem>
                    </SelectContent>
                </Select>
                </div>

                <div>
                    <label className = 'text-sm'> Add Video</label>
                <Select onValueChange = {(value)=> handleInputChange('displayVideo',value)}
                    defaultValue = {userCourseInput?.displayVideo}
                    >
                    <SelectTrigger className="">
                        <SelectValue placeholder="Select" />
                    </SelectTrigger>
                    <SelectContent>
                        <SelectItem value="Yes"> Yes </SelectItem>
                        <SelectItem value="No"> No </SelectItem>
                    </SelectContent>
                </Select>
                </div>
 
                <div>
                    <label className = 'text-sm'> No of Chapters </label>
                    <Input type = "number" 
                    defaultValue = {userCourseInput?.noOfChapter}
                    onChange = {(value)=> handleInputChange('noOfChapter',event.target.value)}
                    />
                </div>

            </div>
        </div>
    )
}

export default SelectOption
