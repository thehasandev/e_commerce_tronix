import { createSlice } from '@reduxjs/toolkit'

export const bradcumb = createSlice({
  name: 'bradcumb',
  initialState: {
    value: 0,
  },
  reducers: {
    currentPage: (state,action) => {
       console.log();
    },
   
  
  },
})

// Action creators are generated for each case reducer function
export const { currentPage } = bradcumb.actions

export default bradcumb.reducer