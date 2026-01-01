const express = require("express");
const auth = require("../middleware/auth.middleware");
const {
  createRestaurant,
  getRestaurants,
  addMenuItem
} = require("../controllers/restaurant.controller");

const router = express.Router();

router.get("/", getRestaurants);
router.post("/", auth, createRestaurant);
router.post("/:id/menu", auth, addMenuItem);

module.exports = router;