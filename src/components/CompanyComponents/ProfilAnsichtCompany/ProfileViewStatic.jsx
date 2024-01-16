import React from 'react';
import { Container, Row, Col, Image, Card, Form, Button } from 'react-bootstrap';
import './ProfileViewStatic.css';

const ProfileViewStatic = () => {
    const companyName = "Firmenname GmbH";
    const companyEmail = "info@firmenname.com";
    const companyLocation = "Standort";
    const whatWeOffer = "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum";
    const whoWeAre = "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum";
    const careerOpportunities = "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum";
    const ourHistory = "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum";

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
                            disabled
                        />
                    </Form.Group>
                    <Form.Group>
                        <Form.Control
                            type="text"
                            placeholder="E-Mail"
                            className="profil-input-static"
                            readOnly
                            value={companyEmail}
                            disabled
                        />
                    </Form.Group>
                    <Form.Group>
                        <Form.Control
                            type="text"
                            placeholder="Telefonnummer"
                            className="profil-input-static"
                            readOnly
                            value={companyLocation}
                            disabled
                        />
                    </Form.Group>
                    <Card className="profil-card-static">
                        <Card.Body>
                            <Card.Title>Wer wir sind</Card.Title>
                            <div className="profil-input-static" readOnly>
                                <p>{whoWeAre}</p>
                            </div>
                        </Card.Body>
                    </Card>
                    <Card className="profil-card-static">
                        <Card.Body>
                            <Card.Title>Was wir bieten</Card.Title>
                            <div className="profil-input-static" readOnly>
                                <p>{whatWeOffer}</p>
                            </div>
                        </Card.Body>
                    </Card>
                    <Card className="profil-card-static">
                        <Card.Body>
                            <Card.Title>Karrierechancen</Card.Title>
                            <div className="profil-input-static" readOnly>
                                <p>{careerOpportunities}</p>
                            </div>
                        </Card.Body>
                    </Card>
                    <Card className="profil-card-static">
                        <Card.Body>
                            <Card.Title>Unsere Geschichte</Card.Title>
                            <div className="profil-input-static" readOnly>
                                <p>{ourHistory}</p>
                            </div>
                        </Card.Body>
                    </Card>
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
