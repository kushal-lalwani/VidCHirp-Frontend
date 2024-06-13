import { useForm } from "react-hook-form";
import React from 'react';

const UpdatePasswordForm = () => {
    const { register, handleSubmit, watch, formState: { errors } } = useForm();

    const onSubmit = (data) => console.log(data);

    return (
        <form onSubmit={handleSubmit(onSubmit)} className="text-white">
            <div className="border rounded-lg rounded-b-none mt-6 mr-6 px-6 py-4 w-full">
                <div className="flex flex-col m-2">
                    <label htmlFor="current" className="m-1">Current Password</label>
                    <input
                        id="current"
                        type="password"
                        {...register("currentPassword", { required: "Current password is required" })}
                        className="outline-none border border-slate-700 px-3 py-1.5 bg-[#202020]"
                    />
                    {errors.currentPassword && (
                        <span className="text-sm text-red-500 mt-1">
                            {errors.currentPassword.message}
                        </span>
                    )}

                    <label htmlFor="new" className="m-1 mt-4">New Password</label>
                    <input
                        id="new"
                        type="password"
                        {...register("newPassword", { required: "New password is required" })}
                        className="outline-none border border-slate-700 px-3 py-1.5 bg-[#202020]"
                    />
                    {errors.newPassword && (
                        <span className="text-sm text-red-500 mt-1">
                            {errors.newPassword.message}
                        </span>
                    )}

                    <label htmlFor="confirm" className="m-1 mt-4">Confirm Password</label>
                    <input
                        id="confirm"
                        type="password"
                        {...register("confirmPassword", { required: "Confirmation password is required" })}
                        className="outline-none border border-slate-700 px-3 py-1.5 bg-[#202020]"
                    />
                    {errors.confirmPassword && (
                        <span className="text-sm text-red-500 mt-1">
                            {errors.confirmPassword.message}
                        </span>
                    )}
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
    );
};

export default UpdatePasswordForm;
