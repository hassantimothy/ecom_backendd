// routes/admin.js

const express = require('express');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const asyncHandler = require('express-async-handler');
const UserAdmin = require('../model/admin');  // Refers to 'UserAdmin' model

const router = express.Router();

// Admin login
router.post('/login', asyncHandler(async (req, res) => {
    const { email, password } = req.body;

    const admin = await UserAdmin.findOne({ email, role: 'admin' });
    if (!admin) {
        return res.status(400).json({ success: false, message: 'Invalid email or password', data: null });
    }

    const isMatch = await bcrypt.compare(password, admin.password);
    if (!isMatch) {
        return res.status(400).json({ success: false, message: 'Invalid email or password', data: null });
    }

    const token = jwt.sign(
        { id: admin._id, role: admin.role },
        process.env.JWT_SECRET,
        { expiresIn: '1d' }
    );

    res.json({
        success: true,
        message: 'Admin logged in successfully',
        data: {
            token,
            admin: {
                id: admin._id,
                name: admin.name,
                email: admin.email,
                role: admin.role
            }
        }
    });
}));

// Logout
router.post('/logout', asyncHandler(async (req, res) => {
    // In a more advanced setup, you might want to blacklist the token
    // For now, we'll just send a success response
    res.json({ success: true, message: 'Logged out successfully' });
}));

// Get admin details
router.get('/details', asyncHandler(async (req, res) => {
    // This route will be protected by middleware, we'll add that later
    const admin = await UserAdmin.findById(req.user.id).select('-password');
    if (!admin || admin.role !== 'admin') {
        return res.status(404).json({ success: false, message: 'Admin not found', data: null });
    }
    res.json({ success: true, message: 'Admin details retrieved', data: admin });
}));

module.exports = router;
