import { faDownload, faHeart, faHeartBroken, faLink, faShare } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React, { useContext, useEffect, useState } from 'react'
import Comment from '../Component/Comment';
import valueConverter from '../Component/valueConverter';
import moment from 'moment';
function Leftpanel({ videoid, videoNum }) {

    const [api, setapi] = useState(null);
    const [channeldata, setchanneldata] = useState(null);
    const fetchapi = async () => {
        const API = `AIzaSyBq7pRgOu_yP4mvYq_vdegL4v5eDjlUyZE`;
        const video_url = `https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&id=${videoNum}&maxResults=200&key=${API}`;

        await fetch(video_url)
            .then((response) => response.json())
            .then((data) => setapi(data.items[0]));
    }
    const fetchchannel = async () => {
        const API = `AIzaSyBq7pRgOu_yP4mvYq_vdegL4v5eDjlUyZE`;
        const video_url =
            `https://youtube.googleapis.com/youtube/v3/channels?part=snippet%2CcontentDetails%2Cstatistics&id=${api.snippet.channelId}&key=${API}`
        await fetch(video_url)
            .then((response) => response.json())
            .then((data) => setchanneldata(data.items[0]));
    }
    useEffect(() => {
        fetchapi();
    }, [videoid]);
    useEffect(() => {
        fetchchannel();
    }, [api]);
    console.log(channeldata, 300)
    return (
        <>
            <div className='w-full md:w-full pt-4 px-10'>
                <div className='w-full'>
                    <iframe src={`https://youtube.com/embed/${videoNum}`} className='w-full h-[550px]'></iframe>
                    {/* <video src="src/assets/video.mp4" controls muted  className='' rounded-lg '></video> */}
                    <div className='mt-2'>
                        <h2 className='text-xl'>
                            {api ? api.snippet.title : ""}
                        </h2>
                        <div className='flex gap-2 text-md'>
                            <p>{valueConverter(api ? api.statistics.viewCount : '')} views &bull;</p>
                            <p>{moment(api ? api.snippet.publishedAt : '').fromNow()}</p>
                        </div>
                    </div>
                    <div className='flex items-center justify-between my-2'>
                        <div className='flex gap-4 items-center'>
                            <img src={channeldata ? channeldata.snippet.thumbnails.default.url : ''} width={40} height={40} className='rounded-full' />
                            <div className='flex flex-col'>
                                <h5>
                                    {api ? api.snippet.channelTitle : ""}
                                </h5>
                                <p>{valueConverter(channeldata ? channeldata.statistics.subscriberCount: '1M')}</p>
                            </div>
                            <button className='px-6  text-sm h-[30px] bg-red-800 rounded-2xl'>Subscribe</button>
                        </div>
                        <div>
                            <div className='flex gap-2'>
                                <div className='w-auto px-6 text-sm h-[30px] bg-gray-900 rounded-2xl flex gap-4 items-center'>
                                    <FontAwesomeIcon icon={faHeart} className='' />
                                    <p className='flex'>{valueConverter(api ? api.statistics.likeCount : '')} <span> likes</span></p>
                                </div>
                                <FontAwesomeIcon icon={faShare} className='w-[15px] px-6  text-sm h-[30px] bg-gray-900 rounded-2xl' />
                                <FontAwesomeIcon icon={faDownload} className='w-[15px] px-6  text-sm h-[30px] bg-gray-900 rounded-2xl' />
                            </div>
                        </div>
                    </div>
                    <div>
                    </div>
                </div>
                <div className='flex  pb-2 border-b mt-2 gap-4 items-center'>
                    <h2 className='text-xl font-bold'>Comment</h2>
                    <p>{valueConverter(api ? api.statistics.commentCount : '')}</p>
                </div>
                <Comment />
                <Comment />
                <Comment />
                <Comment />
                <Comment />
            </div>
        </>
    )
}

export default Leftpanel
