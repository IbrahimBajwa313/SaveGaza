import connectDB from "../middleware/mongoose";
import bcrypt from 'bcrypt';
import User from '../../models/User'; // Correct model import


const handler = async (req, res) => {
  if (req.method === "POST") {
    const { userName, password } = req.body; 

    try {
      // Check if the user exists
      const user = await User.findOne({username: userName});
      if (!user) { 
        return res.status(401).json({
          success: false,
          message: "Invalid username",
          errorType: "invalidUsername", // Specify the error type
        });
      }

      // Verify the password
      const isPasswordValid = await bcrypt.compare(password, user.password);
      if (!isPasswordValid) {
        console.log('wrong password')
        return res.status(401).json({
          success: false,
          message: "Invalid password",
          errorType: "invalidPassword", // Specify the error type
        });
      }

      // If the username and password are correct
      // Successful login
    res.status(200).json({
      success: true,
      message: "Login successful",
      data: {
        username: user.username,
        role: user.role, // User's role
        userId: user._id, // User's unique identifier
      },
    });
    } catch (error) {
      console.error("Error during login:", error.message);
      res.status(500).json({ success: false, message: "Error during login" });
    }
  } else {
    res.status(405).json({ success: false, message: "Method not allowed" });
  }
};

export default connectDB(handler);

