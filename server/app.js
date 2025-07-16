const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
require('dotenv').config();
const mongoose = require("mongoose");
const codeRoutes = require("./routes/codeRoutes");
const authRoutes = require("./routes/authRoutes");

const app = express();

// MongoDB Connection (connect as early as possible)
mongoose.connect(process.env.MONGO_URI)
  .then(() => console.log("✅ Connected to MongoDB Atlas"))
  .catch((err) => console.error("❌ MongoDB connection error:", err));

// CORS Setup
app.use(cors({
  origin: '*',
  methods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS'],
  allowedHeaders: ['Content-Type', 'Authorization']
}));

// Middleware
app.use(bodyParser.json());

// Health Check Route (Important for Render & Vercel health monitoring)
app.get("/", (req, res) => {
  res.status(200).send("✅ Backend is running.");
});

// API Routes
app.use("/auth", authRoutes);
app.use("/code", codeRoutes);

module.exports = app;
