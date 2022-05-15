import { Navigate } from "react-router-dom";

export const ProtectedRouter = ({ Component, redirectTo, name }) => {
  const auth = localStorage.getItem("names");
  if (name === "dashboard") {
    if (localStorage.getItem("Login") === null) {
      return <Navigate to={redirectTo} replace={true} />;
    }
  }

  return auth ? <Component /> : <Navigate to={redirectTo} replace={true} />;
};
