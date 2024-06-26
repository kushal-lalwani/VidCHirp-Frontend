import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axiosInstance from "../../utils/axiosInstance";

const initialState = {
    status:false,
    loading:false,
    userData: null
}

export const registerUser = createAsyncThunk("register", async (data) => {
    console.log(data);
    const formData = new FormData();
    formData.append("avatar", data.avatar[0]);
    formData.append("username", data.username);
    formData.append("email", data.email);
    formData.append("password", data.password);
    formData.append("fullname", data.fullName);
    if (data.coverImage) {
        formData.append("coverImage", data.coverImage[0]);
    }

    try {
        const registered = await axiosInstance.post('/users/register',formData)
        console.log(registered);
        return registered.data
    } catch (error) {
        console.log(error);
    }
})

export const loginUser = createAsyncThunk("login", async(data) => {
    try {
        const loggedIn = await axiosInstance.post('/users/login',data)
        return loggedIn.data
    
    } catch (error) {
        console.log(error);
    }
})

export const getCurrentUser = createAsyncThunk("getCurrentUser", async () => {
    const response = await axiosInstance.get("/users/user");
    return response.data.data;
});

const authSlice = createSlice({
    name: "auth",
    initialState,
    reducers: {
        
    },
    extraReducers: (builder) => {
        builder.addCase(registerUser.pending , (state) => {
            state.loading = true
        })
        builder.addCase(registerUser.fulfilled,(state) => {
            state.loading = false
        })
        builder.addCase(loginUser.pending, (state) => {
            state.loading = true
        })
        builder.addCase(loginUser.fulfilled,(state,action)=>{
            state.userData = action.payload
            state.status = true
            state.loading = false
        })
        builder.addCase(getCurrentUser.pending, (state) => {
            state.loading = true;
        });
        builder.addCase(getCurrentUser.fulfilled, (state, action) => {
            state.loading = false;
            state.status = true;
            state.userData = action.payload;
        });
        builder.addCase(getCurrentUser.rejected, (state) => {
            state.loading = false;
            state.status = false;
            state.userData = null;
        });
    }
    }
)

export default authSlice.reducer;