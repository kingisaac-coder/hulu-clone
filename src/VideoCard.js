// import { MuiThemeProvider } from "@material-ui/core";
import React, { forwardRef } from "react";
import "./VideoCard.css";
import TextTruncate from "react-text-truncate";
import { FaThumbsUp } from "react-icons/fa";

const base_url = "https://image.tmdb.org/t/p/original/";

const VideoCard = forwardRef(({ movie }, ref) => {
  return (
    <div ref={ref} className="videoCard">
      <img
        src={`${base_url}${movie.backdrop_path || movie.poster_path}`}
        alt="Movie Poster"
      />
      <TextTruncate
        line={1}
        element="p"
        truncateText="..."
        // textTruncateChild={<a href="#">Read on</a>}
        text={movie.overview}
      />

      {/* <p>{movie.overview}</p> */}
      <h2>{movie.title || movie.orginal_name}</h2>
      <p className="videoCard__stats">
        {movie.media_type && `${movie.media_type} . `}
        {movie.release_date || movie.first_air_date} .
        <FaThumbsUp />
        {""}
        {movie.vote_count}
      </p>
    </div>
  );
});

export default VideoCard;
