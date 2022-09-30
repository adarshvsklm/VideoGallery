import {configureStore} from '@reduxjs/toolkit'
import VideoSlice from './Video/VideoSlice'
// import VideoSlice from './Video/VideoSlice'
  
export const store = configureStore({
    reducer:{
        videoUrl:VideoSlice
    }
})