const User = require('../model/userModel');
const jwt = require('jsonwebtoken');

const generateToken = (user) => {
  return jwt.sign({ id: user._id }, process.env.JWT_SECRET, {
    expiresIn: '7d',
  });
};

exports.registerOrLogin = async (req, res) => {
  const { phone } = req.body;

  if (!phone) return res.status(400).json({ error: 'Phone number is required' });

  try {
    let user = await User.findOne({ phone });

    if (!user) {
      user = new User({ phone });
      await user.save();
    }

    const token = generateToken(user);
    res.json({ token, user });
  } catch (err) {
    res.status(500).json({ error: 'Server error' });
  }
};
