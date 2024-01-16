import React, { useEffect, useState } from 'react';
import { Container, Row, Col, Card, ListGroup, ListGroupItem } from 'react-bootstrap';
import './Card.css';
import {getHTTPRequest} from '../../serverPackage';
import logo from '../../../images/LL.jpg'

const DynamicCards = ({ userId }) => {
  //console.log(userId)
  const [student, setStudentData] = useState([]);
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
        name: selectedArray[0],
        study: selectedArray[1],
        graduation: selectedArray[2],
        workingHours: selectedArray[3],
        experience: selectedArray[4],
        profileLink: selectedArray[5]
      };

      
      // Render a single card using the student data object
      const card = (
        <Card className="custom-card">
          <Card.Img variant="top" src={logo} />
          <Card.Body>
            <Card.Title>Name: {studentData.name}</Card.Title>
          </Card.Body>
          <ListGroup className="list-group-flush">
            <ListGroup.Item>Studium: {studentData.study}</ListGroup.Item>
            <ListGroup.Item>Abschluss: {studentData.graduation}</ListGroup.Item>
            <ListGroup.Item>Arbeitszeit: {studentData.workingHours}</ListGroup.Item>
            <ListGroup.Item>Berufserfahrung: {studentData.experience}</ListGroup.Item>
            <ListGroup.Item><Card.Link href={studentData.profileLink}>Zum Profil</Card.Link></ListGroup.Item>
          </ListGroup>
          <Card.Body className="card-buttons">
            <button className="round-button check-button">✓</button>
            <button className="round-button x-button">×</button>
          </Card.Body>
        </Card>
      );

      console.log(card);
      setIsLoading(false);
      setStudentData(card);
    };

    fetchData();
  }, []);

  if (isLoading) {
    return <div>Loading...</div>;
  }

  return student;
};

export default DynamicCards;

