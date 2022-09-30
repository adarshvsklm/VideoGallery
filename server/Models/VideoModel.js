import mongoose from 'mongoose';
const Video = new mongoose.Schema(
  {
    title: { type: String, required: true },
    videoUrl:{type: String, required: true},
    userId :{type: String, required: true},
  },
  {
    collection: 'video',
  }
);

 
export default  mongoose.model('video', Video);