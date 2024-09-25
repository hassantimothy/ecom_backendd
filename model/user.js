// model/user.js


const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  password: {
    type: String,
    required: true
  },
  createdAt: {
    type: Date,
    default: Date.now
  },
  updatedAt: {
    type: Date,
    default: Date.now
  }
});

// Check if the 'User' model is already registered to avoid OverwriteModelError
module.exports = mongoose.models.User || mongoose.model('User', userSchema);
