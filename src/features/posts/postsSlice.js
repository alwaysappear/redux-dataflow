import {sub} from 'date-fns'
import { createSlice, nanoid } from "@reduxjs/toolkit";

const initialState = [
    { id: '1', title: "Learning Redux Toolkit",
    content: "I have been enjoying it.",
    date: sub(new Date(), {
        minutes: 10
    }).toISOString()},
    { id: '2', title: "Learning Frontend",
    content: "I have not encountered literally anything hard since I have been learning.",
    date: sub(new Date(), {
        minutes: 5
    }).toISOString()}
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
                        userId,
                        date: new Date().toISOString()
                    }
                }
            }
        }
    }
})

export default postsSlice.reducer
export const { addPost } = postsSlice.actions
export const selectAllPosts = state => state.posts
