import React, { useContext } from "react";
import { useEffect } from "react";
import { useNavigate } from "react-router";
import UserContext from "../../context/userContext";
import "../Home/Home.css";
import Navbar from "../../components/Navbar/Navbar";
import Sidebar from "../../components/Sidebar/Sidebar";

const Home = () => {
  const history = useNavigate();

  const { userContext } = useContext(UserContext);

  useEffect(() => {
    if (localStorage.getItem("token")) {
      history("/");
    }
  }, []);

  return (
    <>
      <Navbar />
      <Sidebar />

      {/* Hacer un Contexto para cada uno de las opciones de SideBar, cosa de setear un div diferente
      cuando seleccione el boton y stear diferentes true en distitnos estados cosa de que no se pisen. */}

      <div className="container-body-home">
        <div className="box-my-cards">
          
          <div className="container">
            <div className="row row-cols-3">
            {userContext.myPlaylist.map((playlist) => (
            <div className="card playlist m-2 shadow-sm">
              <img
                src={playlist.image}
                className="card-img-top"
                alt="Playlist-Img"
              />
              <div className="card-body">
                <p className="card-text">{playlist.name}</p>
                <p className="card-text">{playlist.description}</p>
              </div>
            </div>
          ))}
            </div>
        </div>
        </div>
      </div>
    </>
  );
};

export default Home;
