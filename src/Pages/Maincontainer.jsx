import moment from 'moment';
import React, { useContext, useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom';
import valueConverter from '../Component/valueConverter';
import videoApi from '../Api/VideoCategory';
import { useapi } from '../context/Youtube';
import fetchvideo from '../Api/Video';
import channelapi from '../Api/Channeldata';
import banner from '../Api/channelbanner';
function Maincontainer() {
  const { data} = useapi();

  const a=banner();
  console.log(a)

  if(data){
    return (
      
  <div className='w-full h-auto overflow-y-scroll overflow-x-hidden pt-16 bg-[#0F0F0F] text-white shadow-md grid grid-cols-1 md:grid-cols-2 px-6 md:px-6 xl:grid-cols-3 gap-6 '>
    
    {data ?
      data.map((items, index) => {
        return (
          <div key={index}>
            <Link
              to={`/video/${items ? items.id : ''}`}
            >
              <img src={items ? items.snippet.thumbnails.medium.url : ''} alt="" className='w-full m-auto rounded-lg' />
              <div className='flex flex-row gap-4 pt-2 px-1'>
                <div className='w-1/8 flex-shrink-0'>
                  {/* <img src={channelData.snippet.thumbnails.default.url} width={50} height={50} className='rounded-full' /> */}
                </div>
                <div className='w-7/8'>
                  <h2 className='text-sm font-bold'>{items ? items.snippet.title : ''}</h2>
                  <h4 className='text-[14px] my-0.2'>
                    {items ? items.snippet.channelTitle : ''}
                  </h4>
                  <div className='flex gap-2 text-[12px]'>
                    <p>{valueConverter(items ? items.statistics.viewCount : '')} views &bull;</p>
                    <p>{moment(items ? items.snippet.publishedAt : '').fromNow()}</p>
                  </div>
                </div>
              </div>
            </Link>
          </div>
        )
      }) : ""}
  </div>)
  }
  else{
    return (
      <div className='flex w-full items-center justify-center bg-black text-white h-full text-4xl'>
        404 error !
      </div>
    )
  }
}

export default Maincontainer
