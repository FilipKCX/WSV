
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
     src={/*src={"./src/imagess/"+likeContent[0][8]}*/ 'https://cdn.nba.com/headshots/nba/latest/1040x760/2544.png'}
    alt="Profile"
    rounded
    style={{
      width: '200px',
      height: '200px',
      marginTop: '20px',
      marginBottom: '20px',
      objectFit: 'cover', 
      borderRadius: '50%', 
    }}
  />
  <h2 className="mt-0"  style={{fontSize:'50px'}}>Rewe{/*likeContent[0][1]*/}</h2>

<Card className="mt-3" style={{ width: '1250px', borderTop: 'none', borderRight: 'none', borderLeft: 'none',borderBottomColor: 'blue'}}>
  <Card.Body>
    <Card.Title style={{textAlign: 'left', fontSize: '25px'}}>Kontakt</Card.Title>
    <Card.Text>
    E-Mail: example@example.com{/*likeContent[0][2]*/}<br/>
   Standort: City Center, Exampleland{/*likeContent[0][3]*/} <br/>
    </Card.Text>
  </Card.Body>
</Card>

<Card className="mt-3" style={{ width: '1250px', borderTop: 'none', borderRight: 'none', borderLeft: 'none',borderBottomColor: 'blue'}}>
<Card.Body>
  <Card.Title style={{textAlign: 'left', fontSize: '25px'}}>Unsere Geschichte</Card.Title>
  <Card.Text>
  Founded in 1985, our company embarked on a journey fueled by innovation and a commitment to excellence. Over the years, we have overcome challenges, expanded our operations globally, and forged strong partnerships. Our unwavering dedication to quality and customer satisfaction has made us a trusted name in the industry. From humble beginnings to becoming a market leader, our story is a testament to the resilience and passion of our team.
  {/*likeContent[0][7]*/}
  </Card.Text>
</Card.Body>
</Card>

<Card className="mt-3" style={{ width: '1250px', borderTop: 'none', borderRight: 'none', borderLeft: 'none',borderBottomColor: 'blue'}}>
<Card.Body>
  <Card.Title style={{textAlign: 'left', fontSize: '25px'}}>Beschreibung</Card.Title>
  <Card.Text>
  At our company, we take pride in being at the forefront of innovation and excellence. With a dedicated team of professionals, we strive to deliver high-quality products and services to our clients. Our commitment to sustainability and social responsibility is woven into the fabric of our operations. As a leading force in the industry, we continuously explore new horizons and set benchmarks for success. Join us on our journey to make a positive impact and shape a better future.
  {/*likeContent[0][4]*/}
  </Card.Text>
</Card.Body>
</Card>

<Card className="mt-3" style={{ width: '1250px', borderTop: 'none', borderRight: 'none', borderLeft: 'none',borderBottomColor: 'blue'}}>
<Card.Body>
  <Card.Title style={{textAlign: 'left', fontSize: '25px'}}>Was wir bieten</Card.Title>
  <Card.Text>
  Discover a fulfilling career at our company, where we offer a dynamic work environment and exciting opportunities for professional growth. Join a team that values collaboration, creativity, and innovation. We provide competitive compensation, comprehensive benefits, and a supportive culture that empowers you to excel in your career. As part of our commitment to employee development, we offer training programs, mentorship opportunities, and a pathway for advancement. Join us and be a part of a company that values its employees and fosters a culture of success.
  {/*likeContent[0][5]*/}
  </Card.Text>
</Card.Body>
</Card>

<Card className="mt-3" style={{ width: '1250px', border: 'none',borderBottomColor: 'blue'}}>
<Card.Body>
  <Card.Title style={{textAlign: 'left', fontSize: '25px'}}>Karrierechancen</Card.Title>
  <Card.Text>
  Embark on a rewarding career journey with us! Our company is dedicated to nurturing talent and providing exciting career opportunities. As part of our team, you'll have the chance to work on innovative projects, collaborate with talented professionals, and make a meaningful impact. We believe in investing in our employees\' growth and development, offering training programs, mentorship, and advancement pathways. Whether you are an experienced professional or just starting your career, explore the possibilities with us and build a successful future together.',
  {/*likeContent[0][6]*/}
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
      <p>Kein Like ausgewählt </p>
    </div>
  )}
  </div>
);
};

export default LikeWindow;

