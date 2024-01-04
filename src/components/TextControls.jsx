import React from 'react';
import Form from 'react-bootstrap/Form';
import './TextControls.css';

function TextControls() {
  return (
    <Form className="text-controls">
      <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
        <Form.Label>Beschreiben Sie sich selbst</Form.Label>
        <Form.Control as="textarea" rows={3} placeholder="max. 120 Wörter" />
      </Form.Group>
    </Form>
  );
}

export default TextControls;
