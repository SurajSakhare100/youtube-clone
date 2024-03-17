import React, { useEffect, useState } from 'react'
import Searchapi from '../Api/SearchApi'
import { Link } from 'react-router-dom';
import moment from 'moment';
import valueConverter from '../Component/valueConverter';
import { useapi } from '../context/Youtube';
import thumbnail1 from '../assets/thumbnail1.png'
function Search() {
    const { search, setSearch, searchtitle, setSearchtitle } = useapi();
    const [searchResult, setSearchResult] = useState(Searchapi(searchtitle));
    console.log(searchtitle)
    return (
        <>
            <div className={`w-full h-auto overflow-y-auto pt-20 bg-black px-10 text-white shadow-md flex flex-col gap-14 items-center`}>
                {searchResult == [] ? searchResult.map((items, index) => {
                    return (
                        <div key={index} className='w-2/3 h-1/2 '>
                            <Link
                                to={`/video/24/${items ? items.id.videoId : ''}`}
                                className='flex gap-4'
                            >
                                <img src={items ? items.snippet.thumbnails.medium.url : ''} alt="" className='w-1/2 rounded-2xl' />
                                <div className='flex flex-row gap-4 pt-2 px-1 w-1/2'>
                                    <div className='w-1/8 flex-shrink-0'>
                                        <img src="src/assets/simon.png" width={50} height={50} className='rounded-full' />
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
                }) :

                    <div className='w-2/3 flex flex-col items-center gap-4'>
                        < div className='flex gap-4'>
                            <img src={thumbnail1} className='rounded-lg w-1/2' />
                            <div className='flex flex-row gap-4 pt-2 px-1 w-1/2'>
                                <div className='w-1/8 flex-shrink-0'>
                                    <img src="src/assets/simon.png" width={50} height={50} className='rounded-full' />
                                </div>
                                <div className='w-7/8'>
                                    <h2 className='text-sm font-bold'>{searchtitle}</h2>
                                    <h4 className='text-[14px]'>
                                        channel name
                                    </h4>
                                    <div className='flex gap-2 text-[12px]'>
                                        <p>20 M</p>
                                        <p>2 days ago</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className='flex gap-4 '>
                            <img src={thumbnail1} className='rounded-lg w-1/2' />
                            <div className='flex flex-row gap-4 pt-2 px-1 w-1/2'>
                                <div className='w-1/8 flex-shrink-0'>
                                    <img src="src/assets/simon.png" width={50} height={50} className='rounded-full' />
                                </div>
                                <div className='w-7/8'>
                                    <h2 className='text-sm font-bold'>channel title - abcd</h2>
                                    <h4 className='text-[14px]'>
                                        channel name
                                    </h4>
                                    <div className='flex gap-2 text-[12px]'>
                                        <p>20 M</p>
                                        <p>2 days ago</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className='flex gap-4'>
                            <img src={thumbnail1} className='rounded-lg w-1/2' />
                            <div className='flex flex-row gap-4 pt-2 px-1 w-1/2'>
                                <div className='w-1/8 flex-shrink-0'>
                                    <img src="src/assets/simon.png" width={50} height={50} className='rounded-full' />
                                </div>
                                <div className='w-7/8'>
                                    <h2 className='text-sm font-bold'>channel title - abcd</h2>
                                    <h4 className='text-[14px]'>
                                        channel name
                                    </h4>
                                    <div className='flex gap-2 text-[12px]'>
                                        <p>20 M</p>
                                        <p>2 days ago</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className='flex gap-4'>
                            <img src={thumbnail1} className='rounded-lg w-1/2' />
                            <div className='flex flex-row gap-4 pt-2 px-1 w-1/2'>
                                <div className='w-1/8 flex-shrink-0'>
                                    <img src="src/assets/simon.png" width={50} height={50} className='rounded-full' />
                                </div>
                                <div className='w-7/8'>
                                    <h2 className='text-sm font-bold'>channel title - abcd</h2>
                                    <h4 className='text-[14px]'>
                                        channel name
                                    </h4>
                                    <div className='flex gap-2 text-[12px]'>
                                        <p>20 M</p>
                                        <p>2 days ago</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className='flex gap-4'>
                            <img src={thumbnail1} className='rounded-lg w-1/2' />
                            <div className='flex flex-row gap-4 pt-2 px-1 w-1/2'>
                                <div className='w-1/8 flex-shrink-0'>
                                    <img src="src/assets/simon.png" width={50} height={50} className='rounded-full' />
                                </div>
                                <div className='w-7/8'>
                                    <h2 className='text-sm font-bold'>channel title - abcd</h2>
                                    <h4 className='text-[14px]'>
                                        channel name
                                    </h4>
                                    <div className='flex gap-2 text-[12px]'>
                                        <p>20 M</p>
                                        <p>2 days ago</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>}
            </div >

        </>
    )
}

export default Search
