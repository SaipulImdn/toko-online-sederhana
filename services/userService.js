const User = require('../models/User');

const registerUser = async (name, email, password) => {
  try {
    const user = await User.create({ name, email, password });
    return user;
  } catch (error) {
    throw new Error('Failed to register user');
  }
};

// Implement other user service functions (e.g., loginUser, getUserProfile, updateUserProfile)

module.exports = {
  registerUser,
  // Export other user service functions
};
