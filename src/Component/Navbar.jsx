import React, { useEffect, useRef, useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars, faMicrophone, faSearch } from '@fortawesome/free-solid-svg-icons'
import youtube from '../assets/youtube.png'
import { Link } from 'react-router-dom'
import { useapi } from '../context/Youtube'
import user from '../assets/simon.png'
import { IoMdNotificationsOutline } from 'react-icons/io'
import { RiVideoAddLine } from 'react-icons/ri'

function Navbar() {
    const {setSearchTitle,menu, setmenu} = useapi()
    const [input, setinput] = useState('')
    const handlesubmit = () => {
       setSearchTitle(input)
    }

    return (
        <>
            <div className='flex flex-row items-center justify-between bg-[#0F0F0F] py-2 pl-4 pr-8 fixed w-full h-[8vh] shadow-2xl z-40 '>
                <div className='flex flex-row gap-2 items-center'>
                    <FontAwesomeIcon icon={faBars} className='hover:rounded-full hover:bg-[#686868b5] text-xl p-3 text-white' onClick={()=>{menu==''?setmenu('hidden'):setmenu('')}}/>
                    <img src={youtube} width={25} height={20} />
                    <p className='text-xl font-bold font-sans text-white hidden sm:block relative'>YOUTUBE <sup className='text-[10px] absolute top-1 pl-2 font-normal'>IN</sup></p>
                </div>
                <div className='md:flex md:gap-4 md:items-center hidden'>
                    <div className='h-full flex items-center justify-center relative '>
                        <input
                            type="text"
                            placeholder='Search'
                            className='md:w-[350px] h-full texl-xl lg:w-[500px] xl:w-[700px] md:h-full bg-black rounded-3xl outline-1 outline-slate-100 py-1.5 px-2 outline-none text-white '
                            value={input}
                            onChange={(e) => { setinput(e.target.value) }}
                        />
                        <div className='h-full bg-[#222222] absolute right-0 top-0 rounded-3xl shadow px-6 flex items-center justify-center rounded-l-none '>
                            <Link to={'/search'} onClick={() => handlesubmit()}>
                                <FontAwesomeIcon icon={faSearch} className='text-white md:w-[20px] md:h-full' />
                            </Link>
                        </div>
                    </div>
                    <div className='ml-2'>
                        <FontAwesomeIcon icon={faMicrophone} className='text-white w-[30px] h-[20px] bg-[#262626] px-1 py-2 rounded-full' />
                    </div>
                </div>
                <div>
                    <div className='flex flex-row items-center justify-center gap-6 '>
                        <RiVideoAddLine className='w-[25px] h-[25px] text-white hidden md:block' />
                        <IoMdNotificationsOutline className='w-[25px] h-[25px] text-white hidden md:block' />
                        <img src={user} className='w-[32px] h-[32px] rounded-full ' onClick={()=>signOut(auth)} />
                    </div>
                </div>
            </div>
        </>
    )
}

export default Navbar
