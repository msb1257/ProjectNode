const express = require("express");
const auth = require("../middleware/auth.middleware");
const { getCart, addItem, clearCart } = require("../controllers/cart.controller");

const router = express.Router();

router.get("/", auth, getCart);
router.post("/add", auth, addItem);
router.delete("/clear", auth, clearCart);

module.exports = router;