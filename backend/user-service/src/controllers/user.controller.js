const UserProfile = require("../models/userProfile.model");

exports.getProfile = async (req, res) => {
  const profile = await UserProfile.findOne({ userId: req.user.id });
  res.json(profile);
};

exports.createOrUpdateProfile = async (req, res) => {
  const profile = await UserProfile.findOneAndUpdate(
    { userId: req.user.id },
    { ...req.body, userId: req.user.id },
    { upsert: true, new: true }
  );
  res.json(profile);
};