import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Posts from './pages/Posts'
import PostDetails from './pages/PostDetails'
import MainLayout from './layouts/MainLayout'
import Users from './pages/Users'
import Home from './pages/Home'

const router = createBrowserRouter([
  {
    path: '/',
    element: <MainLayout />,
    children: [
      { path: '/', element: <Home /> },
      { path: '/posts', element: <Posts /> },
      { path: '/posts/:postId', element: <PostDetails /> },
      { path: '/users', element: <Users /> },
    ],
  },
])

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
