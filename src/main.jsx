import React from 'react'
import ReactDOM from 'react-dom/client'

import App from './App.jsx'
import About from './pages/About'
import ProjectDetails from './pages/ProjectDetails'

import {  createBrowserRouter, RouterProvider } from "react-router-dom"

const router = createBrowserRouter([
    {
      path: "/",
      element: <App/>
    },
    {
      path: "/about",
      element: <About/>
    },
    {
      path: '/project/:id',
      element: <ProjectDetails/>
    }
  ]);

ReactDOM.createRoot(document.getElementById('root')).render(
    <React.StrictMode>
        <RouterProvider router={router} />
    </React.StrictMode>
)
