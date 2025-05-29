import { useContext, useRef, useState } from "react";
import axios from "../../utills/axios";
import { Link, useNavigate } from "react-router-dom";
import { UserContext } from "../../pages/Landing";
import classes from "./Register.module.css";
import { FaEyeSlash } from "react-icons/fa6";
import { IoMdEye } from "react-icons/io";


function Register({ onSwitch }) {
  const { setPerson } = useContext(UserContext);
  const [showPassword, setShowPassword] = useState(false);
  const [inputErrorStyle, setInputErrorStyle] = useState(false);
  const [input, setInput] = useState("");

  const navigate = useNavigate();

  const usernameDom = useRef();
  const firstnameDom = useRef();
  const lastnameDom = useRef();
  const emailDom = useRef();
  const passwordDom = useRef();

  async function handleSubmit(e) {
    e.preventDefault();
    const usernameValue = usernameDom.current.value;
    const firstnameValue = firstnameDom.current.value;
    const lastnameValue = lastnameDom.current.value;
    const emailValue = emailDom.current.value;
    const passwordValue = passwordDom.current.value;

    if (
      !usernameValue ||
      !firstnameValue ||
      !lastnameValue ||
      !emailValue ||
      !passwordValue
    ) {
      setInputErrorStyle(true);
    }

    try {
      const response = await axios.post("/users/register", {
        username: usernameValue,
        firstname: firstnameValue,
        lastname: lastnameValue,
        email: emailValue,
        password: passwordValue,
      });
      setPerson(response.data); // Set the person context
      console.log(response.data);
      navigate("/");
    } catch (error) {
      console.log(error.response.data.msg);
      setInput(error.response.data.msg);
    }
  }

   const toggleVisibility = () => {
    setShowPassword(prev => !prev);
  };

  return (
    <div className={classes.register_container}>
      <p>Join the network</p>
      <span>
        Already have an account?{" "}
        <Link to="" onClick={onSwitch}>
          Sign In
        </Link>
      </span>
      <div>
        <form onSubmit={handleSubmit}>
          <div>
            <input
              ref={usernameDom}
              type="text"
              placeholder="Username"
              className={
                inputErrorStyle && !usernameDom.current?.value
                  ? classes.input_error
                  : ""
              }
            />
          </div>
          <br />
          <div className={classes.names}>
            <div>
              <input
                ref={firstnameDom}
                type="text"
                placeholder="First Name"
                className={
                  inputErrorStyle && !firstnameDom.current?.value
                    ? classes.input_error
                    : ""
                }
              />
            </div>
            <br />
            <div>
              <input
                ref={lastnameDom}
                type="text"
                placeholder="Last Name"
                className={
                  inputErrorStyle && !lastnameDom.current?.value
                    ? classes.input_error
                    : ""
                }
              />
            </div>
          </div>
          <br />
          <div>
            <input
              ref={emailDom}
              type="email"
              placeholder="Email"
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
              type={showPassword ? 'text' : 'password'}
              placeholder="Password"
              className={
                inputErrorStyle && !passwordDom.current?.value
                  ? classes.input_error
                  : ""
              }
            />
          <div onClick={toggleVisibility} className={classes.eye}>{showPassword ? <IoMdEye /> : <FaEyeSlash /> }</div>
          </div>
          <br />
          <small
            style={{ color: "red", fontSize: "12px", paddingBottom: "3px" }}
          >
            {input}
          </small>
          <button>Register</button>
        </form>
      </div>
    </div>
  );
}

export default Register;
