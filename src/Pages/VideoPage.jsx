import React from 'react'
import Navbar from '../Component/Navbar'
import Leftpanel from './Leftpanel'
import Rightpanel from './Rightpanel'

function VideoPage({videoid}) {
  return (
    <>
      <Navbar/>
    <div className='px-10 pt-16 flex gap-4 bg-black text-white'>
      <Leftpanel  videoid={videoid}/>
      <Rightpanel/>
    </div>
    </>
  )
}

export default VideoPage
