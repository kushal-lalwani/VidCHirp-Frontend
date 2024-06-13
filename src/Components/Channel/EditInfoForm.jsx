import { useForm } from "react-hook-form";
import React from 'react'

const EditInfoForm = () => {
    const { register, handleSubmit, watch, formState: { errors } } = useForm()

    const onSubmit = (data) => console.log(data)
    return (
        <form onSubmit={handleSubmit(onSubmit)} className="text-white">
            <div className="border rounded-lg rounded-b-none mt-6 mr-6 px-6 py-4 w-full">
                <div className="flex w-full justify-between items-start">
                    <div className="flex flex-col w-6/12 mx-2">
                        <label htmlFor="first-name">First name</label>
                        <input
                            id="first-name"
                            {...register("firstName", { required: "First name is required" })}
                            className="outline-none border border-slate-700 w-full px-3 py-1.5 bg-[#202020]"
                        />
                        {errors.firstName && (
                            <span className="text-sm text-red-500 mt-1">
                                {errors.firstName.message}
                            </span>
                        )}
                    </div>
                    <div className="flex flex-col w-6/12 mx-2">
                        <label htmlFor="last-name">Last name</label>
                        <input
                            id="last-name"
                            {...register("lastName", { required: "Last name is required" })}
                            className="outline-none border border-slate-700 w-full px-3 py-1.5 bg-[#202020]"
                        />
                        {errors.lastName && (
                            <span className="text-sm text-red-500 mt-1">
                                {errors.lastName.message}
                            </span>
                        )}
                    </div>
                </div>
                <div>
                    <div className="flex flex-col m-2">
                        <label htmlFor="email">Email address</label>
                        <input
                            id="email"
                            type="email"
                            {...register("email", { required: "Email is required" })}
                            className="outline-none border border-slate-700 px-3 py-1.5 bg-[#202020]"
                        />
                        {errors.email && (
                            <span className="text-sm text-red-500 mt-1">
                                {errors.email.message}
                            </span>
                        )}
                    </div>
                </div>
            </div>
            <div className="flex justify-end border border-t-0 rounded-t-none rounded-lg">
                <input
                    type="button"
                    value="Cancel"
                    onClick={() => window.location.reload()}
                    className="border px-4 py-2 mx-3 my-2 rounded-lg"
                />
                <input
                    type="submit"
                    value="Save"
                    className="border px-5 py-2 mx-3 my-2 mr-8 bg-red-800 rounded-lg"
                />
            </div>
        </form>
    )
}

export default EditInfoForm
