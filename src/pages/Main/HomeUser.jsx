import React from 'react'
import '../Homepagenologin.css'
import TopNavbarUser from '../../components/TopNavbarUser'
import Articles from '../../components/Homeuser/Articles'
import Logo from '../../components/LogoUser'
import BottomNavbar from '../../components/BottomNavbar'



const HomeUser = () => 
{
return <> 
<Logo/>
<TopNavbarUser/>
<Articles/>
<BottomNavbar/>
</>
}

export default HomeUser