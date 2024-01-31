import React, { useState, useEffect } from 'react';
import './Registrierung.css';
import { Link } from 'react-router-dom';
import { useNavigate } from "react-router-dom";
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { Toast } from 'react-bootstrap';
import { getHTTPRequest } from '/src/components/serverPackage';
import SelectButton from '../../SelectButton';


const Registrierung = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [isUser, setIsButtonOff] = useState('1'); 
  const [emailError, setEmailError] = useState('');
  const [pwError, setpwError] = useState('');
  const navigate = useNavigate();
  const [showToast, setShowToast] = useState(false);
  const [showToast2, setShowToast2] = useState(false);
  const [isRegistrationDisabled, setIsRegistrationDisabled] = useState(true);

  const validateEmail = () => {
    // Simple email format validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      setEmailError('Bitte geben Sie eine gültige E-Mail-Adresse ein.');
    } else {
      setEmailError('');
    }
  };
  const validatePw = () => {
  const passwordRegex = /^.{6,}$/;
    if (!passwordRegex.test(password)) {
      setpwError('Ihr Passwort muss mindestens 6 Zeichen lang sein.');
    } else {
      setpwError('');
    }
  };

  useEffect(() => {
    // Enable/disable registration button based on conditions
    setIsRegistrationDisabled(!(email && password && confirmPassword && !emailError && !pwError));
  }, [email, password, confirmPassword, emailError, pwError]);

  const handleButtonToggle = () => {
    setIsButtonOff((prevValue) => (prevValue === '1' ? '0' : '1')); 
  };
``
  const handleRegister = () => {
    if (password !== confirmPassword) {
    setShowToast(true);
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


  async function handleRequest() {
   try {
    const apiResponse = await getHTTPRequest("createUser", paramArray);
    if (apiResponse == "f")
    {
      setShowToast2(true)
      return
    }    
    sessionStorage.setItem('userID', apiResponse);
    
    let userArray = [sessionStorage.getItem('userID')]
    const apiResponse2 = await getHTTPRequest("getIsUser", userArray);
    //alert(apiResponse2)
    sessionStorage.setItem("isUser", apiResponse2);
    
    
    const condition = true; 

    if ( sessionStorage.getItem('isUser') == "1") {
      navigate("/TutorialUser");
    }
    else if( sessionStorage.getItem('isUser') == "0"){
      navigate("/TutorialCompany");
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
          onBlur={validateEmail} 
        />
        {emailError && <Form.Text className="text-danger">{emailError}</Form.Text>}
      </Form.Group>

      <Form.Group className="input-container">
        <Form.Control
          type="password"
          placeholder="Passwort"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          onBlur={validatePw}
        />
        {pwError && <Form.Text className="text-danger">{pwError}</Form.Text>}
      </Form.Group>

      <Form.Group className="input-container">
        <Form.Control
          type="password"
          placeholder="Passwort bestätigen"
          value={confirmPassword}
          onChange={(e) => setConfirmPassword(e.target.value)}
        />
      </Form.Group>
      
      <div className='alignb-center'> <SelectButton onToggle={handleButtonToggle} /> </div>

      <Button className='register-button' variant="outline-primary" onClick={handleRegister}  disabled={isRegistrationDisabled}>
        Registrieren
      </Button>{' '}
      <Toast show={showToast} onClose={() => setShowToast(false)} delay={3000} autohide className="toast-rightr">
  <Toast.Header>
    <strong className="mr-auto">Fehler bei der Registrierung!</strong>
  </Toast.Header>
  <Toast.Body>Die Passwörter stimmen nicht überein!</Toast.Body>
</Toast>
  <Toast show={showToast2} onClose={() => setShowToast2(false)} delay={3000} autohide className="toast-rightr">
  <Toast.Header>
    <strong className="mr-auto">Fehler bei der Registrierung!</strong>
  </Toast.Header>
  <Toast.Body>Die Email wird bereits verwendet!</Toast.Body>
  </Toast>
      
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
