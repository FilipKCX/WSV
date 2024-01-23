import React from 'react'
import Logo from '../../components/NoLogIn/LogoNoLogIn'
import ImpressumComp from '../../components/CompanyComponents/ImpressumCompany/ImpressumCompany'

const divStyle = {
    margin: '50px', 
  };

const Impressum = () => 
{
return <>
<div style={divStyle}>
<Logo/>
</div> 
<ImpressumComp/>
</>
}

export default Impressum;