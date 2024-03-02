import React from 'react'
import Navbar from '../../Component/Navbar'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHome } from '@fortawesome/free-solid-svg-icons'

function Home() {
  return (
    <>
      <Navbar />
      <div className='w-full h-full flex flex-row'>
        <div className='sm:w-1/6 bg-black sm:h-full w-[40px] h-full'>
          <ul className='w-full px-2 border-b border-white pb-2'>
            <li className='flex gap-4 items-center px-2 py-2 hover:bg-slate-600 rounded-lg'>
              <FontAwesomeIcon icon={faHome} className='text-white'/>
              <p className='md:text-white md:text-xl'>Home</p>
            </li>
            <li className='flex gap-4 items-center px-2 py-2 hover:bg-slate-600 rounded-lg'>
              <FontAwesomeIcon icon={faHome} className='text-white'/>
              <p className='md:text-white md:text-xl'>Home</p>
            </li>
            <li className='flex gap-4 items-center px-2 py-2 hover:bg-slate-600 rounded-lg'>
              <FontAwesomeIcon icon={faHome} className='text-white'/>
              <p className='md:text-white md:text-xl'>Home</p>
            </li>
          </ul>
          <ul className='w-full px-2 border-b border-white pb-2'>
            <li className='flex gap-4 items-center px-2 py-2 hover:bg-slate-600 rounded-lg'>
              <FontAwesomeIcon icon={faHome} className='text-white'/>
              <p className='md:text-white md:text-xl'>Home</p>
            </li>
            <li className='flex gap-4 items-center px-2 py-2 hover:bg-slate-600 rounded-lg'>
              <FontAwesomeIcon icon={faHome} className='text-white'/>
              <p className='md:text-white md:text-xl'>Home</p>
            </li>
            <li className='flex gap-4 items-center px-2 py-2 hover:bg-slate-600 rounded-lg'>
              <FontAwesomeIcon icon={faHome} className='text-white'/>
              <p className='md:text-white md:text-xl'>Home</p>
            </li>
          </ul>
          <ul className='w-full px-2 border-b border-white pb-2'>
            <li className='flex gap-4 items-center px-2 py-2 hover:bg-slate-600 rounded-lg'>
              <FontAwesomeIcon icon={faHome} className='text-white'/>
              <p className='md:text-white md:text-xl'>Home</p>
            </li>
            <li className='flex gap-4 items-center px-2 py-2 hover:bg-slate-600 rounded-lg'>
              <FontAwesomeIcon icon={faHome} className='text-white'/>
              <p className='md:text-white md:text-xl'>Home</p>
            </li>
            <li className='flex gap-4 items-center px-2 py-2 hover:bg-slate-600 rounded-lg'>
              <FontAwesomeIcon icon={faHome} className='text-white'/>
              <p className='md:text-white md:text-xl'>Home</p>
            </li>
            <li className='flex gap-4 items-center px-2 py-2 hover:bg-slate-600 rounded-lg'>
              <FontAwesomeIcon icon={faHome} className='text-white'/>
              <p className='md:text-white md:text-xl'>Home</p>
            </li>
            <li className='flex gap-4 items-center px-2 py-2 hover:bg-slate-600 rounded-lg'>
              <FontAwesomeIcon icon={faHome} className='text-white'/>
              <p className='md:text-white md:text-xl'>Home</p>
            </li>
          </ul>
          <ul className='w-full px-2 border-b border-white pb-2'>
            <li>Subscription</li>
            <li className='flex gap-4 items-center px-2 py-2 hover:bg-slate-600 rounded-lg'>
              <FontAwesomeIcon icon={faHome} className='text-white'/>
              <p className='md:text-white md:text-xl'>Home</p>
            </li>
            <li className='flex gap-4 items-center px-2 py-2 hover:bg-slate-600 rounded-lg'>
              <FontAwesomeIcon icon={faHome} className='text-white'/>
              <p className='md:text-white md:text-xl'>Home</p>
            </li>
            <li className='flex gap-4 items-center px-2 py-2 hover:bg-slate-600 rounded-lg'>
              <FontAwesomeIcon icon={faHome} className='text-white'/>
              <p className='md:text-white md:text-xl'>Home</p>
            </li>
            <li className='flex gap-4 items-center px-2 py-2 hover:bg-slate-600 rounded-lg'>
              <FontAwesomeIcon icon={faHome} className='text-white'/>
              <p className='md:text-white md:text-xl'>Home</p>
            </li>
            <li className='flex gap-4 items-center px-2 py-2 hover:bg-slate-600 rounded-lg'>
              <FontAwesomeIcon icon={faHome} className='text-white'/>
              <p className='md:text-white md:text-xl'>Home</p>
            </li>
          </ul>
        </div>
        <div className='sm:w-3/4 sm:px-4 w-3/4 mx-auto mt-4 sm:grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4
      gap-2'>
          <div className='w-full'>
            <img src="src/assets/thumbnail1.png" className='sm:w-full sm:px-2' />
          </div>
          <div className='w-full'>
            <img src="src/assets/thumbnail1.png" className='sm:w-full sm:px-2' />
          </div>
          <div className='w-full'>
            <img src="src/assets/thumbnail1.png" className='sm:w-full sm:px-2' />
          </div>
          <div className='w-full'>
            <img src="src/assets/thumbnail1.png" className='sm:w-full sm:px-2' />
          </div>
          <div className='w-full'>
            <img src="src/assets/thumbnail1.png" className='sm:w-full sm:px-2' />
          </div>
        </div>
      </div>
    </>
  )
}

export default Home
