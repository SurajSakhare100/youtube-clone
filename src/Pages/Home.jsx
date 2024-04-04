import React from 'react'
import Navbar from '../Component/Navbar.jsx'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHome } from '@fortawesome/free-solid-svg-icons'
import Maincontainer from './Maincontainer.jsx'
import SideNav from './SideNav.jsx'

function Home() {
  
  return (
    <>
      <Navbar />
      <SideNav/>
      <Maincontainer />
    </>
  )
}

export default Home
