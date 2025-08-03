const express = require("express");
const router = express.Router();

// Dummy timer route
router.get("/", (req, res) => {
  res.json({ message: "Timer route working" });
});

module.exports = router;
