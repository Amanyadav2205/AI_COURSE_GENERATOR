"use client"

import { CourseList } from '@/configs/schema'
import { useUser } from '@clerk/nextjs'
import { db } from '@/configs/db';
import React , {useEffect} from 'react'
import {and , eq} from 'drizzle-orm'

function CourseLayout({params}) {
    const {user} = useUser();
    useEffect(() =>{
        params&&GetCourse();
    },[params,user])


    const GetCourse = async () =>{
        const result=await db.select().from(CourseList)
        .where(and(eq(CourseList.courseId,params?.courseId),
        eq(CourseList?.createdBy,user?.primaryEmailAddress?.emailAddress)))

        console.log(result);
    }

  return (
    <div>
      CourseLayout
    </div>
  )
}

export default CourseLayout
