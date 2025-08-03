// controllers/focusController.js

const FocusSession = require("../models/FocusSession");

// Create a new focus session
exports.startFocusSession = async (req, res) => {
  try {
    const { duration, plantType } = req.body;

    const session = new FocusSession({
      user: req.user.id,
      duration,
      plantType,
      startedAt: new Date(),
    });

    await session.save();

    res.status(201).json({
      message: "Focus session started successfully",
      session,
    });
  } catch (error) {
    res.status(500).json({ message: "Failed to start focus session", error });
  }
};

// Get all focus sessions for the user
exports.getMyFocusSessions = async (req, res) => {
  try {
    const sessions = await FocusSession.find({ user: req.user.id }).sort({
      startedAt: -1,
    });

    res.status(200).json(sessions);
  } catch (error) {
    res.status(500).json({ message: "Failed to fetch focus sessions", error });
  }
};

// Delete a specific focus session
exports.deleteFocusSession = async (req, res) => {
  try {
    const { id } = req.params;

    const session = await FocusSession.findOneAndDelete({
      _id: id,
      user: req.user.id,
    });

    if (!session) {
      return res.status(404).json({ message: "Focus session not found" });
    }

    res.status(200).json({ message: "Focus session deleted", session });
  } catch (error) {
    res.status(500).json({ message: "Error deleting session", error });
  }
};
