const jwt = require("jsonwebtoken");

async function authMiddleware(req,res,next) {
    const authHeader = req.headers.authorization;
    if (!authHeader || !authHeader.startsWith("Bearer ")) {
        res.status(400).json({ msg : "there is no token"})
    } 
    const Token = authHeader.split(' ')[1]
    console.log(Token);
    

    try {
        const {user_id, username} = jwt.verify(Token,"secret")
        req.user = {user_id, username} 
        next();
    } catch (error) {
        console.log(error.message);
        res.status(500).json({ msg : "internal server errors"})
    }
}

module.exports = authMiddleware;