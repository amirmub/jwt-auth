import { useRef, useContext } from "react";
import axios from "../../utills/axios";
import { useNavigate } from "react-router-dom";
import { UserContext } from "../../pages/Landing";

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

      navigate("/");
    } catch (error) {
      console.log(error.response);
    }
  }

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <div>
          <label>email :--</label>
          <input ref={emailDom} type="email" placeholder="email" />
        </div>
        <br />
        <div>
          <label>password :--</label>
          <input ref={passwordDom} type="password" placeholder="password" />
        </div>
        <button>Login</button>
      </form>
    </div>
  );
}

export default Login;
