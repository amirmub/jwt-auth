const express = require("express");

const app = express();
// listening port number
const port = 5500;

// db file
const dbConnection = require("./db/db.config");

// users route
const userRouter = require("./routes/userRoutes");
app.use("/api/users", userRouter);

async function start() {
  try {
    const result = dbConnection.getConnection();
    app.listen(port);
    console.log("db connected");
    console.log(`its listening port http://localhost:${port}`);
  } catch (error) {
    console.log(error.message);
  }
}

start();
