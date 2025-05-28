import { Route, Routes, useNavigate } from "react-router-dom";
import Home from "../components/Home/Home";
import Login from "../components/Login/Login";
import Register from "../components/Register/Register";
import { useEffect, useState, createContext } from "react";
import axios from "../utills/axios";
import Header from "../components/Header/Header";
import Footer from "../components/Footer/Footer";
import "./Landing.css";
import About from "../components/About/About";

export const UserContext = createContext();

function Landing() {
  const [person, setPerson] = useState(null);
  const navigate = useNavigate();
  const [showLogin, setShowLogin] = useState(false);

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
        <Route
            path="/login"
          element={
            <>
              <div className="main_wrapper">
                <div className="main_container">
                  <div
                    className={`form-container ${
                      showLogin ? "show-login" : ""
                    }`}
                  >
                    <div className="form-items form-slider">
                      <div className="register_form form-panel">
                        <Register onSwitch={() => setShowLogin(true)} />
                      </div>
                      <div className="login_form form-panel">
                        <Login onSwitch={() => setShowLogin(false)} />
                      </div>
                    </div>
                  </div>
                </div>
                <div className="main_about">
                  <About />
                </div>
              </div>
            </>
          }
        />
      </Routes>
      <Footer />
    </UserContext.Provider>
  );
}

export default Landing;
