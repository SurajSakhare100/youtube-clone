import React, { useEffect } from 'react'
import Navbar from '../Component/Navbar'
import Leftpanel from './Leftpanel'
import Rightpanel from './Rightpanel'
import { useParams } from 'react-router-dom';
import { useapi } from '../context/Youtube';

function VideoPage() {
  
  return (
    <>
      <Navbar/>
    <div className='w-full h-fit px-10 pt-16 flex gap-4 bg-[#0F0F0F] text-white'>
      <Leftpanel/>
      <Rightpanel />
    </div>
    </>
  )
}

export default VideoPage
