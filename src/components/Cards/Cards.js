import React from "react";
import "../Cards/Cards.css";
import { v4 as uuidv4 } from "uuid";
import { useNavigate } from "react-router";
import { convertSecondToMinAndSec } from "../../utils/global-functions";

const Cards = ({ list }) => {
  const navigate = useNavigate();

  const loadSongs = (idPlaylist) => {
    navigate("/playlist/" + idPlaylist);
    console.log(idPlaylist);
  };

  return (
    <div className="box-my-cards">
      <div className="row row-cols-2 row-cols-md-3">
        {list.map((playlist) => (
          <div key={uuidv4()} className="col">
            <div
              key={uuidv4()}
              className="card playlist"
              onClick={() => loadSongs(playlist.id)}
            >
              <img
                src={playlist.image}
                className="card-img-top"
                alt="Playlist-Img"
                key={uuidv4()}
              />
              <div className="card-body">
                <h5 className="card-title">{playlist.name}</h5>
                <p className="card-text">{playlist.description}</p>
              </div>
              <div className="card-footer">
                <small className="text-muted">
                  Duracion: {convertSecondToMinAndSec(playlist.duration)}
                </small>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Cards;
