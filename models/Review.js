import mongoose from "mongoose";

const reviewSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  testimonial: {
    type: String,
    required: true,
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

const Review = mongoose.models.Review || mongoose.model("Review", reviewSchema);
export default Review;
