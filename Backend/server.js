const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const path = require('path');
const bodyParser = require('body-parser');

const app = express(); // ✅ initialize here first

const favoritesRoutes = require('./routes/favorites'); 
const authRoutes = require('./routes/auth');
const furnitureRoutes = require('./routes/furniture');

// Middleware
app.use(cors());
app.use(bodyParser.json());
app.use(express.json());

// Routes
app.use('/api/auth', authRoutes);
app.use('/api/furniture', furnitureRoutes);
app.use('/api/favorites',favoritesRoutes);

// Connect MongoDB
mongoose.connect('mongodb://127.0.0.1:27017/ARterior', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
.then(() => {
  console.log('✅ MongoDB connected');
})
.catch(err => console.error('❌ MongoDB connection error:', err));

const PORT = 5000;
app.listen(PORT, () => {
  console.log(`🚀 Server running at http://localhost:${PORT}`);
});
