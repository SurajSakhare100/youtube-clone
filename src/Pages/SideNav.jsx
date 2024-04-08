import React, { useEffect, useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHome, faVault, faVial } from '@fortawesome/free-solid-svg-icons'
import { faViacoin, faViadeo } from '@fortawesome/free-brands-svg-icons'
import Maincontainer from './Maincontainer'
import { useapi } from '../context/Youtube'
import channelapi from '../Api/Channeldata'
import fetchvideo from '../Api/Video'
import { Link } from 'react-router-dom'
import { FaHome, FaWifi } from 'react-icons/fa';
import { height, width } from '@fortawesome/free-brands-svg-icons/fa42Group'
import { FaHouse, FaHouseMedical } from 'react-icons/fa6'
import { SiYoutubeshorts } from 'react-icons/si'
import { MdOutlineSubscriptions } from 'react-icons/md'
import { BsFire } from 'react-icons/bs'
import { BiMusic } from 'react-icons/bi'
import { PiMusicNoteLight } from 'react-icons/pi'
import { IoGameController } from 'react-icons/io5'
import { GrTrophy } from 'react-icons/gr'
import { ImNewspaper } from 'react-icons/im'
function SideNav() {
    const channeldata = null;

    const { category, subScribe, setSubScribe,setCategory,channelInfos, setchannelInfo,menu } = useapi()
    return (
        <>
            <div className={`md:w-[280px] pt-3 bg-[#0F0F0F]  mt-12 ${menu} `}>
                <div className='lg:w-full h-full hidden sm:hidden md:block overflow-y-auto overflow-x-hidden'>
                    <ul className='w-full px-1 py-2 border-b mr-2 ml-2 border-[#2a2a2a]'>
                        <li className='flex flex-row justify-start items-center gap-6 text-white py-2 px-4 rounded-lg hover:bg-[#686868b5] cursor-pointer'>
                            <FaHouse style={{width:"20px",height:"20px",color:"white"}}/>
                            <p>Home</p>
                        </li>
                        <li className='flex flex-row justify-start items-center gap-6 text-white py-2 px-4 rounded-lg hover:bg-[#686868b5] cursor-pointer'>
                            <SiYoutubeshorts style={{width:"20px",height:"20px",color:"white"}} />
                            <p>Shorts</p>
                        </li>
                        <li className='flex flex-row justify-start items-center gap-6 text-white py-2 px-4 rounded-lg hover:bg-[#686868b5] cursor-pointer'>
                            <MdOutlineSubscriptions style={{width:"20px",height:"20px",color:"white"}} />
                            <p>Subscription</p>
                        </li>
                    </ul>
                    <ul className='w-full mr-2 ml-2  border-b border-[#2a2a2a] py-2'>
                        <h1 className='text-white text-lg my-2 pl-2'>Subscriptions</h1>
                        <div>
                        {
                        subScribe.map((subscribe,id)=>{
                            return(
                           <Link to={`channel/${subscribe.id}`} key={subscribe.id}>
                            <li  className='flex flex-row justify-start items-center gap-4 text-white py-2 px-4 rounded-lg hover:bg-[#686868b5] cursor-pointer'>
                                <img src={subscribe.img} width={25} height={25} className='rounded-full'
                                onClick={()=>{setchannelInfo(subscribe.id);
                                console.log(subscribe.id)} }/>
                            <p>{subscribe.title}</p>
                            </li></Link>
                            )
                            
                        })
                       }
                        </div>
                       
                    </ul>
                    <ul className='w-full px-2 pb-2 border-b py-1'>
                        <h1 className='text-white text-lg my-2 pl-2 font-medium'>Explore</h1>
                        <li className='flex flex-row justify-start items-center gap-4 text-white py-2 px-4 rounded-lg hover:bg-[#686868b5] cursor-pointer' onClick={() => { setCategory(0) }}>
                            <BsFire style={{width:"20px",height:"20px",color:"white"}} />
                            <p>Home</p>
                        </li>
                        <li className='flex flex-row justify-start items-center gap-4 text-white py-2 px-4 rounded-lg hover:bg-[#686868b5] cursor-pointer' onClick={() => { setCategory(10) }}>
                            <PiMusicNoteLight style={{width:"20px",height:"20px",color:"white"}} />
                            <p>Music</p>
                        </li>
                        <li className='flex flex-row justify-start items-center gap-4 text-white py-2 px-4 rounded-lg hover:bg-[#686868b5] cursor-pointer' onClick={() => { setCategory(20) }}>
                            <IoGameController style={{width:"20px",height:"20px",color:"white"}}/>
                            <p>Gaming</p>
                        </li>
                        <li className='flex flex-row justify-start items-center gap-4 text-white py-2 px-4 rounded-lg hover:bg-[#686868b5] cursor-pointer' onClick={() => { setCategory(28) }}>
                            <FaWifi style={{width:"20px",height:"20px",color:"white"}}/>
                            <p>Tech</p>
                        </li>
                        <li className='flex flex-row justify-start items-center gap-4 text-white py-2 px-4 rounded-lg hover:bg-[#686868b5] cursor-pointer' onClick={() => { setCategory(25) }}>
                        <ImNewspaper style={{width:"20px",height:"20px",color:"white"}}/>
                            <p>News</p>
                        </li>
                        <li className='flex flex-row justify-start items-center gap-4 text-white py-2 px-4 rounded-lg hover:bg-[#686868b5] cursor-pointer' onClick={() => { setCategory(17) }}>
                        <GrTrophy style={{width:"20px",height:"20px",color:"white"}}/>
                            <p>Sport</p>
                        </li>
                    </ul>
                    <ul className='w-full px-2 py-1 text-white text-sm flex flex-col gap-2'>
                        <p> About Press Copyright Contact usCreator Advertise Developers </p>
                        <p>
                            TermsPrivacyPolicy & SafetyHow YouTube worksTest new features
                        </p>
                        <p className='text-red-100'>
                            © 2024 Google LLC
                        </p>
                    </ul>
                </div>
                <div className='md:w-[70px] h-full hidden md:hidden bg-black fixed top-14'>
                    <ul className='w-full h-full '>
                        <li className='flex flex-col gap-2 text-white items-center justify-center py-2 px-1'>
                            <FontAwesomeIcon icon={faHome} />
                            <p className='text-sm'>Home</p>
                        </li>
                        <li className='flex flex-col gap-2 text-white items-center justify-center py-2 px-1'>
                            <FontAwesomeIcon icon={faViacoin} />
                            <p className='text-sm'>Shorts</p>
                        </li>
                        <li className='flex flex-col gap-2 text-white items-center justify-center py-2 px-1'>
                            <FontAwesomeIcon icon={faVault} />
                            <p className='text-[10px]'>Subscription</p>
                        </li>
                        <li className='flex flex-col gap-2 text-white items-center justify-center py-2 px-1'>
                            <FontAwesomeIcon icon={faVial} />
                            <p className='text-sm'>You</p>
                        </li>
                    </ul>
                </div>
            </div>
            <div className='absolute w-full h-[45px] bg-[#0F0F0F] bottom-0 left-0 sm:hidden'>
            <ul className='w-full px-2 pb-2 border-b py-1 flex justify-center items-center'>
                        <li className='flex flex-row justify-start items-center gap-4 text-white py-2 px-4 rounded-lg hover:bg-[#686868b5] cursor-pointer' onClick={() => { setCategory(0) }}>
                            <BsFire style={{width:"20px",height:"20px",color:"white"}} />
                            
                        </li>
                        <li className='flex flex-row justify-start items-center gap-4 text-white py-2 px-4 rounded-lg hover:bg-[#686868b5] cursor-pointer' onClick={() => { setCategory(10) }}>
                            <PiMusicNoteLight style={{width:"20px",height:"20px",color:"white"}} />
                            
                        </li>
                        <li className='flex flex-row justify-start items-center gap-4 text-white py-2 px-4 rounded-lg hover:bg-[#686868b5] cursor-pointer' onClick={() => { setCategory(20) }}>
                            <IoGameController style={{width:"20px",height:"20px",color:"white"}}/>
                            
                        </li>
                        <li className='flex flex-row justify-start items-center gap-4 text-white py-2 px-4 rounded-lg hover:bg-[#686868b5] cursor-pointer' onClick={() => { setCategory(28) }}>
                            <FaWifi style={{width:"20px",height:"20px",color:"white"}}/>
                           
                        </li>
                        <li className='flex flex-row justify-start items-center gap-4 text-white py-2 px-4 rounded-lg hover:bg-[#686868b5] cursor-pointer' onClick={() => { setCategory(25) }}>
                        <ImNewspaper style={{width:"20px",height:"20px",color:"white"}}/>
                           
                        </li>
                        <li className='flex flex-row justify-start items-center gap-4 text-white py-2 px-4 rounded-lg hover:bg-[#686868b5] cursor-pointer' onClick={() => { setCategory(17) }}>
                        <GrTrophy style={{width:"20px",height:"20px",color:"white"}}/>
                            
                        </li>
                    </ul>
            </div>
        </>
    )
}
export default SideNav
