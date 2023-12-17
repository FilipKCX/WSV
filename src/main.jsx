import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import Homepagenologin from './pages/Homepagenologin'
import Register from './pages/Register'
import Datenschutz from './pages/Static/Datenschutz'
import { BrowserRouter, createBrowserRouter, RouterProvider} from "react-router-dom"
import Kontakt from './pages/Static/Kontakt'
import AGB from './pages/Static/AGB'
import Hinweise from './pages/Static/Hinweise'
import HomeUser from './pages/Main/HomeUser'
import Chat from './pages/Main/Chat'
import Profil from './pages/Main/Profil'
import Likes from './pages/Main/Likes'
import Einstellungen from './pages/Main/Einstelungen'


const router = createBrowserRouter([
  {
    path: "/", 
    element: <Homepagenologin/>
  },
  {
    path: "/Datenschutz", 
    element: <Datenschutz/>
  },
  {
    path: "/Kontakt", 
    element: <Kontakt/>
  },
  {
    path: "/AGB", 
    element: <AGB/>
  },
  {
    path: "/register", 
    element: <Register/>
  },
  {
    path: "/Hinweise", 
    element: <Hinweise/>
  },
  {
    path: "/Hinweise",
    element: <HomeUser/>
  },
  {
    path: "/Chat",
    element: <Chat/>
  },
  {
    path: "/Profil",
    element: <Profil/>
  },
  {
    path: "/Likes",
    element: <Likes/>
  },
  {
    path: "/Einstellungen",
    element: <Einstellungen/>
  },
  
  {
    path: "HomeUser",
    element: <HomeUser/>
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
   <RouterProvider router={router}/>
  </React.StrictMode>
)

export default Main;