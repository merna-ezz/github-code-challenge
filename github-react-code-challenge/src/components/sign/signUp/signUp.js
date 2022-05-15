import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FormLayout } from "../formLayout/formLayout";
import { SignPageLayout } from "../signPageLayout/signPageLayout";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { RegisterSchema } from "../../../utils/validators/auth";
import { GetRequest } from "../../../utils/validators/http";
import { BASE_URL } from "../../../utils/validators/endpoints";
import { useNavigate } from "react-router";
export const SignUp = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(RegisterSchema),
  });
  let navigate = useNavigate();
  let [isValidName, setIsValidName] = useState();
  const [loading, setLoading] = useState(false);

  const onSubmitHandler = (data) => {
    let new_user = data.userName;
    const url = `${BASE_URL}/${new_user}/repos`;
    setLoading(true);

    GetRequest(url)
      .then((res) => {
        if (res.status === 200) {
          if (localStorage.getItem("names") === null) {
            localStorage.setItem("names", "[]");
          }
          let old_data = JSON.parse(localStorage.getItem("names"));
          old_data.push(new_user);
          localStorage.setItem("names", JSON.stringify(old_data));

          navigate("/sign-up/confirm");
          setIsValidName(true);
          setLoading(false);
        }
      })
      .catch((e) => {
        setIsValidName(false);
      });
  };

  return (
    <SignPageLayout>
      <h5>Create a New account</h5>
      <form
        className="sign-form-layout"
        onSubmit={handleSubmit(onSubmitHandler)}
      >
        <FormLayout
          name="sign-up"
          onSubmitHandler={onSubmitHandler}
          handleSubmit={handleSubmit}
          register={register}
          errors={errors}
          isValidName={isValidName}
          loading={loading}
        />
      </form>
      <span className="text-center">
        Already have an account? <Link to="/sign-in">Sign In</Link>
      </span>
    </SignPageLayout>
  );
};
