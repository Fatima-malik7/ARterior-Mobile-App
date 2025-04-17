const express = require('express');
const router = express.Router();
const Furniture = require('../models/furniture');

// Get all furniture
router.get('/', async (req, res) => {
  try {
    const items = await Furniture.find();
    res.json(items);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// ✅ Add this POST route for bulk insert
router.post('/bulk', async (req, res) => {
  try {
    const furnitureItems = req.body;
    const result = await Furniture.insertMany(furnitureItems);
    res.status(201).json({ message: 'Furniture added successfully', data: result });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

module.exports = router;
