require("dotenv").config();
const express = require("express");
const cors = require("cors");

const connectDB = require("./config/db");
const cartRoutes = require("./routes/cart.routes");

const app = express();
app.use(cors());
app.use(express.json());

connectDB();
app.use("/api/cart", cartRoutes);

app.get("/health", (req, res) => res.send("Cart Service healthy"));

const PORT = process.env.PORT || 4005;
app.listen(PORT, () => console.log(`Cart Service running on ${PORT}`));