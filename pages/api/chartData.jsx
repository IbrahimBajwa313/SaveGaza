import connectDB from "../middleware/mongoose";
import ChartData from "../../models/ChartData";

const handler = async (req, res) => {
  if (req.method === "GET") {
    try {
      const chartData = await ChartData.find({});
      res.status(200).json(chartData);
    } catch (error) {
      console.error("Error fetching chart data:", error);
      res.status(500).json({ error: "Failed to fetch chart data" });
    }
  } else if (req.method === "PUT") {
    const { id } = req.query; // Get ID from the query
    const updateFields = req.body; // Accept dynamic updates

    try {
      const updatedChartData = await ChartData.findByIdAndUpdate(
        id,
        { ...updateFields, updatedAt: Date.now() }, // Update fields dynamically
        { new: true } // Return the updated document
      );

      if (!updatedChartData) {
        return res.status(404).json({ error: "Chart data not found" });
      }

      res.status(200).json({ message: "Chart data updated successfully", data: updatedChartData });
    } catch (error) {
      console.error("Error updating chart data:", error);
      res.status(500).json({ error: "Failed to update chart data" });
    }
  } else {
    res.setHeader("Allow", ["GET", "PUT"]);
    res.status(405).end(`Method ${req.method} Not Allowed`);
  }
};

export default connectDB(handler);
