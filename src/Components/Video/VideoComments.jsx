import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { getVideoComments } from '../../store/Slices/commentSlice';
import { useForm } from 'react-hook-form';
import { Link } from 'react-router-dom';
import { formatUploadedAgo } from '../../utils/formatUploadedAgo';

const VideoComments = (videoId) => {
  console.log(videoId);
  const { register, handleSubmit, formState: { errors } } = useForm();

  const dispatch = useDispatch()
  const comments = useSelector((state) => state?.comment?.comments)

  const addComment = (data) => {
    console.log(data)
  }


  useEffect(() => {
    dispatch(getVideoComments(videoId))
  }, [dispatch])
  console.log(comments, "comments");

  return (
   
    <div className='flex flex-col px-3 border border-gray-400'>
      <div className='min-h-28  text-white '>
        <p className='text-lg font-semibold px-2 my-3'>{`${comments?.docs.length} comments`}</p>
        <form onSubmit={handleSubmit(addComment)}>
          <input type="text" name="content" id="content" {...register("content", { required: "Content is required" })} className='p-2 w-full bg-transparent border-gray-200 border rounded-xl ' placeholder='Add Comment'/>
          {errors.content && <p className="text-red-500">{errors.content.message}</p>}
        </form>
      </div>
      <div className=' w-full'>
        {comments?.docs?.map((comment) => (
          <div className='flex min-h-28 border-t border-gray-500 p-2 px-3 items-center'>
            <div className='w-12 mt-2 ml-1 h-12 relative'>
              <Link to={`/channel/${comment?.owner?.username}`}><img src={comment?.owner?.avatar} alt="" className='object-cover w-full h-full rounded-full' /></Link>
            </div>
            <div className=' flex flex-col w-11/12 ml-2.5 text-white'>
              <div><span className='mt-[0.25rem] mb-[-0.15rem] ml-2 font-semibold '>{comment?.content}</span></div>
              <span className='ml-2 text-gray-400 text-[0.8rem] mb-[-0.2rem] cursor-default'>{`${formatUploadedAgo(comment?.createdAt)}`}</span>
              <Link to={`/channel/${comment?.owner?.username}`}><span className='ml-2 text-gray-400 font-semibold text-[0.85rem]'>{comment?.owner?.fullname}</span></Link>
            </div>
          </div>

        ))}
      </div>
    </div>
  )
}

export default VideoComments