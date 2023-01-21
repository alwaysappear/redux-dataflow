import { sub } from 'date-fns'
import { createSlice, nanoid } from "@reduxjs/toolkit";

const initialState = [
    {
        id: '1',
        title: "Learning Redux Toolkit",
        content: "I have been enjoying it.",
        date: sub(new Date(), {
            minutes: 10
        }).toISOString(),
        reactions: {
            wow: 0,
            heart: 0,
            letgo: 0,
            coffe: 0,
            thumbsUp: 0,
        }
    }
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
                        date: new Date().toISOString(),
                        reactions: {
                            wow: 0,
                            heart: 0,
                            letgo: 0,
                            coffe: 0,
                            thumbsUp: 0,
                        }
                    }
                }
            }
        }
    }
})

export default postsSlice.reducer
export const { addPost } = postsSlice.actions
export const selectAllPosts = state => state.posts
