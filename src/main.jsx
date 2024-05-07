import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { RouterProvider, Router, createBrowserRouter } from 'react-router-dom'
import VideoPage from './Pages/VideoPage.jsx'
import Home from './Pages/Home.jsx'
import Search from './Pages/Search.jsx'
import Channel from './Pages/Channel.jsx'
import SignIn from './Pages/SignIn.jsx'
import SignUp from './Pages/SignUp.jsx'
import ChannelVideo from './Pages/ChannelVideo.jsx'
import Try from './Pages/Try.jsx'
import Video from './Pages/Video.jsx'

const router = createBrowserRouter([
  {
    path: '',
    element: <App />,
    children: [
      {
        path: '/',
        element: <Home />,
      },
      {
        path: '/video/:videoid',
        element: <VideoPage />,
      },
      {
        path: 'channel/:channelId',
        element: <Channel />,
      },
      {
        path: 'playlist/:playlistId',
        element:<ChannelVideo />,
      },
      {
        path: '/search',
        element: <Search />,
      },
      {
        path: '/auth/signup',
        element: <SignUp />,
      },
      {
        path: '/auth/signin',
        element: <SignIn />,
      },
      {
        path: 'video/try',
        element: <Video />,
      },
    ]
  }
])
ReactDOM.createRoot(document.getElementById('root')).render(
  <RouterProvider router={router} />
)
