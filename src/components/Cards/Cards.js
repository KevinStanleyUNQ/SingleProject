import React from "react";
import "../Cards/Cards.css";
import { v4 as uuidv4 } from "uuid";

const Cards = ({ list, showModalSongs }) => {

  const convertSecondToMinAndSec = (seconds) => {
    var minute = Math.floor((seconds / 60) % 60);
    minute = minute < 10 ? "0" + minute : minute;

    var second = seconds % 60;
    second = second < 10 ? "0" + second : second;

    return minute + ":" + second;
  };

  const openModal = () => {
    showModalSongs({
      isOpenModalUiSongs: true,
    });
  };

  return (
    <div className="box-my-cards">
      <div className="row row-cols-2 row-cols-md-3">
        {list.map((playlist) => (
          <div key={uuidv4()} className="col">
            <div key={uuidv4()} className="card playlist" onClick={openModal}>
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
