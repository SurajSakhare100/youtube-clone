import { Outlet } from 'react-router-dom'
import UseYoutube from './context/UseYoutube'
function App() {
  
  return (
    <>
      <UseYoutube>
        <div className='w-full h-screen flex  overflow-y-auto' >
          <Outlet />
        </div>
      </UseYoutube>
    </>
  )
}

export default App
