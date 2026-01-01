require("dotenv").config();
const express = require("express");
const cors = require("cors");

const connectDB = require("./config/db");
const authRoutes = require("./routes/auth.routes");

const app = express();
app.use(cors());
app.use(express.json());

connectDB();
app.use("/api/auth", authRoutes);

app.get("/health", (req, res) => {
  res.send("Auth Service is healthy");
});

const PORT = process.env.PORT || 4000;
app.listen(PORT, () =>
  console.log(`Auth Service running on port ${PORT}`)
);