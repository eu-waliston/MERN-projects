import React, {  useState } from "react";
import { Button } from "@mui/material";
import { Link } from "react-router-dom";
import "./Login.css";
import axios from 'axios';

const Register = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const newUser = (e) => {
    localStorage.setItem('blogTitle', 'Irias Lab');
    axios.post("http://localhost:9000/user/new", {
      username: username,
      password: password,
    });
  }
  const usernameEvent = (event) => {
    setUsername(event.target.value);
    localStorage.setItem("username", event.target.value)
  };
  const passwordEvent = (event) => {
    setPassword(event.target.value);
    localStorage.setItem("password", event.target.value)
  }

  return (
    <div className="login">
      <div className="login__container">
        <i className="bi bi-book"></i>
        <div className="login__text">
          <form id="fm" type="POST">
            <label className="lb">Username</label>

            <input type="text" htmlFor="username" name="username" id="username" placeholder="type your username" className="ipt" onChange={usernameEvent} />
            <br />
            <label className="lb">Password</label>

            <input type="password" htmlFor="password" name="password" id="password" placeholder="type your Password" className="ipt" onChange={passwordEvent} />
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
