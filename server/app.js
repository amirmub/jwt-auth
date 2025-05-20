const express = require("express")

const app = express();
// listening port number
const port = 5500;

const dbConnection = require("./db/db.config")

// users route
const userRouter = require("./routes/userRoutes")
app.use("/api/users",userRouter)


app.listen(port,(err) =>{
    if(err) console.log(err.message);
    else console.log(`its listening: http://localhost:${port}`);
    
})
