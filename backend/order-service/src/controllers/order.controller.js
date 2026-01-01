const Order = require("../models/order.model");

exports.createOrder = async (req, res) => {
  const { items } = req.body;
  const totalAmount = items.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );

  const order = await Order.create({
    userId: req.user.id,
    items,
    totalAmount
  });

  res.status(201).json(order);
};

exports.getOrders = async (req, res) => {
  const orders = await Order.find({ userId: req.user.id });
  res.json(orders);
};

exports.updateStatus = async (req, res) => {
  const order = await Order.findByIdAndUpdate(
    req.params.id,
    { status: req.body.status },
    { new: true }
  );
  res.json(order);
};