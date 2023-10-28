import { configureStore } from '@reduxjs/toolkit'
import bradcumb from './slices/bradcumb'

export default configureStore({
  reducer: {
    brade : bradcumb
  },
})