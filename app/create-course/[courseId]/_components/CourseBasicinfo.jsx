import React from "react";
import Image from "next/image";
import { HiOutlinePuzzle } from "react-icons/hi";
import EditCourseBasicInfo from "./EditCourseBasicInfo";

function CourseBasicInfo({ course,refreshData}) {
  return (
    <div className="border p-6 rounded-lg shadow-md mt-6 bg-white">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div>
          <h2 className="font-bold text-3xl text-purple-500">
            {course?.courseOutput?.course?.name}<EditCourseBasicInfo course={course} refreshData={()=>refreshData(true)}/>
          </h2>
          <p className="text-sm text bg-white mt-4">
            {course?.courseOutput?.course?.courseName}
          </p>
          <h2 className="flex items-center gap-2 mt-4 text-purple-600" ><HiOutlinePuzzle/>Health</h2>
          <button className="bg-primary  text-purple-600 py-2 px-6 rounded mt-6">
            Start
          </button>
        </div>
        
        <div>
          <Image
            src={"/place.png"}
            alt="Course Image"
            width={100}
            height={100}
            className="w-full h-[300px] object-cover rounded-lg"
          />
        </div>
      </div>
    </div>
  );
}

export default CourseBasicInfo;

// import React from "react";
// import Image from "next/image";
// import { HiOutlinePuzzle } from "react-icons/hi";

// function CourseBasicInfo({course}){
//     return(
//         <div className='p-10 border rounded-xl shadow-sm mt-5'>
//             <div className='grid grid-cols-1 md:grid-cols-2 gap-5'>
//                 <div>
//                     <h2 className="font-bold text-3xl">{course?.courseOutput?.course?.name}</h2>
//                     <p className="text-sm text-gray-400 mt-3 ">{course?.courseOutput?.course?.description}</p>
//                     <h2 className='font-medium mt-2 flex gap-2 items-center text-primary'>Health</h2>
//                     <button className="w-full mt-5" >Start</button>
//                 </div>
//                 <div>
//                     <Image src={'/place.png'} width={50} height={100}
//                     className='w-full round-xl h-[300px] object-cover'/>
//                 </div>
//             </div>
            
//         </div>
//     )
// }

// export default CourseBasicInfo