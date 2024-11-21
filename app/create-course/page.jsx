"use client"
import React,{ useState,useEffect } from 'react'
import { Button } from '@/components/ui/button';
import { HiSquare3Stack3D, HiMiniPencilSquare, HiOutlineClipboardDocumentList,HiArrowLongRight,HiArrowLongLeft,HiMiniBolt } from "react-icons/hi2";
import SelectCategory from './_components/SelectCategory';
import TopicDescription from './_components/TopicDescription';
import SelectOption from './_components/SelectOption';
import { UserInputContext } from '../_context/UserInputContext';
import { useContext } from 'react';



function CreateCourse() {

  // Logo for each item
  const StepperOptions = [
    {
      id: 1,
      name: 'Category',
      icon: <HiSquare3Stack3D />
    },
    {
      id: 2,
      name: 'Topic & Desc',
      icon: <HiMiniPencilSquare />
    },
    {
      id: 3,
      name: 'Options',
      icon: <HiOutlineClipboardDocumentList />
    }

  ]

  const {userCourseInput,setUserCourseInput} = useContext(UserInputContext);

  const [activeIndex, setActiveIndex] = useState(0)

  useEffect (() => {
    console.log(userCourseInput);
  }, [userCourseInput]
)

// {used to check next button}

const checStatus = () =>{
  if(userCourseInput?. length ==0){
    return true;
  }
  if(activeIndex == 0 &&(userCourseInput?.category?.length ==0 || userCourseInput?.category == undefined))
  {
    return true;
  }
  if(activeIndex == 1 && (userCourseInput?.topic?.length ==0 || userCourseInput?.topic == undefined)){
    return true;
  }

  else if(activeIndex == 2 &&(userCourseInput?.level==undefined || userCourseInput?.duration == undefined || userCourseInput?.displayVideo == undefined || userCourseInput?.noOfChapter == undefined))
  {
    return true;
  }


  return false;
}


  return (
    <div>
      {/* {Stepper} */}
      <div className='flex flex-col justify-center items-center mt-10'>
        <h2 className='text-4xl text-primary font-medium'>Create Course</h2>
        <div className='flex mt-10'>
          {StepperOptions.map((item, index) => (
            <div className='flex items-center'>
              <div className='flex flex-col items-center w-[50px] md:w-[100px]'>
                <div className=
                  {`bg-gray-300 p-3 rounded-full text-white ${activeIndex >= index && 'bg-primary'}`}>
                  {item.icon}
                </div>
                <h2 className='hidden md:block md:text-sm'>{item.name}</h2>
              </div>
              {index != StepperOptions?.length - 1 &&
                <div className= {`h-1 w-[50px] md:w-[100px] rounded-full lg:w-[170px] bg-gray-200 
                ${activeIndex-1 >= index && 'bg-slate-800'}
                `} ></div>}
            </div>
          ))}
        </div>
      </div>
      <div className = 'px-10 md:px-20 lg:px-44 mt-10 '>

        {/* {Components } */}
        {activeIndex == 0? <SelectCategory/>:
        activeIndex ==1? <TopicDescription/> : 
        <SelectOption/>}

      <div className = 'flex items-center justify-between m-10'>
        <Button disable ={activeIndex == 0} varient='outline' onClick={() => setActiveIndex (activeIndex-1)} ><HiArrowLongLeft />Previous</Button>

        {activeIndex<2 && <Button disabled = {checStatus()} onClick = {() => setActiveIndex (activeIndex+1)}>Next <HiArrowLongRight /></Button>}

        {activeIndex ==2 && <Button disabled = {checStatus()}  onClick = {() => GenerateCourseLayout()}>Generate Course Layout <HiMiniBolt /></Button>}
      </div>
      </div>
    </div>
  )
}

export default CreateCourse
