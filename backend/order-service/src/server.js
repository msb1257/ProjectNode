require("dotenv").config();
const express = require("express");
const cors = require("cors");

const connectDB = require("./config/db");
const orderRoutes = require("./routes/order.routes");

const app = express();
app.use(cors());
app.use(express.json());

connectDB();
app.use("/api/orders", orderRoutes);

app.get("/health", (req, res) => res.send("Order Service healthy"));

const PORT = process.env.PORT || 4006;
app.listen(PORT, () => console.log(`Order Service running on ${PORT}`));