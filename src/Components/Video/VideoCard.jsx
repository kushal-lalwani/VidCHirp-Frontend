import React from 'react'
import { formatUploadedAgo } from '../../utils/formatUploadedAgo';
import { Link } from 'react-router-dom';

const VideoCard = ({_id,title,thumbnail,duration,ownerDetails,createdAt,views }) => {
  return (

    <div className="flex flex-col mx-2 my-2 p-1 w-[31.8%] h-[33%]">
        <Link to={`/videos/${_id}`}>
        <div className='relative h-52' >
          <img src={thumbnail} alt="" className=' rounded-2xl object-cover w-full h-full' />
        </div></Link> 
        <div className='flex'>
          <div className='w-12 mt-2 ml-1 h-12 relative'>
          <Link to={`/channel/${ownerDetails.username}`}><img src={ownerDetails.avatar} alt="" className='object-cover w-full h-full rounded-full' /></Link>
          </div>
          <div className='w-9/12 flex flex-col text-white'>
          <Link to={`/videos/${_id}`}><span className='mt-[0.25rem] mb-[-0.15rem] ml-2 font-semibold'>{title}</span></Link>
          <span className='ml-2 text-gray-400 text-[0.8rem] mb-[-0.2rem] cursor-default'>{`${views} views  •  ${formatUploadedAgo(createdAt)}`}</span>
          <Link to={`/channel/${ownerDetails.username}`}><span className='ml-2 text-gray-400 font-semibold text-[0.85rem]'>{ownerDetails.fullname}</span></Link>
          </div>
        </div>
    </div>
  )
}

export default VideoCard