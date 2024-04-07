import { faDownload, faHeart, faHeartBroken, faLink, faShare } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React, { useContext, useEffect, useState } from 'react'
import Comment from '../Component/Comment';
import valueConverter from '../Component/valueConverter';
import moment from 'moment';
import { useapi } from '../context/Youtube';
import channelInfo from '../Api/ChannelInfo';
function Leftpanel() {
    const { channelData, videoid, addSubscribe, channelInfos ,removeSubscribe,subScribe} = useapi();
    const [subscribing, setSubScribing] = useState('SubScribe')
    const handleSubmit=(id)=>{
        let a=true;
        for (let i = 0; i < subScribe.length; i++) {
            if(subScribe[i].id===id){
                a=false;
            }
        }
        a?setSubScribing('SubScribe'):setSubScribing('UnSubScribe')
    }
    useEffect(() => {
        handleSubmit(channelInfos?.id)
    }, [channelInfos])
    return (
        <>
            <div className='w-full md:w-2/3 pt-4 px-10 bg-[#0F0F0F]'>
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
                            <div className='w-[40px] h-[40px] rounded-full flex-shrink-0'>
                                <img src={channelInfos? channelInfos.snippet.thumbnails.default.url : ''} className='w-full h-full object-contain rounded-full' />
                            </div>
                            <div className='flex flex-col'>
                                <h5>
                                    {channelData ? channelData.snippet.channelTitle : ""}
                                </h5>
                                {/* <p>{valueConverter(channelData ?  channelData.snippet.vi: '1M')}</p> */}
                            </div>
                            <button className='px-6  text-sm h-[30px] bg-red-800 rounded-2xl'
                             onClick={() => {
                                
                                subscribing == 'SubScribe' ? addSubscribe({ title: channelData.snippet.channelTitle, img: channelInfos.snippet.thumbnails.default.url,id:channelInfos.id },channelInfos.id) :removeSubscribe(channelInfos.id)
                                subscribing == 'SubScribe' ? setSubScribing('UnSubScribe') : setSubScribing('SubScribe');
                               
                            }}>{subscribing}</button>
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
