import { createSlice } from "@reduxjs/toolkit";

const initialState = [
    {id: "0", name: "Always Appear"},
    {id: "1", name: "Kawojue Raheem"},
    {id: "2", name: "Mary Anuoluwapo"},
]

const usersSlice = createSlice({
    name: "users",
    initialState,
    reducers: {}
})

export default usersSlice.reducer
export const selectAllUsers = state => state.users