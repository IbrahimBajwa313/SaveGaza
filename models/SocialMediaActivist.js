const mongoose = require("mongoose");

const socialMediaActivistSchema = new mongoose.Schema(
  {
    name: { type: String, required: true },
    email: { type: String, required: false },
    phone: { type: String, required: true },
    city: { type: String, required: true },
    platforms: { type: [String], required: true },
    skills: { type: [String], required: true },
    thoughts: { type: String, required: true },
    pledge: { type: String, required: true },
    otherPledge: { type: String, required: false },
    otherSkill: { type: String, required: false },
  },
  { timestamps: true }
);

const SocialMediaActivist = mongoose.models.SocialMediaActivist ||mongoose.model( "SocialMediaActivist", socialMediaActivistSchema );

module.exports = SocialMediaActivist;
