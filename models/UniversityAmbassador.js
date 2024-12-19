const mongoose = require('mongoose');

const UniversityAmbassadorSchema = new mongoose.Schema({
  name: { type: String, required: true },
  email: { type: String }, // optional
  mobile: { type: String }, // optional
  university: { type: String, required: true },
  skills: { type: String, required: true },
  profession: { type: String, required: true },
  category: { type: String, default: 'University Ambassador' },
  city: { type: String, required: true },
  age: { type: Number, required: true }
});

module.exports = mongoose.model('UniversityAmbassador', UniversityAmbassadorSchema);
