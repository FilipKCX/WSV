import React from 'react'
import '../Main/ProfilePage.css'
import Navibar from '../../components/CompanyComponents/NavbarCompany'
import ProfilePageMatching from '../../components/UserComponents/Profilansicht/ProfilePageMatching'

const ProfilePage = () => 
{
return (
    <div><Navibar/>
    <ProfilePageMatching/>
</div>
    
) 


}

export default ProfilePage