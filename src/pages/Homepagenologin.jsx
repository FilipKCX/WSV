import React from 'react'
import LogInButton from '../components/Homepagenologin/LogInButton'
import RegisterButton from '../components/Homepagenologin/RegisterButton'
import ImageWithText from '../components/Homepagenologin/ImageWithText'
import BottomNavbar from '../components/BottomNavbar'
import LogoNoLogIn from '../components/LogoNoLogIn'




const Homepagenologin = () => 
{
return <> 
<LogoNoLogIn/>
<LogInButton/> 
<RegisterButton/>
<ImageWithText/> 
<BottomNavbar/>
</>
}

export default Homepagenologin;