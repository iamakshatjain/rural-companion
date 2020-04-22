import React from 'react'
import ReactPlayer from 'react-player'

import '../assets/stylesheets/ExploreContainer.css'

const url = 'https://www.youtube.com/watch?v=qdqJfFkQKEI'

const ExploreContainer = () => {
	return (
		<ReactPlayer
			url={url}
			playing
			config={{
				youtube: {
					playerVars: { showinfo: 0, rel: 0, modestbranding: 1 },
				},
			}}
		/>
	)
}

export default ExploreContainer
