const Restaurant = require("../models/restaurant.model");

exports.createRestaurant = async (req, res) => {
  if (req.user.role !== "RESTAURANT" && req.user.role !== "ADMIN") {
    return res.status(403).json({ message: "Forbidden" });
  }

  const restaurant = await Restaurant.create({
    ...req.body,
    ownerId: req.user.id
  });

  res.status(201).json(restaurant);
};

exports.getRestaurants = async (req, res) => {
  const restaurants = await Restaurant.find();
  res.json(restaurants);
};

exports.addMenuItem = async (req, res) => {
  const restaurant = await Restaurant.findById(req.params.id);
  restaurant.menu.push(req.body);
  await restaurant.save();
  res.json(restaurant);
};