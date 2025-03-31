const jwt = require('jsonwebtoken');

const authMiddleware = (req, res, next) => {
    const authHeader = req.header("Authorization");
    if (!authHeader) return res.status(401).json({ message: "Access Denied!" });
    
    // Handle Bearer token format
    const token = authHeader.startsWith('Bearer ') ? 
        authHeader.substring(7, authHeader.length) : authHeader;
    
        try {
            const verified = jwt.verify(token, process.env.JWT_SECRET);
            req.user = verified;
            next();
        } catch (error) {
            res.status(400).json({ message: "Invalid Token!" });
        }
};

module.exports = authMiddleware;