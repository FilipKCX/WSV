import React from 'react';
import { Container, Row, Col, Image, Card, Form, Button } from 'react-bootstrap';
import './ProfileViewCompany.css';
import { Formik, Field, ErrorMessage } from 'formik';
import * as yup from 'yup';

const validationSchema = yup.object({
    unternehmensName: yup.string().matches(/^[a-zA-Z\s]+$/, 'Nur Buchstaben erlaubt'),
    email: yup.string().email('Ungültige E-Mail-Adresse'),
    standort: yup.string().matches(/^[a-zA-Z\s]+$/, 'Nur Buchstaben erlaubt'),
    beschreibung: yup.string().required('Beschreibung ist erforderlich'),
});

const Unternehmensprofil = () => {
    const saveCompanyProfile = (values) => {
        console.log('Speichern der Unternehmensdaten...');
        console.log('Unternehmensname:', values.unternehmensName);
        console.log('E-Mail:', values.email);
        console.log('Standort:', values.standort);
        console.log('Beschreibung:', values.beschreibung);
        console.log('Was wir bieten:', values.angebote);
        console.log('Unsere Geschichte:', values.geschichte);
        console.log('Karrierechancen:', values.karriere);
        alert('Unternehmensprofil gespeichert!');
    };

    return (
        <Formik
            initialValues={{
                unternehmensName: '',
                email: '',
                standort: '',
                beschreibung: '',
                angebote: '',
                karriere: '',
                geschichte: '',
            }}
            validationSchema={validationSchema}
            onSubmit={(values) => saveCompanyProfile(values)}
        >
            <Form>
                <Container className="profil-container">
                    <Row className="justify-content-md-center profil-row">
                        <Col md={6} className="profil-col">
                            <div className="profil-bild-container">
                                <Image src="platzhalter-bild-url.jpg" roundedCircle className="profil-bild" />
                                <div>Klicken, um Logo hinzuzufügen</div>
                                <input type="file" id="profilbild-input" hidden />
                            </div>
                            <Form.Group>
                                <Field
                                    type="text"
                                    placeholder="Unternehmensname"
                                    name="unternehmensName"
                                    className="profil-input"
                                />
                                <ErrorMessage name="unternehmensName" component="div" className="error-message" />
                            </Form.Group>
                            <Form.Group>
                                <Field
                                    type="text"
                                    placeholder="E-Mail"
                                    name="email"
                                    className="profil-input"
                                />
                                <ErrorMessage name="email" component="div" className="error-message" />
                            </Form.Group>
                            <Form.Group>
                                <Field
                                    type="text"
                                    placeholder="Standort"
                                    name="standort"
                                    className="profil-input"
                                />
                                <ErrorMessage name="standort" component="div" className="error-message" />
                            </Form.Group>
                        </Col>
                        <Col md={6}>
                            <Card className="profil-card">
                                <Card.Body>
                                    <Card.Title>Wer wir sind</Card.Title>
                                    <Form.Control
                                        as="textarea"
                                        placeholder="Kurze Beschreibung Ihres Unternehmens."
                                        rows={3}
                                        name="beschreibung"
                                        className="profil-input"
                                    />
                                    <ErrorMessage name="beschreibung" component="div" className="error-message" />
                                </Card.Body>
                            </Card>
                            <Card className="profil-card">
                                <Card.Body>
                                    <Card.Title>Was wir bieten</Card.Title>
                                    <Form.Control
                                        as="textarea"
                                        placeholder="Beschreiben Sie, was Ihr Unternehmen Mitarbeitern bietet."
                                        rows={3}
                                        name="angebote"
                                        className="profil-input"
                                    />
                                </Card.Body>
                            </Card>
                            <Card className="profil-card">
                                <Card.Body>
                                    <Card.Title>Karrierechancen</Card.Title>
                                    <Form.Control
                                        as="textarea"
                                        placeholder="Beschreiben Sie die Karriereentwicklungsmöglichkeiten in Ihrem Unternehmen."
                                        rows={3}
                                        name="karriere"
                                        className="profil-input"
                                    />
                                </Card.Body>
                            </Card>
                            <Card className="profil-card">
                                <Card.Body>
                                    <Card.Title>Unsere Geschichte</Card.Title>
                                    <Form.Control
                                        as="textarea"
                                        placeholder="Geben Sie einen kurzen Überblick über die Geschichte Ihres Unternehmens."
                                        rows={3}
                                        name="geschichte"
                                        className="profil-input"
                                    />
                                </Card.Body>
                            </Card>
                            <div className="d-flex justify-content-end mb-3">
                                <Button type="submit" variant="primary" className="speichern-button">
                                    Speichern
                                </Button>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </Form>
        </Formik>
    );
};

export default Unternehmensprofil;
