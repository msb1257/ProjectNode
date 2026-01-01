const express = require("express");
const auth = require("../middleware/auth.middleware");
const {
  createOrder,
  getOrders,
  updateStatus
} = require("../controllers/order.controller");

const router = express.Router();

router.post("/", auth, createOrder);
router.get("/", auth, getOrders);
router.put("/:id/status", auth, updateStatus);

module.exports = router;