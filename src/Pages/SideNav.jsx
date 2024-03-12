import React, { useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHome, faVault, faVial } from '@fortawesome/free-solid-svg-icons'
import { faViacoin, faViadeo } from '@fortawesome/free-brands-svg-icons'
import Maincontainer from './Maincontainer'
function SideNav() {
     const [category, setCategory] = useState(0);
    return (
        <>
            <div className='flex w-full h-screen bg-black'>
                <div className='md:w-[250px] bg-black mt-12'>
                    <div className='lg:w-full h-full hidden sm:hidden md:block overflow-y-auto'>
                        <ul className='w-full px-2 pb-2 border-b'>
                            <li className='flex flex-row justify-start items-center gap-6 text-white py-2 px-4 rounded-lg hover:bg-gray-900 cursor-pointer'>
                                <FontAwesomeIcon icon={faHome} />
                                <p>Home</p>
                            </li>
                            <li className='flex flex-row justify-start items-center gap-6 text-white py-2 px-4 rounded-lg hover:bg-gray-900 cursor-pointer'>
                                <FontAwesomeIcon icon={faViacoin} />
                                <p>Shorts</p>
                            </li>
                            <li className='flex flex-row justify-start items-center gap-6 text-white py-2 px-4 rounded-lg hover:bg-gray-900 cursor-pointer'>
                                <FontAwesomeIcon icon={faVault} />
                                <p>Subscription</p>
                            </li>
                        </ul>
                        <ul className='w-full px-2 pb-2 border-b py-1'>
                            <h1 className='text-white text-md my-2'>Subscriptions</h1>
                            <li className='flex flex-row justify-start items-center gap-4 text-white py-2 px-4 rounded-lg hover:bg-gray-900 cursor-pointer'>
                                <img src="src/assets/tom.png" width={30} height={30} className='rounded-full' />
                                <p>Tom David</p>
                            </li>
                            <li className='flex flex-row justify-start items-center gap-4 text-white py-2 px-4 rounded-lg hover:bg-gray-900 cursor-pointer'>
                                <img src="src/assets/simon.png" width={30} height={30} className='rounded-full' />
                                <p>Simon Alter</p>
                            </li>
                            <li className='flex flex-row justify-start items-center gap-4 text-white py-2 px-4 rounded-lg hover:bg-gray-900 cursor-pointer'>
                                <img src="src/assets/megan.png" width={30} height={30} className='rounded-full' />
                                <p>Megan Niya</p>
                            </li>
                            <li className='flex flex-row justify-start items-center gap-4 text-white py-2 px-4 rounded-lg hover:bg-gray-900 cursor-pointer'>
                                <img src="src/assets/gerard.png" width={30} height={30} className='rounded-full' />
                                <p>Danny Gaming</p>
                            </li>
                        </ul>
                        <ul className='w-full px-2 pb-2 border-b py-1'>
                            <h1 className='text-white text-md my-2 font-medium'>Explore</h1>
                            <li className='flex flex-row justify-start items-center gap-4 text-white py-2 px-4 rounded-lg hover:bg-gray-900 cursor-pointer' onClick={() => { setCategory(0) }}>
                                <img src="src/assets/explore.png" width={25} height={25} className='rounded-full' />
                                <p>Home</p>
                            </li>
                            <li className='flex flex-row justify-start items-center gap-4 text-white py-2 px-4 rounded-lg hover:bg-gray-900 cursor-pointer' onClick={() => { setCategory(10) }}>
                                <img src="src/assets/music.png" width={25} height={25} className='rounded-full' />
                                <p>Music</p>
                            </li>
                            <li className='flex flex-row justify-start items-center gap-4 text-white py-2 px-4 rounded-lg hover:bg-gray-900 cursor-pointer' onClick={() => { setCategory(20) }}>
                                <img src="src/assets/game_icon.png" width={25} height={25} className='rounded-full' />
                                <p>Gaming</p>
                            </li>
                            <li className='flex flex-row justify-start items-center gap-4 text-white py-2 px-4 rounded-lg hover:bg-gray-900 cursor-pointer' onClick={() => { setCategory(28) }}>
                                <img src="src/assets/tech.png" width={25} height={25} className='rounded-full' />
                                <p>Tech</p>
                            </li>
                            <li className='flex flex-row justify-start items-center gap-4 text-white py-2 px-4 rounded-lg hover:bg-gray-900 cursor-pointer' onClick={() => { setCategory(25) }}>
                                <img src="src/assets/news.png" width={25} height={25} className='rounded-full' />
                                <p>News</p>
                            </li>
                            <li className='flex flex-row justify-start items-center gap-4 text-white py-2 px-4 rounded-lg hover:bg-gray-900 cursor-pointer' onClick={() => { setCategory(17) }}>
                                <img src="src/assets/sports.png" width={25} height={25} className='rounded-full' />
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
                <Maincontainer category={category} />
            </div>

        </>
    )
}
export default SideNav
