"use client"
import { CourseList } from "@/configs/schema";
import { useUser } from "@clerk/nextjs";
import { db } from "@/configs/db";
import React, { useEffect, useState } from "react";
import { and, eq } from "drizzle-orm";
import CourseBasicInfo from "./_components/CourseBasicinfo";
import CourseDetail from "./_components/CourseDetail";
import ChapterList from "./_components/ChapterList";
import { Button } from "@/components/ui/button";
import { index } from "drizzle-orm/mysql-core";
import { GenerateChapterContent_AI } from "@/configs/AiModel";
import LoadingDialog from "../_components/LoadingDialog";
import service from "@/configs/service";
import { Content } from "@radix-ui/react-accordion";
import { useRouter } from 'next/router';


function CourseLayout({params}) {
  const { user } = useUser();
  const [course, setCourse] = useState();
  const [loading,setLoading] = useState(false );
  //const router=useRouter();
  


  useEffect(() => {
   
    params && GetCourse();
  
  }, [params,user])

  const GetCourse = async() =>{
    const result = await db
          .select()
          .from(CourseList)
          .where(
            and(
              eq(CourseList.courseId, params?.courseId),
              eq(CourseList?.createdBy,user?.primaryEmailAddress?.emailAddress)
            )
          )
          setCourse(result[0]);
          console.log(result);
  }

  const GenerateChapterContent=()=>{
    setLoading(true);
    const chapters =  course?.courseOutput?.chapters;
    chapters.forEach(async(chapter,index) =>{
      const PROMPT= 'Explain the concept in Detail on Topic: '+course?.name+', Chapter: '+chapter.chapterName+', in JSON Format with list of array with field as title, description in detail,Code Example(HTML Code field in <precode> Format) is applicable';
      console.log(PROMPT)

      if(index<3)
      {
        try {
          //let videoId='';

          //Generate Video URL
          //service.getVideos(course?.name+':'+chapter.chapterName).then(resp=>{
            //console.log(resp);
            //videoId=resp[0]?.id?.videoId
           //})

          //generate chapter content 
          //const result = await GenerateChapterContent_AI.sendMessage(PROMPT);
          //console.log(result?.response?.text());
          //const content=JSON.parse(result?.response?.text());

          /
           
          // Save Chapter Content + Video URL
          //await db.insert(chapters).values({
            //chapterId:index,
            //courseId:course?.courseId,
            //Content:content,
            //videoId:videoId

          //})
          setLoading(false)
        }catch(e)
        {
          setLoading(false);
          console.log(e)
        }
        //router.replace('/create-course/'+course?.courseId+"/finish");
      }
    })
  }
  return (
    <div className="mt-10 px-5 md:px-16 lg:px-32">
        <h2 className="font-bold text-center text-2xl text-primary">
           Course Layout
          </h2>

          <LoadingDialog loading={loading}/>

          {/* Basic Info */}
          <CourseBasicInfo course={course} />

           {/* Course Details */}
           <CourseDetail course={course} />

           {/* List of Lessons */}
         <ChapterList course={course} />

         <Button onClick = {GenerateChapterContent} className = "my-10"> Generate Course Content</Button>
     </div>     
  )

  
}
export default CourseLayout










// "use client";

// import { CourseList } from "@/configs/schema";
// import { useUser } from "@clerk/nextjs";
// import { db } from "@/configs/db";
// import React, { useEffect, useState } from "react";
// import { and, eq } from "drizzle-orm";
// import CourseBasicInfo from "./_components/CourseBasicinfo";
// import CourseDetail from "./_components/CourseDetail";
// import ChapterList from "./_components/ChapterList";


// function CourseLayout({ params }) {
//   const { user } = useUser();
//   const [course, setCourse] = useState(null);
  

//   useEffect(() => {
//     params && GetCourse();
//   }, [params, user]);

//   const GetCourse = async () => {
//     const result = await db
//       .select()
//       .from(CourseList)
//       .where(
//         and(
//           eq(CourseList.courseId, params?.courseId),
//           eq(CourseList?.createdBy, user?.primaryEmailAddress?.emailAddress)
//         )
//       );
//     setCourse(result[0]);
//     console.log(result);
//   };

//   return (
//     <div className="mt-10 px-5 md:px-16 lg:px-32">
//       <h2 className="font-bold text-center text-2xl text-primary">
//         Course Layout
//       </h2>

//       {/* Basic Info */}
//       <CourseBasicInfo course={course} refreshData={()=>GetCourse()} />

//       {/* Course Details */}
//       <CourseDetail course={course} />

//       {/* List of Lessons */}
//       <ChapterList course={course} />
//     </div>
//   );
// }

// export default CourseLayout;
