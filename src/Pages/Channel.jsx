import React from 'react'
import { Link, useParams } from 'react-router-dom'
import { useapi } from '../context/Youtube';
import SideNav from './SideNav';

function Channel() {
  const { channelSections, channelPlayList } = useapi();
  console.log(channelPlayList)
  return (
    <>
      <SideNav />
      <div className='w-full h-auto overflow-scroll pt-16 bg-black text-white shadow-md grid grid-cols-1 md:grid-cols-2 md:px-4 xl:grid-cols-3 gap-6'>

        {channelPlayList ? channelPlayList.map((playlist,index )=> (
          <div key={index}>
            <Link
              className=''
              to={`/video/`}
            >
              <img src={playlist.snippet.thumbnails.medium.url} alt="" />
            </Link>
          </div>
          )) : ''}
        </div>
    </>
  )
}

export default Channel
