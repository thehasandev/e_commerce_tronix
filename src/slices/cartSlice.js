import { createSlice } from '@reduxjs/toolkit'

export const cartSlice = createSlice({
  name: 'cart',
  initialState: {
    cartItem: [],
  },
  reducers: {
    addtocart: (state,action) => {
       if(state.cartItem.length>1){
          let arr =[]
          state.cartItem.map((item)=>{
            if(item.name == action.payload.name){
                item.quantity++
                arr.push(item.name)
            }
          }   
          )
          if(arr.indexOf(action.payload.name)==-1){
              state.cartItem.push(action.payload)
          }
       }else{
         state.cartItem.push(action.payload)
       }
    },
  },
})

// Action creators are generated for each case reducer function
export const { addtocart } = cartSlice.actions

export default cartSlice.reducer