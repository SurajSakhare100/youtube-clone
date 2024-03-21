import React from 'react'
import Videosm from '../Component/Videosm'
import recommendedapi from '../Api/recommended'

function Rightpanel() {
  const recommended = recommendedapi(videoid)

  return (
    <div className='w-full md:w-1/4  overflow-scroll'>
      <div className='flex flex-col'>
        {data ?
          data.map((items, index) => {
            return (
              <div key={index}>
                <Link
                  to={`/video/${items ? items.snippet.categoryId : ''}/${items ? items.id : ''}`}
                >
                  <img src={items ? items.snippet.thumbnails.medium.url : ''} alt="" className='w-full rounded-lg' />
                  <div className='flex flex-row gap-4 pt-2 px-1'>
                    <div className='w-1/8 flex-shrink-0'>
                      <img src="src/assets/simon.png" width={50} height={50} className='rounded-full' />
                    </div>
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
