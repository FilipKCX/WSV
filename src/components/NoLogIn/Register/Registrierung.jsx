import React, { useState } from 'react';
import './Registrierung.css';
import { Link } from 'react-router-dom';
import { useNavigate } from "react-router-dom";
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { getHTTPRequest } from '/src/components/serverPackage';
import SelectButton from '../../SelectButton';


const Registrierung = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [isUser, setIsButtonOff] = useState('1'); 
  const navigate = useNavigate();

  const handleButtonToggle = () => {
    setIsButtonOff((prevValue) => (prevValue === '1' ? '0' : '1')); 
  };

  const handleRegister = () => {
    if (password !== confirmPassword) {
      alert('Passwords do not match');
      return;
    }

    
    const userData = {
      email: email,
      password: password,
      isUser: isUser
    };

    
    let paramArray = [email, password, isUser];
    console.log(paramArray)
    handleRequest();
    //let test = handleRequest().then(result => {resulttest = result});

    //alert(test);

    //let globalTestValue = null; // Globale Variable

  async function handleRequest() {
   try {
    const apiResponse = await getHTTPRequest("createUser", paramArray);    
    sessionStorage.setItem('userID', apiResponse);
    
    alert(sessionStorage.getItem("userID"));
    let userArray = [sessionStorage.getItem('userID')]
    const apiResponse2 = await getHTTPRequest("getIsUser", userArray);
    //alert(apiResponse2)
    sessionStorage.setItem("isUser", apiResponse2);
    
    
    const condition = true; 

    if ( sessionStorage.getItem('isUser') == "(1,)") {
      navigate("/HomeUser");
    }
    else{
      navigate("/HomeCompany");
    } 
    

    
  } catch (error) {
    console.error("Error:", error);
    throw error; 
    }
  }

  };

  return (
    <div className="registration-container">
      <h1>Registrieren</h1>

      <p className='erober'>Erobere die Arbeitswelt mit nur wenigen Klicks!</p>

      <Form.Group controlId="formEmail" className="input-container">
        <Form.Control
          type="email"
          placeholder="E-Mail"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
      </Form.Group>

      <Form.Group className="input-container">
        <Form.Control
          type="password"
          placeholder="Passwort"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
      </Form.Group>

      <Form.Group className="input-container">
        <Form.Control
          type="password"
          placeholder="Passwort bestätigen"
          value={confirmPassword}
          onChange={(e) => setConfirmPassword(e.target.value)}
        />
      </Form.Group>

      <Button className='register-button' variant="outline-primary" onClick={handleRegister}>
        Registrieren
      </Button>{' '}
      
      <div className='alignb-center'> <SelectButton onToggle={handleButtonToggle} /> </div>
      <p className="registration-text">
        Durch Klicken auf "Registrieren" stimmen Sie der Nutzervereinbarung, der Datenschutzrichtlinie
        <br />und der Cookie-Richtlinie von WorkingStudent zu.
      </p>
      <Link to='/anmeldung'>
        <p className="login-link">Bereits ein Mitglied? Jetzt anmelden!</p>
      </Link>
    </div>
  );
};

export default Registrierung;