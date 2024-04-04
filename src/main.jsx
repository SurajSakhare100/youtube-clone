import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { RouterProvider, Router, createBrowserRouter } from 'react-router-dom'
import VideoPage from './Pages/VideoPage.jsx'
import Home from './Pages/Home.jsx'
import Search from './Pages/Search.jsx'
import Channel from './Pages/Channel.jsx'
import Auth from './Pages/Auth.jsx'

const router = createBrowserRouter([
  {
    path: '',
    element: <App />,
    children: [
      {
        path: '',
        element: <Home />,
      },
      {
        path: 'video/:videoCategory/:videoid',
        element: <VideoPage />,
      },
      {
        path: 'channel/:channelId',
        element: <Channel />,
      },
      {
        path: '/search',
        element: <Search />,
      },
      {
        path: '/auth',
        element: <Auth />,
      },
    ]
  }
])
ReactDOM.createRoot(document.getElementById('root')).render(
  <RouterProvider router={router} />
)
