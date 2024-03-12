import Home from './Pages/Home.jsx'
import SideNav from './Pages/SideNav.jsx'
import VideoPage from './Pages/VideoPage.jsx'
import { Outlet } from 'react-router-dom'
function App() {
  return (
    <>
    <Outlet/>
      {/* <Home/> */}
      {/* <VideoPage videoid={videoid}/> */}
    </>
  )
}

export default App
