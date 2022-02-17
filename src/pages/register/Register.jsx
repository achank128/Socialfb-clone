import React from "react";
import { Link } from "react-router-dom";
import "./register.css";

export default function Register() {
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
            <input placeholder="Username" type="text" className="loginInput" />
            <input placeholder="Password" type="text" className="loginInput" />
            <input
              placeholder="Password Again"
              type="text"
              className="loginInput"
            />
            <Link to="/">
              <button className="loginButton">Sign Up</button>
            </Link>
            <button className="loginRegisterButton">
              <Link to="/login">Log into Account</Link>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
