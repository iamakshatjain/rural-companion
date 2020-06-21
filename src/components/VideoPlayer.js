import React from "react";
import YouTubePlayer from "react-player/lib/players/YouTube";

import "../static-data/assets/stylesheets/VideoPlayer.css";

const VideoPlayer = ({ url }) => {
  return (
    <YouTubePlayer
      className="react-player"
      width="100%"
      height="100%"
      url={url}
      playing
      controls
    />
  );
};

export default VideoPlayer;
