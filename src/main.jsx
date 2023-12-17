import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import Homepagenologin from './pages/Homepagenologin'
import Register from './pages/Register'

import { BrowserRouter, createBrowserRouter, RouterProvider} from "react-router-dom"

const router = createBrowserRouter([
  {
    path: "/", 
    element: <Homepagenologin/>
  },
  {
    path: "/register", 
    element: <Register/>
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
   <RouterProvider router={router}/>
  </React.StrictMode>
)

export default Main;