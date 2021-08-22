import React, { useContext, useState } from "react";
import { useHistory } from "react-router-dom";
import productContext from "./Productcontext";

function Createproduct() {
  const ProductContext = useContext(productContext);
  const history = useHistory();
  const [productName, setUserName] = useState("");
  const [price, setPrice] = useState("");

  let handleSubmit = (e) => {
    e.preventDefault();
    let userData = { productName, price };
    ProductContext.setProdList([...ProductContext.prodList, userData]);
    history.push("/product");
  };

  return (
    <div>
      <div className="d-sm-flex align-items-center justify-content-between mb-4">
        <h1 className="h3 mb-0 text-gray-800">Creat product</h1>
      </div>
      <form onSubmit={handleSubmit}>
        <div className="row">
          <div className="col-lg-6">
            <label>product name</label>
            <input
              value={productName}
              type="text"
              onChange={(e) => {
                setUserName(e.target.value);
              }}
              className="form-control"
              required
            />
          </div>
          <div className="col-lg-6">
            <label>Price</label>
            <input
              value={price}
              type="text"
              onChange={(e) => {
                setPrice(e.target.value);
              }}
              className="form-control"
              required
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

export default Createproduct;
