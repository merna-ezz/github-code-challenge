import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FormLayout } from "../formLayout/formLayout";
import { SignPageLayout } from "../signPageLayout/signPageLayout";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { LoginSchema } from "../../../utils/validators/auth";
import { useNavigate } from "react-router-dom";
export const SignIn = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(LoginSchema),
  });
  const [isIncluded, setIsIncluded] = useState(false);
  let navigate = useNavigate();
  const onSubmitHandler = (data) => {
    if (localStorage.getItem("names") !== null) {
      let users = localStorage.getItem("names");
      if (users.includes(data.userName)) {
        localStorage.setItem("Login", JSON.stringify(data.userName));

        navigate("/dashboard", { replace: true });
      } else {
        setIsIncluded(true);
      }
    } else {
      setIsIncluded(true);
    }
  };

  return (
    <SignPageLayout>
      <h5>Log in to App</h5>
      <form
        className="sign-form-layout"
        onSubmit={handleSubmit(onSubmitHandler)}
      >
        <FormLayout
          name="sign-in"
          onSubmitHandler={onSubmitHandler}
          handleSubmit={handleSubmit}
          register={register}
          errors={errors}
          isIncluded={isIncluded}
        />
      </form>
      <span className="text-center">
        Don't have an account? <Link to="/sign-up">Sign Up</Link>
      </span>
    </SignPageLayout>
  );
};
