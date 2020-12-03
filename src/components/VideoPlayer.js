import React from 'react';
import ReactPlayer from 'react-player/youtube';

import '../assets/stylesheets/VideoPlayer.css';

const { forwardRef, useRef, useImperativeHandle } = React;

const VideoPlayer = forwardRef(({ url }, ref) => {
  const player = useRef(null);
  useImperativeHandle(
    ref,
    () => ({
      fastForward(seconds) {
        player.current.seekTo(parseFloat(seconds), 'seconds');
      }
    }),
    [player]
  );

  return (
    <ReactPlayer
      ref={player}
      url={url}
      className="react-player"
      width="100%"
      height="100%"
      playing
      controls
    />
  );
});

export default VideoPlayer;
