require("dotenv").config();
const express = require("express");
const cors = require("cors");

const { home } = require("./controllers/home.controller");

const app = express();
app.use(cors());
app.use(express.json());

app.get("/bff/home", home);

app.get("/health", (req, res) =>
  res.send("Web BFF with Redis caching healthy")
);

const PORT = process.env.PORT || 8090;
app.listen(PORT, () =>
  console.log(`Web BFF running on port ${PORT}`)
);