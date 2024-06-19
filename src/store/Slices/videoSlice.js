import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import { BASE_URL } from "../../utils/constants";
import axiosInstance from "../../utils/axiosInstance";


const initialState = {
    videos: {
        docs:[]
    },
    video: null,
    loading: true,
};

export const getVideoById = createAsyncThunk(
    "getVideoById",
    async ({ id }) => {
        try {
            const response = await axiosInstance.get(`/videos/${id}`);
            return response.data.data;
        } catch (err) {
            console.log(err);
        }
    }
);

export const getAllVideos = createAsyncThunk("getAllVideos", async ({ query, sortBy, sortType, userId, page, limit }) => {
    try {
        const url = new URL(`${BASE_URL}/videos`)
        if (query) url.searchParams.set("query", query);
        if (userId) url.searchParams.set("userId", userId);
        if (page) url.searchParams.set("page", page);
        if (limit) url.searchParams.set("limit", limit);
        if (sortBy && sortType) {
            url.searchParams.set("sortBy", sortBy);
            url.searchParams.set("sortType", sortType);
        }

        const response = await axiosInstance.get(url);
        // console.log(response.data);
        return response?.data.data

    } catch (error) {
        console.log(error);
    }
})


const videoSlice = createSlice({
    name: "video",
    initialState,
    reducers: {
       
    },
    extraReducers: (builder) => {
        builder.addCase(getVideoById.pending, (state) => {
            state.loading = true;
            state.error = null;
        })
        builder.addCase(getVideoById.fulfilled, (state, action) => {
            state.loading = false;
            state.video = action.payload;
        })
        builder.addCase(getVideoById.rejected, (state) => {
            state.loading = false;
        });
        builder.addCase(getAllVideos.pending,(state) => {
            state.loading= true
            state.videos = { docs: [] }; 
        })
        builder.addCase(getAllVideos.fulfilled, (state, action) => {
            state.loading = false;
            state.videos.docs = action.payload.docs;
        })
    },
});

export default videoSlice.reducer; 
