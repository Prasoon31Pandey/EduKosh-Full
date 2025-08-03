const FocusSession = require('../models/FocusSession');

exports.saveSession = async (req, res) => {
  const session = await FocusSession.create({
    user: req.user._id,
    duration: req.body.duration,
  });
  res.json(session);
};

exports.getSessions = async (req, res) => {
  const sessions = await FocusSession.find({ user: req.user._id });
  res.json(sessions);
};