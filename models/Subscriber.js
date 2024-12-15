import mongoose from "mongoose";

const SubscriberSchema = new mongoose.Schema({
  email: {
    type: String,
    required: true,
    unique: true,
    validate: {
      validator: function (email) {
        // Basic email validation regex
        return /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/.test(email);
      },
      message: "Invalid email address",
    },
  },
  subscribedAt: {
    type: Date,
    default: Date.now,
  },
});

export default mongoose.models.Subscriber || mongoose.model("Subscriber", SubscriberSchema);
