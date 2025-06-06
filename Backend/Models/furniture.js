const mongoose = require('mongoose');

const FurnitureSchema = new mongoose.Schema({
  name: { type: String, required: true },
  description: { type: String, required: true },
  image: { type: String, required: true }

});

module.exports = mongoose.model('Furniture', FurnitureSchema);
