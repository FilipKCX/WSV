import React, { useState } from 'react';
import { Container, Row, Col, Image, Card, Form, Button } from 'react-bootstrap';
import './ProfileViewCompany.css';

const Unternehmensprofil = () => {
    const [unternehmensName, setUnternehmensName] = useState('');
    const [email, setEmail] = useState('');
    const [standort, setStandort] = useState('');
    const [beschreibung, setBeschreibung] = useState('');
    const [angebote, setAngebote] = useState('');
    const [geschichte, setGeschichte] = useState('');
    const [karriere, setKarriere] = useState('');

    const saveCompanyProfile = () => {
        console.log('Speichern der Unternehmensdaten...');
        console.log('Unternehmensname:', unternehmensName);
        console.log('E-Mail:', email);
        console.log('Standort:', standort);
        console.log('Beschreibung:', beschreibung);
        console.log('Was wir bieten:', angebote);
        console.log('Unsere Geschichte:', geschichte);
        console.log('Karrierechancen:', karriere);
        alert('Unternehmensprofil gespeichert!');
    };

    return (
        <Container className="profil-container">
            <Row className="justify-content-md-center profil-row">
                <Col md={6} className="profil-col">
                    <div className="profil-bild-container">
                        <Image src="platzhalter-bild-url.jpg" roundedCircle className="profil-bild" />
                        <div>Klicken, um Logo hinzuzufügen</div>
                        <input type="file" id="profilbild-input" hidden />
                    </div>
                    <Form.Group>
                        <Form.Control
                            type="text"
                            placeholder="Unternehmensname"
                            value={unternehmensName}
                            onChange={e => setUnternehmensName(e.target.value)}
                            className="profil-input"
                        />
                    </Form.Group>
                    <Form.Group>
                        <Form.Control
                            type="text"
                            placeholder="E-Mail"
                            value={email}
                            onChange={e => setEmail(e.target.value)}
                            className="profil-input"
                        />
                    </Form.Group>
                    <Form.Group>
                        <Form.Control
                            type="text"
                            placeholder="Standort"
                            value={email}
                            onChange={e => setStandort(e.target.value)}
                            className="profil-input"
                        />
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
                                value={beschreibung}
                                onChange={e => setBeschreibung(e.target.value)}
                                className="profil-input"
                            />
                        </Card.Body>
                    </Card>
                    <Card className="profil-card">
                        <Card.Body>
                            <Card.Title>Was wir bieten</Card.Title>
                            <Form.Control
                                as="textarea"
                                placeholder="Beschreiben Sie, was Ihr Unternehmen Mitarbeitern bietet."
                                rows={3}
                                value={angebote}
                                onChange={e => setAngebote(e.target.value)}
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
                                value={karriere}
                                onChange={e => setKarriere(e.target.value)}
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
                                value={geschichte}
                                onChange={e => setGeschichte(e.target.value)}
                                className="profil-input"
                            />
                        </Card.Body>
                    </Card>
                    <div className="d-flex justify-content-end mb-3">
                        <Button variant="primary" onClick={saveCompanyProfile}>Speichern</Button>
                    </div>
                </Col>
            </Row>
        </Container>
    );
}

export default Unternehmensprofil;
