import { useParams } from 'react-router-dom'
import Home from './Pages/Home.jsx'
import SideNav from './Pages/SideNav.jsx'
import VideoPage from './Pages/VideoPage.jsx'

function App() {
  const {videoid}= useParams();
  
  return (
    <>
      {/* <Home/> */}
      <VideoPage videoid={videoid}/>
    </>
  )
}

export default App
