import React from "react";
import "./SongRow.css";
function SongRow({ track = "test" }) {
  return (
    <div className="song__row">
      <img src={track.album.images[0].url} alt="" className="song__row__album" />
      <div className="song__row__info">
        <h1>{track.name}</h1>
        <p>
          {track.artists.map((artist) => artist.name)}
          {track.album.name}
        </p>
      </div>
    </div>
  );
}

export default SongRow;
