import React from 'react'
import Image from '../components/Image'
import LogInButtonNoLogIn from '../components/LogInButtonNoLogIn'
import LineSeperator from '../components/LineSeperator'
import Headline from '../components/Headline'
import LogIn from '../components/LogIn'
import BottomNavbar from '../components/BottomNavbar'
import './Homepagenologin.css'
import { Router } from 'react-router-dom'
import Logo from '../components/Logo' 

const Homepagenologin = () => 
{
return <> 
<LogInButtonNoLogIn/> 
<LineSeperator/>
<Logo/>
<div className= 'imgdiv'>
<Headline/> 
<Image/> 
</div>
<LogIn/> 
<BottomNavbar/>
</>
}

export default Homepagenologin