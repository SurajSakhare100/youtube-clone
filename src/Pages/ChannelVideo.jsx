import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import playListvideosapi from '../Api/playlistVideo';

function ChannelVideo() {
  const  playlistId=useParams();
  console.log(playlistId);
  const {videos,setvideos}=useState([]);
  useEffect(() => {
     data=playListvideosapi(playlistId);
     setvideos(data)
  }, [])
  console.log(videos)
  return (
    <div>{
        videos.map((video,id)=>{
            <div>
<p>video</p>
            </div>
        })}
    </div>
  )
}

export default ChannelVideo
