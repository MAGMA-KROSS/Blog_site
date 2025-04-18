require('dotenv').config();
const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
const authRoutes = require("./routes/auth"); 
const CommentRoutes = require("./routes/CommentsRoutes");


const app = express();
app.use(express.json());
app.use(cors());
app.use("/api/auth", authRoutes);

app.use(express.json()); // Middleware to parse JSON
app.use("/api", CommentRoutes); // Mount routes

const port = process.env.PORT || 8000; 
const ConnectDB = async () => {
    try {
        await mongoose.connect(process.env.MONGO_URL);
        console.log("Connected to MongoDB");
    } catch (err) {
        console.log("Connection error:", err);
    }
};

ConnectDB().then(() => {
    app.listen(port, ()=>{
        console.log('server is running on port', port);
        
    })
})