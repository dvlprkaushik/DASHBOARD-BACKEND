import mongoose from "mongoose";

const connectDB = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URI, {
      dbName: "HealthManagement",
    });
    console.log("✅ MongoDB Connected (Admin Panel)");
  } catch (error) {
    console.error("❌ Database Connection Error:", error);
    process.exit(1);
  }
};

export default connectDB;
