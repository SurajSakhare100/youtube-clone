import React from 'react'
import { useState, useEffect } from 'react'
import { Link, useParams } from 'react-router-dom'
import { useapi } from '../context/Youtube';
import SideNav from './SideNav';
import Navbar from '../Component/Navbar';
import { DiW3C } from 'react-icons/di';
import moment from 'moment';
import { icon } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlay } from '@fortawesome/free-solid-svg-icons';

function Channel() {
  const { channelInfos, channelPlayList } = useapi();
  return (
    <>
      <SideNav />
      <Navbar />
      <div className='w-full h-auto overflow-scroll pt-24 bg-black text-white shadow-md grid grid-cols-1 md:grid-cols-2 md:px-4 xl:grid-cols-4 gap-6'>
        {/* <h1 className='text-xl'>Playlist</h1> */}
        {channelPlayList ? channelPlayList.map((playlist, index) => (
          <div key={index}>

            <Link
              to={`/playlist/${playlist.id}`}

            >
              <div className='w-full relative'>
                <div className='w-full relative'>
                  <div className='w-11/12 h-full bg-[#937877] rounded-lg absolute inset-0 flex items-center justify-center bottom-2 m-auto z-0 '>
                    {/* Content inside the first div */}
                  </div>
                  <img src={playlist.snippet.thumbnails.medium.url} alt="" className='w-full m-auto rounded-lg relative z-10 ' />
                  <div className='w-full h-full bg-transparent rounded-lg absolute top-0 m-auto z-40 text-transparent hover:text-white hover:bg-[#111111dc] flex items-center justify-center gap-2'>
                    <FontAwesomeIcon icon={faPlay} className='text-2xl ' />
                    <p className='text-md '>Play</p>
                  </div>
                </div>
              </div>
              <div className='flex flex-row gap-4 pt-2 px-1'>
                
                <div className=''>
                  <h2 className='text-[14px] font-bold'>{playlist.snippet.localized.title}</h2>
                  <h4 className='text-[12px]'>View Full PlayList</h4>
                </div>
              </div>

            </Link>

          </div>
        )) : ''}
      </div>
    </>
  )
}

export default Channel

