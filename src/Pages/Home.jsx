import React from 'react'
import Navbar from '../Component/Navbar.jsx'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHome } from '@fortawesome/free-solid-svg-icons'
import SideNav from './SideNav.jsx'
import Maincontainer from './Maincontainer.jsx'

function Home() {
  return (
    <>
      <Navbar />
      <div className='flex w-full h-[fit] bg-black'>
      <SideNav/>
      <Maincontainer />
      </div>
    </>
  )
}

export default Home
