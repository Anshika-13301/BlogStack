require("dotenv").config();

const express = require("express");
const app = express();
const cors = require("cors");
const blogRoute = require("./routes/blogRoute");
const mongoose = require("mongoose");

// Database
mongoose
  .connect(process.env.MONGO_URI)
  .then(() => {
    console.log("Successfully connected DB 🥳");
  })
  .catch((err) => {
    console.log("Database connection error:", err);
  });

// Middleware
app.use(express.json());

app.use(
  cors({
    origin: [
      "http://localhost:5173",
      "https://blog-stack-gamma.vercel.app"
    ],
    methods: ["GET", "POST", "PUT", "DELETE", "PATCH", "OPTIONS"],
    allowedHeaders: ["Content-Type", "Authorization"],
  })
);

// Health Check
app.get("/health", (req, res) => {
  res.status(200).json({
    status: "ok"
  });
});

app.use("/api", blogRoute);

// Static files
app.use(express.static("public"));

// Port
const port = process.env.PORT || 5000;

app.listen(port, "0.0.0.0", () => {
  console.log(`Running on port ${port}`);
});