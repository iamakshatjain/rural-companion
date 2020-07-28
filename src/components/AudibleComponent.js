import React from 'react'
import { connect } from 'react-redux'
import { useAudioPlayer } from 'react-use-audio-player'

const AudibleComponent = ({ src }) => {
	const { togglePlayPause, ready, loading, playing } = useAudioPlayer({
		src,
		format: 'mp3',
		autoplay: true
	})
	return null
}

const mapStateToProps = (state) => {
	const { src } = state.audio
	return {
		src
	}
}

export default connect(mapStateToProps)(AudibleComponent)
