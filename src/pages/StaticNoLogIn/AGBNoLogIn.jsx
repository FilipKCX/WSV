import React from 'react'
import Logo from '../../components/NoLogIn/LogoNoLogIn'
import AGBComp from '../../components/CompanyComponents/AGBCompany/AGBCompany'

const divStyle = {
    margin: '50px', // You can customize the margin value as needed
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