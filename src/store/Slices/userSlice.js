import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axiosInstance from "../../utils/axiosInstance";
import { BASE_URL } from "../../utils/constants";

const initialState = {
    channel : {},
    loading:true,

}

export const getUserChannel = createAsyncThunk("getUserChannel", async(username) => {
    const channel = await axiosInstance.post(`${BASE_URL}/users/channel/${username}`)
    // console.log(channel);
    return channel.data.data
})


const userSlice = createSlice({
    name:"user",
    initialState,
    reducers:{

    },
    extraReducers:(builder) => {
        builder.addCase(getUserChannel.pending,(state)=>{
            state.loading = true
        })
        builder.addCase(getUserChannel.fulfilled,(state,action)=>{
            state.loading = false
            
            state.channel = action.payload
        })
        
    }
})

export default userSlice.reducer;