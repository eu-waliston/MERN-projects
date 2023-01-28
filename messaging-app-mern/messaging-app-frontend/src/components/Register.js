import React from "react";
import { Button } from "@mui/material";
import { Link } from "react-router-dom";
import "./Login.css";
const Register = () => {

  return (
    <div className="login">
      <div className="login__container">
      <i class="bi bi-book"></i>
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
            <Link to={"/register"} id="gsd">
                Sign In
            </Link>
        </Button>
        <br />
        <Link to={"/"} id="gs">Login</Link>
      </div>
    </div>
  );
};
export default Register;
