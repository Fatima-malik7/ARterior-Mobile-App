const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema({
  username: { type: String, required: true },
  password: { type: String, required: true },
  email: {
    type: String,
    required: true,
    unique: true,
    trim: true,
    lowercase: true
  },  
  mobile: { type: String, required: true },
  profilePicture: { type: String, default: 'default.jpg' },
  resetToken: String,                 
  resetTokenExpiration: Date
});

module.exports = mongoose.model('User', UserSchema);
