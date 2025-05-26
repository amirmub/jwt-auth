import { useRef } from "react";
import axios from "../../utills/axios";
import {useNavigate} from "react-router-dom"


function Login() {
  const navigate = useNavigate();

  const emailDom = useRef();
  const passwordDom = useRef();

  async function handleSubmit(e) {
    e.preventDefault();
    const emailValue = emailDom.current.value;
    const passwordValue = passwordDom.current.value;

    try {
      const response = await axios.post("/users/login",
        {
        email : emailValue,
        password : passwordValue
      });

      console.log(response);
      localStorage.setItem("Token", response.data.Token);
      navigate("/");
      
    } catch (error) {
      console.log(error.response);
      
    }
  }

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="">email :--</label>
          <input ref={emailDom} type="email" placeholder="email" />
        </div>
        <br />
        <div>
          <label htmlFor="">password :--</label>
          <input ref={passwordDom} type="password" placeholder="password" />
        </div>
        <button>Login</button>
      </form>
    </div>
  );
}

export default Login;
