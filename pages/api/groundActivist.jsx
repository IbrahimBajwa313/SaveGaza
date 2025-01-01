import connectDB from "../middleware/mongoose";
import GroundActivist from "@/models/GroundActivist";

const handler = async (req, res) => {
  if (req.method === "POST") {
    const { name, email, city, phone, profession, institute, age, category } =
      req.body;

    try {
      const groundActivist = new GroundActivist({
        name,
        email,
        city,
        phone,
        profession,
        institute,
        age,
        category,
        createdAt: new Date(),
      });

      await groundActivist.save();
      res
        .status(201)
        .json({ message: "Ground Activist details added successfully" });
    } catch (error) {
      console.error("Error adding Ground Activist:", error);
      res.status(500).json({ error: "Failed to add Ground Activist" });
    }
  } else if (req.method === "GET") {
    try {
      const activists = await GroundActivist.find({});
      res.status(200).json(activists);
    } catch (error) {
      console.error("Error fetching Ground Activists:", error);
      res.status(500).json({ error: "Failed to fetch Ground Activists" });
    }
  } else {
    res.setHeader("Allow", ["GET", "POST"]);
    res.status(405).end(`Method ${req.method} Not Allowed`);
  }
};

export default connectDB(handler);
