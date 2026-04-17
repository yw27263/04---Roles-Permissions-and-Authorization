import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
  name: String,
  role: {
    type: String,
    enum: ['user', 'admin'],
    default:'user'
  }
});

export default mongoose.model("User", userSchema);