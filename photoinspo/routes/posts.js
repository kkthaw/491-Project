const mongoose = require('mongoose');

const postSchema = new mongoose.Schema({
  postText: {
    type: String,
    required: true
  },
  createdAt: {
    type: Date,
    default: Date.now // Automatically sets to the current date and time
  },
  likes: {
    type: Array,
    default: []
  }
});

module.exports = mongoose.model('Post', postSchema);