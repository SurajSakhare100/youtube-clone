import React, { useEffect, useRef, useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars, faMicrophone, faSearch } from '@fortawesome/free-solid-svg-icons'
import youtube from '../assets/youtube.png'
import { Link } from 'react-router-dom'
import { useapi } from '../context/Youtube'

function Navbar() {
    const {searchTitle, setSearchTitle,menu, setmenu } = useapi()
    const [input, setinput] = useState('')
    const handlesubmit = () => {
       setSearchTitle(input)
    }

    return (
        <>
            <div className='flex flex-row items-center justify-between bg-black py-2 px-6 fixed w-full h-[8vh]'>
                <div className='flex flex-row gap-2 items-center'>
                    <FontAwesomeIcon icon={faBars} className='hover:rounded-full hover:bg-slate-900 text-xl p-3 text-white' onClick={()=>{menu==''?setmenu('hidden'):setmenu('')}}/>
                    <img src={youtube} width={25} height={20} />
                    <p className='text-xl font-bold font-sans text-white hidden sm:block'>YOUTUBE <sup className='text-sm font-normal'>IN</sup></p>
                </div>
                <div className='md:flex md:gap-4 md:items-center hidden'>
                    <div className='h-full flex items-center justify-center relative '>
                        <input
                            type="text"
                            placeholder='Search'
                            className='md:w-[350px] texl-xl lg:w-[500px] xl:w-[700px] md:h-full bg-black rounded-3xl outline-1 outline-slate-100 py-2 px-2 outline-none text-white '
                            value={input}
                            onChange={(e) => { setinput(e.target.value) }}
                        />
                        <div className='h-full bg-[#222222] absolute right-0 top-0 rounded-3xl shadow px-6 flex items-center justify-center rounded-l-none '>
                            <Link to={'search'} onClick={() => handlesubmit()}>
                                <FontAwesomeIcon icon={faSearch} className='text-white md:w-[20px] md:h-[20px]' />
                            </Link>
                        </div>
                    </div>
                    <div className='ml-2'>
                        <FontAwesomeIcon icon={faMicrophone} className='text-white w-[30px] h-[20px] bg-[#262626] px-1 py-2 rounded-full' />
                    </div>
                </div>
                <div>
                    <div className='flex flex-row items-center justify-center gap-6'>
                        <img src="src/assets/upload.png" className='w-[25px]' />
                        <img src="src/assets/notification.png" className='w-[25px]' />
                        <img src="src/assets/jack.png" className='w-[30px] h-[30px] rounded-full' />
                    </div>
                </div>
            </div>
        </>
    )
}

export default Navbar
