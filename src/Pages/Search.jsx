import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';
import moment from 'moment';
import { useapi } from '../context/Youtube';
import SideNav from './SideNav';
import Navbar from '../Component/Navbar';
function Search() {
    const { searchResults, searchTitle } = useapi();
    const [search, setSearchResults] = useState('')
    useEffect(() => {
        const fetchData = async () => {
            try {
                const result = await searchResults(searchTitle);
                setSearchResults(result);
            } catch (error) {
                console.log('Error fetching search results:', error);
            }
        };

        fetchData();
    }, [searchTitle])
    return (
        <>
            <Navbar />
            <SideNav />
            <div className={`w-full h-auto overflow-y-auto pt-20 bg-black px-2 md:px-10 text-white shadow-md flex flex-col gap-4 md:gap-14 items-center`}>
                {search ? search.map((items, index) => {
                    
                    return (
                        <div key={index} className='w-full md:w-2/3 h-1/2 '>
                            <Link
                                to={`/video/${items ? items.id.videoId : ''}`}
                                className='flex gap-3 md:flex-row flex-col justify-center'
                            >
                                
                                <img src={items ? items.snippet.thumbnails.medium.url : ''} alt="" className={`  ${index==0?'rounded-full w-80 h-80':"rounded-2xl w-full md:w-1/2"}`} />
                                <div className='flex flex-row gap-4 pt-2 px-1 md:w-1/2'>

                                    <div className={`w-7/8 flex flex-col ${index==0?"justify-center":""}`}>
                                        <h2 className='text-lg font-bold'>{items ? items.snippet.title : ''}</h2>
                                        <h4 className='text-md'>
                                            {items ? items.snippet.channelTitle : ''}
                                        </h4>
                                        <div className='flex gap-2 text-sm'>
                                            {/* <p>{valueConverter(items?items.statistics.viewCount)} views &bull;</p> */}
                                            <p>{moment(items ? items.snippet.publishedAt : '').fromNow()}</p>
                                        </div>
                                    </div>
                                </div>
                            </Link>
                        </div>
                    )
                }) : ''}
            </div>
        </>
    )
}

export default Search
