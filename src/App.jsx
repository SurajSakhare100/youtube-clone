import React from 'react'
import Home from './Pages/Home.jsx'
import SideNav from './Pages/SideNav.jsx'
import VideoPage from './Pages/VideoPage.jsx'

function App() {
  async function logMovies() {
    const response = await fetch('https://www.googleapis.com/youtube/v3/videoCategories');
    const movies = await response.json();
    console.log(movies);
  }
  logMovies()
  return (
    <>
      <Home/>
      {/* <VideoPage/> */}
    </>
  )
}

export default App
