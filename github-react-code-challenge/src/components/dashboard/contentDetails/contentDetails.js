import React from "react";
import "./contentDetails.css";
export const ContentDetails = (props) => {
  let data = props.data;
  return (
    <div className="dashboard-content-data">
      <p className="loading">{props.loading && "loading..."}</p>

      <table className="table table-striped">
        <thead>
          <tr>
            <th scope="col">Repo Name</th>
            <th scope="col">Description</th>
            <th scope="col">No of starts</th>
            <th scope="col">No. of issues</th>
          </tr>
        </thead>
        <tbody>
          {data.map((item, index) => {
            return (
              <tr key={index}>
                <td>{item.name}</td>
                <td>{item.description}</td>
                <td>{item.stargazers_count}</td>
                <td>{item.open_issues_count}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};
