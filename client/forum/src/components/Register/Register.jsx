import { useContext, useRef } from "react";
import axios from "../../utills/axios";
import { useNavigate } from "react-router-dom";
import { UserContext } from "../../pages/Landing";

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
      // localStorage.setItem("Token", response.data.Token);
      setPerson(response.data); // Set the person context
      console.log(response.data);
      navigate("/");
    } catch (error) {
      console.log(error.response);
    }
  }

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="">username :--</label>
          <input ref={usernameDom} type="text" placeholder="username" />
        </div>
        <br />
        <div>
          <label htmlFor="">firstname :--</label>
          <input ref={firstnameDom} type="text" placeholder="firstname" />
        </div>
        <br />
        <div>
          <label htmlFor="">lastname :--</label>
          <input ref={lastnameDom} type="text" placeholder="lastname" />
        </div>
        <br />
        <div>
          <label htmlFor="">email :--</label>
          <input ref={emailDom} type="email" placeholder="email" />
        </div>
        <br />
        <div>
          <label htmlFor="">password :--</label>
          <input ref={passwordDom} type="password" placeholder="password" />
        </div>
        <button>Register</button>
      </form>
    </div>
  );
}

export default Register;
