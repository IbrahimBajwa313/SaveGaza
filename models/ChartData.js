import mongoose from "mongoose";

const ChartDataSchema = new mongoose.Schema({
  PalestiniansKilled: { type: Number, required: true },
  ChildrenKilled: { type: Number, required: true },
  PalestiniansInjured: { type: Number, required: true },
  MissingPersons: { type: Number, required: true },
  PeopleDisplaced: { type: Number, required: true },
  HousingUnitsDestroyed: { type: Number, required: true },
  RefugeesNeedingFoodAssistance: { type: Number, required: true },
  createdAt: { type: Date, default: Date.now }, // Timestamp for creation
  updatedAt: { type: Date, default: Date.now }, // Timestamp for updates
}, { collection: "chartData" }); // Consistent collection name

module.exports = mongoose.models.ChartData || mongoose.model("ChartData", ChartDataSchema);
