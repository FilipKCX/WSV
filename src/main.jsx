import React from 'react'
import ReactDOM from 'react-dom/client'

import './index.css'
import Homepagenologin from './pages/MainNoLogIn/Homepagenologin'
import Register from './pages/MainNoLogIn/Register'
import Datenschutz from './pages/Static/Datenschutz'
import { BrowserRouter, createBrowserRouter, RouterProvider} from "react-router-dom"
import Kontakt from './pages/Static/Kontakt'
import AGB from './pages/Static/AGB'
import Hinweise from './pages/Static/Hinweise'
import HomeUser from './pages/Main/HomeUser'
import Chat from './pages/Main/Chat'
import Likes from './pages/Main/Likes'
import Einstellungen from './pages/Main/Einstellungen'
import LogInPage from './pages/MainNoLogIn/LogInPage'
import PasswordRequest from './pages/MainNoLogIn/PasswordRequest'
import RegisterSelect from './pages/MainNoLogIn/RegisterSelect'
import Impressum from './pages/Static/Impressum'

import 'bootstrap/dist/css/bootstrap.min.css'
import Matching from './pages/Main/Matching'import ProfilePage from './pages/Main/ProfilePage'
import ProfileCreation from './pages/MainNoLogIn/ProfileCreation'
import 'bootstrap/dist/css/bootstrap.min.css'

import HomeCompany from './pages/MainCompany/HomeCompany'
import DatenschutzCompany from './pages/StaticCompany/DatenschutzCompany'
import KontaktCompany from './pages/StaticCompany/KontaktCompany'
import AGBCompany from './pages/StaticCompany/AGBCompany'
import HinweiseCompany from './pages/StaticCompany/HinweiseCompany'
import ChatCompany from './pages/MainCompany/ChatCompany'
import LikesCompany from './pages/MainCompany/LikesCompany'
import EinstellungenCompany from './pages/MainCompany/SettingsCompany'
import ImpressumCompany from './pages/StaticCompany/ImpressumCompany'
import ProfilePageCompany from './pages/MainCompany/ProfilePageCompany'
import ProfileCreationCompany from './pages/MainNoLogIn/ProfileCreationCompany'

import DatenschutzNoLogIn from './pages/StaticNoLogIn/DatenschutzNoLogIn'
import KontaktNoLogIn from './pages/StaticNoLogIn/KontaktNoLogIn'
import AGBNoLogIn from './pages/StaticNoLogIn/AGBNoLogIn'
import HinweiseNoLogIn from './pages/StaticNoLogIn/HinweiseNoLogIn'
import ImpressumNoLogIn from './pages/StaticNoLogIn/ImpressumNoLogIn'

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
    path: "/Impressum",
    element: <Impressum/>
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
    path: "/Likes",
    element: <Likes/>
  },
  {
    path: "/chat",
    element: <Chat/>
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
  },
  {
    path: "/Matching",
    element: <Matching/>
  },
  {
    path: "/HomeCompany",
    element: <HomeCompany />
  },
  {
    path: "/DatenschutzCompany",
    element: <DatenschutzCompany/>
  },
  {
    path: "/KontaktCompany",
    element: <KontaktCompany/>
  },
  {
    path: "/AGBCompany",
    element: <AGBCompany/>
  },
  {
    path: "/HinweiseCompany",
    element: <HinweiseCompany/>
  },
  {
    path: "/ChatCompany",
    element: <ChatCompany/>
  },
  {
    path: "/LikesCompany",
    element: <LikesCompany/>
  },
  {
    path: "/SettingsCompany",
    element: <EinstellungenCompany/>
  },
  {
    path: "/ImpressumCompany",
    element: <ImpressumCompany/>
  },
  {
    path: "/ProfilePageCompany",
    element: <ProfilePageCompany/>
  },
  {
    path: "/ProfileCreationCompany",
    element: <ProfileCreationCompany/>
  },
  {
    path: "/ImpressumNo",
    element: <ImpressumNoLogIn/>
  },
  {
    path: "/DatenschutzNo",
    element: <DatenschutzNoLogIn/>
  },
  {
    path: "/HinweiseNo",
    element: <HinweiseNoLogIn/>
  },
  {
    path: "/KontaktNo",
    element: <KontaktNoLogIn/>
  },
  {
    path: "/AGBNo",
    element: <AGBNoLogIn/>
  },
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
)

export default Main;
