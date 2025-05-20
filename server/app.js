const express = require("express")

const app = express();
const port = 5500;

const dbConnection = require("./db/db.config")

app.get("/",(req,res) =>{
    res.send("test")
})

app.listen(port,(err) =>{
    if(err) console.log(err.message);
    else console.log(`its listening: http://localhost:${port}`);
    
})