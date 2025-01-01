const mongoose = require("mongoose");

const universityAmbassadorSchema = new mongoose.Schema(
  {
    name: { type: String, required: true },
    email: { type: String, required: false },
    city: { type: String, required: true },
    phone: { type: String, required: true },
    profession: { type: String, required: false },
    universityName: { type: String, required: true },
    skills: { type: String, required: true },
    contribution: { type: String, required: false },
  },
  { timestamps: true }
);

const UniversityAmbassador = mongoose.models.UniversityAmbassador || mongoose.model(
  "UniversityAmbassador",
  universityAmbassadorSchema
);

module.exports = UniversityAmbassador;
