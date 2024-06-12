import React from 'react'
import { FaVideoSlash } from "react-icons/fa";

const NoVideos = () => {
  return (
    <div className='flex flex-col h-screen items-center justify-center  text-white'>
        <FaVideoSlash size={40}/>
      <p className='text-xl'>There are no videos available.</p>
      <p className='text-xl'>Please try to search something else.</p>
    </div>
  )
}

export default NoVideos
