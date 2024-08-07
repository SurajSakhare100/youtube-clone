import React, { useEffect, useState } from 'react'
import { Link, useParams } from "react-router-dom";
import moment from 'moment';
import { useapi } from '../context/Youtube';

function Rightpanel() {
  const { channelApi,recommended,videoid, playListvideosApi} = useapi();
  const [videos,setvideos]=useState('')
  const [channelData,setChannelData]=useState(null)

  useEffect(() => {
    const fetchData = async () => {
      try {
        const result = await channelApi(videoid);
        setChannelData(result);
      } catch (error) {
        console.log('Error fetching recommended videos:', error);
      }
    };

    fetchData();
  }, [videoid, playListvideosApi]);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const result = await recommended(channelData?channelData.snippet.channelId:'');
        setvideos(result);
      } catch (error) {
        console.log('Error fetching videos:', error);
      }
    };
    fetchData();
  }, [channelData,setvideos,videoid,playListvideosApi,channelApi]);
  return (
    <div className='w-full lg:w-1/3 overflow-y-auto bg-[#0F0F0F]' >
      <div className='flex flex-col gap-4 flex-wrap'>
        {videos ?
          videos.map((items, index) => {
            return (
              <div key={index} className='w-full flex flex-col '>
                <Link
                  to={`/video/${items?items.id.videoId: ''}`}
                  className='w-full flex flex-col xl:flex-row gap-4'
                >
                  <div className='w-full px-2 xl:w-1/2'>
                  <img src={items ? items.snippet.thumbnails.medium.url : ''} alt="" className='w-full rounded-lg' />
                  </div>
                  <div className='flex flex-row gap-4 pt-2 px-2 w-full xl:w-1/2'>
                    
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
