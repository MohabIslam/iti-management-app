const mongoose = require('mongoose');

const calendarSchema = new mongoose.Schema({
  studentId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: [true, 'Student ID is required']
  },
  weekNumber: {
    type: Number,
    required: [true, 'Week number is required']
  },
  events: [{
    date: { type: Date, required: true },
    course: { type: String, required: true },
    time: { type: String, required: true } // e.g., '09:00-11:00'
  }]
}, { timestamps: true });

module.exports = mongoose.model('Calendar', calendarSchema);