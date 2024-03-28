import { faDownload, faHeart, faHeartBroken, faLink, faShare } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React, { useContext, useEffect, useState } from 'react'
import Comment from '../Component/Comment';
import valueConverter from '../Component/valueConverter';
import moment from 'moment';
import UseYoutube from '../context/UseYoutube';
import { useapi } from '../context/Youtube';
import videoApi from '../Api/VideoCategory';
import fetchvideo from '../Api/Video';
import channelapi from '../Api/Channeldata';
function Leftpanel() {
    const { channelData, videoid,subScribe, setSubScribe } = useapi();
    return (
        <>
            <div className='w-full md:w-2/3 pt-4 px-10'>
                <div className='w-full'>
                    <iframe src={`https://youtube.com/embed/${videoid}`} className='w-full h-[550px]'></iframe>
                    {/* <video src="src/assets/video.mp4" controls muted  className='' rounded-lg '></video> */}
                    <div className='mt-2'>
                        <h2 className='text-xl'>
                            {channelData ? channelData.snippet.title : ""}
                        </h2>
                        <div className='flex gap-2 text-md'>
                            <p>{valueConverter(channelData ? channelData.statistics.viewCount : '')} views &bull;</p>
                            <p>{moment(channelData ? channelData.snippet.publishedAt : '').fromNow()}</p>
                        </div>
                    </div>
                    <div className='flex items-center justify-between my-2'>
                        <div className='flex gap-4 items-center overflow-hidden '>
                            <div className='w-[60px] h-[60px] rounded-full flex-shrink-0'>
                                <img src={channelData ? channelData.snippet.thumbnails.default.url : ''}   className='w-full h-full object-contain' />
                            </div>
                            <div className='flex flex-col'>
                                <h5>
                                    {channelData ? channelData.snippet.channelTitle : ""}
                                </h5>
                                <p>{valueConverter(channelData ? channelData.statistics.subscriberCount : '1M')}</p>
                            </div>
                            <button className='px-6  text-sm h-[30px] bg-red-800 rounded-2xl' onClick={setSubScribe('vn')}>Subscribe</button>
                        </div>
                        <div>
                            <div className='flex gap-2'>
                                <div className='w-auto px-6 text-sm h-[30px] bg-gray-900 rounded-2xl flex gap-4 items-center'>
                                    <FontAwesomeIcon icon={faHeart} className='' />
                                    <p className='flex'>{valueConverter(channelData ? channelData.statistics.likeCount : '')} <span> likes</span></p>
                                </div>
                                <FontAwesomeIcon icon={faShare} className='w-[15px] px-6  text-sm h-[30px] bg-gray-900 rounded-2xl' />
                                <FontAwesomeIcon icon={faDownload} className='w-[15px] px-6  text-sm h-[30px] bg-gray-900 rounded-2xl' />
                            </div>
                        </div>
                    </div>
                    <div>
                    </div>
                </div>
                {/* <div className='flex  pb-2 border-b mt-2 gap-4 items-center'>
                    <h2 className='text-xl font-bold'>Comment</h2>
                    <p>{valueConverter(channelData ?channelData.statistics.commentCount : '')}</p>
                </div> */}
                <Comment videoid={videoid} />
            </div>
        </>
    )
}

export default Leftpanel
