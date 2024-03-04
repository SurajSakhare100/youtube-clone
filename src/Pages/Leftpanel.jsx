import { faDownload, faHeart, faHeartBroken, faLink, faShare } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'
import Comment from '../Component/Comment'

function Leftpanel({videoid}) {
    return (
        <>
            <div className='w-full md:w-3/4 pt-2'>
                <div className='w-full'>
                    <iframe src={`https://youtube.com/embed/${videoid}`} frameborder="0"></iframe>
                    {/* <video src="src/assets/video.mp4" controls muted  className=' rounded-lg '></video> */}
                    <div className='mt-2'>
                        <h2 className='text-xl'>5 Real-Life JavaScript Effects and Features That Reign Supreme! 👑🌐</h2>
                    </div>
                    <div className='flex items-center justify-between my-2'>
                        <div className='flex gap-4 items-center'>
                            <img src="src/assets/megan.png" width={30} height={30} className='rounded-full' />
                            <div className='flex flex-col'>
                                <h5>
                                    Sheryians Coding 
                                </h5>
                                <p>288K subscribers</p>
                            </div>
                            <button className='px-6  text-sm h-[30px] bg-gray-200 rounded-2xl'>Subscribe</button>
                        </div>
                        <div>
                            <div className='flex gap-2'>
                                <FontAwesomeIcon icon={faHeart} className='w-[15px] px-6  text-sm h-[30px] bg-gray-900 rounded-2xl' />
                                <FontAwesomeIcon icon={faShare} className='w-[15px] px-6  text-sm h-[30px] bg-gray-900 rounded-2xl' />
                                <FontAwesomeIcon icon={faDownload} className='w-[15px] px-6  text-sm h-[30px] bg-gray-900 rounded-2xl' />
                            </div>
                        </div>
                    </div>

                </div>
                <h2 className='text-xl font-bold pb-2 border-b mt-2'>Comment</h2>
            <Comment/>
            <Comment/>
            <Comment/>
            <Comment/>
            <Comment/>
            </div>
        </>
    )
}

export default Leftpanel
