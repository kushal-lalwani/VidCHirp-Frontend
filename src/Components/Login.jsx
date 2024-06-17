import React from 'react'
import { useForm } from 'react-hook-form'
import { useDispatch, useSelector } from 'react-redux'
import { loginUser } from '../store/Slices/authSlice'
import { Link, useNavigate } from 'react-router-dom'


const Login = () => {
    const { register, handleSubmit, formState: { errors } } = useForm()
    const dispatch = useDispatch()
    const user = useSelector((state) => state?.auth?.userData)
    const loading = useSelector((state) => state?.auth?.login)
    const navigate = useNavigate()

    const onSubmit = async(data) => {
        console.log(data);
        const loggedin = await dispatch(loginUser(data))
        if(loggedin?.payload){
            console.log(loggedin?.payload);
            navigate('/')
        }
    }

    return (
        <div className='h-screen w-full bg-[#161616] flex justify-center items-center'>
            <div className='flex flex-col border border-gray-700 p-4 w-5/12 text-gray-200'>
                <form onSubmit={handleSubmit(onSubmit)}>
                    
                    <div className='m-3 flex flex-col'>
                        <label htmlFor="username" className='text-lg font-semibold'>Username:</label>
                        <input type="text" id='username' className='p-1 bg-[#212121]' {...register("username", {
                            required: "Username is required",
                        })} />
                        {errors.username && <p className="text-red-500">{errors.username.message}</p>}
                    </div>
                    <div className='m-3 flex flex-col'>
                        <label htmlFor="password" className='text-lg font-semibold'>Password:</label>
                        <input type="password" id='password' className='p-1 bg-[#212121]' {...register("password", {
                            required: "Password is required",
                        })} />
                        {errors.password && <p className="text-red-500">{errors.password.message}</p>}
                    </div>
                    <div className='m-3 flex flex-col'>
                        <button type="submit" className='text-xl font-semibold p-3 hover:bg-red-800 bg-[#212121] mt-4'>Submit</button>
                    </div>
                    <p className='m-3'>New to VidChirp?<Link
                        to={"/login"}
                        className="text-red-800 ml-3 cursor-pointer hover:opacity-70"
                    >
                        Register
                    </Link></p>
                </form>
            </div>
        </div>
    )
}

export default Login