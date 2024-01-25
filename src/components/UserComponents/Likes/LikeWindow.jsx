
import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { getHTTPRequest } from '../../serverPackage';
import { Container, Row, Col, Image, Card, Form, Button } from 'react-bootstrap';
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
      
      setLikeContent(null);
    }
  }, [selectedLike]);
  console.log(likeContent)

return (
  <div>
  {likeContent ? (
  <Container className="profile-container">        
  <Image
     src={"./src/imagess/"+likeContent[0][8]} 
    alt="Profile"
    rounded
    style={{
      width: '200px',
      height: '200px',
      //marginTop: '20px',
      //marginBottom: '20px',
      objectFit: 'cover', 
      borderRadius: '50%', 
    }}
  />
  <h2 className="mt-0"  style={{fontSize:'50px'}}>{likeContent[0][1]}</h2>

<Card className="mt-3" style={{ width: '1250px', borderTop: 'none', borderRight: 'none', borderLeft: 'none',borderBottomColor: 'blue'}}>
  <Card.Body>
    <Card.Title style={{textAlign: 'left', fontSize: '25px'}}>Kontakt</Card.Title>
    <Card.Text>
    E-Mail: {likeContent[0][2]}<br/>
   Standort: {likeContent[0][3]} <br/>
    </Card.Text>
  </Card.Body>
</Card>

<Card className="mt-3" style={{ width: '1250px', borderTop: 'none', borderRight: 'none', borderLeft: 'none',borderBottomColor: 'blue'}}>
<Card.Body>
  <Card.Title style={{textAlign: 'left', fontSize: '25px'}}>Unsere Geschichte</Card.Title>
  <Card.Text>
  
  {likeContent[0][7]}
  </Card.Text>
</Card.Body>
</Card>

<Card className="mt-3" style={{ width: '1250px', borderTop: 'none', borderRight: 'none', borderLeft: 'none',borderBottomColor: 'blue'}}>
<Card.Body>
  <Card.Title style={{textAlign: 'left', fontSize: '25px'}}>Beschreibung</Card.Title>
  <Card.Text>
   
  {likeContent[0][4]}
  </Card.Text>
</Card.Body>
</Card>

<Card className="mt-3" style={{ width: '1250px', borderTop: 'none', borderRight: 'none', borderLeft: 'none',borderBottomColor: 'blue'}}>
<Card.Body>
  <Card.Title style={{textAlign: 'left', fontSize: '25px'}}>Was wir bieten</Card.Title>
  <Card.Text>

  {likeContent[0][5]}
  </Card.Text>
</Card.Body>
</Card>

<Card className="mt-3" style={{ width: '1250px', border: 'none',borderBottomColor: 'blue'}}>
<Card.Body>
  <Card.Title style={{textAlign: 'left', fontSize: '25px'}}>Karrierechancen</Card.Title>
  <Card.Text>
  
  {likeContent[0][6]}
  </Card.Text>
</Card.Body>
</Card>

<div className="text-center mt-4 mb-3">
<Button variant="success" size="lg" className="mr-5" onClick={handleChatLike} style={{ backgroundColor: '#0c7dfe', borderColor: '#0c7dfe' }}>
Like
</Button>
<Button variant="danger" size="lg" onClick={handleChatDislike}>
Dislike
</Button>
</div>
</Container>
  ) : (
    <div className="no-content">
      <p style={{ fontSize:'30px'}} >Kein Like ausgewählt </p>
    </div>
  )}
  </div>
);
};

export default LikeWindow;

