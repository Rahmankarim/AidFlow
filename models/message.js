import mongoose, { Schema } from "mongoose";

const messageSchema = new Schema(
  {
    name: String,
    Lname: String,
    email: String,
    phoneNumber: String,
    subject: String,
    message: String,
  },
  {
    timestamps: true,
  }
);

const Message =
  mongoose.models.Message || mongoose.model("Message", messageSchema);

export default Message;
