import React from 'react'
import EditInfoForm from './EditInfoForm'
import UpdatePasswordForm from './UpdatePasswordForm'

const UpdatePassword = () => {
    return (
        <div className='flex w-full border-gray-700 border-t justify-around gap-16'>
            <div className='p-2 my-5 w-2/6 text-slate-200 text-lg'>
                <h1 className='m-1 text-xl underline-offset-4 underline font-bold'>Password</h1>
                <h2 className='m-1 text-lg text-slate-400'>Update your Password.</h2>
            </div>
            <div className='w-3/6'>
                <UpdatePasswordForm />
            </div>
        </div>
    )
}

export default UpdatePassword