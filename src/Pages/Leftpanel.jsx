import { faDownload, faHeart, faHeartBroken, faLink, faShare } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React, { useContext } from 'react'
import Comment from '../Component/Comment'
import videoApi from '../Api/VideoCategory'
import { useapi} from '../context/Category'
function Leftpanel({videoid,videoNum}) {
    // const datas=videoApi(videoid)
    // const data=useContext(Category);
    const category=useapi()
    console.log(category)
    return (
        <>
            <div className='w-full md:w-2/3 pt-4 px-10'>
                <div className='w-full'>
                    <iframe src={`https://youtube.com/embed/${videoNum}`}  className='w-full h-[550px]'></iframe>
                    {/* <video src="src/assets/video.mp4" controls muted  className='' rounded-lg '></video> */}
                    <div className='mt-2'>
                        <h2 className='text-xl'> 
                        {/* {data[0].items.snippet} */}
                         </h2>
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
