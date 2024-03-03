import React from 'react'
import Navbar from '../Component/Navbar'
import Leftpanel from './Leftpanel'
import Rightpanel from './Rightpanel'

function VideoPage() {
  return (
    <>
      <Navbar/>
    <div className='px-10 pt-16 flex gap-4 bg-black text-white'>
      <Leftpanel/>
      <Rightpanel/>
    </div>
    </>
  )
}

export default VideoPage
