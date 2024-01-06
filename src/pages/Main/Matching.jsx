import React from 'react';
import Navbar from '../../components/Navbar';
import BottomNavbar from '../../components/BottomNavbar';
import Card from '../../components/Matching/Card';
import Filter from '../../components/Matching/Filter';
import './Matching.css';

const Matching = () => 
{
return <> 
<Navbar/>
<Filter/>
<Card/>
<BottomNavbar/>
</>
}

export default Matching;