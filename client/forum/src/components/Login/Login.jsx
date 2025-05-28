import { useRef, useContext } from "react";
import axios from "../../utills/axios";
import { Link, useNavigate } from "react-router-dom";
import { UserContext } from "../../pages/Landing";
import classes from "./Login.module.css"

function Login() {
  const { setPerson } = useContext(UserContext);
  const navigate = useNavigate();

  const emailDom = useRef();
  const passwordDom = useRef();

  async function handleSubmit(e) {
    e.preventDefault();
    const emailValue = emailDom.current.value;
    const passwordValue = passwordDom.current.value;

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
    }
  }

  return (
    <div className={classes.login_container}>
      <div>
        <form onSubmit={handleSubmit}>
          <p>Login to Your Account</p>
          <span>
            Don't have an account?
            <Link to="" >
              create a new account
            </Link>
          </span>
          <div>
            <input ref={emailDom} type="email" placeholder="email" />
          </div>
          <br />
          <div>
            <input ref={passwordDom} type="password" placeholder="password" />
          </div><br />
          <button>Login</button>
        </form>
      </div>
    </div>
  );
}

export default Login;
