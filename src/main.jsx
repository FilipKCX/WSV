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
import Einstellungen from './pages/Main/Einstellungen'
import LogInPage from './pages/LogInPage'
import PasswordRequest from './pages/passwordRequest'
import RegisterSelect from './pages/RegisterSelect'
import ProfilePage from './pages/ProfilePage'
import ProfileCreation from './pages/ProfileCreation'
import 'bootstrap/dist/css/bootstrap.min.css'

const router = createBrowserRouter([
  {
    path: "/",
    element: <Homepagenologin />
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
    path: "/Register", 
    element: <Register/>
  },
  {
    path: "/Hinweise", 
    element: <Hinweise/>
  },
  {
    path: "/HomeUser",
    element: <HomeUser/>
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
  },
  {
    path: "/anmeldung",
    element: <LogInPage/>
  },
  {
    path: "/passwortanfordern",
    element: <PasswordRequest/>
  },
  {
    path: "/registerselect",
    element: <RegisterSelect/>
  },
  {
    path: "/register",
    element: <Register />
  },
  {
    path: "/profilepage",
    element: <ProfilePage />
  },
  {
    path: "/profilecreation",
    element: <ProfileCreation/>
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
)

export default Main;
