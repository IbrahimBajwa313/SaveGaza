import connectDB from "../middleware/mongoose";
import UniversityAmbassador from "@/models/UniversityAmbassador";

const handler = async (req, res) => {
  await connectDB();

  if (req.method === "POST") {
    const {
      name,
      email,
      city,
      phone,
      profession,
      universityName,
      skills,
      contribution,
    } = req.body;

    try {
      const universityAmbassador = new UniversityAmbassador({
        name,
        email,
        city,
        phone,
        profession,
        universityName,
        skills,
        contribution,
        createdAt: new Date(),
      });

      await universityAmbassador.save();
      res
        .status(201)
        .json({ message: "University Ambassador details added successfully" });
    } catch (error) {
      console.error("Error adding University Ambassador:", error);
      res.status(500).json({ error: "Failed to add University Ambassador" });
    }
  } else if (req.method === "GET") {
    try {
      const ambassadors = await UniversityAmbassador.find({});
      res.status(200).json(ambassadors);
    } catch (error) {
      console.error("Error fetching University Ambassadors:", error);
      res.status(500).json({ error: "Failed to fetch University Ambassadors" });
    }
  } else {
    res.setHeader("Allow", ["GET", "POST"]);
    res.status(405).end(`Method ${req.method} Not Allowed`);
  }
};

export default handler;
