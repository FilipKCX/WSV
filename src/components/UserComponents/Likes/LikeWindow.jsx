
import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { getHTTPRequest } from '../../serverPackage';
import { Container, Row, Col, Image, Card, Form, Button } from 'react-bootstrap';
import { Formik, Field, ErrorMessage } from 'formik';
import './LikeWindow.css'

const LikeWindow = ({ selectedLike }) => {
  const [likeContent, setLikeContent] = useState(null);
  let params = [sessionStorage.getItem('userID'),sessionStorage.getItem('currentLike') ]

    const handleChatLike = async  () => {
      const AddChat = await getHTTPRequest("addChats", params)
      const freeemeee = await getHTTPRequest("deleteLike", params)
      sessionStorage.removeItem('selectedLike')
      setLikeContent(null)
      window.location.reload()
      
    }
    const handleChatDislike = async  () => {
      const AddChat = await getHTTPRequest("deleteLike", params)
      setLikeContent(null)

      sessionStorage.removeItem('selectedLike')
      window.location.reload()
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
  <div>
  {likeContent ? (
  <Container className="profile-containerlike">
    <div className="left-aligned-content">
    <Row className="align-items-center">
        <Col md={3}>
          <div>
            <Image
               src={"./src/imagess/"+likeContent[0][8]}
              alt="Profile"
              rounded
              style={{
                width: '200px',
                height: '200px',
                marginTop: '20px',
                marginBottom: '20px',
                objectFit: 'cover', // Maintain aspect ratio
                borderRadius: '50%', // Make it a circle
              }}
            />
            <h2 className="mt-0">{likeContent[0][1]}</h2>
          </div>
        </Col>
        <Col md={9}>
          <Card className="mt-4" style={{ width: '750px'}}>
            <Card.Body>
              <Card.Title>Kontakt</Card.Title>
              <Card.Text>
              E-Mail: {likeContent[0][2]}<br/>
            Standort: {likeContent[0][3]} <br/>
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
      </Row>

      <Card className="mt-3" style={{ width: '1000px' }}>
        <Card.Body>
          <Card.Title>Beschreibung</Card.Title>
          <Card.Text>
            {likeContent[0][4]}
          </Card.Text>
        </Card.Body>
      </Card>

      <Card className="mt-4" style={{ width: '1000px' }}>
        <Card.Body>
          <Card.Title>Was wir bieten:</Card.Title>
          <Card.Text>
          {likeContent[0][5]}

          </Card.Text>
        </Card.Body>
      </Card>

    <Card className="mt-4" style={{ width: '1000px' }}>
        <Card.Body>
          <Card.Title>Unsere Geschichte</Card.Title>
          <Card.Text>
          {likeContent[0][7]}
          </Card.Text>
        </Card.Body>
      </Card>

      <Card className="mt-3" style={{ width: '1000px' }}>
        <Card.Body>
          <Card.Title>Karrierechancen</Card.Title>
          <Card.Text>
          {likeContent[0][6]}
          </Card.Text>
        </Card.Body>
      </Card>
    </div>
   
    <div className="text-left">
    
    </div>
    <div className="text-center mt-4 mb-3">
        <Button variant="success" size="lg" className="mr-5" onClick={handleChatLike} style={{ backgroundColor: '#39e75f', borderColor: '#39e75f' }}>
          Like
        </Button>
        <Button variant="danger" size="lg" onClick={handleChatDislike}>
          Dislike
        </Button>
      </div>
  </Container>
  ) : (
    <div className="no-content">
      <p>Kein Like ausgewählt </p>
    </div>
  )}
  </div>
);
};

export default LikeWindow;
