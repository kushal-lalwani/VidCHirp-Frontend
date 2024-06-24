import React from 'react'
import { Link } from 'react-router-dom'

const LoginPopup = () => {
  return (
      <div className='flex justify-center items-center  bg-opacity-75 top-0 left-0 w-full h-full fixed'>
          <div className='flex border-white border flex-col p-3 max-w-lg sm:w-full text-center rounded text-white '>
              <p className='text-2xl mb-10 font-semibold'>Vidchirp</p>
              <p className='text-lg text-slate-300'>Signup / Login to continue</p>
              <Link className='p-2 border bg-red-800 text-lg font-semibold my-2' to={'/signup'}><button >Signup</button></Link>
              <Link className='p-2 border bg-red-800 text-lg font-semibold ' to={'/login'}><button >Login</button></Link>
          </div>
            
    </div>
  )
}

export default LoginPopup