import { createSlice } from "@reduxjs/toolkit";

const initialState = [
    { id: 1, title: "Learning Redux Toolkit", content: "I have been enjoying it." },
    { id: 2, title: "Learning Frontend", content: "I have not encountered literally anything hard since I have been learning." }
]

const postsSlice = createSlice({
    name: "posts",
    initialState,
    reducers: {
        addPost: (state, action) => {
            state.push(action.payload)
        }
    }
})

export const selectAllPosts = state => state.posts

export default postsSlice.reducer
