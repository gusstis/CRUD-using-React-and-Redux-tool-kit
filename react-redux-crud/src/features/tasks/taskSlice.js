import { createSlice } from '@reduxjs/toolkit'
export const taskSlice = createSlice ({
    name: 'tasks',
    initialState: [],
    reducers: {

    }
})


export  const tasksReducer = taskSlice.reducer

