const mongoose = require("mongoose");

const addressSchema = new mongoose.Schema({
  street: String,
  city: String,
  pincode: String
});

const userProfileSchema = new mongoose.Schema(
  {
    userId: { type: String, required: true },
    name: String,
    email: String,
    addresses: [addressSchema]
  },
  { timestamps: true }
);

module.exports = mongoose.model("UserProfile", userProfileSchema);