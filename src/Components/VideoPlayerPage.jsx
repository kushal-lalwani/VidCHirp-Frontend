import Video from './Video';
import { useDispatch, useSelector } from 'react-redux';
import { getVideoById } from "../store/Slices/videoSlice";
import React, { useEffect } from 'react'
import { useParams } from 'react-router-dom';
import Navbar from './Header/Navbar';
import VideoDescription from './VideoDescription';


const VideoPlayerPage = () => {
    const dispatch = useDispatch();
    const {id} = useParams();
    const video = useSelector((state) => state.video?.video);

    useEffect(() => {
        if (id) {
            dispatch(getVideoById({ id }));
        }
    }, [dispatch, id]);  // dispatch in dependency array just to make sure all dependencies are present 
    console.log(video);

  return (
    <div className='bg-[#151515] min-h-screen flex flex-col '>
      <div>
        <Navbar />
        <div className="flex ml-5 my-2 flex-grow ">
          <div className='w-3/5 '>
            <Video src={video?.videoFile}
              poster={video?.thumbnail} />
            <VideoDescription {...video} />
          </div>
          <div className='w-2/5  '>
        
          </div>
        </div>
      </div>
    </div>
  )
}

export default VideoPlayerPage