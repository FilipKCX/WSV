import React, { useState } from 'react';
import './Registrierung.css';
import { Link } from 'react-router-dom';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { getHTTPRequest } from '/src/components/serverPackage';
import SelectButton from '../SelectButton';


//sessionStorage = window.sessionStorage;

const Registrierung = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [isUser, setIsUser] = useState(false); // Assuming isUser is a boolean

  const handleUserChange = (e) => {
    setIsUser(e.target.value); // Assuming you want to set isUser based on the target value
  };

  const handleRegister = () => {
    if (password !== confirmPassword) {
      alert('Passwords do not match');
      return;
    }

    // Prepare data for backend
    const userData = {
      email: email,
      password: password,
      //isUser: isUser
    };

    // Send POST request to backend
     // Variable, um die Response zu speichern

    // add isUser here
    let paramArray = [email, password, isUser];
    
    async function handleRequestOLD() {
      try {
        const apiResponse = await getHTTPRequest("createUser", paramArray);
        alert(apiResponse)
        return apiResponse
        // Handle the resolved data
        //alert(apiResponse);
      } catch (error) {
        // Handle errors if the Promise rejects
        console.error("Error:", error);
      }
      
    }
    
    //let test = handleRequest().then(result => {resulttest = result});

    //alert(test);

    //let globalTestValue = null; // Globale Variable

async function handleRequest() {
  try {
    const apiResponse = await getHTTPRequest("createUser", paramArray);
    //alert(apiResponse)
    sessionStorage.setItem("userID", apiResponse);

    
    const apiResponse2 = await getHTTPRequest("getIsUser", apiResponseArray);
    //alert(apiResponse2)
    sessionStorage.setItem("isUser", apiResponse2);
    
    //next tasks

    if (apiResponse2 == 1) 
    {
      //redirect User
    }
    else
    {
      //redirect Company
    }

    //direct to home
  } catch (error) {
    console.error("Error:", error);
    throw error; // Re-throw the error to be caught outside the function if needed
  }
}





//let a = handleRequest()

handleRequest()
//const userID = sessionStorage.getItem("userID");
//alert(userID)

// Beachten Sie, dass globalTestValue in diesem Stadium möglicherweise noch nicht aktualisiert ist.
// Sie sollten sicherstellen, dass alle notwendigen Operationen erst nach der Aktualisierung durchgeführt werden.




    
    //console.log(apiResponse)
    //apiResponse = getDataMain()
    //alert(apiResponse);
    //alert(apiResponse())

  };

  return (
    <div className="registration-container">
      <h1>Registrieren</h1>

      <p className='erober'>Erobere die Arbeitswelt mit nur wenigen Klicks!</p>

      <Form.Group className="input-container">
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
      
      <div className='alignb-center'> <SelectButton value={isUser} onChange={handleUserChange} /> </div>
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