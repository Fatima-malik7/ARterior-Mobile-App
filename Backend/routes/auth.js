const express = require('express');
const router = express.Router();
const User = require('../Models/User');
// const bcrypt = require('bcrypt');

router.post('/register', async (req, res) => {
  const { username, password, email, mobile } = req.body;

  console.log("Received registration data:", req.body);

  try {
    const existingUser = await User.findOne({ email });
    if (existingUser) {
      console.log("Email already exists:", email);
      return res.status(400).json({ success: false, message: 'Email already in use' });
    }

    // const hashedPassword = await bcrypt.hash(password, 10); // Uncomment if hashing
    const newUser = new User({
      username,
      password, // Change to `hashedPassword` if hashing
      email,
      mobile,
    });

    await newUser.save();
    console.log("✅ User saved to MongoDB:", newUser);

    res.json({ success: true, message: 'User registered successfully' });
  } catch (error) {
    console.error("❌ Registration error:", error);
    res.status(500).json({ success: false, message: 'Server error' });
  }
});

router.post('/login', async (req, res) => {
  const { username, password } = req.body;
  console.log("Login request:", req.body);

  try {
    const user = await User.findOne({ username });
    if (!user) {
      return res.status(400).json({ success: false, message: 'User not found' });
    }

    // const isMatch = await bcrypt.compare(password, user.password);
    const isMatch = password === user.password; // Replace with bcrypt logic if hashed

    if (!isMatch) {
      return res.status(400).json({ success: false, message: 'Incorrect password' });
    }

    res.json({ success: true, message: 'Login successful', user });
  } catch (error) {
    console.error("❌ Login error:", error);
    res.status(500).json({ success: false, message: 'Server error' });
  }
});

module.exports = router;
