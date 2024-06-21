import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { BASE_URL } from "../../utils/constants";
import axiosInstance from "../../utils/axiosInstance";

const initialState = {
    comments: {
        docs:[]
    },
    loading: true,
    totalComments:null
}

export const getVideoComments = createAsyncThunk("getVideoComments", async ({ videoId, limit, page }) => {
    try {
        const url = new URL(`${BASE_URL}/comments/${videoId}`);
        if (limit) url.searchParams.set("limit", limit);
        if (page) url.searchParams.set("page", page);

        const comments = await axiosInstance.get(url)
        // console.log(comments?.data?.data);
        return comments?.data?.data

    } catch (error) {
        throw error
    }

})


export const createComment = createAsyncThunk("createComments", async ({ videoId, content }) => {
    try {

        const response = await axiosInstance.post(`${BASE_URL}/comments/${videoId}`,{content})
        return response.data.data

    } catch (error) {
        throw new error
    }
})

const commentSlice = createSlice({
    name: "comment",
    initialState,
    reducers: {},
    extraReducers:(builder)=>{
        builder.addCase(createComment.fulfilled, ( state , action ) => {
            state.comments.unshift(action.payload);
            state.totalComments++;
        })
        builder.addCase(getVideoComments.pending,(state) => {
            state.loading = true
        })
        builder.addCase(getVideoComments.fulfilled, (state,action) => {
            state.loading = false
            state.comments.docs = action.payload.docs
        })
        }
    }
)


export default commentSlice.reducer;