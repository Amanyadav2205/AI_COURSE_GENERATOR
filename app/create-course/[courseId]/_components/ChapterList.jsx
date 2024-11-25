import { index } from 'drizzle-orm/mysql-core';
import React from 'react';

function ChapterList({course}){
    return (
        <div className='mt-3'>
            <h2>Chapters</h2>
            <div className='mt-2'>
                {course?.courseOutput?.course?.chapters.map((chapter,index=0)=>(
                    <div>
                        <h2>{index+1}</h2>
                    </div>

                ))}
            </div>
        </div>
    )
}

export default ChapterList

// import { index } from "drizzle-orm/mysql-core";
// import React from "react";
// import { HiClock,HiOutlineBadgeCheck } from "react-icons/hi";

// function ChapterList({course}){
//     return(
//         <div className="mt-2">
//             <h2>Chapters</h2>
//             <div className="mt-2">
//                 {course?.courseOutput?.course?.chapters.map((chapter,index)=>(
//                     <div className="flex gap-2 items-center"> 
//                     <div className="flex gap-5 items-center">
//                         <h2 className='bg-purple-500 flex-none h-10 w-10 text-white rounded-full text-center p-2'>{index+1}</h2>
//                         <div>
//                             <h2 className='text-medium text-lg'> {chapters?.name}</h2>
//                             <p className='text-sm text-purple-500'>{chapters?.about}</p>
//                             <p className="flex gap-2 text-primary items-center "><HiClock />{chapters?.duration}</p>

//                         </div>


//                     </div>
//                     <HiOutlineBadgeCheck className="text-4xl text-gray-300 flex-none" />
//                     </div>


//                 ))}
//             </div>

//         </div>

// )
// }

// export default ChapterList