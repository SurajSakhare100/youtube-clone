import React from 'react'
import Navbar from '../Component/Navbar.jsx'
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
