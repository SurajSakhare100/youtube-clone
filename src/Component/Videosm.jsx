import React from 'react'

function Videosm({imgLinks}) {
    return (
        <div className='flex h-[120px]  mb-2 items-center gap-2 px-2'>
            <div className='w-1/2 '>
                <img src={imgLinks} className='rounded-lg'/>
            </div>
            <div className=' w-1/2 flex-col gap-2 '>
                <h2>Mind-Blowing ES6 JavaScript Every ..</h2>
                <h4 className='text-[14px]'>
                    Sheryians Coding School
                </h4>
                <div className='flex gap-2 text-[12px]'>
                    <p>610K views</p>
                    <p> 8 months ago</p>
                </div>
            </div>
        </div>
    )
}

export default Videosm
