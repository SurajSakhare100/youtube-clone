import React from 'react'
import Navbar from '../Component/Navbar'
import Leftpanel from './Leftpanel'
import Rightpanel from './Rightpanel'
import { useParams } from 'react-router-dom';

function VideoPage() {
  const {videoNum}=useParams();
  const {videoids}=useParams();
  return (
    <>
      <Navbar/>
    <div className='w-full h-fit px-10 pt-16 flex gap-4 bg-black text-white'>
      <Leftpanel videoid={videoids} videoNum={videoNum}/>
      <Rightpanel videoid={videoids} videoNum={videoNum}/>
    </div>
    </>
  )
}

export default VideoPage
