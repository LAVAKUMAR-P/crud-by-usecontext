import React, { useContext, useEffect, useState } from 'react'
import { useHistory } from 'react-router-dom';
import productContext from './Productcontext';

function Editproduct(props) {


  //get the data from DB using Id
  //populate in form
  // update in db



    const ProductContext = useContext(productContext);
    const history = useHistory();
    const [productName, setProductName] = useState("");
    const [price, setPrice] = useState("");
  useEffect(() => {
    let userData = ProductContext.prodList[props.match.params.id-1];
    setProductName(userData.productName);
    setPrice(userData.price);
  }, [props,ProductContext])
  
  let handleSubmit = (e) => {
    e.preventDefault();
    let userData = { productName, price};
    ProductContext.prodList[props.match.params.id-1]=userData;
    ProductContext.setProdList([...ProductContext.prodList]);
    history.push("/product");
  };
        return (
    
            <div>
              <div className="d-sm-flex align-items-center justify-content-between mb-4">
              <h1 className="h3 mb-0 text-gray-800">Edit user</h1>
              </div>
              <form onSubmit={handleSubmit}>
                <div className="row">
                  <div className="col-lg-6">
                  <label>Product name</label>
                  <input value={productName} type="text" onChange={(e)=>{setProductName(e.target.value)}} className="form-control"/>
                  </div>
                  <div className="col-lg-6">
                  <label>price</label>
                  <input value={price} type="text" onChange={(e)=>{setPrice(e.target.value)}} className="form-control"/>
                  </div>
                  <div className="col-lg-12">
                  <input type="submit" value="Update" className="btn btn-primary mt-3" />
                  </div>
                </div>
              </form>
            </div>
        )
}

export default Editproduct
