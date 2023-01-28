import React from "react";
import { Button } from "@mui/material";
import { Link } from "react-router-dom";
import "./Login.css";
const Login = () => {

  return (
    <div className="login">
      <div className="login__container">
      <i class="bi bi-chat-square-text-fill"></i>
        <div className="login__text">
          <form id="fm">
            <label className="lb">Username</label>
            <input type={"text"} placeholder="type your username" className="ipt" />
            <br />
            <label className="lb">Password</label>
            <input type={"text"} placeholder="type your Password" className="ipt" />
          </form>
        </div>
        <Button id="btn">
            <Link to={"/app"} id="gsd">
                Login
            </Link>
        </Button>
        <br />
        <Link to={"/register"} id="gs">Register</Link>
      </div>
    </div>
  );
};
export default Login;
