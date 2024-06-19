import React, { useEffect } from 'react'
import { Outlet } from 'react-router-dom'
import Channel from './Channel'
import ChannelNavigate from './ChannelNavigate'
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from 'react-redux';
import { getUserChannel } from '../../store/Slices/userSlice';

const ChannelLayout = ({edit}) => {
  const { username } = useParams();

  const dispatch = useDispatch()
  const channel = useSelector((state) => state?.user?.channel)

  useEffect(() => {
    dispatch(getUserChannel(username))
  },[dispatch])
    
  console.log(channel);

  return (
    <>
    <Channel {...channel}/>
    <ChannelNavigate username={username} edit={edit}/>
    <Outlet />
    </>
    
  )
}

export default ChannelLayout