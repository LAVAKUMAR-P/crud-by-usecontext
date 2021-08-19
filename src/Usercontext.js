import React, { useState } from "react";

let userContext = React.createContext();

export default userContext;

//provide data to children

export const UserProvider =({children}) =>{
  const [userList, setuserList] = useState([])
  return <userContext.Provider value={{userList,setuserList}}>
            {children}
        </userContext.Provider>

}