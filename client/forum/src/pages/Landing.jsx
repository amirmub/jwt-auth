import { Route, Routes, useNavigate } from "react-router-dom";
import Home from "../components/Home/Home";
import Login from "../components/Login/Login";
import Register from "../components/Register/Register";
import { useEffect, useState, createContext } from "react";
import axios from "../utills/axios";
import Header from "../components/Header/Header";

export const UserContext = createContext();

function Landing() {
  const [person, setPerson] = useState(null);
  const navigate = useNavigate();
  
  async function checkUser() {
    const token = localStorage.getItem("Token");
    try {
      const { data } = await axios.get("/users/check", {
        headers: {
          Authorization: "Bearer " + token,
        },
      });

      setPerson(data); // Set the person context
      // console.log("User data:", data);
    } catch (error) {
      console.log("Auth error:", error?.response);
      navigate("/login"); // Redirect to login if unauthorized
    }
  }

  useEffect(() => {
    checkUser(); // Check user on mount
  }, []);

  return (
    <UserContext.Provider value={{ person, setPerson }}>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
      </Routes>
    </UserContext.Provider>
  );
}

export default Landing;
