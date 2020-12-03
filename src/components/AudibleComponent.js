import React from 'react';
import { connect } from 'react-redux';
import { useAudioPlayer } from 'react-use-audio-player';
import Siriwave from 'react-siriwave';

const AudibleComponent = ({ src, muted }) => {
  const { playing, volume } = useAudioPlayer({
    src,
    format: 'mp3',
    autoplay: true
  });

  if (muted) volume(0);
  else volume(1);

  if (!playing || muted) {
    return (
      <div className="play">
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
  }

  return (
    // <div onClick={togglePlayPause}>
    <div>
      <Siriwave className="wave" style="ios9" amplitude={2} />
    </div>
  );
};

const mapStateToProps = (state) => {
  const { src, muted } = state.audio;
  return {
    src,
    muted
  };
};

export default connect(mapStateToProps)(AudibleComponent);
