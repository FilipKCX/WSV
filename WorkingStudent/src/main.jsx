import React from 'react'
import ReactDOM from 'react-dom/client'
import Navbar from './components/Navbar'
import Scrollbar from './components/Scrollbar'
import LogInButtonNoLogIn from './components/LogInButtonNoLogIn'

import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <LogInButtonNoLogIn/>
    <Scrollbar/>
    <Navbar/>
  </React.StrictMode>,
)
