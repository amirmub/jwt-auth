import { Route, Routes } from "react-router-dom"
import Home from "../components/Home/Home"
import Login from "../components/Login/Login"
import Register from "../components/Register/Register"

function Landing() {
  return (
    <div>
      <Routes>
        <Route path="/" element = {<Home />}/>
        <Route path="/register" element = {<Register />}/>
        <Route path="/login" element = {<Login />}/>
      </Routes>
    </div>
  )
}

export default Landing
