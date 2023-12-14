// controllers/authController.js
const User = require('../models/users');
const bcrypt = require('bcrypt');

// User sign-in
exports.signIn = async (req, res) => {
  try {
    const { email, password } = req.body;

    // Check if the user exists
    const user = await User.findOne({ email });
    if (!user) {
      return res.status(401).json({ error: 'Invalid email or password' });
    }

    // Check if the password is correct
    const isPasswordValid = await bcrypt.compare(password, user.password);
    if (!isPasswordValid) {
      return res.status(401).json({ error: 'Invalid email or password' });
    }

    // You may want to generate and send a JWT token for authentication

    res.json({ message: 'Sign-in successful', user });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
};

// User sign-out (optional)
exports.signOut = (req, res) => {
  // Perform any sign-out logic if needed
  res.json({ message: 'Sign-out successful' });
};
