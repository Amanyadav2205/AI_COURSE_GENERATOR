"use client"
import { Chapters, CourseList } from "@/configs/schema";
import { useUser } from "@clerk/nextjs";
import { db } from "@/configs/db";
import React, { useEffect, useState } from "react";
import { and, eq } from "drizzle-orm";
import CourseBasicInfo from "./_components/CourseBasicinfo";
import CourseDetail from "./_components/CourseDetail";
import ChapterList from "./_components/ChapterList";
import { Button } from "@/components/ui/button";
import { useRouter } from 'next/navigation';
import { GenerateChapterContent_AI } from "@/configs/AiModel";
import LoadingDialog from "../_components/LoadingDialog";
import service from "@/configs/service";


function CourseLayout({ params }) {
  const { user } = useUser();
  const [course, setCourse] = useState();
  const [loading, setLoading] = useState(false);
  const router = useRouter();

  useEffect(() => {
    if (params && user) {
      GetCourse();
    }
  }, [params, user]);

  // Fetch Course Data
  const GetCourse = async () => {
    try {
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
    } catch (error) {
      console.error("Error fetching course:", error);
    }
  };

  // Normalize inconsistent field names from AI response
  function normalizeChapterContent(content) {
    return {
      chapterName: content.chapterName || content["Chapter Name"] || "",
      content: (content.content || []).map(item => ({
        title: item.title || item["Title"] || "",
        description: item.description || item["Description"] || "",
        codeExample: item.codeExample || item["Code Example"] || "",
      })),
    };
  }

  // Generate Course Content
  const GenerateChapterContent = async () => {
    if (!course) return;
    
    setLoading(true);
    const chapters = course?.courseOutput?.chapters || course?.courseOutput?.Chapters || [];

    for (const [index, chapter] of chapters.entries()) {
      try {
        // Generate AI Prompt with strict schema enforcement
        const PROMPT = `Explain the concept in detail for:
        - Topic: "${course?.name}" 
        - Chapter: "${chapter?.chapterName}"

        Return the output **ONLY in valid JSON format** with this exact structure:

      {
        "chapterName": "string",
        "content": [
      {
        "title": "string",
        "description": "string",
        "codeExample": "<pre><code>string</code></pre>"
    }
  ]
}

Ensure:
- The response is **strictly in JSON format** (no extra text).
- Field names are in **camelCase** only.
- No extra fields or formatting variations.
`;

        console.log("Prompt Sent to AI:", PROMPT);

        // Fetch Video URL
        const videoResponse = await service.getVideos(`${course?.name}:${chapter.chapterName}`);
        const videoId = videoResponse[0]?.id?.videoId || '';

        // Get AI-generated content
        const rawResponse = await GenerateChapterContent_AI.sendMessage(PROMPT);
        const textResponse = rawResponse?.response?.text ? await rawResponse.response.text() : "{}";

        // Parse JSON Safely
        let content;
        try {
          content = JSON.parse(textResponse);
          content = normalizeChapterContent(content);
        } catch (error) {
          console.error(`Invalid JSON response for chapter ${index}:`, textResponse);
          continue;  // Skip saving this chapter if JSON is invalid
        }

        // Save Chapter Content + Video URL in DB
        await db.insert(Chapters).values({
          chapterId: index,
          courseId: course?.courseId,
          content,
          videoId,
        });

        console.log(`Chapter ${index} content saved successfully.`);
      } catch (error) {
        console.error(`Error processing chapter ${index}:`, error);
      }
    }

    setLoading(false);
    router.replace(`/create-course/${course?.courseId}/finish`);
  };

  return (
    <div className="mt-10 px-5 md:px-16 lg:px-32">
      <h2 className="font-bold text-center text-2xl text-primary">
        Course Layout
      </h2>

      <LoadingDialog loading={loading} />

      {/* Basic Info */}
      <CourseBasicInfo course={course} />

      {/* Course Details */}
      <CourseDetail course={course} />

      {/* List of Lessons */}
      <ChapterList course={course} />

      <Button onClick={GenerateChapterContent} className="my-10">
        Generate Course Content
      </Button>
    </div>
  );
}

export default CourseLayout;



// "use client"
// import { Chapters, CourseList } from "@/configs/schema";
// import { useUser } from "@clerk/nextjs";
// import { db } from "@/configs/db";
// import React, { useEffect, useState } from "react";
// import { and, eq } from "drizzle-orm";
// import CourseBasicInfo from "./_components/CourseBasicinfo";
// import CourseDetail from "./_components/CourseDetail";
// import ChapterList from "./_components/ChapterList";
// import { Button } from "@/components/ui/button";
// import { index } from "drizzle-orm/mysql-core";
// import { GenerateChapterContent_AI } from "@/configs/AiModel";
// import LoadingDialog from "../_components/LoadingDialog";
// import service from "@/configs/service";
// import { Content } from "@radix-ui/react-accordion";
// import { useRouter } from 'next/navigation';


