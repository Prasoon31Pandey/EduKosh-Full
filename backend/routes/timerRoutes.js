// routes/timerRoutes.js
const express = require("express");
const router = express.Router();

// Example timer route - update as needed
router.get("/", (req, res) => {
  res.json({ message: "Timer route working!" });
});

module.exports = router;
