// server.js
require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");

const app = express();
app.use(cors());
app.use(express.json());

// Connect to MongoDB
mongoose.connect(process.env.MONGO_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
.then(() => console.log("✅ MongoDB connected"))
.catch((err) => console.error("❌ MongoDB connection error:", err));

// Route files
const authRoutes = require("./routes/authRoutes");
const focusRoutes = require("./routes/focusRoutes");
const timerRoutes = require("./routes/timerRoutes");

// Use routes
app.use("/api/auth", authRoutes);
app.use("/api/notes", focusRoutes);
app.use("/api/timer", timerRoutes);

// Start server
app.listen(5000, () => console.log("🚀 Server running on http://localhost:5000"));
