import React, { useContext } from "react";
import UserContext from "../../context/userContext";
import { useNavigate } from "react-router";
import "../Sidebar/Sidebar.css";

const Sidebar = () => {

    const { userContext } = useContext(UserContext);

    const history = useNavigate();

    const handleRemoveToken = () => {
        localStorage.removeItem("token");
        history("/login");
      };

  return (
    <div className="sidebar active">
      <div className="toggle-btn">
        <form className="d-flex">
          <input
            className="form-control me-2 sidebar-home-search"
            type="search"
            placeholder="&#xF002; Search"
            aria-label="Search"
          />
        </form>
      </div>
      <ul className="sidebar-home-items">
        <li>
          <i className="material-icons">playlist_play</i>
          Mis Playlist
        </li>
        <li>
          <i className="material-icons">favorite</i>
          Me gusta
        </li>
        <li>
          <i className="material-icons">playlist_add</i>
          Crear Playlist
        </li>
      </ul>
      <div className="container-profile">
        <div className="user-img-profile">
          {userContext.image == "" ? (
            <div className="user-noImg">
              {userContext.displayName.charAt(0).toLocaleUpperCase()}
            </div>
          ) : (
            <img src={userContext.image}></img>
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
