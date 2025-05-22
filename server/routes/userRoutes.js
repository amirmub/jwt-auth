const express = require("express")
const router = express.Router()

// users controller file
const {register, login, checkUser} = require("../controller/userController");

// register route
router.post("/register",register)

// login route
router.post("/login",login)

// auth Middleware file
const authMiddleware = require("../middleware/authMiddleware")

// userCheck route
router.get("/check",authMiddleware,checkUser)

module.exports = router;