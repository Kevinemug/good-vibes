/* eslint-disable no-unused-vars */
import React from 'react';
import YouTube from 'react-youtube';

const VideoBackground = () => {
  // Set the options for the YouTube video player
  const opts = {
    width: '100%',
    height: '100%',
    playerVars: {
      autoplay: 1,
      controls: 0,
      loop: 1,
      mute: 1,
      modestbranding: 1,
      showinfo: 0,
      rel: 0,
      start: 1,
      playsinline: 1,
    },
  };

  // Define the video ID for the YouTube video player
  const videoId = '8Z1eMy2FoX4';

  return (
    <div className="video-background">
      <YouTube videoId={videoId} opts={opts} className="video-player" />
    </div>
  );
};

export default VideoBackground;
