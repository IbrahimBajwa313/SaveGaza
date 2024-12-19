import dbConnect from "../../utils/dbConnect";
import GroundActivist from "../../models/GroundActivist";
import UniversityAmbassador from "../../models/UniversityAmbassador";
import SocialMediaActivist from "../../models/SocialMediaActivist";

dbConnect();

export default async function handler(req, res) {
  const { method } = req;

  switch (method) {
    case "POST":
      try {
        const { category, ...data } = req.body;

        if (!category) {
          return res
            .status(400)
            .json({ success: false, error: "Category is required" });
        }

        let activist;
        if (category === "ground") {
          activist = await GroundActivist.create(data);
        } else if (category === "university") {
          activist = await UniversityAmbassador.create(data);
        } else if (category === "social") {
          activist = await SocialMediaActivist.create(data);
        } else {
          return res
            .status(400)
            .json({ success: false, error: "Invalid category" });
        }

        res.status(201).json({ success: true, data: activist });
      } catch (error) {
        res.status(400).json({ success: false, error: error.message });
      }
      break;

    case "GET":
      try {
        const { category } = req.query;

        if (!category) {
          return res
            .status(400)
            .json({ success: false, error: "Category is required" });
        }

        let activists;
        if (category === "ground") {
          activists = await GroundActivist.find();
        } else if (category === "university") {
          activists = await UniversityAmbassador.find();
        } else if (category === "social") {
          activists = await SocialMediaActivist.find();
        } else {
          return res
            .status(400)
            .json({ success: false, error: "Invalid category" });
        }

        res.status(200).json({ success: true, data: activists });
      } catch (error) {
        res.status(500).json({ success: false, error: error.message });
      }
      break;

    default:
      res.setHeader("Allow", ["GET", "POST"]);
      res.status(405).end(`Method ${method} Not Allowed`);
  }
}
