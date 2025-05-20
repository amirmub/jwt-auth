const mysql2 = require("mysql2");

const dbConnection = mysql2.createPool({
  user: "form__admin",
  database: "form",
  password: "form__admin",
  host: "localhost",
  connectionLimit: 10,
});

dbConnection.getConnection((err) => {
  if (err) console.log(err.message);
  else console.log("db connected");
});
