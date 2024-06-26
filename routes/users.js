const mongoose = require('mongoose');

mongoose.connect("mongodb://127.0.0.1:27017/photoinspo");

const userSchema = new mongoose.Schema({
  username: {
    type: String,
    required: true,
    unique: true,
  },
  password: {
    type: String,
    required: true,
  },
  posts: [],
  dp: {
    type: String, // Assuming the profile picture is stored as a URL or file path
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  fullName: {
    type: String,
    required: true,
  },
});

const User = mongoose.model('User', userSchema);