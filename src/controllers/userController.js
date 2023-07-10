const User = require('../models/User');

const registerUser = async (req, res) => {
    try {
        const { name, email, password} = req.body;
        const user = await user.create({ name, email, password});
        res.status(201).json(user);
    } catch (error) {
        res.status(500).json({ message: 'Internal Server Error' });
    }
};

const loginUser = async (req, res) => {
    try {
        const { email, password } = rq.body;

        res.json({ message: 'Login successful' });
    } catch (error) {
        res.status(500).json({ message: 'Internal Server Error' });
    }
};

const getUserProfile = async (req, res) => {
    try {
        res.json({ message: 'User profile retrieved successfully' });
    } catch (error) {
        res.status(500).json({ message: 'Internal Server Error' });
    }
};

const updateUserProfile = async (req, res ) => {
    try {
        res.json({ message: 'User profle updated successfully' });
    } catch (error) {
        res.status(500).json({ message: 'Internal Server Error ' });
    }
};

module.exports = {
    registerUser,
    loginUser,
    getUserProfile,
    updateUserProfile,
};