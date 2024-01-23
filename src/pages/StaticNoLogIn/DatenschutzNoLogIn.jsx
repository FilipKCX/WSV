import React from 'react'
import Logo from '../../components/NoLogIn/LogoNoLogIn'
import DatenschutzComp from '../../components/CompanyComponents/DatenschutzCompany/DatenschutzCompany'

const divStyle = {
    margin: '50px', 
  };
  
const Datenschutz = () => 
{
return <> 
<div style={divStyle}>
<Logo/>
</div>
<DatenschutzComp/>
</>
}

export default Datenschutz;