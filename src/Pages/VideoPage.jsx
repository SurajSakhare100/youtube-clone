import React, { useEffect } from 'react'
import Navbar from '../Component/Navbar'
import Leftpanel from './Leftpanel'
import Rightpanel from './Rightpanel'
import { useParams } from 'react-router-dom';
import { useapi } from '../context/Youtube';
import SideNav from './SideNav';

function VideoPage() {
  
  return (
    <>
      <Navbar/>
    <div className='w-full h-fit px-2 sm:px-10 pt-16 flex flex-col md:flex-row gap-4 bg-[#0F0F0F] text-white'>
      <Leftpanel/>
      <Rightpanel />
      <div className='md:hidden block'>
        <SideNav/>
      </div>
    </div>
    </>
  )
}

export default VideoPage
