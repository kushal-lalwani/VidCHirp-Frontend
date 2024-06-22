import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getAllVideos } from '../../store/Slices/videoSlice'
import VideoList from './VideoList'

const VideoListMenu = () => {
    const dispatch = useDispatch()
    const videos = useSelector((state) => state?.video?.videos)
    const loading = useSelector((state) => state?.video?.loading);

    useEffect(() => {
        dispatch(getAllVideos({}))
    },[dispatch])

    console.log(videos);
  return (
    <div className='flex flex-col'>
        {videos?.docs.map((video) => (
            <div className=''>
                <VideoList {...video}/>
            </div>
        ))}
    </div>
  )
}

export default VideoListMenu