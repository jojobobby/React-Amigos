import { configureStore } from '@reduxjs/toolkit';
import aReducer from './aSlice';

export default configureStore({
    reducer: {
        a:aReducer,
    }
});
