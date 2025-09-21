const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, 'Name is required'], // Validation with error message
    trim: true // Removes extra spaces
  },
  email: {
    type: String,
    required: [true, 'Email is required'],
    unique: true,
    lowercase: true, // Normalize to lowercase
    index: true // For faster queries
  },
  password: {
    type: String,
    required: [true, 'Password is required'],
    minlength: [6, 'Password must be at least 6 characters']
  },
  role: {
    type: String,
    enum: ['admin', 'instructor', 'student'],
    required: [true, 'Role is required']
  },
  branch: {
    type: String,
    default: 'cairo'
  }
}, { timestamps: true }); // Adds createdAt, updatedAt

module.exports = mongoose.model('User', userSchema);