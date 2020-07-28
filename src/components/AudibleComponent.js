import React from 'react';
import { useAudioPlayer } from 'react-use-audio-player';

const AudibleComponent = ({ children, src }) => {
	const { togglePlayPause, ready, loading, playing } = useAudioPlayer({
		src,
		format: 'mp3',
		autoplay: false
	});
	return (
		<div
			onClick={() => {
				console.log('clicked');
				togglePlayPause();
			}}
		>
			{children}
		</div>
	);
};

export default AudibleComponent;
