import React from 'react'
import ReactDOM from 'react-dom/client'
import Navbar from './homepage nologin components/Navbar'
import Scrollbar from './homepage nologin components/Scrollbar'
import LogInButtonNoLogIn from './homepage nologin components/LogInButtonNoLogIn'
import LineSeperator from './homepage nologin components/LineSeperator'
import Headline from './homepage nologin components/Headline'
import Image from './homepage nologin components/Image'
import LogIn from './homepage nologin components/LogIn'


import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <LogInButtonNoLogIn/> <LineSeperator/>
    <Headline/> <Image/> <LogIn/> <Scrollbar/>
  </React.StrictMode>,
)
