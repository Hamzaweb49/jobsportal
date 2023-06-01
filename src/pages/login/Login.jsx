import React from "react";
import { Link } from "react-router-dom";
import "./login.scss";
import Jobs from "../../assets/jobs.png"

const Login = () => {

  return (
    <div className="login">
      <div className="card">
        <div className="left">
          <h1>Login to your Account</h1>
          <p>
          You are just one step away from your new job.
          </p>
          <div className="button">
          <button>Sign in With Google</button>
          <button>Sign in with Facebook</button>
          </div>
          <hr />
          <p className="option">Or</p>
          <form action="">
          <div className="loginCredentials">
            <input type="email" placeholder="Enter Your Email Adresss" />
            <input type="password" placeholder="Enter Your Password" />
          </div>
          <button className="loginButton">Login</button>
          </form>
          <span>Don't you have an account<Link to="/register" className="signUp"><span>Sign up</span></Link></span>
        </div>
        <div className="right">
            <img src={Jobs} alt="" />
        </div>
      </div>
    </div>
  );
};

export default Login;
