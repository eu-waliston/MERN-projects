import React from "react";
import { Button } from "@mui/material";
import { Link } from "react-router-dom";
import "./Login.css";

import { actionTypes } from "./reducer";
import { useStateValue } from "./StateProvider";

const Login = () => {
  const [{}, dispatch] = useStateValue();

  const getUser = (e) => {
    let user = localStorage.getItem('username')
    console.log(localStorage.getItem('username'))
    if(e.target.value === '' ) {
      e.target.value = user;
    }
  }
  const getPass = (e) => {
    let pass = localStorage.getItem('password')
    console.log(localStorage.getItem('password'))
    if(e.target.value === '' ) {
      e.target.value = pass;
    }
  }

  return (
    <div className="login">
      <div className="login__container">
      <i class="bi bi-chat-square-text-fill"></i>
        <div className="login__text">
          <form id="fm">
           <label className="lb">Username</label>
            <input type="text" htmlFor="username" name="username" id="username" placeholder="type your username" className="ipt" required onFocus={getUser}/>
            <br />
            <label className="lb">Password</label>
            <input type="password" htmlFor="password" name="password" id="password" placeholder="type your Password" className="ipt" required onFocus={getPass}/>
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
