import React, { useContext } from "react";
import { Link } from "react-router-dom";
import productContext from "./Productcontext";
function Product() {
  const ProductContext = useContext(productContext);

  let handleDelete = (id) => {
    let confirm = window.confirm("Are you want to delete data");
    if (confirm) {
      ProductContext.prodList.splice(id - 1, 1);
      ProductContext.setProdList([...ProductContext.prodList]);
    }
  };
  return (
    <>
      <h1 className="h3 mb-2 text-gray-800">product</h1>
      <Link
        to="/creat-product"
        className="btn btn-sm btn-primary shadow-sm margin"
      >
        <i className="fas fa-download fa-sm text-white-50"></i>{" "}Creat Poroduct
      </Link>
      <div className="card shadow mb-4">
        <div className="card-header py-3">
          <h6 className="m-0 font-weight-bold text-primary">Product List</h6>
        </div>
        <div className="card-body">
          <div className="table-responsive">
            {
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
                    <th>Price</th>
                    <th>Action</th>
                  </tr>
                </thead>
                <tbody>
                  {ProductContext.prodList.map((obj, index) => {
                    return (
                      <tr>
                        <td>{index + 1}</td>
                        <td>{obj.productName}</td>
                        <td>{obj.price}</td>
                        <td>
                          <Link
                            to={`/edit/product/${index + 1}`}
                            className="btn btn-sm btn-primary small-margin"
                          >
                            Edit
                          </Link>
                          <button
                            className="btn btn-sm btn-danger small-margin"
                            onClick={() => {
                              handleDelete(index + 1);
                            }}
                          >
                            Remove
                          </button>
                        </td>
                      </tr>
                    );
                  })}
                </tbody>
              </table>
            }
          </div>
        </div>
      </div>
    </>
  );
}

export default Product;
