import React from 'react'

const ChapterListCard = ({chapter,index}) => {
  return (
    <div className = ' grid grid-cols-5 p-3 border-b'>
      <div>
        <h2 className ='p-2 bg-black text-white rounded-full w-5 h-5 text-center border-b'></h2>
      </div>

      <div className ='col-span-4'>
        <h2 className='font-small'></h2>
             {chapter?.chapterName}
        <h2 className='text-sm text-primary'>{chapter?.duration}</h2>
      </div>
    </div>
  )
}

export default ChapterListCard
