import React, { useRef, useEffect } from 'react';
import { connect } from 'react-redux';
import { IonIcon } from '@ionic/react';
import { IonContent } from '@ionic/react';
import { useAudioPlayer } from 'react-use-audio-player';
import Siriwave from 'react-siriwave';
import { playOutline } from 'ionicons/icons';

const AudibleComponent = ({ src }) => {
	const { togglePlayPause, playing } = useAudioPlayer({
		src,
		format: 'mp3',
		autoplay: true
	});
	if (!playing) {
		return (
			<div className="play" onClick={togglePlayPause}>
				<IonIcon icon={playOutline} />
			</div>
		);
	} else {
		return (
			<div onClick={togglePlayPause}>
				<Siriwave className="wave" style="ios9" amplitude={2} />
			</div>
		);
	}
};

const mapStateToProps = (state) => {
	const { src } = state.audio;
	return {
		src
	};
};

export default connect(mapStateToProps)(AudibleComponent);
