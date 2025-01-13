import mongoose from "mongoose";

// Middleware for connecting to the database
const connectDB = (handler) => async (req, res) => {
  // Check if already connected
  if (mongoose.connection.readyState) {
    return handler(req, res);
  }

  // Try to connect to the database
  try {
    await mongoose.connect(process.env.MONGODB_CONNECTION_STRING); // No need for additional options
    console.log("Connected to the database");
  } catch (error) {
    console.error("Database connection error:", error);
    return res.status(500).json({ message: "Database connection failed" });
  }

  // Proceed with the request
  return handler(req, res);
};

export default connectDB;
