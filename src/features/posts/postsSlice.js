import { createSlice, nanoid } from "@reduxjs/toolkit";

const initialState = [
    { id: '1', title: "Learning Redux Toolkit",
    content: "I have been enjoying it." },
    { id: '2', title: "Learning Frontend",
    content: "I have not encountered literally anything hard since I have been learning." }
]

const postsSlice = createSlice({
    name: "posts",
    initialState,
    reducers: {
        addPost: {
            reducer(state, action) {
                state.push(action.payload)
            },
            prepare(title, content, userId) {
                return {
                    payload: {
                        id: nanoid(),
                        title,
                        content,
                        userId
                    }
                }
            }
        }
    }
})

export default postsSlice.reducer
export const { addPost } = postsSlice.actions
export const selectAllPosts = state => state.posts