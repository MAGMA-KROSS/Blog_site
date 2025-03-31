const User = require('../models/user');
const bcrypt = require('bcrypt');
const express = require('express');
const router = express.Router();
const jwt = require('jsonwebtoken');
const authMiddleware = require('../middlewares/authMiddleware');

//register
router.post('/register', async (req, res) => {
    try{
        const {username ,email, password , name} = req.body;
        const MailCheck = await User.findOne({email});
        if(MailCheck){
            return res.status(400).json({message: 'Email already exists'});
        }

        // Hash the password
        const salt = await bcrypt.genSalt(10);
        const hashedPassword = await bcrypt.hash(password, salt);
        const newUser = new User({
            username,
            email,
            password: hashedPassword,
            name
        });
        const user = await newUser.save();
        res.status(200).json(user);
    }
    catch(err){
        res.status(500).json(err);
    }
});


//login
router.post('/login', async(req, res) => {
    try {
        const { username, email, password } = req.body;
        
        // Validate input
        if ((!username && !email) || !password) {
            return res.status(400).json({ message: 'Please provide username/email and password' });
        }
        
        // Find user with a single query
        const user = await User.findOne({
            $or: [
                { username: username },
                { email: email }
            ]
        });
        
        if (!user) {
            return res.status(400).json({ message: 'User not found' });
        }
        
        // Compare passwords
        const isMatch = await bcrypt.compare(password, user.password);
        if (!isMatch) {
            return res.status(400).json({ message: "Invalid credentials" });
        }

        // Generate JWT token
        const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET, { expiresIn: "1h" });

        res.json({ message: "Login successful", token });

    }
    catch(err) {
        // Standardize error response
        res.status(500).json({ message: "Server error", error: "An unexpected error occurred" });
        console.error(err); // Log the actual error for debugging
    }
});

router.get('/profile',authMiddleware, async (req, res) => {})


module.exports = router;