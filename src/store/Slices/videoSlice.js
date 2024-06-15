import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
    videos: [],
    video: null,
    loading: false,
    error: null,
};

export const getVideoById = createAsyncThunk(
    "video/getVideoById",
    async ({ id }, { rejectWithValue }) => {
        try {
            const response = await axios.get(`http://localhost:8000/api/v1/videos/${id}`);
            return response.data.data;
        } catch (err) {
            return rejectWithValue(err.response?.data?.message || "Failed to fetch video");
        }
    }
);

const videoSlice = createSlice({
    name: "video",
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(getVideoById.pending, (state) => {
                state.loading = true;
                state.error = null;
            })
            .addCase(getVideoById.fulfilled, (state, action) => {
                state.loading = false;
                state.video = action.payload;
            })
            .addCase(getVideoById.rejected, (state, action) => {
                state.loading = false;
                state.error = action.payload;
            });
    },
});

export default videoSlice.reducer;
