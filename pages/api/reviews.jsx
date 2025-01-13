import connectDB from "../middleware/mongoose";
import Review from "@/models/Review";  

const handler = async (req, res) => {
  if (req.method === "POST") {
    const { name, email, testimonial } = req.body;

    try {
      const review = new Review({
        name,
        email,
        testimonial,
        createdAt: new Date(),
      });

      await review.save();
      res.status(201).json({ message: "Review added successfully" });
    } catch (error) {
      console.error("Error adding review:", error); // Log the error
      res.status(500).json({ error: "Failed to add review" });
    }
  } else if (req.method === "GET") {
    
    try {
      const reviews = await Review.find({});
      // console.log("Reviews from DB:", reviews); // Log the fetched reviews
      res.status(200).json(reviews); // Send the reviews as the response
    } catch (error) {
      console.error("Error fetching reviews:", error); // Log the error
      res.status(500).json({ error: "Failed to fetch reviews" });
    }
  } else {
    res.setHeader("Allow", ["GET", "POST"]);
    res.status(405).end(`Method ${req.method} Not Allowed`);
  }
};

export default connectDB(handler);
