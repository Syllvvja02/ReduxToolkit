import {configureStore} from "@reduxjs/toolkit";
import postsReducer from "../Features/Posts/postSlice"

export const store = configureStore({
    reducer: {
        posts: postsReducer
    }
})