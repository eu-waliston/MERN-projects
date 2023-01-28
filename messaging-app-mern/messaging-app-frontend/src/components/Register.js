import React, {useEffect, useState} from "react";
import { Button } from "@mui/material";
import { Link } from "react-router-dom";
import "./Login.css";
import axios from '../components/axios'

const Register = () => {

  const [username, setUsername] = useState(null);
  const [password, setPassword] = useState(null);

  function newUser() {
    axios.post("/user/new")
  }

  return (
    <div className="login">
      <div className="login__container">
      <i className="bi bi-book"></i>
        <div className="login__text">
          <form id="fm">
            <label className="lb">Username</label>
            <input type={"text"} name="username" id="username" placeholder="type your username" className="ipt" required/>
            <br />
            <label className="lb">Password</label>
            <input type={"text"} name="password" id="password" placeholder="type your Password" className="ipt" required/>
          </form>
        </div>
        <Button id="btn">
            <Link to={"/"} id="gsd" onClick={newUser}>
                Register
            </Link>
        </Button>
        <br />
        <Link to={"/"} id="gs">Login</Link>
      </div>
    </div>
  );
};
export default Register;
