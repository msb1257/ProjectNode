const Payment = require("../models/payment.model");

exports.initiatePayment = async (req, res) => {
  const { orderId, amount } = req.body;

  const payment = await Payment.create({
    orderId,
    userId: req.user.id,
    amount,
    status: "SUCCESS"
  });

  res.status(201).json(payment);
};

exports.getPayments = async (req, res) => {
  const payments = await Payment.find({ userId: req.user.id });
  res.json(payments);
};