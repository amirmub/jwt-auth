// register controller
async function register (req,res) {
    res.status(201).json({msg : "register" })
}

// login controller
async function login (req,res) {
    res.status(201).json({msg : "login user" })
}

// checkUser controller
async function checkUser (req,res) {
    res.status(201).json({msg : "check users" })
}

module.exports = {register, login, checkUser}
