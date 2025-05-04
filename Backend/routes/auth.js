const express = require('express');
const router = express.Router();
const User = require('../Models/User');
const bcrypt = require('bcrypt');
const nodemailer = require('nodemailer');
const crypto = require('crypto');

const SALT_ROUNDS = 10;

// Register
router.post('/register', async (req, res) => {
  const { username, password, email, mobile } = req.body;

  // ✅ Basic Input Validation
  if (!username || !password || !email || !mobile) {
    return res.status(400).json({ success: false, message: 'All fields are required' });
  }

  const emailRegex = /^\S+@\S+\.\S+$/;
  if (!emailRegex.test(email)) {
    return res.status(400).json({ success: false, message: 'Invalid email format' });
  }

  const mobileRegex = /^(\+92|0)3[0-9]{9}$/;
  if (!mobileRegex.test(mobile)) {
    return res.status(400).json({ success: false, message: 'Invalid mobile number format' });
  }
  try {
    const existingUser = await User.findOne({
      $or: [{ email }, { mobile }],
    });
  
    if (existingUser) {
      if (existingUser.email === email) {
        return res.status(400).json({ success: false, message: 'Email already in use' });
      }
      if (existingUser.mobile === mobile) {
        return res.status(400).json({ success: false, message: 'Mobile number already registered' });
      }
    }
  
    const hashedPassword = await bcrypt.hash(password, SALT_ROUNDS);
    const newUser = new User({
      username,
      password: hashedPassword,
      email,
      mobile,
    });
  
    const savedUser = await newUser.save();
    res.status(200).json({
      success: true,
      message: 'User registered successfully',
      user: {
        _id: savedUser._id,
        username: savedUser.username,
        email: savedUser.email,
        mobile: savedUser.mobile,
      },
    });
  } catch (error) {
    console.error("❌ Registration error:", error);
    res.status(500).json({ success: false, message: 'Server error', error: error.message });
  }
  
});

// Login
router.post('/login', async (req, res) => {
  const { username, password, email } = req.body;

  if (!username && !email || !password) {
    return res.status(400).json({ success: false, message: 'All fields are required' });
  }

  try {
    const user = await User.findOne({
      $or: [
        { username: username },
        { email: email }
      ]
    });
    

    if (!user || !(await bcrypt.compare(password, user.password))) {
      return res.status(400).json({ success: false, message: 'Invalid credentials' });
    }
    
    res.status(200).json({
      success: true,
      message: 'Login successful',
      user: {
        _id: user._id,
        username: user.username,
        email: user.email,
        mobile: user.mobile,
        profileImage: user.profileImage || null,
      }
    });
  } catch (error) {
    console.error("❌ Login error:", error);
    res.status(500).json({ success: false, message: 'Server error', error: error.message });
  }
});

// Change Password
router.post('/change-password', async (req, res) => {
  const { email, currentPassword, newPassword } = req.body;

  try {
    const user = await User.findOne({ email });
    if (!user) return res.status(400).json({ success: false, message: 'User not found' });

    const isMatch = await bcrypt.compare(currentPassword, user.password);
    if (!isMatch) return res.status(400).json({ success: false, message: 'Current password is incorrect' });

    const hashedNewPassword = await bcrypt.hash(newPassword, SALT_ROUNDS);
    user.password = hashedNewPassword;
    await user.save();

    res.json({ success: true, message: 'Password changed successfully' });
  } catch (error) {
    res.status(500).json({ success: false, message: 'Server error', error: error.message });
  }
});

// Update User Profile
router.put('/updateUser/:id', async (req, res) => {
  const { id } = req.params;
  const { username, email, mobile, profileImage } = req.body;

  try {
    if (!username || !email || !mobile) {
      return res.status(400).json({ error: 'All fields are required.' });
    }

    const updatedUser = await User.findByIdAndUpdate(
      id,
      { username, email, mobile, profileImage },
      { new: true }
    );

    if (!updatedUser) return res.status(404).json({ error: 'User not found.' });

    res.json({ message: 'Profile updated successfully!', user: updatedUser });
  } catch (error) {
    console.error('Error updating profile:', error);
    res.status(500).json({ error: 'Server error' });
  }
});

// Forgot Password (Send Reset Email)
router.post('/forgot-password', async (req, res) => {
  const { email } = req.body;

  try {
    const user = await User.findOne({ email });
    if (!user) return res.status(404).json({ success: false, message: 'User not found' });

    const resetToken = crypto.randomBytes(3).toString('hex');
    const resetTokenExpiration = Date.now() + 3600000;

    user.resetToken = resetToken;
    user.resetTokenExpiration = resetTokenExpiration;
    await user.save();

    const transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: 'kiani6824@gmail.com',
        pass: 'rkxu bqnz ckmi sulb',
      },
      tls: {
        rejectUnauthorized: false, // Avoid SSL issues
      },
    });


    const resetLink = `http://192.168.1.9:5000/reset-password/${resetToken}`;

const mailOptions = {
  to: email,
  subject: 'Password Reset',
  text: `Hi ${user.username},\n\nYour password reset token is: ${resetToken}\n\nThis token will expire in 1 hour.`,
};

    
    transporter.sendMail(mailOptions, (err, info) => {
      if (err) {
        console.error('❌ Email send error:', err);
        return res.status(500).json({ success: false, message: 'Failed to send reset email', error: err.message });
      }
    
      console.log('✅ Email sent:', info.response);
      res.status(200).json({ success: true, message: 'Password reset email sent' });
    });
  } catch (error) {
    console.error('❌ Error during password reset:', error);
    res.status(500).json({ success: false, message: 'Server error' });
  }
});
router.post('/reset-password/:token', async (req, res) => {
  const { token } = req.params;
  const { newPassword } = req.body;

  try {
    // In the reset password route
console.log(`Received token: ${token}`);  // Log the received token

// Check if the token exists and is valid in the database
const user = await User.findOne({
  resetToken: token,
  resetTokenExpiration: { $gt: Date.now() }
});

if (!user) {
  console.log('Invalid or expired token');
  console.log('Stored token:', user ? user.resetToken : 'No user found');
  console.log('Stored token expiration:', user ? user.resetTokenExpiration : 'No user found');
  return res.status(400).json({ success: false, message: 'Invalid or expired token' });
}


    // Token is valid, so reset the password
    const hashedPassword = await bcrypt.hash(newPassword, SALT_ROUNDS);
    user.password = hashedPassword;
    user.resetToken = undefined; // clear reset token
    user.resetTokenExpiration = undefined; // clear token expiration
    await user.save();

    res.json({ success: true, message: 'Password reset successfully' });
  } catch (error) {
    console.error('❌ Error resetting password:', error);
    res.status(500).json({ success: false, message: 'Server error' });
  }
});

router.delete('/:id', async (req, res) => {
  const userId = req.params.id;
  console.log('Received user ID:', userId); // Log the ID

  if (!userId) {
    return res.status(400).json({ message: 'User ID is required' });
  }

  try {
    const deletedUser = await User.findByIdAndDelete(userId);

    if (!deletedUser) {
      return res.status(404).json({ message: 'User not found' });
    }

    res.status(200).json({ message: 'User deleted successfully' });
  } catch (error) {
    console.error('Error deleting user:', error);
    res.status(500).json({ message: 'Error deleting user' });
  }
});


module.exports = router;
