import React from 'react'
import Headline from '../../components/Headline2'
import '../Homepagenologin.css'
import Navibar from '../../components/Navbar'
import './HomeUser.css'

const HomeUser = () => 
{
return <> 
<div className='scrollable-container'>
    <Navibar/>
        <div className= 'imgdiv'>
            <Headline/> 
        </div>
</div>
</>
}

export default HomeUser