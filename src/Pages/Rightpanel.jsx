import React from 'react'
import { Link } from "react-router-dom";
import valueConverter from '../Component/valueConverter';
import moment from 'moment';
import { useapi } from '../context/Youtube';

function Rightpanel({ videoid }) {
  const { data } = useapi();
  return (
    <div className='w-1/3 overflow-scroll'>
      <div className='flex flex-col gap-4'>
        {data ?
          data.map((items, index) => {
            return (
              <div key={index}>
                <Link
                  to={`/video/${items ? items.snippet.categoryId : ''}/${items ? items.id : ''}`}
                  className='flex gap-4'
                >
                  <div className='w-1/2'>

                  <img src={items ? items.snippet.thumbnails.medium.url : ''} alt="" className='w-full rounded-lg' />
                  </div>
                  <div className='flex flex-row gap-4 pt-2 px-1 w-1/2'>
                    
                    <div className='w-7/8'>
                      <h2 className='text-sm font-bold'>{items ? items.snippet.title : ''}</h2>
                      <h4 className='text-[14px]'>
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
      </div>
    </div>
  )
}

export default Rightpanel
