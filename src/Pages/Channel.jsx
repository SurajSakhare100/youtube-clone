import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useapi } from '../context/Youtube';
import SideNav from './SideNav';
import Navbar from '../Component/Navbar';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlay } from '@fortawesome/free-solid-svg-icons';

function Channel() {
  const { channelPlayListApi, channelId, channelInfo, subScribe, channelApi, channelInfoApi } = useapi();
  const [channelPlayList, setChannelPlayList] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const result = await channelPlayListApi(channelId);
        setChannelPlayList(result);
      } catch (error) {
        console.log('Error fetching playlist:', error);
      }
    };

    if (channelId) {
      fetchData();
    }
  }, [channelId, channelPlayListApi]);

  return (
    <>
      <SideNav />
      <Navbar />
      <div className='w-full h-auto overflow-scroll pt-24 bg-black text-white shadow-md grid grid-cols-1 md:grid-cols-2 md:px-4 xl:grid-cols-4 gap-6'>
        {channelPlayList.length > 0 ? channelPlayList.map((playlist, index) => (
          <div key={index}>
            <Link to={`/playlist/${playlist.id}`}>
              <div className='w-full relative'>
                <div className='w-11/12 h-full bg-[#937877] rounded-lg absolute inset-0 flex items-center justify-center bottom-2 m-auto z-0'></div>
                <img src={playlist.snippet.thumbnails.medium.url} alt={playlist.snippet.title} className='w-full m-auto rounded-lg relative z-10' />
                <div className='w-full h-full bg-transparent rounded-lg absolute top-0 m-auto z-40 text-transparent hover:text-white hover:bg-[#111111dc] flex items-center justify-center gap-2'>
                  <FontAwesomeIcon icon={faPlay} className='text-2xl' />
                  <p className='text-md'>Play</p>
                </div>
              </div>
              <div className='flex flex-row gap-4 pt-2 px-1'>
                <div>
                  <h2 className='text-[14px] font-bold'>{playlist.snippet.localized.title}</h2>
                  <h4 className='text-[12px]'>View Full Playlist</h4>
                </div>
              </div>
            </Link>
          </div>
        )) : <p className='text-center col-span-4'>No playlists available</p>}
      </div>
    </>
  );
}

export default Channel;
