const mongoose = require("mongoose");

const cartItemSchema = new mongoose.Schema({
  restaurantId: String,
  itemId: String,
  name: String,
  price: Number,
  quantity: Number
});

const cartSchema = new mongoose.Schema(
  {
    userId: { type: String, required: true },
    items: [cartItemSchema]
  },
  { timestamps: true }
);

module.exports = mongoose.model("Cart", cartSchema);