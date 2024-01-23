import React from 'react'
import Logo from '../../components/NoLogIn/LogoNoLogIn'
import HinweiseComp from '../../components/CompanyComponents/HinweiseCompany/HinweiseCompany'

const divStyle = {
    margin: '50px', 
  };

const Hinweise = () => 
{
return <> 
<div style={divStyle}>
<Logo/>
</div>
<HinweiseComp/>
</>
}

export default Hinweise;