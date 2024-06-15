import React, { useState } from 'react';
import { useForm } from "react-hook-form";
import { Link } from 'react-router-dom';
import { FiCamera, FiUploadCloud } from "react-icons/fi";

const Signup = () => {
    const {
        handleSubmit,
        register,
        formState: { errors },
    } = useForm();

    const [avatarPreview, setAvatarPreview] = useState(null);
    const [coverImagePreview, setCoverImagePreview] = useState(null);

    const onSubmit = data => {
        console.log(data);
    };

    const handleAvatarChange = (e) => {
        const file = e.target.files[0];
        if (file) {
            const reader = new FileReader();
            reader.onloadend = () => {
                setAvatarPreview(reader.result);
            };
            reader.readAsDataURL(file);
        }
    };

    const handleCoverImageChange = (e) => {
        const file = e.target.files[0];
        if (file) {
            const reader = new FileReader();
            reader.onloadend = () => {
                setCoverImagePreview(reader.result);
            };
            reader.readAsDataURL(file);
        }
    };

    return (
        <div className='h-screen w-full bg-[#161616] flex justify-center items-center'>
            <div className='flex flex-col border border-gray-700 p-4 w-5/12 text-gray-200'>
                <form onSubmit={handleSubmit(onSubmit)}>
                    <div className='border mx-3 bg-gray-800 relative h-36 mt-3'>
                        {coverImagePreview ? (
                            <img src={coverImagePreview} alt="Cover Preview" className='w-full h-full object-cover' />
                        ) : (
                            <FiUploadCloud size={40} className='left-1/2 bottom-1/3 absolute' />
                        )}
                        <input
                            type="file"
                            accept="image/*"
                            className="hidden"
                            id="coverImage"
                            {...register("coverImage")}
                            onChange={handleCoverImageChange}
                        />
                        <label htmlFor="coverImage" className="absolute inset-0 cursor-pointer"></label>
                        <div className='rounded-full border bottom-0 m-3 my-6 absolute w-24 h-24 flex items-center justify-center'>
                            {avatarPreview ? (
                                <img src={avatarPreview} alt="Avatar Preview" className='rounded-full w-full h-full object-cover' />
                            ) : (
                                <FiCamera size={20} />
                            )}
                            <input
                                type="file"
                                accept="image/*"
                                className="hidden"
                                id="avatar"
                                {...register("avatar")}
                                onChange={handleAvatarChange}
                            />
                            <label htmlFor="avatar" className="absolute inset-0 cursor-pointer"></label>
                        </div>
                        <span className='absolute bottom-0 right-0'>Cover Image</span>
                    </div>
                    <div className='m-3 flex flex-col'>
                        <label htmlFor="fullname" className='text-lg font-semibold'>Full Name:</label>
                        <input type="text" id='fullname' className='p-1 bg-[#212121]' {...register("fullname", {
                            required: "Full name is required",
                        })} />
                        {errors.fullname && <p className="text-red-500">{errors.fullname.message}</p>}
                    </div>
                    <div className='m-3 flex flex-col'>
                        <label htmlFor="username" className='text-lg font-semibold'>Username:</label>
                        <input type="text" id='username' className='p-1 bg-[#212121]' {...register("username", {
                            required: "Username is required",
                        })} />
                        {errors.username && <p className="text-red-500">{errors.username.message}</p>}
                    </div>
                    <div className='m-3 flex flex-col'>
                        <label htmlFor="email" className='text-lg font-semibold'>Email:</label>
                        <input type="email" id='email' className='p-1 bg-[#212121]' {...register("email", {
                            required: "Email is required",
                        })} />
                        {errors.email && <p className="text-red-500">{errors.email.message}</p>}
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
                    <p className='m-3'>Already have an account?<Link
                        to={"/login"}
                        className="text-red-800 ml-3 cursor-pointer hover:opacity-70"
                    >
                        Login
                    </Link></p>
                </form>
            </div>
        </div>
    )
}

export default Signup;
