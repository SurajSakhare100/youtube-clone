import { Outlet } from 'react-router-dom'
import Navbar from './Component/Navbar'
import SideNav from './Pages/SideNav'
import UseYoutube from './context/UseYoutube'
import { app } from './firebase/firebase';
import { getAuth, onAuthStateChanged } from 'firebase/auth';
import {useNavigate} from 'react-router-dom'
import { useEffect } from 'react';
import { useapi } from './context/Youtube';
function App() {
  
  const navigate=useNavigate();
  const auth = getAuth(app);
  const {authStatus}=useapi()
  useEffect(() => {

    onAuthStateChanged(auth,user=>{
      if(user){
          navigate('/')
      }
      else{
        navigate('/auth/signin')
      }
    })
}, [authStatus])
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
