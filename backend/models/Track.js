const mongoose = require('mongoose');

const trackSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, 'Track name is required'],
    unique: true
  },
  description: {
    type: String
  },
  groups: [{
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Group' // Links to Group model
  }],
  branch: {
    type: String,
    default: 'cairo'
  }
}, { timestamps: true });

module.exports = mongoose.model('Track', trackSchema);