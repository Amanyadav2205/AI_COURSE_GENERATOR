"use client";

import { CourseList } from "@/configs/schema";
import { useUser } from "@clerk/nextjs";
import { db } from "@/configs/db";
import React, { useEffect, useState } from "react";
import { and, eq } from "drizzle-orm";
import CourseBasicInfo from "./_components/CourseBasicinfo";
import CourseDetail from "./_components/CourseDetail";
import ChapterList from "./_components/ChapterList";


function CourseLayout({ params }) {
  const { user } = useUser();
  const [course, setCourse] = useState(null);

  useEffect(() => {
    if (params) GetCourse();
  }, [params, user]);

  const GetCourse = async () => {
    const result = await db
      .select()
      .from(CourseList)
      .where(
        and(
          eq(CourseList.courseId, params?.courseId),
          eq(CourseList?.createdBy, user?.primaryEmailAddress?.emailAddress)
        )
      );
    setCourse(result[0]);
  };

  return (
    <div className="mt-10 px-5 md:px-16 lg:px-32">
      <h2 className="font-bold text-center text-2xl text-purple-500">
        Course Layout
      </h2>
      {/* Basic Info */}
      <CourseBasicInfo course={course} />

      {/* Course Details */}
      <CourseDetail course={course} />

      {/* List of Lessons */}
      <ChapterList course={course} />
    </div>
  );
}

export default CourseLayout;

// "use client"

// import { CourseList } from '@/configs/schema'
// import { useUser } from '@clerk/nextjs'
// import { db } from '@/configs/db';
// import React , {useEffect, useState} from 'react'
// import {and , eq} from 'drizzle-orm'
// import CourseBasicInfo from './_components/CourseBasicinfo';
// import CourseDetail from './_components/CourseDetail';
// import ChapterList from './_components/ChapterList';




// function CourseLayout({params}) {
//     const {user} = useUser();
//     const [course, setCourse] = useState([]);
//     useEffect(() =>{
//         params && GetCourse();
//     }, [params,user])


//     const GetCourse = async () =>{
      
//         const result=await db.select().from(CourseList)
//         .where(and(eq(CourseList.courseId,params?.courseId),
//         eq(CourseList?.createdBy,user?.primaryEmailAddress?.emailAddress)))
//         setCourse(result[0]);
//         console.log(result);
//     }

//   return (
//     <div className='mt-10 px-7 md:px-20 lg:px-44'>
//       <h2 className='font-bold text-center text-2xl'>Course Layout</h2>

//       {/* Basic Info */}
//          <CourseBasicInfo course={course} />

//       {/* Course Details */}
//         <CourseDetail course={course}/>
//       {/* List of lessons */}
//        <ChapterList course={course}/>

//     </div>
//   )
// }

// export default CourseLayout

