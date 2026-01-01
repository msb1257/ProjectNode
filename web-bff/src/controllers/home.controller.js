const { getHomeData } = require("../services/backend.service");

exports.home = async (req, res) => {
  try {
    const token = req.headers.authorization;
    const data = await getHomeData(token);
    res.json(data);
  } catch (err) {
    res.status(500).json({ message: "Failed to load home data" });
  }
};