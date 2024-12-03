// "use client"
// import { useUser } from "@clerk/nextjs";
// import { useRouter } from 'next/router';
// import { db } from "@/configs/db";
// import { CourseList } from "@/configs/schema";
// import { eq } from "drizzle-orm";

// import React, { useEffect,useState } from "react";
// import CourseBasicInfo from '../_components/CourseBasicinfo';

// function FinishScreen(params) {
//     return (
//   const { user } = useUser();
//   const [course, setCourse] = useState();
//   const router=useRouter();
//    useEffect(() => {
   
//     params && GetCourse();
  
//   }, [params,user])

//   const GetCourse = async() =>{
//     const result = await db
//           .select()
//           .from(CourseList)
//           .where(
//             and(
//               eq(CourseList.courseId, params?.courseId),
//               eq(CourseList?.createdBy,user?.primaryEmailAddress?.emailAddress)
//             )
//           )
//           setCourse(result[0]);
//           console.log(result);
//   }    

// <div className='px-10 md:px-20 lg;px-44 my-7'>
//     <CourseBasicInfo course={course} refreshData={()=>console.log()}/>
//         </div>
//     )
// }

// export default Finish