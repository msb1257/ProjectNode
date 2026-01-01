require("dotenv").config();
const express = require("express");
const cors = require("cors");

const connectDB = require("./config/db");
const restaurantRoutes = require("./routes/restaurant.routes");

const app = express();
app.use(cors());
app.use(express.json());

connectDB();
app.use("/api/restaurants", restaurantRoutes);

app.get("/health", (req, res) => res.send("Restaurant Service healthy"));

const PORT = process.env.PORT || 4004;
app.listen(PORT, () => console.log(`Restaurant Service running on ${PORT}`));