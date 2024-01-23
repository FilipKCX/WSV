import React from 'react'
import Logo from '../../components/NoLogIn/LogoNoLogIn'
import AGBComp from '../../components/CompanyComponents/AGBCompany/AGBCompany'

const divStyle = {
    margin: '50px',
  };
  
const AGB = () => 
{
return <> 
<div style={divStyle}>
<Logo/>
</div>
<AGBComp/>
</>
}

export default AGB;