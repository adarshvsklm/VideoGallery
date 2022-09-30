import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  url: '',
  modalOpen:false,
  success:true
};
 
export const VideoSlice = createSlice({
  name: 'v/videoUrl',
  initialState,
  reducers: {
    setVideoUrl: (state, action) => {
      console.log(action);
      state.url = action.payload.url || state.url
      state.modalOpen=action.payload.modalOpen ;
    },
  },
});

export const { setVideoUrl } = VideoSlice.actions;
export default VideoSlice.reducer;
