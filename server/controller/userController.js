const dbConnection = require("../db/db.config");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

// register controller
async function register(req, res) {
  const { username, firstname, lastname, email, password } = req.body;

  if (!username || !firstname || !lastname || !email || !password) {
    return res.status(400).json({ msg: "please enter all required fields " });
  }

  try {
    const [existedUser] = await dbConnection.query(
      "SELECT * FROM users WHERE username = ? OR email = ?",
      [username, email]
    );
    if (existedUser.length > 0) {
      return res.status(400).json({ msg: "user already existed" });
    }
    if (password.length < 8) {
      return res
        .status(400)
        .json({ msg: "password must be at least 8 character" });
    }

    const hashedPassword = await bcrypt.hash(password, 10);

    await dbConnection.query(
      "INSERT INTO users (username, firstname, lastname, email, password) VALUES (?,?,?,?,?)",
      [username, firstname, lastname, email, hashedPassword]
    );

    res.status(400).json({ msg: "successfully register" });
    
  } catch (error) {
    console.log(error.message);
    res.status(500).json({ msg: "Internal server errors" });
  }
}

// login controller
async function login(req, res) {
  const { email, password } = req.body;
  if (!email || !password) {
    return res.status(400).json({ msg: "please enter all required fields " });
  }
  try {
    const [existedUser] = await dbConnection.query(
      "SELECT user_id,username,password From users WHERE email = ?",
      [email]
    );
    // user is existed or not
    if (existedUser == 0) {
      return res.status(400).json({ msg: "Account does not exist yet." });
    }
    // compared password
    const isMatch = await bcrypt.compare(password, existedUser[0].password);
    if (!isMatch) {
      return res.status(400).json({ msg: "incorrect password" });
    }
    // JWT Token
    const user_id = existedUser[0].user_id;
    const usename = existedUser[0].usename;

    const Token = jwt.sign({ user_id, usename }, "secret", { expiresIn: "1y" });
    return res.status(200).json({ msg: "register successfully", Token });
  } catch (error) {
    console.log(error.message);
    res.status(500).json({ msg: "Internal server errors" });
  }
}

// checkUser controller
async function checkUser(req, res) {
  const user_id = req.user.user_id;
  const username = req.user.username;

  res.status(201).json({ msg: "check users", user_id, username });
}

module.exports = { register, login, checkUser };
