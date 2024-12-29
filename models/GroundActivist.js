import mongoose from "mongoose";

const GroundActivistSchema = new mongoose.Schema(
  {
    name: { 
      type: String, 
      required: [true, "Name is required"], // Add custom validation message
      trim: true // Removes unnecessary whitespace
    },
    email: { 
      type: String, 
      required: false, 
      trim: true,
      validate: {
        validator: function (v) {
          return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(v); // Regex for email validation
        },
        message: "Invalid email format"
      }
    },
    city: { 
      type: String, 
      required: [true, "City is required"], 
      trim: true 
    },
    phone: { 
      type: String, 
      required: [true, "Phone number is required"], 
      trim: true,
      validate: {
        validator: function (v) {
          return /^\d{10,15}$/.test(v); // Accepts 10-15 digit phone numbers
        },
        message: "Phone number must be between 10 and 15 digits"
      }
    },
    profession: { 
      type: String, 
      required: [true, "Profession is required"], 
      trim: true 
    },
    institute: { 
      type: String, 
      required: [true, "Institute is required"], 
      trim: true 
    },
    contribution: { 
      type: String, 
      required: false, 
      trim: true 
    },
    age: { 
      type: Number, 
      required: [true, "Age is required"], 
      min: [1, "Age must be at least 1 year"] 
    },
    category: { 
      type: String, 
      default: "ground", 
      enum: ["ground", "online"], // Optional: restrict category values
      trim: true 
    },
  },
  { timestamps: true } // Automatically manage createdAt and updatedAt
);

const GroundActivist = mongoose.models.GroundActivist || mongoose.model("GroundActivist", GroundActivistSchema);

export default GroundActivist;
