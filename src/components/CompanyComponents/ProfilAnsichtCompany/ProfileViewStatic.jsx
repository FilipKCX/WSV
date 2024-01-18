import React, { useEffect, useState } from 'react';
import { Container, Row, Col, Image, Card, Form, Button } from 'react-bootstrap';
import './ProfileViewStatic.css';

const ProfileViewStatic = () => {
    const [companypage, setCompanyPage] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    useEffect(() => {
        const fetchData = async () => {
          console.log(userId);
          const param = [userId];
          const apiResponse = await getHTTPRequest("getProfileInfo", param);
          const sortArray = JSON.parse(apiResponse);
          const selectedArray = sortArray[0];
    
          // Extract student data into a single object
          const studentData = {
            name: selectedArray[1],
            study: selectedArray[4],
            graduation: selectedArray[5],
            workingHours: selectedArray[9],
            experience: selectedArray[9],
          };
    
          const cID = sessionStorage.getItem('userID')
          let params = [userId, cID]
          const addToLikes = async () =>{
             const apiResponse = await getHTTPRequest("addLike", params)
             console.log(userId)
             return 
          }

    const staticCompanyPage =  (
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
    console.log(staticCompanyPage);
      setIsLoading(false);
      setCompanyPage(staticCompanyPage);
    };

    fetchData();
  }, []);
};

export default ProfileViewStatic;
