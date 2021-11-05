import React, { createContext, useState } from "react";

const UserContext = createContext();

const UserProvider = ({ children }) => {  
  const [userContext, setUserContext] = useState({
    id: "",
    image: "",    
    displayName: "",
    myPlaylist:[],
    likes:[]
  });

  const data = { userContext, setUserContext};

  return <UserContext.Provider value={data}>{children}</UserContext.Provider>;
};

export { UserProvider };
export default UserContext;
