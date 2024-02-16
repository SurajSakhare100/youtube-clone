import React from 'react'

function HeroInstructor() {
  return (
    <div className='w-full py-20 px-18'>
      <div className='w-full m-auto h-full flex flex-row items-center justify-center gap-20 flex-wrap'>
        <div className=''><img src="/Hero Img/Hero Img.jpg" width={400} height={400} alt="" /></div>
        <div className='w-1/3 flex flex-col gap-2'>
            <h1 className='text-3xl font-bold'>Become an instructor</h1>
            <p>Instructors from around the world teach millions of learners on Udemy. We provide the tools and skills to teach what you love.</p>
           <div>
           <div className='bg-black w-[180px] py-2.5 text-white px-2 font-bold'>
                <a className='w-full' href="">
                <span>Start Teaching Today</span>
                </a>
            </div>
           </div>
        </div>
      </div>
    </div>
  )
}

export default HeroInstructor
