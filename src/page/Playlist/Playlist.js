import React, { useState } from "react";
import "../Playlist/Playlist.css";
import Sidebar from "../../components/Sidebar/Sidebar";
import { useParams } from "react-router";
import axios from "axios";
import { useEffect } from "react";

const Playlist = (props) => {
  /**
   * Me da error, dice que no estoy autorizado, checkaer por que .
   * Otra cosa a recordad, cuando agrego canciones la lista se va hacia arriba, ver que pasa.
   *
   *
   */

  const { id } = useParams();

  useEffect(() => {
    getPlaylistById();
  }, []);

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
    const playlistRes = await axios.get("http://localhost:7000/playlist/" + id);
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

  return (
    <>
      <Sidebar />
      <div className="container playlistId">
        <h1 className="playlist title">Soy la Playlist: {playlist.name}</h1>
        {console.log(playlist.name)}
        <div className="container-tracks">
          <div className="all-tracks">
            <div className="tracks">
              <div className="tracks-heading">
                <div className="tracks-heading-id">ID</div>
                <div className="tracks-heading-title">Titulo</div>
                <div className="tracks-heading-duration">Duracion</div>
                <div className="tracks-heading-like">Like</div>
              </div>

              <div className="track">
                <div className="track-id">1</div>
                <div className="track-added">☻</div>
                <div className="track-title">Intro</div>
                <div className="track-duration">1:11</div>
                <div className="track-like">◘</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Playlist;
