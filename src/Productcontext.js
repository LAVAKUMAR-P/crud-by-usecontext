import React, { useState } from "react";

let productContext = React.createContext();

export default productContext;

//provide data to children

export const Productprovider =({children}) =>{
  const [prodList, setProdList] = useState([])
  return <productContext.Provider value={{prodList,setProdList}}>
            {children}
        </productContext.Provider>

}