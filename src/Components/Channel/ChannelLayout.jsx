import React, { useEffect } from 'react'
import { Outlet } from 'react-router-dom'
import Channel from './Channel'
import ChannelNavigate from './ChannelNavigate'
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from 'react-redux';
import { getUserChannel } from '../../store/Slices/userSlice';
import { getCurrentUser } from '../../store/Slices/authSlice';

const ChannelLayout = ({edit}) => {
  

  const dispatch = useDispatch()
  const channel = useSelector((state) => state?.user?.channel)
  const user = useSelector((state) => state?.auth?.userData)
  console.log("~ ChannelLayout ~ user:", user)


  useEffect(() => {
    // dispatch(getCurrentUser())
    dispatch(getUserChannel(user?.username))
  },[dispatch,user?.username])
    

  return (
    <>
    <Channel {...channel} edit={edit}/>
    <ChannelNavigate username={user?.username} edit={edit}/>
    <Outlet />
    </>
    
  )
}

export default ChannelLayout