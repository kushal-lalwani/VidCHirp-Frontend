import React, { useEffect } from 'react'
import VideoCard from './VideoCard'
import { useDispatch, useSelector } from 'react-redux'
import { getAllVideos } from '../store/Slices/videoSlice'

const VideoMenu = () => {

  const dispatch = useDispatch()
  const videos = useSelector((state) => state?.video?.videos)

  useEffect(() => {
    dispatch(getAllVideos({}))

  },[dispatch])

  return (
    <div className='flex flex-row flex-wrap m-1 p-1 '>
      {videos.docs.map((video) => (
        <VideoCard {...video} />
      ))}
    </div>
  )
}

export default VideoMenu