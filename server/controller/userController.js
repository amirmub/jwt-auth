const dbConnection = require("../db/db.config");
const bcrypt = require("bcrypt");

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
    return res.status(201).json({ msg: "register successfully" });
  } catch (error) {
    console.log(error.message);
    res.status(500).json({ msg: "Internal server errors" });
  }
}

// login controller
async function login(req, res) {
  res.status(201).json({ msg: "login user" });
}

// checkUser controller
async function checkUser(req, res) {
  res.status(201).json({ msg: "check users" });
}

module.exports = { register, login, checkUser };
