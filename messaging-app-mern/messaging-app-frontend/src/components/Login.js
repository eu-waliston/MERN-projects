import React from "react";
import "./Login.css";
import { auth, provider } from "../firebase";

const Login = () => {
  const signIn = () => {
    auth
      .signInWithPopup(provider)
      .then((result) => console.log(result))
      .catch((error) => alert(error.message));
  };

  return (
    <div className="login">
      <div className="login__container">
        <i class="bi bi-whatsapp"></i>
        <div className="login__text">
          <h1>Sign In to Messaging App</h1>
        </div>
        <button onClick={signIn}>Sign In with Google</button>
      </div>
    </div>
  );
};

export default Login;
