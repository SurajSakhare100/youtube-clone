import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHeart } from '@fortawesome/free-regular-svg-icons'
import React from 'react'
import { faHeartCircleCheck, faHeartbeat } from '@fortawesome/free-solid-svg-icons'
import commentapi from '../Api/comment';
import fetchvideo from '../Api/Video';
import valueConverter from './valueConverter';
import moment from 'moment';


function Comment({ videoid }) {
    const data = commentapi(videoid)
    return (
        <div>
            <div className='flex flex-col gap-4 pt-2 px-1 my-2'>
                {data ?
                    data.map((items, index) => {
                        return (
                            <div key={index} className='w-full flex flex-row gap-4'>
                                <div>
                                <img src={items.snippet.topLevelComment.snippet.authorProfileImageUrl} width={45} height={45} className='rounded-full' />
                                </div>
                                {/* <img src={items ? items.snippet.thumbnails.medium.url : ''} alt="" className='w-full rounded-lg' /> */}
                                <div>
                                    <div className='flex gap-2'>
                                    <h2 className='text-md font-bold'>{items.snippet.topLevelComment.snippet.authorDisplayName}</h2>
                                    <p>{moment(items.snippet.topLevelComment.snippet.updatedAt).fromNow()}</p>
                                    {/* <p>{Date('items.snippet.topLevelComment.snippet.updatedAt')}</p> */}
                                    </div>
                                    <p className='text-[14px]'>
                                    {items.snippet.topLevelComment.snippet.textDisplay}
                                    </p>
                                    <div className='flex gap-2 text-[12px]'>
                                        <div className='flex items-center'>
                                            <FontAwesomeIcon icon={faHeart} className='w-[20px] pr-2 text-sm h-[30px] rounded-2xl' />
                                         <p>{valueConverter(items.snippet.topLevelComment.snippet.likeCount)}</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        )
                    }) : ""}
            </div>
        </div >
    )
}

export default Comment
