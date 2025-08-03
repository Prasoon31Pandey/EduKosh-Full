const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  name: String,
  email: { type: String, required: true, unique: true },
  password: String,
  googleId: String,
  rating: { type: Number, default: 0 },
  location: String,
});

module.exports = mongoose.model('User', userSchema);