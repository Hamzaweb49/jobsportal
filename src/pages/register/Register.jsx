import React from "react";
import { Link } from "react-router-dom";
import "./register.scss";
import Jobs from "../../assets/jobs.png";

const Register = () => {
  return (
    <div className="register">
      <div className="card">
        <div className="left">
          <h1>Create an Account</h1>
          <p>You are just one step away from your new job.</p>
          <div className="button">
            <button>Sign up With Google</button>
            <button>Sign up with Facebook</button>
          </div>
          <hr />
          <p className="option">Or</p>
          <form action="">
            <div className="signUpCredentials">
              <input type="email" placeholder="Enter Your Email Adresss" />
              <input type="password" placeholder="Enter Your Password" />
            </div>
            <button className="signUpButton">Sign Up</button>
          </form>
          <span>
            Already have an account
            <Link to="/login" className="signIn">
              <span>Sign in</span>
            </Link>
          </span>
        </div>
        <div className="right">
          <img src={Jobs} alt="" />
        </div>
      </div>
    </div>
  );
};

export default Register;
