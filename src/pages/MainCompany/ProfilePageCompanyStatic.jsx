import React from 'react'
import '../Main/ProfilePage.css'
import Navibar from '../../components/CompanyComponents/NavbarCompany'
import ProfileViewStatic from '../../components/CompanyComponents/ProfilAnsichtCompany/ProfileViewStatic'

const ProfilePage = () => {
    return (
        <div>
            <Navibar/>
            <ProfileViewStatic/>
        </div>
    )
}

export default ProfilePage