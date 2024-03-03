import React from 'react'

function Video({imgLink}) {
    return (
        <div className='w-full px-4'>
            <img src={imgLink} className='w-full rounded-lg'/>
            <div className='flex flex-row gap-4 pt-2 px-1'>
                <div className='w-fit'>
                    <img src="src/assets/simon.png" width={70} height={70} className='rounded-full' />
                </div>
                <div>
                    <h2 className='text-md font-bold'>JavaScript Course: Master Basics in One Video ! Ignite Your Front-End Mastery Series!</h2>
                    <h4 className='text-[14px]'>
                        Sheryians Coding School
                    </h4>
                    <div className='flex gap-2 text-[12px]'>
                        <p>610K views</p>
                        <p> 8 months ago</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Video
