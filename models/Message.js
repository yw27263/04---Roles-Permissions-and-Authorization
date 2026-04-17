import mongoose from "mongoose";

const messageSchema = new mongoose.Schema({
  message: String,
  author: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User"
  }
});

export default mongoose.model("Message", messageSchema);