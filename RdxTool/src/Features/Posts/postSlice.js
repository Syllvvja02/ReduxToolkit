import {createSlice} from "@reduxjs/toolkit";

const initialState = [
    { id: '1', title: 'Learn Redux Toolkit', content: 'It will help you in create app'},
    { id: '2', title: 'Learn React', content: 'It will be good also'}
]

const postSlice = createSlice({
    name: 'posts',
    initialState,
    reducers: {}
})

export const selectAllPosts = (state) => state.posts;

export default postSlice.reducer;