require('dotenv').config();
const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
const authRoutes = require("./routes/auth"); 
const cookieParser = require("cookie-parser");

const app = express();

app.use(cookieParser()); // Correct order
app.use(cors({
    origin: "http://localhost:5173", // React frontend URL
    credentials: true, // Allow cookies
}));
app.use(express.json());

app.use("/auth", authRoutes); // Correct route prefix

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
    app.listen(port, () => {
        console.log('Server is running on port', port);
    });
});
