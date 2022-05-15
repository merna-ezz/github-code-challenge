import { Dashboard } from "../components/dashboard/dashboard";
import { SignIn } from "../components/sign/signIn/signIn";
import { SignUp } from "../components/sign/signUp/signUp";
import { SignUpConfirm } from "../components/sign/signUpConfirm/signUpConfirm";

export const RoutingLink = [
  {
    path: "/sign-up",
    protected: false,
    component: <SignUp />,
  },
  {
    path: "/sign-in",
    protected: false,
    component: <SignIn />,
  },
  {
    path: "/sign-up/confirm",
    redirect: "/sign-up",
    protected: true,
    name: "confirm",
    component: SignUpConfirm,
  },
  {
    path: "/dashboard",
    redirect: "/sign-in",
    protected: true,
    name: "dashboard",
    component: Dashboard,
  },
];
