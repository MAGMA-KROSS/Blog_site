const express = require("express");
const router = express.Router();
const Comment = require("../models/comments");
const authMiddleware = require("../middlewares/authMiddleware");
const User = require("../models/user");

// Get all comments (sorted by latest)
router.get("/comments", async (req, res) => {
    try {
        const comments = await Comment.find().sort({ createdAt: -1 });
        res.json(comments);
    } catch (error) {
        res.status(500).json({ error: "Server Error" });
    }
});

// Post a new comment
router.post("/comments", async (req, res) => {
    try {
        const newComment = new Comment({ text: req.body.text });
        await newComment.save();
        res.status(201).json(newComment);
    } catch (error) {
        res.status(500).json({ error: "Server Error" });
    }
});

module.exports = router; // ✅ Export the router correctly
