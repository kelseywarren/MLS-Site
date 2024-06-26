// Import express, router, and cors 
const express = require('express');
const router = express.Router();
const cors = require('cors');

// Import controllers 
const { registerUser } = require('../controllers/registration-auth');
const { loginUser } = require('../controllers/login-auth');
const { getLoggedInUser } = require('../controllers/user');
const { logoutUser } = require('../controllers/logout');

// Import middleware 
const { requireLogin } = require('../middleware/auth-middleware');
 
// Handle cors
router.use(cors({
    credentials: true,
    origin: 'http://localhost:5173'
}));

// Routes
router.post('/register', registerUser)
router.post('/login', loginUser)
router.get('/dashboard', requireLogin, getLoggedInUser)
router.post('/logout', logoutUser)

// Export router
module.exports = router; 