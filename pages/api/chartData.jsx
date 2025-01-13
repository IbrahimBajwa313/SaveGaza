// api/chartData.jsx
import connectDB from "../middleware/mongoose";
import ChartData from "../../models/ChartData";

const handler = async (req, res) => {
  if (req.method === "POST") {
    // This part can be removed if you don't want to allow adding new entries
    res.setHeader("Allow", ["GET", "PUT", "DELETE"]);
    return res.status(405).end(`Method ${req.method} Not Allowed`);
  } else if (req.method === "GET") {
    try {
      const chartData = await ChartData.find({});
      res.status(200).json(chartData);
    } catch (error) {
      console.error("Error fetching chart data:", error);
      res.status(500).json({ error: "Failed to fetch chart data" });
    }
  } else if (req.method === "PUT") {
    const { id } = req.query; // Get ID from query string
    const { total } = req.body;

    try {
      const updatedChartData = await ChartData.findByIdAndUpdate(
        id,
        { total },
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
  } else if (req.method === "DELETE") {
    const { id } = req.query; // Get ID from query string

    try {
      const deletedChartData = await ChartData.findByIdAndDelete(id);

      if (!deletedChartData) {
        return res.status(404).json({ error: "Chart data not found" });
      }

      res.status(200).json({ message: "Chart data deleted successfully" });
    } catch (error) {
      console.error("Error deleting chart data:", error);
      res.status(500).json({ error: "Failed to delete chart data" });
    }
  } else {
    res.setHeader("Allow", ["GET", "PUT", "DELETE"]);
    res.status(405).end(`Method ${req.method} Not Allowed`);
  }
};

export default connectDB(handler);