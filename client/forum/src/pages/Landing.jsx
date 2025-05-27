import { Route, Routes, useNavigate } from "react-router-dom";
import Home from "../components/Home/Home";
import Login from "../components/Login/Login";
import Register from "../components/Register/Register";
import { useEffect, useState } from "react";
import axios from "../utills/axios";

function Landing() {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(true);

  async function checkUser() {
      try {
        const token = localStorage.getItem("Token");
        await axios.get("/users/check", {
          headers: {
            Authorization: "Bearer " + token,
          }
        });
      } catch (error) {
        navigate("/login");
        console.log(error?.response);
      } finally {
        setLoading(false);
      }
    }

  useEffect(() => {
    checkUser();
  }, [navigate]);

  if (loading) return <div>Checking authentication...</div>;

  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
      </Routes>
    </div>
  );
}

export default Landing;
