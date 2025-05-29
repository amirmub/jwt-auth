# 🔐 Full-Stack JWT Authentication System

A secure and minimal JWT-based authentication system using React, Node.js, Express, MySQL2, and bcrypt. This project implements user registration, login, logout, token refresh, providing a robust foundation for secure web applications.

---

## 📸 Preview

| Register             | Login               
|----------------------|---------------------
| ![](./client/forum/src/asset/Screenshot%202025-05-29%20164700.png) | ![](./client/forum/src/asset/Screenshot%202025-05-29%20164235.png)  |

---

## ⚙️ Features

✅ Register and Login with secure hashing  
✅ JWT Access + Refresh Token flow  
✅ MySQL2 for persistent user storage  
✅ Bcrypt for password encryption  
✅ Protected routes via middleware  
✅ Token storage and invalidation system  
✅ RESTful API with JSON responses  

---

## 🚀 Tech Stack

| Layer         | Technology                   |
|--------------|------------------------------|
| Frontend      | React, Axios, React Router   |
| Backend       | Node.js, Express             |
| Database      | MySQL, MySQL2 (Driver)       |
| Security      | bcrypt, JWT                  |
| Config & Env  | dotenv                       |
| Dev Tools     | Nodemon, Postman             |

---

## 🧑‍💻 Getting Started

### Follow these steps to run the project locally on your machine.

### 1. Clone the Repository

```bash
git clone https://github.com/amirmub/jwt-auth.git
cd jwt-auth/server
```

### 2. Install dependencies
```bash
npm install
```

### 3. Setup MySQL Tables
```bash
CREATE DATABASE jwt_auth;

CREATE TABLE users (
  user_id INT AUTO_INCREMENT PRIMARY KEY,
  username VARCHAR(255) NOT NULL,
  firstname VARCHAR(255) NOT NULL,
  lastname VARCHAR(255) NOT NULL,
  email VARCHAR(255) NOT NULL UNIQUE,
  password VARCHAR(255) NOT NULL
);

CREATE TABLE tokens (
  id INT AUTO_INCREMENT PRIMARY KEY,
  user_id INT NOT NULL,
  token TEXT NOT NULL,
  FOREIGN KEY (user_id) REFERENCES users(id) ON DELETE CASCADE
);
```

### 4. Start the backend server:
```bash
npm start
```
### 5. Setup Frontend
```bash
cd ../client
npm install
```

### 6. Start the frontend development server:
```bash
npm run dev
```
## 🙌 Contributing

### Fork the repository

### Create a new branch:
```bash
git checkout -b feature-new-feature
```
### Commit your changes:

```bash
git commit -m "Add new feature"
```
### Push to GitHub:
```bash
git push origin feature-new-feature
```
### Open a Pull Request

### 📬 Contact
```bash
📧 Email: amirmubarek01@gmail.com
💻 GitHub: @amirmub
```
