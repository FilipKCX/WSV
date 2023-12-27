import React from 'react'
import BottomNavbar from '../components/BottomNavbar'
import Formular from '../components/Formular'
import TextControls from '../components/TextControls'
import ProfilbildKomponente from '../components/ProfilbildKomponente'
import BackButton from '../components/BackButton'
import SaveButton from '../components/SaveButton'
import './ProfileCreation.css'

const ProfileCreation = () => 
{
return <>
<Formular/>
<ProfilbildKomponente/>
<TextControls/>
<BackButton/>
<SaveButton/>
<BottomNavbar/>
</>
}

export default ProfileCreation