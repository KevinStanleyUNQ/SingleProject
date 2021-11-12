import React, { useState, useEffect } from "react";
import "../PlayerSongs/Player.css";
import "react-yt-sound-player";

const Player = ({ songActual }) => {
  const [audio, setAudio] = useState({
    id: "",
    name: "",
    band: "",
    url: "",
    duration: 0,
  });

  // const [songActual, setSongActual] = useState();

  const play = () => audio.play();
  const pause = () => audio.pause();
  const stop = () => audio.stop();

  useEffect(() => {
    if (songActual) {
      setAudio(songActual);
    }
  }, [songActual]);

  return (
    <section className="current-track">
      <audio className="audio-player" controls>
      <source
          src="https://www.youtube.com/watch?v=R03cqGg40GU&list=RDR03cqGg40GU&start_radio=1"
          type="video"
        ></source>
    </audio>

      {/* <div className="player">
        <button type="button" className="play" onClick={play}>
          Play
        </button>
        <button type="button" className="pause" onClick={pause}>
          Pause
        </button>
        <button type="button" className="stop" onClick={stop}>
          Stop
        </button>
        <p>
          Volumen:
          <input
            type="range"
            className="volume"
            step=".1"
            min="0"
            max="1"
            value="1"
          />
        </p>
        <p>
          Tiempo:
          <input
            type="range"
            className="time"
            step=".1"
            min="0"
            max="0"
            value="0"
          />
        </p>
        <p className="song">
          Cancion:
          <strong id="cancion">
            {audio && (
              <div className="name-song">
                <span>{audio.name} - {audio.band}</span>
              </div>
            )}
          </strong>
        </p>
      </div> */}
    </section>
  );
};

export default Player;
