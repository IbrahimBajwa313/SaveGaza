import upload from "../middleware/multer";
import nodemailer from "nodemailer";
import connectDB from "../middleware/mongoose";
import Subscriber from "@/models/Subscriber"; // Ensure the Subscriber model is set up correctly

// Disable body parsing for file uploads
export const config = {
  api: {
    bodyParser: false,
  },
};

async function handler(req, res) {
  console.log('req', req.body)
  if (req.method === "POST") {
    // Handle file upload using Multer
    upload.single("file")(req, res, async (err) => {
      if (err) {
        console.error("Multer error:", err);
        return res.status(500).json({ error: "File upload failed", details: err.message });
      }

      // Check if a file was uploaded
      if (!req.file) {
        return res.status(400).json({ error: "No file uploaded" });
      }

      const uploadedFileName = req.file.filename;
      const uploadedFilePath = req.file.path;
      console.log("Uploaded File:", uploadedFileName);

      try {
        // Fetch all subscribers from the database
        const subscribers = await Subscriber.find({});
        if (!subscribers.length) {
          return res.status(404).json({ error: "No subscribers found" });
        }

        console.log('subscibers', subscribers)

        const subscriberEmails = subscribers.map((subscriber) => subscriber.email);

        // Set up nodemailer transporter
        const transporter = nodemailer.createTransport({
          service: "gmail", // You can change the service if using another provider
          auth: {
            user: process.env.EMAIL_USERNAME, // Email account
            pass: process.env.EMAIL_PASSWORD, // App-specific password or email password
          },
        });

        // Configure the email
        const mailOptions = {
          from: process.env.EMAIL_USERNAME,
          to: subscriberEmails,
          subject: req.body.subj,
          text: req.body.desc,
          attachments: [
            {
              filename: req.file.originalname,
              path: uploadedFilePath, // Use the uploaded file's path
            },
          ],
        };

        // Send the email
        await transporter.sendMail(mailOptions);

        // Respond with success
        res.status(200).json({
          message: "File uploaded and emailed successfully",
          file: {
            originalName: req.file.originalname,
            fileName: req.file.filename,
            path: req.file.path,
          },
        });

        console.log('emailed')
      } catch (emailError) {
        console.error("Error emailing subscribers:", emailError);
        res.status(500).json({ error: "Failed to send email", details: emailError.message });
      }
    });
  } else {
    // Handle unsupported HTTP methods
    res.setHeader("Allow", ["POST"]);
    res.status(405).json({ error: `Method ${req.method} not allowed` });
  }
}

export default connectDB(handler); // Ensure the database is connected
