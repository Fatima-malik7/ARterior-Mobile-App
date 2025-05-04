// models/Favorite.js
const mongoose = require('mongoose');

const favoriteSchema = new mongoose.Schema({
  name: String,
  description: String,
});

const Favorite = mongoose.model('Favorite', favoriteSchema);

module.exports = Favorite;
