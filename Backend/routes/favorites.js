const express = require('express');
const router = express.Router();
const Favorite = require('../Models/Favorite'); // Assuming the model is in models/Favorite.js

// POST - Add to favorites
router.post('/', async (req, res) => {
  const { name, description } = req.body;
  try {
    const favorite = new Favorite({ name, description });
    await favorite.save();
    res.status(200).json({ message: 'Added to favorites' });
  } catch (error) {
    res.status(500).json({ message: 'Failed to add favorite' });
  }
});

// GET - Get all favorites
router.get('/', async (req, res) => {
  try {
    const favorites = await Favorite.find();
    res.json(favorites);
  } catch (error) {
    res.status(500).json({ message: 'Failed to fetch favorites' });
  }
});

// DELETE - Remove from favorites
router.delete('/:id', async (req, res) => {
  const { id } = req.params;
  try {
    await Favorite.findByIdAndDelete(id);
    res.json({ message: 'Removed from favorites' });
  } catch (error) {
    res.status(500).json({ message: 'Failed to remove from favorites' });
  }
});

module.exports = router;
