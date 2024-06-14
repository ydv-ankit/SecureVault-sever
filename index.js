const express = require("express");
const dotenv = require("dotenv");
const app = express();
const userRoutes = require("./routes/user.route");
const dataRoutes = require("./routes/data.route");
const connectToMongoDatabase = require("./lib/db");
const cors = require("cors");

dotenv.config();

const PORT = process.env.PORT || 8282;
const MONGO_URI = process.env.MONGO_URI;
// middlewares
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.use("/api/user", userRoutes);
app.use("/api/data", dataRoutes);
app.listen(PORT, () => {
  connectToMongoDatabase(MONGO_URI);
  console.log("Server is running on port " + PORT);
});
