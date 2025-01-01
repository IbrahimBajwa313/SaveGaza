import connectDB from "../middleware/mongoose";
import User from "../../models/User";
import bcrypt from "bcrypt";
import fs from "fs";
import path from "path";

const handler = async (req, res) => {
  if (req.method === "POST") {
    try {
      // Parse the form data (assuming it's sent as `FormData`)
      const { username, password, role } = req.body;

      // Validate required fields
      if ( !username || !password || !role) {
        return res
          .status(400)
          .json({ success: false, message: "All fields are required" });
      }

      // Check if a user with the same username already exists
      const existingUser = await User.findOne({ username });
      if (existingUser) {
        return res
          .status(400)
          .json({ success: false, message: "Username already taken" });
      }

      // Hash the password
      const hashedPassword = await bcrypt.hash(password, 10);

      // Create a new user document
      const newUser = new User({ username, password: hashedPassword, role, });

      // Save the user document to the database
      await newUser.save();

      res.status(201).json({ success: true, message: "User added successfully" });
    } catch (error) {
      console.error("Error adding user:", error.message);
      res
        .status(500)
        .json({ success: false, message: "Internal server error" });
    }
  } else {
    res.status(405).json({ success: false, message: "Method not allowed" });
  }
};

export default connectDB(handler);
