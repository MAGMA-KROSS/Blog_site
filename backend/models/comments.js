const mongoose = require('mongoose');

const CommentSchema = new mongoose.Schema({
    BlogId:{type:String,
        required: true,
        unique: true,
    },
    Comment:{
        type: String,
        required: true,
    },
    UserName:{
        type: String,
        required: true,
    },

});

const Comment = mongoose.model('Comment', CommentSchema);

module.exports = Comment;