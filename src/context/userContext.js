import React, { createContext, useState } from "react";

const UserContext = createContext();

const UserProvider = ({ children }) => {  
  const [user, setUser] = useState({
    id: "",
    displayName: "",
    email:"",
    image: "",    
  });

  const data = { user, setUser};

  return <UserContext.Provider value={data}>{children}</UserContext.Provider>;
};

export { UserProvider };
export default UserContext;
