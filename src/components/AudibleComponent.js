/* eslint-disable react/style-prop-object */
import React from 'react';
import { connect } from 'react-redux';
import { useAudioPlayer } from 'react-use-audio-player';
import Siriwave from 'react-siriwave';

const AudibleComponent = ({ src }) => {
  const { playing } = useAudioPlayer({
    src,
    format: 'mp3',
    autoplay: true
  });

  return (
    <>
      {!playing ? (
        <div className="play">
          <hr
            style={{
              border: 0,
              height: '2px',
              backgroundImage: 'linear-gradient(to right, #009fff, #ec2f4b)',
              width: '70%'
            }}
          />
        </div>
      ) : (
        <div>
          <Siriwave className="wave" style="ios9" amplitude={2} />
        </div>
      )}
    </>
  );
};

const mapStateToProps = (state) => {
  const { src } = state.audio;
  return {
    src
  };
};

export default connect(mapStateToProps)(AudibleComponent);
