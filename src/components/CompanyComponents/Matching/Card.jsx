import React, { useEffect, useState } from 'react';
import { Container, Row, Col, Card, ListGroup, ListGroupItem } from 'react-bootstrap';
import './Card.css';
import {getHTTPRequest} from '../../serverPackage'

const studentIdh = [ 11, 24, 67]

const DynamicCards = ({ studentIds }) => {
  const [studentData, setStudentData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const dataPromises = studentIds.map(async (id) => {
          const response = await fetch(`/api/students/${id}`);
          const student = await response.json();
          return student;
        });

        const fetchedData = await Promise.all(dataPromises);
        setStudentData(fetchedData);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };
    let a = makeCards();
    console.log(a)
   

    

  }, [studentIds]); 

  async function makeCards() {
  try {
    const apiResponse = await getHTTPRequest("getUsers");
    console.log(apiResponse)
    sessionStorage.setItem('userprofileID',)   
    } 
    catch (error)
    {
      console.error("Error:", error);
      throw error; 
    }
  }

  return (
    <Container className="container-full-height">
      <Row className="justify-content-md-center row-full-height">
        {studentData.map((student, index) => (
          <Col md="auto" key={index}>
            <Card className="custom-card">
              <Card.Img variant="top" src={student.imageUrl} />
              <Card.Body>
                <Card.Title>Name: {student.name}</Card.Title>
              </Card.Body>
              <ListGroup className="list-group-flush">
                <ListGroup.Item>Studium: {student.study}</ListGroup.Item>
                <ListGroup.Item>Abschluss: {student.graduation}</ListGroup.Item>
                <ListGroup.Item>Arbeitszeit: {student.workingHours}</ListGroup.Item>
                <ListGroup.Item>Berufserfahrung: {student.experience}</ListGroup.Item>
                <ListGroup.Item><Card.Link href={student.profileLink}>Zum Profil</Card.Link></ListGroup.Item>
              </ListGroup>
              <Card.Body className="card-buttons">
                <button className="round-button check-button">✓</button>
                <button className="round-button x-button">×</button>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default DynamicCards;
