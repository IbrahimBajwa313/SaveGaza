import connectDB from "../middleware/mongoose";
import SocialMediaActivist from "@/models/SocialMediaActivist";

const handler = async (req, res) => {
  await connectDB();
  if (req.method === "POST") {
    const {
      name,
      email,
      phone,
      city,
      platforms,
      skills,
      thoughts,
      pledge,
      otherPledge,
      otherSkill,
    } = req.body;

    try {
      const socialMediaActivist = new SocialMediaActivist({
        name,
        email,
        phone,
        city,
        platforms,
        skills,
        thoughts,
        pledge,
        otherPledge,
        otherSkill,
        createdAt: new Date(),
      });

      await socialMediaActivist.save();
      res
        .status(201)
        .json({ message: "Social Media Activist details added successfully" });
    } catch (error) {
      console.error("Error adding Social Media Activist:", error);
      res.status(500).json({ error: "Failed to add Social Media Activist" });
    }
  } else if (req.method === "GET") {
    try {
      const activists = await SocialMediaActivist.find({});
      res.status(200).json(activists);
    } catch (error) {
      console.error("Error fetching Social Media Activists:", error);
      res.status(500).json({ error: "Failed to fetch Social Media Activists" });
    }
  } else {
    res.setHeader("Allow", ["GET", "POST"]);
    res.status(405).end(`Method ${req.method} Not Allowed`);
  }
};

export default handler;
