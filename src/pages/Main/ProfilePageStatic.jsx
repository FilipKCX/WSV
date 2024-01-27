import React from 'react'
import './ProfilePageStatic.css'
import Navibar from '../../components/UserComponents/Navbar'
import UserProfileViewStatic from '../../components/UserComponents/Profilansicht/UserProfileViewStatic'

const ProfilePageStatic = () => {
    return (
        <div>
            <Navibar />
            <UserProfileViewStatic/>
        </div>

    )


}

export default ProfilePageStatic