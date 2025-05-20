const express = require("express")
const router = express.Router()

// register route
router.post("/register",(req,res) =>{
    res.status(201).json({msg : "register" })
})

// login route
router.post("/login",(req,res) =>{
    res.status(201).json({msg : "login" })
})

// userCheck route
router.get("/check",(req,res) =>{
    res.status(201).json({msg : "check user" })
})

module.exports = router;