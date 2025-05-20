const express = require("express")

const app = express();
// listening port number
const port = 5500;

const dbConnection = require("./db/db.config")

// register route
app.post("/api/users/register",(req,res) =>{
    res.status(201).json({msg : "register" })
})

// login route
app.post("/api/users/login",(req,res) =>{
    res.status(201).json({msg : "login" })
})

// userCheck route
app.get("/api/users/check",(req,res) =>{
    res.status(201).json({msg : "check" })
})

app.listen(port,(err) =>{
    if(err) console.log(err.message);
    else console.log(`its listening: http://localhost:${port}`);
    
})
