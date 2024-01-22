// ChatWindow.js
import React, { useState, useEffect } from 'react';
import { getHTTPRequest } from '../../serverPackage';
import { Container, Row, Col, Image, Card, Form, Button } from 'react-bootstrap';
import './ChatWindow.css';

const ChatWindow = ({ selectedChat }) => {
  const [chatContent, setChatContent] = useState(null);
  const params = [sessionStorage.getItem('userID'), sessionStorage.getItem('selectedChat')];

  const handleChatRemove = () => {
    const deleteChat = getHTTPRequest('deleteChat', params);
    setChatContent(null);
  };

  useEffect(() => {
    const fetchChatContent = async (chatId) => {
      try {
        const response = await getHTTPRequest('getCompanyInfos', [chatId]);
        const parsedContent = JSON.parse(response);
        setChatContent(parsedContent);
      } catch (error) {
        console.error('Error fetching chat content:', error);
        setChatContent(null);
      }
    };

    const selectedContent = sessionStorage.getItem('selectedChat');

    if (selectedContent != null && selectedContent !== selectedChat.id) {
      fetchChatContent(selectedContent);
    } else {
      // Reset chatContent when no content is selected
      setChatContent(null);
    }
  }, [selectedChat]);

  return (
    <div className="chat-window-container">
      <Container>
        <Row>
          <Col md={8} className="mx-auto">
            {chatContent ? (
              <Card className="mt-4">
                <Card.Body>
                  <Card.Title>Chat Content</Card.Title>
                  <Card.Text>{chatContent}</Card.Text>
                  <Button variant="danger" onClick={handleChatRemove}>
                    Remove Chat
                  </Button>
                </Card.Body>
              </Card>
            ) : (
              <div className="no-chat-selected">Select a chat to view content</div>
            )}
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default ChatWindow;