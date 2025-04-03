// models/comments.js
const mongoose = require('mongoose');

const CommentSchema = new mongoose.Schema({
    BlogId: {
        type: String,
        required: true,
    },
    Comment: {
        type: String,
        required: true,
    },
    UserName: {
        type: String,
        required: true,
    },
}, { timestamps: true }); // Adding timestamps for sorting by creation date

const Comment = mongoose.model('Comment', CommentSchema);

module.exports = Comment;