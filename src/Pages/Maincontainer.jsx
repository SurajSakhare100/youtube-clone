import moment from 'moment';
import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';
import valueConverter from '../Component/valueConverter';
import SideNav from './SideNav';
function Maincontainer({ category }) {
  const [data, setdata] = useState([]);
  async function fetchdata() {
    const API = `AIzaSyBq7pRgOu_yP4mvYq_vdegL4v5eDjlUyZE`
    const video_url =
      `https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&chart=mostPopular&maxResults=200&regionCode=IN&videoCategoryId=${category}&key=${API}`
    await fetch(video_url).then(response => response.json()).then(data => setdata(data.items));
  }
  useEffect(() => {
    fetchdata()
  }, [category])
  return (
    <div className='w-full h-screen overflow-scroll mt-16 bg-black text-white shadow-md grid grid-cols-1 md:grid-cols-2 md:px-4 xl:grid-cols-4 gap-6'>
      {data.map((items, index) => {
        return (
          <div key={index}>
          <a href={`video/${items.snippet.categoryId}/${items.id}`} >
            <img src={items.snippet.thumbnails.medium.url} alt="" className='w-full rounded-lg' />
            <div className='flex flex-row gap-4 pt-2 px-1'>
              <div className='w-fit'>
                <img src="src/assets/simon.png" width={50} height={50} className='rounded-full' />
              </div>
              <div>
                <h2 className='text-sm font-bold'>{items.snippet.title}</h2>
                <h4 className='text-[14px]'>
                  {items.snippet.channelTitle}
                </h4>
                <div className='flex gap-2 text-[12px]'>
                  <p>{valueConverter(items.statistics.viewCount)} views &bull;</p>
                  <p>{moment(items.snippet.publishedAt).fromNow()}</p>
                </div>
              </div>
            </div>
          </a>
          </div>
        )
      })}
    </div>
  )
}

export default Maincontainer
