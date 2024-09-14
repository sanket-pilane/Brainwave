import mongoose from "mongoose";

const connectionString = "mongodb://localhost:27017/brainwave";
const connectDB = async () => {
  try {
    await mongoose.connect(connectionString);
    console.log("MongoDB connected successfully");
  } catch (error) {
    console.error("MongoDB connection error:", error);
    process.exit(1);
  }
};

export default connectDB;
