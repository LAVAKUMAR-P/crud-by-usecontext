import React, { useContext } from "react";
import { useState } from "react";
import { useHistory } from "react-router-dom";
import UserContext from "./Usercontext";

function Createuser() {
  const userContext = useContext(UserContext);
  const history = useHistory();
  const [name, setUserName] = useState("");
  const [position, setPosition] = useState("");
  const [office, setOffice] = useState("");
  const [age, setAge] = useState("");
  const [startdate, setStartDate] = useState("");
  const [salary, setSalary] = useState("");

  let handleSubmit = (e) => {
    e.preventDefault();
    let userData = { name, position, office, age, startdate, salary };
    userContext.setuserList([...userContext.userList, userData]);
    history.push("/user");
  };
  return (
    <div>
      <div className="d-sm-flex align-items-center justify-content-between mb-4">
        <h1 className="h3 mb-0 text-gray-800">Creat user</h1>
      </div>
      <form onSubmit={handleSubmit}>
        <div className="row">
          <div className="col-lg-6">
            <label>User name</label>
            <input
              value={name}
              type="text"
              onChange={(e) => {
                setUserName(e.target.value);
              }}
              className="form-control"
              required
            />
          </div>
          <div className="col-lg-6">
            <label>Position</label>
            <input
              value={position}
              type="text"
              onChange={(e) => {
                setPosition(e.target.value);
              }}
              className="form-control"
              required
            />
          </div>
          <div className="col-lg-6">
            <label>Office</label>
            <input
              value={office}
              type="text"
              onChange={(e) => {
                setOffice(e.target.value);
              }}
              className="form-control"
              required
            />
          </div>
          <div className="col-lg-6">
            <label>Age</label>
            <input
              value={age}
              type="text"
              onChange={(e) => {
                setAge(e.target.value);
              }}
              className="form-control"
            />
          </div>
          <div className="col-lg-6">
            <label>Start Date</label>
            <input
              value={startdate}
              type="date"
              onChange={(e) => {
                setStartDate(e.target.value);
              }}
              className="form-control"
            />
          </div>
          <div className="col-lg-6">
            <label>Salary</label>
            <input
              value={salary}
              type="text"
              onChange={(e) => {
                setSalary(e.target.value);
              }}
              className="form-control"
            />
          </div>
          <div className="col-lg-12">
            <input
              type="submit"
              value="Submit"
              className="btn btn-primary mt-3"
            />
          </div>
        </div>
      </form>
    </div>
  );
}

export default Createuser;
