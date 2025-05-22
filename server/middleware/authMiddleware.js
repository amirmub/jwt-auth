const jwt = require("jsonwebtoken");

async function authMiddleware(req,res,next) {
    const authHeader = req.headers.authorization;
    if (!authHeader) {
        res.status(400).json({ msg : "there is no token"})
    } 

    try {
        const {user_id, username} = jwt.verify(authHeader,"secret")
        req.user = {user_id, username} 
        next();
    } catch (error) {
        console.log(error.message);
        res.status(500).json({ msg : "internal server errors"})
    }
}

module.exports = authMiddleware;