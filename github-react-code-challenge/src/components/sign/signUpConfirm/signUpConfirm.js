import React from "react";
import { Link } from "react-router-dom";
import "./signupConfirm.css";
export const SignUpConfirm = () => {
  return (
    <div className="sign-confirm">
      <div className="container">
        <i className="fa fa-check-circle"></i>
        <h5>Thank you!</h5>
        <p>Your account has has been successfully created.</p>
        <Link to="/sign-in">Go to login screen</Link>
      </div>
    </div>
  );
};
