import React, { useEffect, useContext, useState } from "react";
import { useNavigate } from "react-router";
import UserContext from "../../context/userContext";
import "../Home/Home.css";
import Navbar from "../../components/Navbar/Navbar";
import Sidebar from "../../components/Sidebar/Sidebar";
import Cards from "../../components/Cards/Cards";
import Footer from "../../components/Footer/Footer";
import { removeToken } from "../../utils/global-functions";
import ModalSong from "../../components/Modals/ModalSong/ModalSong";

const Home = () => {
  const navigate = useNavigate();

  const { userContext } = useContext(UserContext);

  const [isOpenModalUiSongs, setModalSongs] = useState(false);

  const [showDiv, setShowDiv] = useState({
    myPlaylist: true,
    likes: false,
    createPlaylist: false,
    profile: false,
  });

  useEffect(() => {
    localStorage.getItem("token") && userContext.id
      ? navigate("/")
      : handleRemoveToken();

      console.log(isOpenModalUiSongs);

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const handleRemoveToken = () => {
    removeToken();
    navigate("/login");
  };

  const showModalSongs = () => {
    console.log("Modal Para mostrar");
    setModalSongs(prevState => !prevState)};

  return (
    <>
      <Sidebar updateDiv={setShowDiv} />
      <div className="container-body-home">
        <div className="container">
          {showDiv.myPlaylist && (
            <div>
              <h1 className="tittle-cards">Mis Playlist</h1>
              <Cards list={userContext.myPlaylist} showModalSongs={setModalSongs}/>
            </div>
          )}
          {isOpenModalUiSongs && <ModalSong showModal={setModalSongs}/>}
          {showDiv.likes && (
            <div>
              <h1 className="tittle-cards">Mis Me Gusta</h1>
              <Cards list={userContext.likes} />
            </div>
          )}
          {showDiv.createPlaylist && (
            <div>
              <h1 className="tittle-cards">Crear Playlist</h1>
            </div>
          )}
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Home;
