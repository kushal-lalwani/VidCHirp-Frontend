import { configureStore } from '@reduxjs/toolkit';
import videoReducer from './Slices/videoSlice';
import authReducer from './Slices/authSlice';
import userReducer from './Slices/userSlice';
import commentSlice from './Slices/commentSlice';

const store = configureStore({
    reducer: {
        video: videoReducer,
        auth: authReducer,
        user: userReducer,
        comment: commentSlice
    },
});

export default store;
