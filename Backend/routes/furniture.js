const express = require('express');
const router = express.Router();
const Furniture = require('../Models/furniture');

// router.post('/', async (req, res) => {
//   try {
//     const { name, image, description } = req.body;

//     if (!name || !image) {
//       return res.status(400).json({ message: 'Product name and image are required' });
//     }

//     const newFurniture = new Furniture({ name, image, description });
//     const savedFurniture = await newFurniture.save();
//     res.status(201).json(savedFurniture);
//   } catch (err) {
//     console.error('Error saving furniture:', err);
//     res.status(500).json({ message: 'Error saving furniture' });
//   }
// });
router.post('/', async (req, res) => {
  try {
    const { name, description, imageName } = req.body;

    const newFurniture = new Furniture({
      name,
      description,
      image: imageName, // assuming your model uses `image`
    });

    await newFurniture.save();
    res.status(201).json({ message: 'Furniture added successfully' });
  } catch (err) {
    console.error('Error saving furniture:', err);
    res.status(500).json({ error: 'Failed to save furniture' });
  }
});


// Example route in your backend (Express.js)
router.get('/api/products/:id', async (req, res) => {
  const productId = req.params.id;
  try {
    const product = await Furniture.findById(productId); // Assuming you're using MongoDB
    if (!product) return res.status(404).json({ message: 'Product not found' });
    res.json(product);
  } catch (error) {
    res.status(500).json({ message: 'Server error' });
  }
});


module.exports = router;