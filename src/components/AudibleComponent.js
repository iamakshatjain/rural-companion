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
				<hr
					style={{
						border: 0,
						height: '2px',
						backgroundImage: 'linear-gradient(to right, #009fff, #ec2f4b)',
						width: '70%'
					}}
				/>
				{/* <IonIcon icon={playOutline} /> */}
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
