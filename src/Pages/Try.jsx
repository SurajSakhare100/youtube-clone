import React, { useState, useEffect } from 'react';

const YouTubeVideo = ({ videoId }) => {
  const [isHovered, setIsHovered] = useState(
    localStorage.getItem(`hovered_${videoId}`) === 'true'
  );
  const [playVideo, setPlayVideo] = useState(false);

  useEffect(() => {
    if (isHovered) {
      localStorage.setItem(`hovered_${videoId}`, 'true');
    } else {
      localStorage.removeItem(`hovered_${videoId}`);
    }
  }, [isHovered, videoId]);

  const handleMouseEnter = () => {
    setIsHovered(true);
    setPlayVideo(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
    setPlayVideo(false);
  };

  return (
    <div onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
      {isHovered ? (
        // <YouTube videoId={videoId} opts={{ playerVars: { autoplay: 1 } }} />
        <iframe src={`https://youtube.com/embed/${videoId}`} AUTOclassName='w-full rounded-lg  h-[300px] sm:h-[550px]'></iframe>
      ) : (
        <div>Hover over to play</div>
      )}
    </div>
  );
};

export default YouTubeVideo;
