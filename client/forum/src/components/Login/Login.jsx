import { useRef, useContext, useState } from "react";
import axios from "../../utills/axios";
import { Link, useNavigate } from "react-router-dom";
import { UserContext } from "../../pages/Landing";
import classes from "./Login.module.css";
import { FaEyeSlash } from "react-icons/fa6";
import { IoMdEye } from "react-icons/io";

function Login({ onSwitch }) {
  const [input, setInput] = useState("");
  const [toggle,setToggle] = useState(false)
  const [inputErrorStyle, setInputErrorStyle] = useState(false);
  const { setPerson } = useContext(UserContext);
  const navigate = useNavigate();

  const emailDom = useRef();
  const passwordDom = useRef();

  async function handleSubmit(e) {
    e.preventDefault();
    const emailValue = emailDom.current.value;
    const passwordValue = passwordDom.current.value;

    if (!emailValue || !passwordValue) {
      setInputErrorStyle(true);
    }

    try {
      const response = await axios.post("/users/login", {
        email: emailValue,
        password: passwordValue,
      });

      localStorage.setItem("Token", response.data.Token);
      setPerson(response.data);
      console.log(response.data);

      navigate("/");
    } catch (error) {
      console.log(error.response);
      setInput(error.response.data.msg);
    }
  }
  const toggleVisibility = () =>{
    setToggle(prev => !prev);
  }

  return (
    <div className={classes.login_container}>
      <div>
        <form onSubmit={handleSubmit}>
          <p>Login to Your Account</p>
          <span>
            Don't have an account?
            <Link to="" onClick={onSwitch}>
              create a new account
            </Link>
          </span>
          <div>
            <input
              ref={emailDom}
              type="Email"
              placeholder="email"
              className={
                inputErrorStyle && !emailDom.current?.value
                  ? classes.input_error
                  : ""
              }
            />
          </div>
          <br />
          <div className={classes.password_visit}>
            <input
              ref={passwordDom}
              type={toggle ? "text" : "password"}
              placeholder="Password"
              className={
                inputErrorStyle && !passwordDom.current?.value
                  ? classes.input_error
                  : ""
              }
            />
            <div onClick={toggleVisibility} className={classes.eye}>{toggle ? <IoMdEye /> : <FaEyeSlash />}</div>
          </div>
          <br />
          <small
            style={{ color: "red", fontSize: "12px", paddingBottom: "3px" }}
          >
            {input}
          </small>
          <button>Login</button>
          <p style={{ marginTop: "10px ", fontSize: "14px" }}>
            <Link
              href="/forgot-password"
              style={{
                color: "#1919e6",
                textDecoration: "none",
                fontSize: "12.5px",
                fontWeight: "300",
              }}
            >
              Forgot your password?
            </Link>
          </p>
        </form>
      </div>
    </div>
  );
}

export default Login;
