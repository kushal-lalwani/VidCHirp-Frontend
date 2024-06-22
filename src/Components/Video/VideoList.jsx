import React from 'react'
import { formatUploadedAgo } from '../../utils/formatUploadedAgo'
import { Link } from 'react-router-dom'


const VideoList = ({ _id, title, thumbnail, duration, ownerDetails, createdAt, views }) => {
    return (

        <div className="flex mx-2 my-2 p-1 bg-[#191919] rounded-2xl">
            <Link to={`/videos/${_id}`}>
                <div className='h-28' >
                    <img src={thumbnail} alt="" className=' rounded-2xl object-cover w-full h-full' />
                </div></Link>
            <div className='flex flex-col'>
                <div className=' ml-1 px-2 w-full flex flex-col text-white'>
                    <Link to={`/videos/${_id}`}><span className='mt-[0.25rem] mb-[-0.15rem] ml-2 text-[1.08rem] font-semibold'>{title}</span></Link>
                    <div className='flex flex-col mt-2'>
                        <span className='ml-2 text-gray-400 cursor-default'>{`${views} views  •  ${formatUploadedAgo(createdAt)}`}</span>
                        <Link to={`/channel/${ownerDetails.username}`}><span className='ml-2 text-gray-400 font-semibold '>{ownerDetails.fullname}</span></Link>
                    </div>
                    
                </div>
            </div>
        </div>
    )
}

export default VideoList