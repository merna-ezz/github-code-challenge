import React from "react";
import "./formLayout.css";
export const FormLayout = (props) => {
  return (
    <>
      <div
        className={`form-group ${
          props.errors.userName || props.isValidName === false
            ? "field-error"
            : ""
        }`}
      >
        <i className="fa fa-user icon"></i>
        <input
          type="text"
          className="form-control"
          placeholder="Username"
          {...props.register("userName")}
        />{" "}
        {props.isValidName === false ? (
          <p className="errors"> please enter a valid github username</p>
        ) : (
          <p className="errors">{props.errors.userName?.message}</p>
        )}
      </div>

      {props.name === "sign-up" && (
        <div
          className={`form-group ${props.errors.email ? "field-error" : ""}`}
        >
          <i className="fa fa-envelope icon"></i>
          <input
            type="email"
            className="form-control"
            placeholder="Email"
            {...props.register("email")}
          />
          <p className="errors">{props.errors.email?.message}</p>
        </div>
      )}

      <div
        className={`form-group ${props.errors.password ? "field-error" : ""}`}
      >
        <i className="fa fa-lock icon"></i>

        <input
          type="password"
          className="form-control"
          placeholder="Password"
          {...props.register("password")}
        />
        <p className="errors">{props.errors.password?.message}</p>
      </div>
      {props.name === "sign-in" && props.isIncluded === true ? (
        <p className="errors">Don't have an account, please sign up first</p>
      ) : (
        ""
      )}
      <button type="submit" className="btn form-control">
        {props.name === "sign-up" ? `Sign Up ` : "Sign In"}
        {props.name === "sign-up" && props.loading === true ? (
          <div className="loader"></div>
        ) : (
          ""
        )}
      </button>
    </>
  );
};
