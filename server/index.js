const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
require("dotenv").config();
const path = require("path");

const app = express();

app.use(cors());
app.use(express.json());
app.use("/uploads", express.static(path.join(__dirname, "uploads")));


async function startServer() {
  try {
    await mongoose.connect(process.env.MONGODB_URI);
    console.log("✅ MongoDB Connected");

    const reportRoutes = require("./routes/reportRoutes");
    app.use("/api", reportRoutes);

    app.get("/", (req, res) => {
      res.send("🚰 Water Leakage Backend is Running!");
    });

    app.listen(5000, () => {
      console.log("🚀 Server running on port 5000");
    });
  } catch (err) {
    console.error("❌ MongoDB Connection Error:");
    console.error(err);
  }
}

startServer();