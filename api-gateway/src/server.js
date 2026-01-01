require("dotenv").config();
const express = require("express");
const cors = require("cors");

const registerRoutes = require("./routes/proxy.routes");

const app = express();
app.use(cors());
app.use(express.json());

registerRoutes(app);

app.get("/health", (req, res) =>
  res.send("API Gateway with Rate Limiting healthy")
);

const PORT = process.env.PORT || 8080;
app.listen(PORT, () =>
  console.log(`API Gateway running on port ${PORT}`)
);