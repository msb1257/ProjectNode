const mongoose = require("mongoose");

const orderItemSchema = new mongoose.Schema({
  restaurantId: String,
  itemId: String,
  name: String,
  price: Number,
  quantity: Number
});

const orderSchema = new mongoose.Schema(
  {
    userId: String,
    items: [orderItemSchema],
    totalAmount: Number,
    status: {
      type: String,
      enum: ["CREATED", "CONFIRMED", "PREPARING", "DELIVERED"],
      default: "CREATED"
    }
  },
  { timestamps: true }
);

module.exports = mongoose.model("Order", orderSchema);