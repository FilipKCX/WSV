import React from 'react'
import LineSeparator from '../components/LineSeperator'
import BottomNavbar from '../components/BottomNavbar'
import './ProfilePage.css'
import TopNavbar from '../components/TopNavbar'
import ProfileView from '../components/ProfileView'

const ProfilePage = () => 
{
return <> 
<TopNavbar/>
<LineSeparator/>
<ProfileView/>
<BottomNavbar/>
</>
}

export default ProfilePage