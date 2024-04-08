import React, { useEffect, useState } from 'react'
import Searchapi from '../Api/SearchApi'
import { Link } from 'react-router-dom';
import moment from 'moment';
import valueConverter from '../Component/valueConverter';
import { useapi } from '../context/Youtube';
import thumbnail1 from '../assets/thumbnail1.png'
import SideNav from './SideNav';
import Navbar from '../Component/Navbar';
function Search() {
    const { searchResults, setSearchResults,searchTitle} = useapi();
    console.log(searchTitle)
    return (
        <>
        <Navbar/>
       <SideNav />
            <div className={`w-full h-auto overflow-y-auto pt-20 bg-black px-2 md:px-10 text-white shadow-md flex flex-col gap-4 md:gap-14 items-center`}>
                {searchResults?searchResults.map((items, index) => {
                    return (
                        <div key={index} className='w-full md:w-2/3 h-1/2 '>
                            <Link
                                to={`/video/24/${items ? items.id.videoId : ''}`}
                                className='flex gap-2 md:flex-row flex-col'
                            >
                                <img src={items ? items.snippet.thumbnails.medium.url : ''} alt="" className='w-full md:w-1/2 rounded-2xl' />
                                <div className='flex flex-row gap-4 pt-2 px-1 md:w-1/2'>
                                    <div className='w-1/8 flex-shrink-0'>
                                        <img src="src/assets/simon.png" width={40} height={40} className='rounded-full' />
                                    </div>
                                    <div className='w-7/8'>
                                        <h2 className='text-sm font-bold'>{items ? items.snippet.title : ''}</h2>
                                        <h4 className='text-[14px]'>
                                            {items ? items.snippet.channelTitle : ''}
                                        </h4>
                                        <div className='flex gap-2 text-[12px]'>
                                            {/* <p>{valueConverter(items?items.statistics.viewCount)} views &bull;</p> */}
                                            <p>{moment(items ? items.snippet.publishedAt : '').fromNow()}</p>
                                        </div>
                                    </div>
                                </div>
                            </Link>
                        </div>
                    )
                }):''}
            </div>
        </>
    )
}

export default Search
