import React from 'react'
import Videosm from '../Component/Videosm'

function Rightpanel() {
  return (
    <div className='w-full md:w-1/4  overflow-scroll'>
      <div className='flex flex-col'>
        <Videosm imgLinks={'src/assets/thumbnail1.png'}/>
        <Videosm imgLinks={'src/assets/thumbnail2.png'}/>
        <Videosm imgLinks={'src/assets/thumbnail3.png'}/>
        <Videosm imgLinks={'src/assets/thumbnail4.png'}/>
        <Videosm imgLinks={'src/assets/thumbnail5.png'}/>
        <Videosm imgLinks={'src/assets/thumbnail6.png'}/>
        <Videosm imgLinks={'src/assets/thumbnail2.png'}/>
        <Videosm imgLinks={'src/assets/thumbnail3.png'}/>
        <Videosm imgLinks={'src/assets/thumbnail6.png'}/>
        <Videosm imgLinks={'src/assets/thumbnail7.png'}/>
      </div>
    </div>
  )
}

export default Rightpanel