// function CourseLayout({params}) {
//   const { user } = useUser();
//   const [course, setCourse] = useState();
//   const [loading,setLoading] = useState(false );
//   const router=useRouter();
  


//   useEffect(() => {
   
//     params && GetCourse();
  
//   }, [params,user])

//   const GetCourse = async() =>{
//     const result = await db
//           .select()
//           .from(CourseList)
//           .where(
//             and(
//               eq(CourseList.courseId,params?.courseId),
//               eq(CourseList?.createdBy,user?.primaryEmailAddress?.emailAddress)
//             )
//           )
//           setCourse(result[0]);
//           console.log(result);
//   }

//   const GenerateChapterContent = async () => {
//     setLoading(true);
//     const chapters = (course?.courseOutput?.chapters || course?.courseOutput?.Chapters);
  
//     for (const [index, chapter] of chapters.entries()) {
      
//       try {
//         const PROMPT = 'Explain the concept in Detail on Topic: ' 
//                        + course?.name 
//                        + ', Chapter: ' 
//                        + (chapter?.chapterName || Chapters?.ChapterName) 
//                        + ', in JSON Format with list of array with field as title, description in detail, Code Example (HTML Code field in <precode> Format) is applicable';
  
//           console.log(PROMPT);
  
//           // Generate Video URL
//           const videoResponse = await service.getVideos(`${course?.name}:${chapter.chapterName}`);
//           const videoId = videoResponse[0]?.id?.videoId || '';
  
//           // Generate chapter content
//           const rawResponse = await GenerateChapterContent_AI.sendMessage(PROMPT);
//           const textResponse = rawResponse?.response?.text ? await rawResponse.response.text() : null;
//           const content = JSON.parse(textResponse);
  
//           // Save Chapter Content + Video URL
//           await db.insert(Chapters).values({
//             chapterId: index,
//             courseId: course?.courseId,
//             content,
//             videoId,
//           });
  
//           console.log(`Chapter ${index} content saved successfully.`);
//         } catch (error) {
//           console.error(`Error saving chapter ${index}:`, error);
//         }
      
//     }
  
//     // Navigate to the finish page after all chapters are processed
//     setLoading(false);
//     router.replace(`/create-course/${course?.courseId}/finish`);
//   };
  
  
//   return (
//     <div className="mt-10 px-5 md:px-16 lg:px-32">
//         <h2 className="font-bold text-center text-2xl text-primary">
//            Course Layout
//           </h2>

//           <LoadingDialog loading={loading}/>

//           {/* Basic Info */}
//           <CourseBasicInfo course={course} />

//            {/* Course Details */}
//            <CourseDetail course={course} />

//            {/* List of Lessons */}
//          <ChapterList course={course} />

//          <Button onClick = {GenerateChapterContent} className = "my-10">Generate Course Content</Button>

         
//      </div>     
//   )

  
// }
// export default CourseLayout










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



// const GenerateChapterContent=()=>{
//   setLoading(true);
//   const chapters =  course?.courseOutput?.chapters;
//   chapters.forEach(async(chapter,index) =>{
//     const PROMPT= 'Explain the concept in Detail on Topic: '+course?.name+', Chapter: '+chapter.chapterName+', in JSON Format with list of array with field as title, description in detail,Code Example(HTML Code field in <precode> Format) is applicable';
//     console.log(PROMPT)

//     if(index<3)
//     {
//       try {
//         let videoId='';

//         //Generate Video URL
//         service.getVideos(course?.name+':'+chapter.chapterName).then(resp=>{
//           console.log(resp);
//           videoId=resp[0]?.id?.videoId
//          })

//         //generate chapter content 
//         const result = await GenerateChapterContent_AI.sendMessage(PROMPT);
//         console.log(result?.response?.text());
//         const content=JSON.parse(result?.response?.text());

        
         
//         // Save Chapter Content + Video URL
//         await db.insert(Chapters).values({
//           chapterId:index,
//           courseId:course?.courseId,
//           ontent:content,
//           videoId:videoId

//         })
//         setLoading(false)
//       }catch(e)
//       {
//         setLoading(false);
//         console.log(e)
//       }
//       // router.replace('/create-course/'+courseId+"/finish"); 
//     }
//   })}
