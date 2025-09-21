const mongoose = require('mongoose');

const assignmentSchema = new mongoose.Schema({
  title: {
    type: String,
    required: [true, 'Assignment title is required']
  },
  dueDate: {
    type: Date,
    required: [true, 'Due date is required']
  },
  fileUrl: {
    type: String // Path to uploaded file
  },
  submittedBy: [{
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User'
  }]
}, { timestamps: true });

module.exports = mongoose.model('Assignment', assignmentSchema);