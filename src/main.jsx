import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { RouterProvider, Router, createBrowserRouter } from 'react-router-dom'
import VideoPage from './Pages/VideoPage.jsx'
import Home from './Pages/Home.jsx'
import Search from './Pages/Search.jsx'

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
        path: 'video/:videocategory/:videoid',
        element: <VideoPage />,
      },
      {
        path: '/search',
        element: <Search />,
      },
    ]
  }
])
ReactDOM.createRoot(document.getElementById('root')).render(
  <RouterProvider router={router} />
)
