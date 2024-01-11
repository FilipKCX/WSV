import React from 'react'
import LogInButton from '../../components/NoLogIn/Homepagenologin/LogInButton'
import RegisterButton from '../../components/NoLogIn/Homepagenologin/RegisterButton'
import ImageWithText from '../../components/NoLogIn/Homepagenologin/ImageWithText'
import BottomNavbar from '../../components/NoLogIn/BottomNavbar'
import LogoNoLogIn from '../../components/NoLogIn/LogoNoLogIn'



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