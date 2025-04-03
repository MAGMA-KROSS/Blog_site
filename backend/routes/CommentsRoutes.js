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
        // Use the correct field names from your schema
        const { BlogId, Comment: commentText, UserName } = req.body;
        
        // Validate required fields
        if (!BlogId || !commentText || !UserName) {
            return res.status(400).json({ error: "Missing required fields" });
        }
        
        const newComment = new Comment({
            BlogId,
            Comment: commentText,
            UserName
        });
        
        await newComment.save();
        res.status(201).json(newComment);
    } catch (error) {
        console.error("Comment creation error:", error);
        res.status(500).json({ error: "Server Error" });
    }
});

module.exports = router;