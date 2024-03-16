import { Outlet } from 'react-router-dom'
import Navbar from './Component/Navbar'
import UseYoutube from './context/UseYoutube'
function App() {
  return (
    <>
    <UseYoutube>
    <Navbar />
    <Outlet />
    </UseYoutube>
    </>
  )
}

export default App
