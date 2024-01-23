import React, { useEffect, useState } from 'react';
import { Container, Row, Col, Card, ListGroup, ListGroupItem } from 'react-bootstrap';
import './Card.css';
import {getHTTPRequest} from '../../serverPackage';
import { useNavigate } from "react-router-dom";

const DynamicCards = ({ userId }) => {
  //console.log(userId)
  const [student, setStudentData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchData = async () => {
      console.log(userId);
      const param = [userId];
      const apiResponse = await getHTTPRequest("getProfileInfox", param);
      const sortArray = JSON.parse(apiResponse);
      const selectedArray = sortArray[0];

      // Extract student data into a single object
      const studentData = {
        name: selectedArray[1],
        study: selectedArray[2],
        degree: selectedArray[3],
        workingHours: selectedArray[4],
        experience: selectedArray[5],
      };
      
      const cID = sessionStorage.getItem('userID')
      let params = [userId, cID]
      console.log(params)

      const addToLikes = async () =>{
        const apiResponse5 = await getHTTPRequest("alreadyLiked", params)
         const apiResponse = await getHTTPRequest("addLike", params)
         console.log(userId)
         window.location.reload()
         return 

      }
      const dislike = async () => {
        const apiResponse5 = await getHTTPRequest("alreadyLiked", params)
        window.location.reload()
        return
      }

      function showProfile() {
        sessionStorage.setItem('selectedProfile', userId )
        navigate("/MatchingProfile")
      }
      const logo = "./src/imagess/" + selectedArray[6]
      console.log(logo)
      // Render a single card using the student data object
      const card = (
            <Card className="custom-card">
            <Card.Img variant="top" src={logo} className="rounded-image"/>
            <Card.Body>
              <Card.Title>{studentData.name} </Card.Title>
            </Card.Body>
            <ListGroup className="list-group-flush">
              <ListGroup.Item className='fixed-height'>Studium: {studentData.study}</ListGroup.Item>
              <ListGroup.Item className='fixed-height'>Abschluss: {studentData.degree} </ListGroup.Item>
              <ListGroup.Item className='fixed-height'>Arbeitszeit: {studentData.workingHours} Std/Woche </ListGroup.Item>
              <ListGroup.Item className='fixed-height'>Berufserfahrung: {studentData.experience} Jahr(e)</ListGroup.Item>
              <ListGroup.Item><Card.Link onClick={showProfile}>Zum Profil!</Card.Link></ListGroup.Item>
            </ListGroup>
            <Card.Body className="card-buttons">
              <button className="roundmatch-button x-button" onClick={dislike}>×</button>
              <button className="roundmatch-button check-button" onClick={addToLikes}>✓</button>
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
    return <div>.</div>;
  }

  return student;
};

export default DynamicCards;

