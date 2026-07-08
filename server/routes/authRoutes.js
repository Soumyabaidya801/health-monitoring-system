const express = require('express');
const router = express.Router();
const { registerUser,loginUser } = require('../controller/authController');
const { getUserDashboard } = require("../controller/userDashboardController");
// Register route
router.post('/register', registerUser);

// Login route
router.post('/login', loginUser);

//Dashboard
//router.post('/dashboard',getUserDashboard);

module.exports = router;