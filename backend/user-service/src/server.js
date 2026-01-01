require("dotenv").config();
const express = require("express");
const cors = require("cors");

const connectDB = require("./config/db");
const userRoutes = require("./routes/user.routes");

const app = express();
app.use(cors());
app.use(express.json());

connectDB();
app.use("/api/users", userRoutes);

app.get("/health", (req, res) => res.send("User Service healthy"));

const PORT = process.env.PORT || 4003;
app.listen(PORT, () => console.log(`User Service running on ${PORT}`));