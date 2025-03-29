const User = require("../models/user.js");
const bcrypt = require("bcrypt");
const express = require("express");
const jwt = require("jsonwebtoken");
const dotenv = require("dotenv");
const authMiddleware = require("../middlewares/authMiddleware.js");
dotenv.config();
const router = express.Router();

// Register
router.post("/register", async (req, res) => {
    try {
        const { username, email, password, name } = req.body;
        const MailCheck = await User.findOne({ email });
        if (MailCheck) {
            return res.status(400).json({ message: "Email already exists" });
        }

        // Hash the password
        const salt = await bcrypt.genSalt(10);
        const hashedPassword = await bcrypt.hash(password, salt);
        const newUser = new User({
            username,
            email,
            password: hashedPassword,
            name,
        });
        const user = await newUser.save();
        res.status(200).json(user);
    } catch (err) {
        res.status(500).json(err);
    }
});

// Login
router.post("/login", async (req, res) => {
    try {
        const { username, password } = req.body;
        const UserNameCheck = await User.findOne({ username });
        const EmailCheck = await User.findOne({ email: username });
        if (!UserNameCheck && !EmailCheck) {
            return res.status(400).json({ message: "User not found" });
        }

        const user = UserNameCheck || EmailCheck;

        // Compare passwords
        const isMatch = await bcrypt.compare(password, user.password);
        if (!isMatch) {
            return res.status(400).json({ message: "Invalid credentials" });
        }

        // Generate JWT token
        const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET, { expiresIn: "1h" });

        // Set the token in a cookie
        res.cookie("token", token, {
            httpOnly: true, // Prevents client-side JavaScript access
            secure: process.env.NODE_ENV === "production", // Only HTTPS in production
            sameSite: "Strict", // Prevents CSRF attacks
            maxAge: 60 * 60 * 1000, // 1 hour
        });

        res.json({ message: "Login successful", token });
    } catch (err) {
        res.status(500).json({ message: "Server error", error: err.message });
    }
});

// Logout route
router.get("/logout", (req, res) => {
    res.clearCookie("token", { httpOnly: true, sameSite: "None", secure: true });
    res.json({ message: "Logged out" });
});

// Get user data
router.get("/me", authMiddleware, async (req, res) => {
    try {
        const user = await User.findById(req.user.id).select("-password");
        res.json(user);
    } catch (err) {
        res.status(500).json({ message: "Server Error" });
    }
});

module.exports = router;
