import React from 'react';
import ReactPlayer from 'react-player/youtube';

import '../static-data/assets/stylesheets/VideoPlayer.css';

const VideoPlayer = ({ url }) => {
	return <ReactPlayer url={url} className="react-player" width="100%" height="100%" url={url} playing controls />;
};

export default VideoPlayer;
