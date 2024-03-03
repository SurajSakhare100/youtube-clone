import React from 'react'
import Video from '../Component/Video.jsx'
function Maincontainer() {
  return (
    <div className='w-full h-screen overflow-scroll mt-16 bg-black text-white shadow-md grid grid-cols-1 md:grid-cols-2 md:px-4 xl:grid-cols-3 gap-6'>
      <Video imgLink={'src/assets/thumbnail1.png'}/>
      <Video imgLink={'src/assets/thumbnail2.png'}/>
      <Video imgLink={'src/assets/thumbnail3.png'}/>
      <Video imgLink={'src/assets/thumbnail4.png'}/>
      <Video imgLink={'src/assets/thumbnail5.png'}/>
      <Video imgLink={'src/assets/thumbnail5.png'}/>
      <Video imgLink={'src/assets/thumbnail5.png'}/>
      <Video imgLink={'src/assets/thumbnail5.png'}/>
      <Video imgLink={'src/assets/thumbnail5.png'}/>
      <Video imgLink={'src/assets/thumbnail6.png'}/> 
    </div>
  )
}

export default Maincontainer
