import mongoose from "mongoose";

let isconnected = false;

const connectMongoDB = async () => {
  if (isconnected) return;
  try {
    const db = await mongoose.connect(process.env.MONGODB_URI, {});
    isconnected = db.connections[0].readyState === 1;
    console.log("Connected to MongoDB.");
  } catch (error) {
    console.error("Error connecting to MongoDB:", error);
    throw new Error("Failed to connect to MongoDB");
  }
};

export default connectMongoDB;
