import { configureStore } from "@reduxjs/toolkit";
import btnReducer from './btnSlice'

export const store = configureStore({
    reducer: {
        button:btnReducer,
    }
})