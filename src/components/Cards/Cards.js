import React from "react";
import "../Cards/Cards.css";
import { v4 as uuidv4 } from "uuid";

const Cards = ({ list }) => {

  return (
    <div className="box-my-cards">
      <div className="container">
        <div className="row row-cols-3">
          {list.map((playlist) => (
            <div key={uuidv4()} className="card playlist m-2 shadow-sm">
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
  );
};

export default Cards;
