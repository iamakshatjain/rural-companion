import React from 'react'
import YouTubePlayer from 'react-player/lib/players/YouTube'

import '../assets/stylesheets/VideoPlayer.css'

const url = 'https://www.youtube.com/watch?v=StMCcxiRSL8'

const VideoPlayer = () => {
	return (
		<div className="player-wrapper">
			<YouTubePlayer className="react-player" width="100%" height="100%" url={url} playing controls />
		</div>
	)
}

export default VideoPlayer
