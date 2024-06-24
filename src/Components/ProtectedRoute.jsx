import React, { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import LoginPopup from './LoginPopup';
import { useDispatch, useSelector } from 'react-redux';

const ProtectedRoute = ({children,authentication }) => {

    const navigate = useNavigate();
    const authStatus = useSelector((state) => state.auth.status);
    const userData = useSelector((state) => state.auth.userData);
    console.log("🚀 ~ ProtectedRoute ~ authStatus:", userData)

    useEffect(()=>{
        if(!authentication){
            return
        } 
    },[authStatus,navigate,authentication])
    console.log("🚀 ~ ProtectedRoute ~ authStatus:", authStatus)

    if(authentication && authStatus!==authentication){
        return <LoginPopup/>    
    }
  return (
    children
  )
}

export default ProtectedRoute