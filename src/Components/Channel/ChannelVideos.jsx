import React, { useEffect } from 'react'
import { useSelector } from 'react-redux'
import VideoMenu from '../Video/VideoMenu';

const ChannelVideos = () => {
    const user = useSelector((state) => state.user.channel)
    const loading = useSelector((state) => state.user.loading)
    return (
        <div>
            {loading ? <div className='text-white bg-white h-52 w-52'>Loading...</div> : <VideoMenu userId={user?._id} />}
        </div>
    )
}

export default ChannelVideos