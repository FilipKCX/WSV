import React from 'react';
import { Container, Row, Col, Image, Card, Form, Button } from 'react-bootstrap';
import './ProfileViewStatic.css';

const ProfileViewStatic = () => {
    const companyName = "Firmenname GmbH";
    const companyEmail = "info@firmenname.com";
    const companyPhone = "+49 123 456789";
    const profileDescription = "Hier kommt die Profilbeschreibung des Unternehmens hin.";
    const companyAddress = "Hier kommt die Beschreibung des Stellenangebots hin.";
    const contactPersonName = "Name der Kontaktperson für den Job";
    const contactPersonEmail = "E-Mail@mail.com";
    const contactPersonPhone = "+49 987 654321";

    return (
        <Container className="profil-container-static">
            <Row className="profil-row-static">
                <Col md={6} className="profil-col-static" style={{ "min-width": '100%' }}>
                    <div className="profil-bild-container-static">
                        <Image src="platzhalter-bild-url.jpg" roundedCircle className="profil-bild" />
                    </div>
                    <Form.Group>
                        <Form.Control
                            type="text"
                            placeholder="Unternehmensname"
                            className="profil-input-static"
                            readOnly
                            value={companyName}
                        />
                    </Form.Group>
                    <Form.Group>
                        <Form.Control
                            type="text"
                            placeholder="E-Mail"
                            className="profil-input-static"
                            readOnly
                            value={companyEmail}
                        />
                    </Form.Group>
                    <Form.Group>
                        <Form.Control
                            type="text"
                            placeholder="Telefonnummer"
                            className="profil-input-static"
                            readOnly
                            value={companyPhone}
                        />
                    </Form.Group>
                    <Card className="profil-card-static">
                        <Card.Body>
                            <Card.Title>Unternehmensbeschreibung</Card.Title>
                            <p className="profil-input-static">{profileDescription}</p>
                        </Card.Body>
                    </Card>
                    <Form.Group>
                        <Card className="profil-card-static">
                            <Card.Body>
                                <Card.Title>Stellenbeschreibung</Card.Title>
                                <p className="profil-input-static">{companyAddress}</p>
                            </Card.Body>
                        </Card>
                    </Form.Group>
                    <Form.Group>
                        <Card className="profil-card-static">
                            <Card.Body>
                                <Card.Title>Kontaktperson</Card.Title>
                                <Form.Control
                                    type="text"
                                    placeholder="Name"
                                    className="profil-input-static"
                                    readOnly
                                    value={contactPersonName}
                                />
                                <Form.Control
                                    type="text"
                                    placeholder="E-Mail"
                                    className="profil-input-static"
                                    readOnly
                                    value={contactPersonEmail}
                                />
                                <Form.Control
                                    type="text"
                                    placeholder="Telefonnummer"
                                    className="profil-input-static"
                                    readOnly
                                    value={contactPersonPhone}
                                />
                            </Card.Body>
                        </Card>
                    </Form.Group>
                    <div className="button-container">
                        <Button variant="primary" className='likebuttons' id='primary'>Primary</Button>{' '}
                        <Button variant="primary" className='likebuttons' id='secondary'>Secondary</Button>{' '}
                    </div>
                </Col>
            </Row>
        </Container>
    );
};

export default ProfileViewStatic;
