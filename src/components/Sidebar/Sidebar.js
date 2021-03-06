import React, { useContext } from "react";
import UserContext from "../../context/userContext";
import { useNavigate } from "react-router";
import "../Sidebar/Sidebar.css";
import SpotifySvg from "../../img/spotify-1.svg";

const Sidebar = ({ updateDiv }) => {
  const { userContext } = useContext(UserContext);

  const navigate = useNavigate();

  /*
    Cuando quiero usar el Sidebar en cualquier otra pagina que no sea home, se rompe.
    Una idea es que cada boton del sidebar me redireccione al hombe si es que la ruta no es la del
    home, en caso contrario mantiene el mismo comportamiento.
  */

  const handleRemoveToken = () => {
    localStorage.removeItem("token");
    navigate("/login");
  };

  const showMyPlaylist = () => {
    updateDiv({
      myPlaylist: true,
      likes: false,
      createPlaylist: false,
      profile: false,
    });
  };

  const showLikes = () => {
    updateDiv({
      myPlaylist: false,
      likes: true,
      createPlaylist: false,
      profile: false,
    });
  };

  const showCreatePlaylist = () => {
    updateDiv({
      myPlaylist: false,
      likes: false,
      createPlaylist: true,
      profile: false,
    });
    
  };

  return (
    <div className="sidebar sidebar">
      <img className="sidebar-logo" src={SpotifySvg} alt="spotify-Logo" />
      <form className="d-flex">
        <input
          className="form-control me-2 sidebar-home-search"
          type="search"
          placeholder="&#xF002; Search"
          aria-label="Search"
        />
      </form>
      <ul className="sidebar-home-items">
        <li>
          <i className="material-icons">playlist_play</i>
          <span onClick={showMyPlaylist}>Mis Playlist</span>
        </li>
        <li>
          <i className="material-icons">favorite</i>
          <span onClick={showLikes}>Me gusta</span>
        </li>
        <li>
          <i className="material-icons">playlist_add</i>
          <span onClick={showCreatePlaylist}>Crear Playlist</span>
        </li>
      </ul>
      <div className="container-profile">
        <div className="user-img-profile">
          {userContext.image === "" ? (
            <div className="user-noImg">
              {userContext.displayName.charAt(0).toLocaleUpperCase()}
            </div>
          ) : (
            <img src={userContext.image} alt="profile-img"></img>
          )}
        </div>
        <div className="user-profile">
          <p>
            {userContext.displayName}
            <i
              className="material-icons"
              id="logout"
              onClick={handleRemoveToken}
            >
              logout
            </i>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
