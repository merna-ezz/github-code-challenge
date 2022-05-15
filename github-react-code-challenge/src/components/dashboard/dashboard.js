import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router";
import { BASE_URL } from "../../utils/validators/endpoints";
import { GetRequest } from "../../utils/validators/http";
import { ContentDetails } from "./contentDetails/contentDetails";
import "./dashboard.css";
export const Dashboard = () => {
  let [data, setData] = useState([]);
  useEffect(() => {
    window.scrollTo(0, 0);
    fetchData();
    document.body.style.backgroundColor = "#f1f4f6";
  }, []);
  let navigate = useNavigate();
  const [loading, setLoading] = useState(false);
  const [name, setName] = useState(false);

  const fetchData = () => {
    setLoading(true);

    const getVal = localStorage.getItem("Login").trim();
    const loginUser = getVal.replaceAll('"', "");
    setName(loginUser);
    const url = `${BASE_URL}/${loginUser}/repos`;
    GetRequest(url).then((res) => {
      const data = res.data;
      setData(data);
      setLoading(false);
    });
  };
  const handleLogOut = () => {
    navigate("/sign-in");
    localStorage.removeItem("Login");
  };
  return (
    <div className="dashboard-content">
      <div className="container">
        <div className="navbar fixed-top ">
          <div className="container">
            <h4>welcome, {name}</h4>
            <button onClick={handleLogOut}>Sign Out</button>
          </div>
        </div>{" "}
        <ContentDetails data={data} loading={loading} />{" "}
      </div>
    </div>
  );
};
