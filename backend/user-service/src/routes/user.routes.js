const express = require("express");
const auth = require("../middleware/auth.middleware");
const { getProfile, createOrUpdateProfile } = require("../controllers/user.controller");

const router = express.Router();

router.get("/profile", auth, getProfile);
router.post("/profile", auth, createOrUpdateProfile);

module.exports = router;