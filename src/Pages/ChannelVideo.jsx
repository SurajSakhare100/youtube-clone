import React, { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import playListvideosapi from '../Api/playlistVideo';
import SideNav from './SideNav';
import Navbar from '../Component/Navbar';
import valueConverter from '../Component/valueConverter';
import moment from 'moment';
import videoid from '../Api/videoId';

function ChannelVideo() {
  const { playlistId } = useParams();
  const [videos, setvideos] = useState(null);
  const [videoIds, setvideosid] = useState(null);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const result = await playListvideosapi(playlistId);
        setvideos(result);
      } catch (error) {
        console.log('Error fetching comments:', error);
      }
    };
    fetchData();
  }, []);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const result = await videoid(playlistId);
        setvideosid(result);
      } catch (error) {
        console.log('Error fetching comments:', error);
      }
    };
    fetchData();
  }, []);
  return (

    <div>
      <Navbar/>
      <div className='flex h-screen w-full'>

      <SideNav/>
      <div className='w-full h-auto overflow-y-scroll overflow-x-hidden pt-16 bg-[#0F0F0F] text-white shadow-md grid grid-cols-1 md:grid-cols-2 px-6 md:px-6 xl:grid-cols-3 gap-6 '>

      {
      videos?videos.map((video, id) => (
        <div key={id}>
        <Link
          to={`/video/${videoIds?videoIds[id].contentDetails.videoId:''}`}
        >
          <img src={video ? video.snippet.thumbnails.medium.url : ''} alt="" className='w-full m-auto rounded-lg' />
          <div className='flex flex-row gap-4 pt-2 px-1'>
            <div className='w-1/8 flex-shrink-0'>
              {/* <img src={channelData.snippet.thumbnails.default.url} width={50} height={50} className='rounded-full' /> */}
            </div>
            <div className='w-7/8'>
              <h2 className='text-sm font-bold'>{video ? video.snippet.title : ''}</h2>
              <h4 className='text-[14px] my-0.2'>
                {video ? video.snippet.channelTitle : ''}
              </h4>
              <div className='flex gap-2 text-[12px]'>
                {/* <p>{valueConverter(video ? video.statistics.viewCount : '')} views &bull;</p> */}
                <p>{moment(video ? video.snippet.publishedAt : '').fromNow()}</p>
              </div>
            </div>
          </div>
        </Link>
      </div>
      )):""}
      </div>
      </div>
    </div>
  )
}

export default ChannelVideo
