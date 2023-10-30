import { createSlice } from '@reduxjs/toolkit'

export const cartSlice = createSlice({
  name: 'cart',
  initialState: {
    cartItem: [],
  },
  reducers: {
    addtocart: (state,action) => {
       if(state.cartItem.length>0){
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

    increment: (state,action) => {
         state.cartItem.map((item)=>{
           if(item.name==action.payload.name){
             item.quantity++
           }
         })
    },
    decrement: (state,action) => {
         state.cartItem.map((item,index)=>{
           if(item.name==action.payload.name){
              if(item.quantity>1){
                item.quantity--
              }else{
                state.cartItem.splice(index,1)
              }
           }
         })
    },
    removeCart: (state,action) => {
         state.cartItem.map((item,index)=>{
           if(item.name==action.payload.name){
              state.cartItem.splice(index,1)
           }
         })
    },
  },
})

// Action creators are generated for each case reducer function
export const { addtocart ,increment,decrement,removeCart} = cartSlice.actions

export default cartSlice.reducer