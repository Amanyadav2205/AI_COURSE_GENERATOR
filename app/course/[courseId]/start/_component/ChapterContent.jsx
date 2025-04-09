"use client";
import ReactMarkdown from "react-markdown";
import React from "react";
import YouTube from "react-youtube";
import { Chapters } from "@/configs/schema";

const opts = {
  height: "390",
  width: "640",
  playerVars: {
    autoplay: 0,
  },
};

const ChapterContent = ({ chapter }) => {
  console.log("Received chapter:", chapter); // Debugging
  
  if (!chapter) {
    return <p>Loading...</p>;
  }
  const content = Array.isArray(chapter?.content) ? chapter.content : [];

  

  return (
    <div className="p-6 max-w-screen-lg">
      <h2 className="font-bold text-2xl">{chapter?.chapterName || "Untitled Chapter"}</h2>

      {Chapters?.videoId && (
        <div className="flex justify-center my-6 border-2 border-gray-400 p-2 rounded-sm">
          <YouTube videoId={Chapters.videoId} opts={opts} />
        </div>
      )}

{/* Here is the problem 
So the problem is that I cannot access the content and hence whenever I tried to access the title the description and stuff like that the content which is inside the content, I failed to do so, and we cannot see anything in the frontend */}

<div className="mt-6">
{content.length > 0 ? (
  content.map((item, index) => (
    <div key={index} className="p-5 bg-sky-100 mb-3 rounded-lg">
      <h3 className="font-medium text-lg">{item?.title || "Untitled Section"}</h3>
      <p className="mt-2 text-gray-700 whitespace-pre-line">{item?.description || "No description available."}</p>
      {item?.codeExample && item.codeExample.trim() !== "<pre><code></code></pre>" && (
        <div className="p-4 bg-black text-white mt-4 rounded-md overflow-x-auto">
          <div dangerouslySetInnerHTML={{ __html: item.codeExample }} />
        </div>
      )}
    </div>
  ))
) : (
  <p className="text-gray-500">No content sections available for this chapter.</p>
)}

</div>

    </div>
  );
};

export default ChapterContent;
