import React, { createContext, useState } from "react";

const HomeContext = createContext();

const HomeProvider = ({ children }) => {
    const [homeContext, setHomeContext] = useState({
        myPlaylist : true,
        likes : false,
        createPlaylist: false,
        profile: false
    });


    const data = { homeContext, setHomeContext};

    return <HomeContext.Provider value={data}>{children}</HomeContext.Provider>;
        
    
}

export { HomeProvider };
export default HomeContext;
