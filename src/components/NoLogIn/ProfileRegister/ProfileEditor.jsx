import React, { useState } from 'react';
import { Button, ProgressBar, Form, Container, Row, Col } from 'react-bootstrap';
import './ProfileEditor.css';

const ProfileEditor = () => {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [answers, setAnswers] = useState(Array(5).fill('')); 

  const questions = [
    'Vorname',
'Mittlerer Name',
'Nachname',
'Geburtsdatum (TT.MM.JJJJ)',
'Telefonnummer',
'E-Mail',
'Ausbildung',
'Kenntnisse und Fähigkeiten',
'Prakitka',
'Referenzen',
'Zeugnisse/Zertifikate',
  ];

  const handleInputChange = (e) => {
    setAnswers((prevAnswers) => {
      const updatedAnswers = [...prevAnswers];
      updatedAnswers[currentQuestion] = e.target.value;
      return updatedAnswers;
    });
  };

  const handleNext = () => {
    setCurrentQuestion((prevQuestion) => prevQuestion + 1);
  };

  const handleBack = () => {
    setCurrentQuestion((prevQuestion) => prevQuestion - 1);
  };

  const progress = Math.ceil(((currentQuestion + 1) / questions.length) * 100);

  return (
    <Container fluid className="profile-editor-container">
      <Row className="justify-content-md-center">
        <Col md={10} lg={8} xl={6} className="profile-editor-col">
          <Form className="mb-3">
            <Form.Group controlId="formQuestion">
              <Form.Label>{questions[currentQuestion]}</Form.Label>
              <Form.Control
                type="text"
                placeholder={`Enter your answer`}
                value={answers[currentQuestion]}
                onChange={handleInputChange}
              />
            </Form.Group>

            <Row className="button-container">
              <Col>
                <Button variant="secondary" onClick={handleBack} disabled={currentQuestion === 0}>
                  Back
                </Button>
              </Col>

              <Col className="text-right">
                {currentQuestion < questions.length - 1 && (
                  <Button variant="primary" className="ml-2" onClick={handleNext}>
                    Next
                  </Button>
                )}

                {currentQuestion === questions.length - 1 && (
                  <Button variant="success" className="ml-2">
                    Submit
                  </Button>
                )}
              </Col>
            </Row>
          </Form>

          <ProgressBar now={progress} label={`${progress}%`} className="mt-3" />
        </Col>
      </Row>
    </Container>
  );
};

export default ProfileEditor;

