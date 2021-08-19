import React, { useContext } from "react";
import { Link } from "react-router-dom";
import UserContext from "./Usercontext";

function Users() {
  const userContext = useContext(UserContext);
  let handleDelete = (id) => {
    let confirm = window.confirm("Are you want to delete data");
    if (confirm) {
      userContext.userList.splice(id - 1, 1);
      userContext.setuserList([...userContext.userList]);
    }
  };
  return (
    <>
      <h1 className="h3 mb-2 text-gray-800">Users</h1>
      <Link
        to="/creat-user"
        className="btn btn-sm btn-primary shadow-sm margin"
      >
        <i className="fas fa-download fa-sm text-white-50"></i>{" "}Creat users
      </Link>
      <div className="card shadow mb-4">
        <div className="card-header py-3">
          <h6 className="m-0 font-weight-bold text-primary">User List</h6>
        </div>
        <div className="card-body">
          <div className="table-responsive">
            <table
              className="table table-bordered"
              id="dataTable"
              width="100%"
              cellSpacing="0"
            >
              <thead>
                <tr>
                  <th>ID</th>
                  <th>Name</th>
                  <th>Position</th>
                  <th>Office</th>
                  <th>Age</th>
                  <th>Start date</th>
                  <th>Salary</th>
                  <th>Action</th>
                </tr>
              </thead>
              <tbody>
                {userContext.userList.map((obj, index) => {
                  return (
                    <tr>
                      <td>{index + 1}</td>
                      <td>{obj.name}</td>
                      <td>{obj.position}</td>
                      <td>{obj.office}</td>
                      <td>{obj.age}</td>
                      <td>{obj.startdate}</td>
                      <td>{obj.salary}</td>
                      <td>
                        <Link
                          to={`/edit/user/${index + 1}`}
                          className="btn btn-sm btn-primary mt-3 small-margin"
                        >
                          Edit
                        </Link>
                        <button
                          onClick={() => {
                            handleDelete(index + 1);
                          }}
                          className="btn btn-sm btn-danger mt-3 small-margin"
                        >
                          Remove
                        </button>
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </>
  );
}

export default Users;
