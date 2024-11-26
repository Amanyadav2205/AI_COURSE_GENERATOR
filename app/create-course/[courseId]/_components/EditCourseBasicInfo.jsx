import React, { useEffect, useState } from "react";
import { HiPencilAlt } from "react-icons/hi";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { CourseList } from "@/configs/schema";
import { Input } from "@/components/ui/input";  // Adjust if needed

import {
  AlertDialog,
  AlertDialogContent,
  AlertDialogOverlay,
  AlertDialogTrigger,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogAction,
  AlertDialogCancel,
} from "@/components/ui/alert-dialog"; // Correct import from alert-dialog file

function EditCourseBasicInfo({ course, refreshData }) {
  const [name, setName] = useState();
  const [description, setDescription] = useState();

  useEffect(() => {
    setName(course?.courseOutput?.course?.name);
    setDescription(course?.courseOutput?.course?.description);
  }, [course]);

  const onUpdateHandler = async () => {
    course.courseOutput.course.name = name;
    course.courseOutput.course.description = description;

    const result = await db
      .update(CourseList)
      .set({
        courseOutput: course?.courseOutput,
      })
      .where(eq(CourseList?.id, course?.id))
      .returning({ id: CourseList.id });

    refreshData(true);
  };

  return (
    <AlertDialog>
      <AlertDialogTrigger>
        <HiPencilAlt /> {/* Button or Icon to trigger dialog */}
      </AlertDialogTrigger>

      <AlertDialogContent>
        <AlertDialogHeader>
          <AlertDialogTitle>Edit Course Title & Description</AlertDialogTitle>
          <AlertDialogDescription>
            <div className="mt-3">
              <label>Course Title</label>
              <Input
                defaultValue={course?.courseOutput?.course?.name}
                onChange={(event) => setName(event.target.value)}
              />
            </div>

            <div className="mt-4">
              <label>Description</label>
              <Textarea
                className="h-40"
                defaultValue={course?.courseOutput?.course?.description}
                onChange={(event) => setDescription(event.target.value)}
              />
            </div>
          </AlertDialogDescription>
        </AlertDialogHeader>

        <AlertDialogFooter>
          <AlertDialogCancel>
            <Button variant="outline">Cancel</Button>
          </AlertDialogCancel>
          <AlertDialogAction onClick={onUpdateHandler}>
            <Button>Update</Button>
          </AlertDialogAction>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  );
}

export default EditCourseBasicInfo;
// import React, { useEffect, useState } from "react";
// import { HiPencilAlt } from "react-icons/hi";
// import { Textarea } from "@/components/ui/textarea";
// import { Button } from "@/components/ui/button";
// import { CourseList } from "@/configs/schema";
// import {
//     AlertDialog,
//     AlertDialogContent,
//     AlertDialogOverlay,
//     AlertDialogTrigger,  // Ensure this is the correct import
//   } from "@/components/ui/alert-dialog";
  

  

// function EditCourseBasicInfo({course,refreshData}){

//     const[name,setName]=useState();
//     const[description,setDescription]=useState();
    
//     useEffect( ()=>{
//         setName(course?.courseOutput?.course?.name);
//         setDescription(course?.courseOutput?.course?.description);

//     },[course])

//     const onUpdateHandler=async()=>{
//         course.courseOutput.course.name=name;
//         course.courseOutput.course.description=description;

//         const result=await db.update(CourseList).set({
//             courseOutput:course?.courseOutput
//         }).where(eq(CourseList?.id,course?.id))
//         .returning({id:CourseList.id});

//         refreshData(true)

//         // console.log(result);
//     }

//     return(
//   <Dialog>
//   <DialogTrigger><HiPencilAlt /></DialogTrigger>
//   <DialogContent>
//     <DialogHeader>
//       <DialogTitle>Edit Course Title & description</DialogTitle>
//       <DialogDescription>
//        <div className="mt-3">
//          <label>Course Title</label>
//          <Input defaultValue={course?.courseOutput?.course?.name} onChange={(event)=>setName(event?.target.value)}/></div>
       
//        <div>
//         <label>Description</label>
//         <Textarea className="h-40" defaultValue={course?.courseOutput?.course?.description}
//         onChange={(event)=>setDescription(event?.target.value)}/>
//        </div>
//       </DialogDescription>
//     </DialogHeader>
//     <DialogFooter>
//         <DialogClose>
//             <Button onClick={onUpdateHandler}>Update</Button>
//         </DialogClose>
//     </DialogFooter>
//   </DialogContent>
// </Dialog>

       
        

// )
// }

// export default EditCourseBasicInfo