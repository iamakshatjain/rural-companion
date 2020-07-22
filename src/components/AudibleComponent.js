import React from 'react'
import { useAudioPlayer } from 'react-use-audio-player'
import { connect } from 'react-redux'

const AudibleComponent = ({ children, src }) => {
	const { togglePlayPause, ready, loading, playing } = useAudioPlayer({
		src: 'https://res.cloudinary.com/dndf9znin/video/upload/v1595261131/file_example_MP3_1MG_jvuy7w.mp3',
		format: 'mp3',
		autoplay: false
	})
	return <div onClick={togglePlayPause}>{children}</div>
}

const mapStateToProps = (state) => {
	const { src } = state.audio
	return {
		src
	}
}

export default connect(mapStateToProps)(AudibleComponent)
