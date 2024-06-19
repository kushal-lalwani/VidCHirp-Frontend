import React, { useEffect } from 'react';
import VideoCard from './VideoCard';
import { useDispatch, useSelector } from 'react-redux';
import { getAllVideos } from '../store/Slices/videoSlice';

const VideoMenu = ({ query, sortBy, sortType, page, limit, userId }) => {
  const dispatch = useDispatch();
  const videos = useSelector((state) => state.video.videos);
  const loading = useSelector((state) => state.video.loading);

  useEffect(() => {
    dispatch(getAllVideos({ query, sortBy, sortType, userId, page, limit }));
  }, [dispatch, query, sortBy, sortType, userId, page, limit]);


  return (
    <div className='flex flex-row flex-wrap m-1 p-1'>
      {loading ? (
        <div className='text-white bg-white text-4xl'>Loading...</div>
      ) : (
        videos.docs.map((video) => (
          <VideoCard key={video._id} {...video} />
        ))
      )}
    </div>
  );
};

export default VideoMenu;
