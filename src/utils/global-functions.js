import React, { useContext }  from 'react';
import UserContext from '../context/userContext';

export const LoadUserContext = (user) => {

    const {setUserContext} = useContext(UserContext); 

    setUserContext({
        id: user.id,
        image: user.image,    
        displayName: user.displayName,
        myPlaylist: user.myPlaylist,
        likes: user.likes
    })  
};
