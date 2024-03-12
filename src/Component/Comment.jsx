import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHeart } from '@fortawesome/free-regular-svg-icons'
import React from 'react'
import { faHeartCircleCheck, faHeartbeat } from '@fortawesome/free-solid-svg-icons'


function Comment() {
    return (
        <div>
            <div className='flex flex-row gap-4 pt-2 px-1 my-2'>
                <div className='w-fit'>
                    <img src="src/assets/simon.png" width={45} height={45} className='rounded-full' />
                </div>
                <div>
                    <h2 className='text-md font-bold'>Tom son</h2>
                    <h4 className='text-[14px]'>
                        very good video..
                    </h4>
                    <div className='flex gap-2 text-[12px]'>
                        <div className='flex items-center'>
                            
                            <FontAwesomeIcon icon={faHeart} className='w-[20px] px-6  text-sm h-[30px] rounded-2xl' />
                        </div>
                        < div className='flex items-center'>
                            
                            <FontAwesomeIcon icon={faHeart} className='w-[20px] px-6  text-sm h-[30px]' />
                        </div>
                    </div>
                </div>
            </div>
        </div >
    )
}

export default Comment
