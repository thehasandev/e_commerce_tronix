import { createSlice } from '@reduxjs/toolkit'

export const bradcumb = createSlice({
  name: 'bradcumb',
  initialState: {
    currentPage: "aa",
    previousPage:""
  },
  reducers: {
    move: (state,action) => {
       state.previousPage = state.currentPage
       state.currentPage = action.payload
    },
   
  
  },
})

// Action creators are generated for each case reducer function
export const { move } = bradcumb.actions

export default bradcumb.reducer