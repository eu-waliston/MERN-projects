import React from "react";
import "./Login.css";
import { Link } from "react-router-dom";

const Login = () => {
  return (
    <div className="login">
      <div className="login__container">
        <i className="bi bi-whatsapp"></i>
        <div className="login__text">
          <h1>Sign In to Messaging App</h1>
        </div>
        <button>
          <Link to={"/signup"}>signup</Link>
        </button>
        <button>
          <Link to={"/login"}>Log In</Link>
        </button>
      </div>
    </div>
  );
};

export default Login;
