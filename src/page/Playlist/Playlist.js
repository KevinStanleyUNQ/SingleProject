import React, { useState } from "react";
import "../Playlist/Playlist.css";
import Sidebar from "../../components/Sidebar/Sidebar";
import { useParams } from "react-router";
import axios from "axios";
import { useEffect } from "react";
import { convertSecondToMinAndSec } from "../../utils/global-functions";
import { v4 as uuidv4 } from "uuid";
import { AiOutlineHeart } from "react-icons/ai";
import { BsFillTrashFill } from "react-icons/bs";
import Player from "../../components/PlayerSongs/Player";
import { render } from "@testing-library/react";

const Playlist = (props) => {
  /**
   * Otra cosa a recordad, cuando agrego canciones la lista se va hacia arriba, ver que pasa.
   */

  const { id } = useParams();

  const [songSelected, setSongSelected] = useState({
    id: "",
    name: "",
    band: "",
    url: "",
    duration: 0
  });

  useEffect(() => {
    getPlaylistById();
  }, []);

  useEffect(() => {
  }, [songSelected]);

  const [playlist, setPlaylist] = useState({
    id: "",
    name: "",
    description: "",
    image: "",
    songs: [],
    likes: [],
    duration: "",
  });


  const getPlaylistById = async () => {
    const playlistRes = await axios.get(
      "http://localhost:7000/playlist/" + id,
      {
        headers: { authentication: localStorage.getItem("token") },
      }
    );

    setPlaylist({
      id: playlistRes.data.id,
      name: playlistRes.data.name,
      description: playlistRes.data.description,
      image: playlistRes.data.image,
      songs: playlistRes.data.songs,
      likes: playlistRes.data.likes,
      duration: playlistRes.data.duration,
    });
  };

  const playSong = (song) => {
    setSongSelected(song)
  };
  

  return (
    <>
      <Sidebar />
      <div className="container playlistId">
        <div className="container-playlist">
          <section className="playlist-image">
            <img
              src={playlist.image}
              className="rounded mx-auto d-block album-img"
              alt="album-img"
            />
            <div className="playlist description">
              <h1 className="playlist title">Playlist: {playlist.name}</h1>
              <span className="playlist lenght">
                {playlist.songs.length} Canciones
              </span>
            </div>
          </section>
        </div>
        <div className="container-tracks">
          <div className="all-tracks">
            <div className="tracks">
              <div className="tracks-heading">
                <div className="tracks-heading-id">ID</div>
                <div className="tracks-heading-title">Titulo</div>
                <div className="tracks-heading-duration">Duracion</div>
                <div className="tracks-heading-like">Like</div>
              </div>

              {playlist.songs.map((song, index) => (
                <div key={uuidv4()} className="track" onClick={() => playSong(song)}>
                  <div className="track-id">{index + 1}</div>
                  <div className="track-added">
                    <BsFillTrashFill />
                  </div>
                  <div className="track-title">
                    {song.name} - {song.band}
                  </div>
                  <div className="track-duration">
                    {convertSecondToMinAndSec(song.duration)}
                  </div>
                  <div className="track-like">
                    <AiOutlineHeart />
                  </div>
                </div>
              ))}

            </div>
          </div>
        </div>
      </div>
      <Player songActual={songSelected} />
    </>
  );
};

export default Playlist;
