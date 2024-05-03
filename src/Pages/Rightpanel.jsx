import React, { useEffect, useState } from 'react'
import { Link, useParams } from "react-router-dom";
import valueConverter from '../Component/valueConverter';
import moment from 'moment';
import { useapi } from '../context/Youtube';
import fetchVideos from '../Api/channnelVideo';

function Rightpanel() {
  const { data,channelData} = useapi();
  const [videos,setvideos]=useState('')
  useEffect(() => {
    const fetchData = async () => {
      try {
        const result = await fetchVideos(channelData?channelData.snippet.channelId:'');
        setvideos(result);
      } catch (error) {
        console.log('Error fetching comments:', error);
      }
    };
    fetchData();
  }, []);
  console.log(videos)
  return (
    <div className='w-full md:w-1/3 overflow-y-auto bg-[#0F0F0F]' >
      <div className='flex flex-col gap-4'>
        {videos ?
          videos.map((items, index) => {
            return (
              <div key={index} className='w-full flex flex-col'>
                <Link
                  to={`/video/${items ? items.id : ''}`}
                  className='w-full flex flex-col md:flex-row gap-4'
                >
                  <div className='w-full px-2 md:w-1/2'>
                  <img src={items ? items.snippet.thumbnails.medium.url : ''} alt="" className='w-full rounded-lg' />
                  </div>
                  <div className='flex flex-row gap-4 pt-2 px-2 w-full md:w-1/2'>
                    
                    <div className='w-7/8'>
                      <h2 className='text-sm font-bold'>{items ? items.snippet.title : ''}</h2>
                      <h4 className='text-[14px]'>
                        {items ? items.snippet.channelTitle : ''}
                      </h4>
                      <div className='flex gap-2 text-[12px]'>
                        {/* <p>{valueConverter(items ? items.statistics.viewCount : '')} views &bull;</p> */}
                        <p>{moment(items ? items.snippet.publishedAt : '').fromNow()}</p>
                      </div>
                    </div>
                  </div>
                </Link>
              </div>
            )
          }) : ""}
      </div>
    </div>
  )
}

export default Rightpanel
