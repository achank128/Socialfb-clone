import React from "react";
import { Link } from "react-router-dom";
import "./login.css";

export default function Login() {
  return (
    <div className="login">
      <div className="loginWrapper">
        <div className="loginLeft">
          <h3 className="loginLogo">NKCSocial</h3>
          <span className="loginDesc">
            Connect with friends anf the world around you on <b>NKCSocial</b>
          </span>
        </div>
        <div className="loginRight">
          <div className="loginBox">
            <input placeholder="Email" type="text" className="loginInput" />
            <input placeholder="Password" type="text" className="loginInput" />
            <Link to="/">
              <button className="loginButton">Log In</button>
            </Link>
            <span className="loginForgot">Forgot Password?</span>
            <button className="loginRegisterButton">
              <Link to="/register">Create a New Account</Link>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
