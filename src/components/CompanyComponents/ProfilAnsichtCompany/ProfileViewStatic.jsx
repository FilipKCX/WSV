import { Container, Row, Col, Image, Card, Form, Button } from 'react-bootstrap';
import './ProfileViewStatic.css';
import { Formik, Field, ErrorMessage } from 'formik';
import * as yup from 'yup';
import React, { useState, useEffect } from 'react';
import { getHTTPRequest } from '../../serverPackage';
import { Link } from 'react-router-dom';

const ProfilePage = () => {
  return (
    <Container className="profile-container">
  
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
     
      <div className="pvsbuttus mb-3">
                  <Link to='/ProfilePageCompany'>
                    <Button variant="primary">
                        Zurück
                    </Button>
                    </Link>
                </div>
    </Container>
  );
  setCmProfile(cprofile);
};

    fetchData();
  }, []);
  return CmProfile
};

export default ProfilePage;
