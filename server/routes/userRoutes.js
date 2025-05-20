const express = require("express")
const router = express.Router()

// users controller file
const {register, login, checkUser} = require("../controller/userController");

// register route
router.post("/register",register)

// login route
router.post("/login",login)

// userCheck route
router.get("/check",checkUser)

module.exports = router;