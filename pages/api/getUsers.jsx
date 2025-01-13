import connectDB from "../middleware/mongoose";
import User from "../../models/User"; // Correct model import
import mongoose from "mongoose";

const handler = async (req, res) => {
  if (req.method !== "GET") {
    return res.status(405).json({ success: false, message: "Method not allowed" });
  }

  try {
    const userRole = req.headers.role; // Role sent in headers
    const userId = req.headers["user-id"]; // User ID sent in headers

    if (!userRole || !userId) {
      return res.status(400).json({ success: false, message: "Missing user role or ID" });
    }

    let query = {};

    // Check user role to determine query
    if (userRole === "0") {
      query = { _id: new mongoose.Types.ObjectId(userId) }; // Fetch only the logged-in user's details
    }

    // Fetch users based on the query
    const users = await User.find(query);

    res.status(200).json({ success: true, data: users });
  } catch (error) {
    console.error("Error fetching users:", error.message);
    res.status(500).json({ success: false, message: "Error fetching users" });
  }
};

export default connectDB(handler);
