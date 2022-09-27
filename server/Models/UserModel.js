import mongoose from 'mongoose';
const User = new mongoose.Schema(
  {
    name: { type: String, required: true },
    email: { type: String, required: true },
    password: { type: String, required: true },
  },
  {
    collection: 'user',
  }
);

 
export default  mongoose.model('user', User);