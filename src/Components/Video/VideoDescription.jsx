import React from 'react'
import { formatUploadedAgo } from '../../utils/formatUploadedAgo'
import { GoThumbsup } from 'react-icons/go'
import { CgAddR } from 'react-icons/cg'


const VideoDescription = ({ title, createdAt, views, likesCount, owner, description }) => {
    console.log(owner);
    return (
        <div className=''>
            <div className='flex justify-between gap-4 px-2'>
                <div className='my-4 mx-1.5 w-6/12'>
                    <p className='text-white text-2xl font-semibold'>{title}</p>
                    <p className='text-gray-300'>{`${views} views  •  ${formatUploadedAgo(createdAt)}`}</p>
                </div>
                <div className='flex text-white w-6/12 justify-end'>
                    <div className='w-6/12 flex my-4 mr-2'>
                        <div className='w-6/12 border-gray-600 rounded-xl rounded-r-none flex items-center gap-4 h-3/4 border'><button className='ml-4'><GoThumbsup size={25} /></button>{likesCount}</div>
                        <div className='w-6/12 border-gray-600 bg-gray-300 text-black rounded-xl rounded-l-none flex items-center gap-4 h-3/4 border'><button className='ml-4 text-black'><CgAddR size={25} /></button>Save</div>
                    </div>
                </div>
            </div>
            <div className='border rounded-xl border-gray-700 bg-[#202020] hover:bg-[#232323] py-2 flex flex-col justify-between h-32 px-2'>
                <div className='flex h-3/4 justify-between'>
                    <div className='flex gap-4'>
                        <img src={owner?.avatar} className='rounded-full w-16 h-16' alt="" />
                        <div>
                            <p className='text-xl text-white'>{owner?.fullname}</p>
                            <p className='text-gray-400'>{owner?.subscriberCount} subscribers</p>
                        </div>
                    </div>
                    <div>
                        {owner?.isSubscribed ? <button className=" mr-2 border-2 border-red-600 px-6 py-3 bg-red-600 rounded-3xl text-white">Subscribed</button> : <button className="border-2 border-red-600 mr-2 px-6 py-3 rounded-3xl text-white">Subscribe</button>}
                    </div>

                </div>
                <hr className='border-gray-500' />
                <div className='px-3.5 mt-2'>
                    <p className=' text-white'>{description}</p>
                </div>
            </div>
        </div>
    )
}

export default VideoDescription