import React from "react";
import "./signPageLayout.css";
export const SignPageLayout = (props) => {
  return (
    <div className="sign-body">
      <div className="container">
        <div className="sign-form-container row">
          <div className="sign-form col-lg-4 col-md-7 col-sm-9 col-10">
            <div className="form-icon ">
              <i className="user fa fa-user-o"></i>
            </div>

            {props.children}
          </div>
        </div>
      </div>
    </div>
  );
};
