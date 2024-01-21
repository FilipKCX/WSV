import React, { useState, useEffect } from 'react';
import { getHTTPRequest } from '../../serverPackage';
import { Container, Row, Col, Image, Card, Form, Button } from 'react-bootstrap';
import { Formik, Field, ErrorMessage } from 'formik';

const LikeWindow = ({ selectedLike }) => {

  const [likeContent, setLikeContent] = useState(null);
  let params = [sessionStorage.getItem('userID'),sessionStorage.getItem('selectedLike') ]

    const handleChatLike = () => {
      const AddChat = getHTTPRequest("addChats", params)
      const freeemeee = getHTTPRequest("deleteLike", params)
      setLikeContent(null)
    }
    const handleChatDislike = () => {
      const AddChat = getHTTPRequest("deleteLike", params)
      setLikeContent(null)
    } 

  useEffect(() => {
    const fetchLikeContent = async (likeId) => {
      try {
        if(sessionStorage.getItem('leere') != 0)
        {
        const response = await getHTTPRequest("getCompanyInfos", [likeId]);
        const parsedContent = JSON.parse(response);
        setLikeContent(parsedContent);
        }
        else{
          setLikeContent(null)
        }

      } catch (error) {
        console.error('Error fetching like content:', error);
        setLikeContent(null);
      }
    };


    

    
    const selectedContent = sessionStorage.getItem('selectedLike');
    
    if (selectedContent != null && selectedContent !== (selectedLike +2 ).toString()) {
      fetchLikeContent(selectedContent);
    } else {
      // Reset likeContent when no content is selected
      setLikeContent(null);
    }
  }, [selectedLike]);
  console.log(likeContent)
  return (
    <div className="like-window">
      {likeContent ? (
        <div className='profil-containerl'>
        <Container className="profil-containerl">
          <Row className="justify-content-md-center profil-row">
            <Col md={6} className="profil-col">
              <div className="profil-bild-container">
                <Image src={ "./src/images/" + likeContent[0][8]} roundedCircle className="profil-bild" />
              </div>
              <Form.Group>
                <Form.Control
                  type="text"
                  placeholder={likeContent[0][1]}
                  name={likeContent[0][1]}
                  className="profil-input"
                  readOnly
                />
              </Form.Group>
              <Form.Group>
                <Form.Control
                  type="text"
                  placeholder= {likeContent[0][2]}
                  name="email"
                  className="profil-input"
                  readOnly
                />
              </Form.Group>
              <Form.Group>
                <Form.Control
                  type="text"
                  placeholder= {likeContent[0][3]}
                  name="standort"
                  className="profil-input"
                  readOnly
                />
              </Form.Group>
            </Col>
            <Col md={6}>
              <Card className="profil-card">
                <Card.Body>
                  <Card.Title>Wer wir sind</Card.Title>
                  <Form.Control
                    as="textarea"
                    placeholder={likeContent[0][4]}
                    rows={3}
                    name="beschreibung"
                    className="profil-input"
                    readOnly
                  />
                </Card.Body>
              </Card>
              <Card className="profil-card">
                <Card.Body>
                  <Card.Title>Was wir bieten</Card.Title>
                  <Form.Control
                    as="textarea"
                    placeholder={likeContent[0][5]}
                    rows={3}
                    name="angebote"
                    className="profil-input"
                    readOnly
                  />
                </Card.Body>
              </Card>
              <Card className="profil-card">
                <Card.Body>
                  <Card.Title>Karrierechancen</Card.Title>
                  <Form.Control
                    as="textarea"
                    placeholder= {likeContent[0][6]}
                    rows={3}
                    name="karriere"
                    className="profil-input"
                    readOnly
                  />
                </Card.Body>
              </Card>
              <Card className="profil-card">
                <Card.Body>
                  <Card.Title>Unsere Geschichte</Card.Title>
                  <Form.Control
                    as="textarea"
                    placeholder={likeContent[0][7]}
                    rows={3}
                    name="geschichte"
                    className="profil-input"
                    readOnly
                  />
                </Card.Body>
              </Card>
             
        
            </Col>
            <div style={{ backgroundColor: 'lightgray', height: '100px', width: '100%'}}>
           <div className='d-flex justify-content-center align-items-center'>
              <Button className='round-btn' onClick={handleChatLike}> 
                 </Button>
                <Button variant="danger" className="round-btn" onClick={handleChatDislike}>
                </Button>
                </div>
          </div>
            
          </Row>
          
        </Container>
        
        </div>
      ) : (
        <div className="no-content">
          <p>No content selected</p>
        </div>
      )}
    </div>
  );
};

export default LikeWindow;