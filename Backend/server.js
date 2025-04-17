require('dotenv').config(); // Load .env variables

const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const path = require('path');

const app = express();

// ===== Middleware =====
app.use(cors());
app.use(express.json()); // Parse incoming JSON

// Serve static images from public/images
// app.use('/images', express.static('public/images'));
app.use('/images', express.static(path.join(__dirname, 'public/images')));

// ===== Routes =====
const authRoutes = require('./routes/auth');
const furnitureRoutes = require('./routes/furniture');

app.use('/api/auth', authRoutes);
app.use('/api/furniture', furnitureRoutes);

// ===== MongoDB Connection =====
mongoose.connect(process.env.MONGO_URI || 'mongodb://127.0.0.1:27017/ARterior-Furniture', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
.then(() => {
  console.log('✅ MongoDB connected');
  console.log(`📂 Using DB: ${mongoose.connection.name}`);
})
.catch(err => console.error('❌ MongoDB connection error:', err));

// ===== Start Server =====
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`🚀 Server running at http://localhost:${PORT}`);
});
