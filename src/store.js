import { configureStore } from '@reduxjs/toolkit'
import bradcumb from './slices/bradcumb'
import cartSlice from './slices/cartSlice'

export default configureStore({
  reducer: {
    brade : bradcumb,
    cart  : cartSlice
  },
})