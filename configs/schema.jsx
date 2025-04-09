import { json, pgTable, serial, varchar, integer } from "drizzle-orm/pg-core";

export const CourseList = pgTable("courseList", {
  id: serial("id").primaryKey(),
  courseId: varchar("courseId").notNull(),
  name: varchar("name").notNull(),
  category: varchar("category").notNull(),
  level: varchar("level").notNull(),
  includeVideo: varchar("includeVideo").notNull().default("Yes"),
  courseOutput: json("courseOutput").notNull(), // Ensure AI output is consistently formatted
  createdBy: varchar("createdBy"),
  userName: varchar("username"),
  userProfileImage: varchar("userProfileImage"),
});

export const Chapters = pgTable("chapters", {
  id: serial("id").primaryKey(),
  courseId: varchar("courseId").notNull(),
  chapterId: integer("chapterId").notNull(), // Make sure you convert it from string if needed
  content: json("content").notNull(), // AI output should be validated before inserting
  videoId: varchar("videoId"),
});