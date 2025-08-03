// FocusSession.js - placeholder content
const mongoose = require('mongoose');

const sessionSchema = new mongoose.Schema({
  user: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
  duration: Number,
  date: { type: Date, default: Date.now },
});

module.exports = mongoose.model('FocusSession', sessionSchema);