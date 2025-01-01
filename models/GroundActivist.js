import mongoose from "mongoose";

const groundActivist = new mongoose.Schema(
  {
    name: { type: String, required: true },
    email: { type: String, required: false },
    city: { type: String, required: true },
    phone: { type: String, required: true },
    profession: { type: String, required: true },
    institute: { type: String, required: true },
    contribution: { type: String, required: false },
    age: { type: Number,      required: true, min: 1,},
    category: { type: String, default: "ground" },
  },
  { timestamps: true }
);

const GroundActivist = mongoose.models.GroundActivist || mongoose.model("GroundActivist", groundActivist);

export default GroundActivist;
