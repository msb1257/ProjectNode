const Cart = require("../models/cart.model");

exports.getCart = async (req, res) => {
  const cart = await Cart.findOne({ userId: req.user.id });
  res.json(cart || { userId: req.user.id, items: [] });
};

exports.addItem = async (req, res) => {
  const { restaurantId, itemId, name, price, quantity } = req.body;

  let cart = await Cart.findOne({ userId: req.user.id });
  if (!cart) {
    cart = await Cart.create({ userId: req.user.id, items: [] });
  }

  cart.items.push({ restaurantId, itemId, name, price, quantity });
  await cart.save();
  res.json(cart);
};

exports.clearCart = async (req, res) => {
  await Cart.findOneAndDelete({ userId: req.user.id });
  res.json({ message: "Cart cleared" });
};