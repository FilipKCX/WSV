import React from 'react';
import Form from 'react-bootstrap/Form';
import './Formular.css';

function Formular() {
  return (
    <Form className="form-container">
      <Form.Group className="mb-3" controlId="Vorname">
      <Form.Label>Bitte geben Sie folgende Informationen an:</Form.Label>
        <Form.Control type="text" placeholder="Vorname*" />
      </Form.Group>
      <Form.Group className="mb-3" controlId="Nachname">
        <Form.Control type="text" placeholder="Nachname*" />
      </Form.Group>
      <Form.Group className="mb-3" controlId="Universität">
        <Form.Control type="text" placeholder="Universität*" />
      </Form.Group>
      <Form.Group className="mb-3" controlId="Studiengang">
        <Form.Control type="text" placeholder="Studiengang*" />
      </Form.Group>
      <Form.Group className="mb-3" controlId="GEBURTSDATUM">
        <Form.Label>Bitte geben Sie Ihr Geburtsdatum an:</Form.Label>
        <Form.Control type="date" placeholder="Geburtsdatum (tt.mm.jjjj)*" />
      </Form.Group>
    </Form>
  );
}

export default Formular;