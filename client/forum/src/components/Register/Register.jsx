import { useContext, useRef } from "react";
import axios from "../../utills/axios";
import { Link, useNavigate } from "react-router-dom";
import { UserContext } from "../../pages/Landing";
import classes from "./Register.module.css";

function Register() {
  const { setPerson } = useContext(UserContext);

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
      console.log(error.response);
    }
  }

  return (
    <div className={classes.register_container}>
      <p>Join the network</p>
      <span>
        Already have an account? <Link to="">Sign In</Link>
      </span>
      <div>
        <form onSubmit={handleSubmit}>
          <div>
            <input ref={usernameDom} type="text" placeholder="username" />
          </div>
          <br />
          <div className={classes.names}>
            <div>
              <input ref={firstnameDom} type="text" placeholder="firstname" />
            </div>
            <br />
            <div>
              <input ref={lastnameDom} type="text" placeholder="lastname" />
            </div>
          </div>
          <br />
          <div>
            <input ref={emailDom} type="email" placeholder="email" />
          </div>
          <br />
          <div>
            <input ref={passwordDom} type="password" placeholder="password" />
          </div>
          <button>Register</button>
        </form>
      </div>
    </div>
  );
}

export default Register;
