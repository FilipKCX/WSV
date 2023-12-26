import React from 'react'
import LogInButton from '../components/Homepagenologin/LogInButton'
import RegisterButton from '../components/Homepagenologin/RegisterButton'
import ImageWithText from '../components/Homepagenologin/ImageWithText'
import BottomNavbar from '../components/BottomNavbar'
import Logo from '../components/LogoNoLogIn'
import Button from 'react-bootstrap/Button';


const Homepagenologin = () => 
{
return <> 
<Logo/>
<LogInButton/> 
<RegisterButton/> 
<ImageWithText/> 
<BottomNavbar/>
<div className="oprimary">
        <Button variant="outline-primary">Primary</Button>
</div>

</>
}

export default Homepagenologin;