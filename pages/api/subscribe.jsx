import connectDB from "../middleware/mongoose";
import Subscriber from "@/models/Subscriber"; // Import Subscriber model

const handler = async (req, res) => {
  if (req.method === "POST") {
    const { email } = req.body;
    console.log("Received email:", email);

    try {
      // Validate email
      if (!email || !email.includes("@")) {
        return res.status(400).json({ error: "Invalid email address" });
      }

      // Check if the email already exists in the database
      const existingSubscriber = await Subscriber.findOne({ email });
      if (existingSubscriber) {
        return res.status(409).json({ error: "Email already subscribed" });
      }

      // Create a new subscriber
      const subscriber = new Subscriber({
        email,
        subscribedAt: new Date(),
      });

      // Save the new subscriber to the database
      await subscriber.save();

      res.status(201).json({ message: "Subscriber added successfully" });
      console.log(subscriber, 'saved');
    } catch (error) {
      console.error("Error adding subscriber:", error); // Log the error details
      res.status(500).json({ error: "Failed to add subscriber", details: error.message });
    }
  } else if (req.method === "GET") {
    try {
      // Fetch all subscribers
      const subscribers = await Subscriber.find({});
      res.status(200).json(subscribers);
      console.log('Subscribers:', subscribers);
    } catch (error) {
      console.error("Error fetching subscribers:", error); // Log the error details
      res.status(500).json({ error: "Failed to fetch subscribers", details: error.message });
    }
  } else {
    res.setHeader("Allow", ["GET", "POST"]);
    res.status(405).end(`Method ${req.method} Not Allowed`);
  }
};

export default connectDB(handler);
