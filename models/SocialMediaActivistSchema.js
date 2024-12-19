const mongoose = require('mongoose');

const SocialMediaActivistSchema = new mongoose.Schema({
  name: { type: String, required: true },
  email: { type: String }, // optional
  mobile: { type: String }, // optional
  university: { type: String, required: true },
  skills: { type: String, required: true },
  profession: { type: String, required: true },
  category: { type: String, default: 'Social Media Activist' },
  city: { type: String, required: true },
  age: { type: Number, required: true }
});

module.exports = mongoose.model('SocialMediaActivist', SocialMediaActivistSchema);
