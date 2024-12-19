const mongoose = require('mongoose');

const GroundActivistSchema = new mongoose.Schema({
  name: { type: String, required: true },
  email: { type: String }, // optional
  mobile: { type: String }, // optional
  university: { type: String, required: true },
  skills: { type: String, required: true },
  profession: { type: String, required: true },
  category: { type: String, default: 'Ground Activist' },
  city: { type: String, required: true },
  age: { type: Number, required: true }
});

module.exports = mongoose.model('GroundActivist', GroundActivistSchema);
