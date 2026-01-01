const mongoose = require("mongoose");

const paymentSchema = new mongoose.Schema(
  {
    orderId: String,
    userId: String,
    amount: Number,
    status: {
      type: String,
      enum: ["INITIATED", "SUCCESS", "FAILED"],
      default: "INITIATED"
    },
    provider: {
      type: String,
      default: "MOCK_PAY"
    }
  },
  { timestamps: true }
);

module.exports = mongoose.model("Payment", paymentSchema);