import React from 'react'
import YouTube from 'react-youtube'
const opts = {
    height: '390',
    width: '640',
    playerVars: {
      // https://developers.google.com/youtube/player_parameters
      autoplay: 0,
    },
  };

const ChapterContent = ({chapter,content}) => {
  return (
    <div className='p-10'>
      <h2 className='font-medium text-2xl'>{chapter?.chapterName}</h2>
      <p className='text-gray-500'>{chapter?.about}</p>

      {/* {Video} */}
      <div className = 'flex justify-center my-6'>
        <YouTube
        videoId={content?.videoId}
            opts={opts}
        
        />
        </div>

        <div>

            {/* this is generated by chatgpt because video ka copy krne se error aara */}
        {Array.isArray(content?.sections?.title) ? (
          ccontent?.sections?.title.map((item, index) => (
            <div key={index} className="p-5 bg-sky-50 mb-3 rounded-lg">
              <h3 className="font-medium text-lg">{item.title}</h3>
              <p className="text-gray-600">{item.description}</p>

              {item.codeExample&&<div className='p-4 bg-black text-white'>
              <pre>
              <code>{item.codeExample}</code>
              </pre>
              
              </div>}
            </div>
          ))
        ) : (
          <p>No content available.</p>
        )}
      </div>
        
      {/* {Content} */}
    </div>
  )
}

export default ChapterContent
