import moment from 'moment';
import React, { useContext, useEffect, useState } from 'react'
import { Link } from 'react-router-dom';
import valueConverter from '../Component/valueConverter';
import videoApi from '../Api/VideoCategory';
function Maincontainer({ category }) {
const data=videoApi(category)
  return (
    <div className='w-full h-full overflow-scroll mt-16 bg-black text-white shadow-md grid grid-cols-1 md:grid-cols-2 md:px-4 xl:grid-cols-3 gap-6'>
      {data.map((items, index) => {
        return (
          <div key={index}>
          <Link 
          to={`/video/${items.snippet.categoryId}/${items.id}`} 
          >
            <img src={items.snippet.thumbnails.medium.url} alt="" className='w-full rounded-lg' />
            <div className='flex flex-row gap-4 pt-2 px-1'>
              <div className='w-1/8 flex-shrink-0'>
                <img src="src/assets/simon.png" width={50} height={50} className='rounded-full' />
              </div>
              <div className='w-7/8'>
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
          </Link>
          </div>
        )
      })}
    </div>
  )
}

export default Maincontainer
