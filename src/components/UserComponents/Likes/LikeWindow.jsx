
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
  <div>
  {likeContent ? (
  <Container className="profile-containerlike">
    <div className="left-aligned-content">
      <Image
        src="https://img.freepik.com/vektoren-premium/blaues-social-media-logo_197792-1759.jpg"  
        alt="Profile"
        roundedCircle
        style={{
          width: '200px',
           height: '200px',
        }}
      />
      <h2 className="mt-0">John Doe</h2>
      <Card className="mt-4" style={{ width: '1000px' }}>
        <Card.Body>
          <Card.Title>Kontakt</Card.Title>
          <Card.Text>
            E-Mail: <br/>
            Telefon: <br/>
            Standort:
          </Card.Text>
        </Card.Body>
      </Card>

      <Card className="mt-3" style={{ width: '1000px' }}>
        <Card.Body>
          <Card.Title>Beschreibung</Card.Title>
          <Card.Text>
            Outside of coding, I love exploring new places, trying exotic cuisines, and embarking on exciting adventures.
          </Card.Text>
        </Card.Body>
      </Card>

      <Card className="mt-4" style={{ width: '1000px' }}>
        <Card.Body>
          <Card.Title>Was wir bieten:</Card.Title>
          <Card.Text>
            With a love for coding and problem-solving, I enjoy building innovative solutions that make a difference.
          </Card.Text>
        </Card.Body>
      </Card>

    <Card className="mt-4" style={{ width: '1000px' }}>
        <Card.Body>
          <Card.Title>Unsere Geschichte</Card.Title>
          <Card.Text>
            With a love for coding and problem-solving, I enjoy building innovative solutions that make a difference.
          </Card.Text>
        </Card.Body>
      </Card>

      <Card className="mt-3" style={{ width: '1000px' }}>
        <Card.Body>
          <Card.Title>Karrierechancen</Card.Title>
          <Card.Text>
            Outside of coding, I love exploring new places, trying exotic cuisines, and embarking on exciting adventures.
          </Card.Text>
        </Card.Body>
      </Card>
    </div>
   
    <div className="text-left">
    
    </div>
    <div className="text-center mt-4 mb-3">
        <Button variant="success" size="lg" className="mr-5" style={{ backgroundColor: '#39e75f', borderColor: '#39e75f' }}>
          Like
        </Button>
        <Button variant="danger" size="lg">
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
