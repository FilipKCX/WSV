import React, { useState } from 'react';
import { Container, Row, Col, Form, Button } from 'react-bootstrap';
import './KontaktComp.css'; 

const Kontakt = () => {
    const [form, setForm] = useState({
        firma: '',
        anrede: '',
        vorname: '',
        nachname: '',
        betreff: '',
        email: '',
        nachricht: ''
    });

    const handleChange = (e) => {
        const { name, value } = e.target;

        // Additional validation for email, vorname, and nachname
        let updatedValue = value;

        if (name === 'email') {
            // Validate email format
            updatedValue = value.replace(/[^a-zA-Z0-9@.]/g, '');
        } else if (name === 'vorname' || name === 'nachname') {
            // Allow only letters
            updatedValue = value.replace(/[^a-zA-Z]/g, '');
        } else {
            // For other fields, allow any input
            updatedValue = value.replace(/&/g, ''); // Remove '&'
        }

        setForm({ ...form, [name]: updatedValue });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(form);
        alert('Nachricht gesendet!');
    };

    return (
        <Container className="kontakt-container">
            <Row className="justify-content-md-center">
                <Col md={8}>
                    <h1>Kontakt</h1>
                    <p>Wir freuen uns, von Ihnen zu hören und stehen Ihnen für Fragen, Anregungen oder Anfragen gerne zur Verfügung.</p>
                    <Form className='kntc' onSubmit={handleSubmit}>
                        <Form.Group>
                            <Form.Label>E-Mail*</Form.Label>
                            <Form.Control type="email" value={form.email} name="email" onChange={handleChange} required />
                        </Form.Group>
                        <Form.Group>
                            <Form.Label>Firma</Form.Label>
                            <Form.Control type="text" value={form.firma} name="firma" onChange={handleChange} />
                        </Form.Group>
                        <Row>
                            <Col>
                                <Form.Group>
                                    <Form.Label>Vorname*</Form.Label>
                                    <Form.Control type="text" value={form.vorname} name="vorname" onChange={handleChange} required />
                                </Form.Group>
                            </Col>
                            <Col>
                                <Form.Group>
                                    <Form.Label>Nachname*</Form.Label>
                                    <Form.Control type="text" value={form.nachname} name="nachname" onChange={handleChange} required />
                                </Form.Group>
                            </Col>
                        </Row>
                        <Form.Group>
                            <Form.Label>Betreff*</Form.Label>
                            <Form.Control type="text" value={form.betreff} name="betreff" onChange={handleChange} required />
                        </Form.Group>
                        <Form.Group>
                            <Form.Label>Nachricht*</Form.Label>
                            <Form.Control as="textarea" rows={3} value={form.nachricht} name="nachricht" onChange={handleChange} required />
                        </Form.Group>
                        <Button variant="primary" type="submit">Senden</Button>
                    </Form>
                </Col>
            </Row>
        </Container>
    );
}

export default Kontakt;
