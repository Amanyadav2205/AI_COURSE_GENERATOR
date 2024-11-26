import React, { useEffect, useState } from "react";
import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
  } from "@/components/ui/dialog"
import { HiPencilAlt } from "react-icons/hi";
import { Input } from "postcss";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { CourseList } from "@/configs/schema";
  

function EditChapters({course,index}){
      const Chapters=course?.courseOutput?.course?.chapters;
      const [name,setName]=useState([]);
      const [about,setAbout]=useState();


      useEffect(()=>{
       setName(Chapters[index].name) 
       setAbout(Chapters[index].about)
      },[course])
      const onUpdateHandler=async()=>{
        course.courseOutput.course.chapters[index].name=name;
        course.courseOutput.course.chapters[index].about=about;

        const result=await db.update(CourseList).set({
            courseOutput:course?.courseOutput
        }).where(eq(CourseList?.id,course?.id))
        .returning({id:CourseList.id});



        console.log(course);

      }
    return(
        <Dialog>
  <DialogTrigger><HiPencilAlt /></DialogTrigger>
  <DialogContent>
    <DialogHeader>
      <DialogTitle>Edit Chapter </DialogTitle>
      <DialogDescription>
      <div className="mt-3">
         <label>Course Title</label>
         <Input  defaultValue={Chapters[index].name} 
         onChange={(event)=>setName(event?.target.value)}/></div>
       
       <div>
        <label>Description</label>
        <Textarea className="h-40" 
        defaultValue={Chapters[index].about}
        onChange={(event)=>setAbout(event?.target.value)}/>
       </div>
      </DialogDescription>
    </DialogHeader>
    <DialogFooter>
        <DialogClose>
            <Button onClick={onUpdateHandler}>Update</Button>
        </DialogClose>
    </DialogFooter>
  </DialogContent>
</Dialog>

        

)
}

export default EditChapters