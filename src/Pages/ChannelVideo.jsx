import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import playListvideosapi from '../Api/playlistVideo';

function ChannelVideo() {
  const { playlistId } = useParams();
  const [videos, setvideos] = useState(null);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const result = await playListvideosapi(playlistId);
        setvideos(result);
      } catch (error) {
        console.log('Error fetching comments:', error);
      }
    };
    fetchData();
  }, []);
  console.log(videos)

  return (
    <div>{
      videos?.map((video, id) => {
        <div>
          <p className='text-black text-xl'>video</p>
        </div>
      })}
    </div>
  )
}

export default ChannelVideo
