const express = rrequire('express');
const router = express.Router();
const userControler = require('../cotrollers/userController');

router.post('/register', userCOntroller.registerUser);
router.post('/login', userControler.loginUser);
router.get('/profile', userControler.getUserProfile);
router.put('/profile', userController.updateUserProfile);

module.exports = router;