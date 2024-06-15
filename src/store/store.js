import { configureStore } from '@reduxjs/toolkit';
import videoReducer from './Slices/videoSlice';

const store = configureStore({
    reducer: {
        video: videoReducer,
    },
});

export default store;
