import React from "react";
import { useSelector } from "react-redux";
import { Link, } from "react-router-dom";

function Home() {
  const users = useSelector((state) => state.users);
  console.log(users);
  
  return (
    <div className="container">
      <h2>Form </h2>
      <Link to="/create" className="btn btn-success my-3">Create +</Link>
      <table className="table">
        <thead>
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Age</th>
            <th>Sex</th>
            <th>Mobile</th>
            <th>GovtIdType</th>
            <th>GovtId</th>
          
          </tr>
        </thead>
        <tbody>
          {users.map((user, index) => (
            <tr key={index}>
              <td>{user.id} </td>
              <td>{user.name} </td>
              <td>{user.age} </td>
              <td>{user.sex} </td>
              <td>{user.mobile} </td>
              <td>{user.govtIdType} </td>
              <td>{user.govtId} </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default Home;
