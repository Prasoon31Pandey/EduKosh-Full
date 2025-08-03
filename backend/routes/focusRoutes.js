const express = require("express");
const router = express.Router();

// Example: Get all notes
router.get("/", (req, res) => {
  res.json({ message: "Focus notes working!" });
});

module.exports = router;
