import React from 'react'
import Logo from '../../components/NoLogIn/LogoNoLogIn'
import KontaktComp from '../../components/CompanyComponents/KontaktCompany/KontaktCompany'

const divStyle = {
    margin: '50px', // You can customize the margin value as needed
  };

const Kontakt = () => 
{
return <> 
<div style={divStyle}>
<Logo/>
</div>
<KontaktComp/>
</>
}

export default Kontakt;