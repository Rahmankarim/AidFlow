import mongoose from "mongoose";

const SignupSchema = new mongoose.Schema({
  Username: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },
});

export default mongoose.models.Signup || mongoose.model("Signup", SignupSchema);
