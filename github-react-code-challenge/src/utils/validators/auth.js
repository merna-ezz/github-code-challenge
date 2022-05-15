import * as yup from "yup";

export const RegisterSchema = yup.object().shape({
  userName: yup.string().required(),
  email: yup.string().email().required(),
  password: yup.string().min(8).max(32).required(),
});

export const LoginSchema = yup.object().shape({
  userName: yup.string().required(),
  password: yup.string().min(8).max(32).required(),
});
