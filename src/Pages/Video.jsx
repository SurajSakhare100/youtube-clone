import React from 'react';
import Try from './Try';

const Video = () => {
  return (
    <div className='w-full h-full'>
      <Try videoId="uSjCApgKtc4" />
      <Try videoId="g8WR3fLPz6I" />
      {/* Add more YouTubeVideo components with different videoIds */}
    </div>
  );
};

export default Video;
