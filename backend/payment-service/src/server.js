require("dotenv").config();
const express = require("express");
const cors = require("cors");

const connectDB = require("./config/db");
const paymentRoutes = require("./routes/payment.routes");

const app = express();
app.use(cors());
app.use(express.json());

connectDB();
app.use("/api/payments", paymentRoutes);

app.get("/health", (req, res) => res.send("Payment Service healthy"));

const PORT = process.env.PORT || 4007;
app.listen(PORT, () => console.log(`Payment Service running on ${PORT}`));