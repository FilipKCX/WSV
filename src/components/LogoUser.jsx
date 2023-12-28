import React from 'react';
import { Link } from 'react-router-dom';
import './LogoUser.css'; 

const LogoUser = () => {
  return (
    <Link to="/homeuser" className="llogo-link">
      <div className="llogo">WorkingStudent</div>
    </Link>
  );
};

export default LogoUser;
