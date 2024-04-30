import React from 'react'
import {useState,useEffect} from 'react'
import { Link, useParams } from 'react-router-dom'
import { useapi } from '../context/Youtube';
import SideNav from './SideNav';
import Navbar from '../Component/Navbar';
import { DiW3C } from 'react-icons/di';
import moment from 'moment';

function Channel() {
  const {channelInfos, channelPlayList } = useapi();
  console.log(channelPlayList)
    return (
      <>
        <SideNav />
        <Navbar />
        <div className='w-full h-auto overflow-scroll pt-16 bg-black text-white shadow-md grid grid-cols-1 md:grid-cols-2 md:px-4 xl:grid-cols-3 gap-6'>
  
          {channelPlayList ? channelPlayList.map((playlist, index) => (
            <div key={index}>
             
              <Link
             to={`/playlist/${playlist.id}`}
            >
              <img src={playlist.snippet.thumbnails.medium.url} alt="" className='w-full m-auto rounded-lg' />
              <div className='flex flex-row gap-4 pt-2 px-1'>
                <div className='w-1/8 flex-shrink-0'>
                  <img src={channelInfos.snippet.thumbnails.default.url} width={40} height={40} className='rounded-full' />
                </div>
                <div className='w-7/8'>
                  <h2 className='text-sm font-bold'>{playlist.snippet.localized.title}</h2>
                  <h4 className='text-[14px]'>
                  </h4>
                  <div className='flex gap-2 text-[12px]'>
                    <p className='font-semibold'>{channelInfos? channelInfos.snippet.title : ''} </p>
                    <p>{moment(playlist ? playlist.snippet.publishedAt : '').fromNow()}</p>
                  </div>
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

