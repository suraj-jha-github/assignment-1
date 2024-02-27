import React, { useState } from "react";
import { addUser } from "./userReducer";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

function Create() {
  function validateName(inputElement) {
    const name = inputElement.value.trim();
    const nameErrorSpan = document.getElementById("name-error");

    if (name.length === 0) {
      nameErrorSpan.textContent = "Name is required.";
    } else if (name.length < 3) {
      nameErrorSpan.textContent = "Name must be at least 3 characters long.";
    } else {
      nameErrorSpan.textContent = "";
    }
  }

  const [name, setName] = useState();
  const [age, setAge] = useState();
  const [mobile, setMobile] = useState();
  const [govtIdType, setGovtIdType] = useState();
  const [govtId, setGovtId] = useState();
  const [sex, setSex] = useState();
  const dispatch = useDispatch();
  const users = useSelector((state) => state.users);
  const navigate = useNavigate();

  const handleSubmit = (event) => {
    event.preventDefault();
    dispatch(
      addUser({
        id: users[users.length - 1].id + 1,
        name,
        age,
        sex,
        mobile,
        govtIdType,
        govtId,
      })
    );
    navigate("/");
  };
  return (
    <div className="d-flex w-100 vh-100 justify-content-center align-items-center">
      <div className="w-50 border bg-secondary text-white p-5">
        <h3>Add new User</h3>
        <form onSubmit={handleSubmit}>
          <div>
            <label htmlFor="name">Name</label>
            <input
              required
              type="text"
              name="name"
              className="form-control"
              onChange={(e) => setName(e.target.value)}
            />
          </div>
          <div>
            <label htmlFor="age">Age</label>
            <input
              required
              type="number"
              name="age"
              className="form-control"
              onChange={(e) => setAge(e.target.value)}
            />
          </div>
          <div>
          <label for="sex">Select Gender</label>
            <select className="form-control"
             onChange={(e) => setSex(e.target.value)} id="sex" name="sex">
              <option value="Male">Male</option>
              <option value="Female">Female</option>
            </select>
            
          </div>
          <div>
            <label htmlFor="mobile">Mobile</label>
            <input
              required
              type="number"
              name="mobile"
              className="form-control"
              onChange={(e) => setMobile(e.target.value)}
            />
          </div>
          <div>
            <label for="govt Id">Select Document</label>
            <select className="form-control"
              onChange={(e) => setGovtIdType(e.target.value)} id="govtIdType" name="govtIdType">
              <option value="Adhar">Adhar</option>
              <option value="Pan Card">PAN CARD</option>
            </select>
            
          </div>
          <div>
            <label htmlFor="govtId">Govt Id</label>
            <input
              required
              type="number"
              name="govtid"
              className="form-control"
              onChange={(e) => setGovtId(e.target.value)}
            />
          </div>
          <br />
          <button className="btn btn-info">Submit</button>
        </form>
      </div>
    </div>
  );
}

export default Create;
