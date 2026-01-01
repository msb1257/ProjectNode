const mongoose = require("mongoose");

const menuItemSchema = new mongoose.Schema({
  name: String,
  price: Number,
  available: Boolean
});

const restaurantSchema = new mongoose.Schema(
  {
    name: String,
    location: String,
    ownerId: String,
    menu: [menuItemSchema]
  },
  { timestamps: true }
);

module.exports = mongoose.model("Restaurant", restaurantSchema);