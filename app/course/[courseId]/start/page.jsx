"use client";

import { Chapters, CourseList } from "@/configs/schema";
import React, { useEffect, useState } from "react";
import { db } from "@/configs/db";
import { eq, and } from "drizzle-orm";
import ChapterListCard from "./_component/ChapterListCard";
import ChapterContent from "./_component/ChapterContent";

function CourseStart({ params }) {
  const [course, setCourse] = useState(null);
  const [selectedChapter, setSelectedChapter] = useState(null);
  const [chapterContent, setChapterContent] = useState(null);

  useEffect(() => {
    if (params?.courseId) {
      GetCourse();
    }
  }, [params]);

  useEffect(() => {
    if (course?.courseId) {
      GetSelectedChapterContent(course?.courseOutput?.chapters?.[0]?.chapterId);
    }
  }, [course]);

  // Fetch course details
  const GetCourse = async () => {
    try {
      const result = await db
        .select()
        .from(CourseList)
        .where(eq(CourseList.courseId, params.courseId));

      setCourse(result[0]);
    } catch (error) {
      console.error("Error fetching course:", error);
    }
  };

  // Fetch chapter content
  const GetSelectedChapterContent = async (chapterId) => {
    if (!chapterId) return;

    try {
      const result = await db
        .select()
        .from(Chapters)
        .where(and(eq(Chapters.chapterId, chapterId), eq(Chapters.courseId, course?.courseId)));

      setChapterContent(result[0] || {});
    } catch (error) {
      console.error("Error fetching chapter content:", error);
    }
  };

  return (
    <div className="flex">
      {/* LEFT Section (Sidebar) */}
      <div className="md:w-64 h-screen bg-blue-400 fixed">
        <h2 className="bg-black p-5 m-2 text-lg font-bold text-white justify-center items-center rounded-md">
          {course?.courseOutput?.courseName || "Course Name"}
        </h2>

        {/* Display Chapters */}
        {course?.courseOutput?.chapters?.map((chapter) => (
          <div 
            key={chapter.chapterId}
            className="cursor-pointer hover:bg-blue-200 flex items-center p-2"
            onClick={() => {
              setSelectedChapter(chapter);
              GetSelectedChapterContent(chapter.chapterId);
            }}
          >
            <span className="mr-2">📘</span> {/* Replacing Serial Numbers with an Icon */}
            <ChapterListCard chapter={chapter} />
          </div>
        ))}
      </div>

      {/* RIGHT Section (Main Content) */}
      <div className="md:ml-72">
        <ChapterContent chapter={selectedChapter} content={chapterContent} />
      </div>
    </div>
  );
}

export default CourseStart;
