import { createSlice } from "@reduxjs/toolkit";

const initialState = [
    {id: 0, name: "Always Appear"},
    {id: 2, name: "Kawojue Raheem"},
    {id: 3, name: "Mary Anuoluwapo"},
]

const usersSlice = createSlice({
    name: "users",
    initialState,
    reducers: {

    }
})

export default usersSlice.reducer
export const selectAllUsers = state => state.users