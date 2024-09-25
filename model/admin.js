// model/admin.js


const mongoose = require('mongoose');

const userAdminSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  email: {
    type: String,
    required: true,
    unique: true
  },
  password: {
    type: String,
    required: true
  },
  role: { 
    type: String, 
    enum: ['user', 'admin'], 
    default: 'admin'  // Ensure this model represents admins
  },
}, { timestamps: true });

// Create a distinct model named 'UserAdmin'
module.exports = mongoose.model('UserAdmin', userAdminSchema);
