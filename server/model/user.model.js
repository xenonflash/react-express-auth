import mongoose from 'mongoose'

const UserSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  password: {
    type: String,
    required: true
  },
  email: {
    type: String,
  },
  createDate:{
    type: Date,
    default: Date.now()
  }
})
export default mongoose.model('users', UserSchema)