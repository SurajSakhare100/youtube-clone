import { Outlet } from 'react-router-dom'
import Navbar from './Component/Navbar'
import SideNav from './Pages/SideNav'
import UseYoutube from './context/UseYoutube'
function App() {
  return (
    <>
      <UseYoutube>
        <div className='w-full h-screen flex overflow-scroll'>
          <Outlet />
        </div>
      </UseYoutube>
    </>
  )
}

export default App
