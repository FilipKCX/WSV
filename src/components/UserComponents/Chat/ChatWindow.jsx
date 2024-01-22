import React, { useState, useEffect, useRef } from 'react';
import { getHTTPRequest } from '../../serverPackage';
import { Container, Row, Col, Card, Form, Button } from 'react-bootstrap';
import './ChatWindow.css';

const ChatWindow = ({ selectedChat }) => {
  const [chatContent, setChatContent] = useState([]);
  const [messageInput, setMessageInput] = useState('');
  const chatContainerRef = useRef(null);

  const params = [sessionStorage.getItem('userID'), sessionStorage.getItem('selectedChat')];

  const handleChatRemove = async () => {
    try {
      await getHTTPRequest('deleteChat', params);
      setChatContent([]);
    } catch (error) {
      console.error('Error removing chat:', error);
    }
  };

  const handleSendMessage = async () => {
    try {
      // Assuming there's a server API endpoint to send messages
      await getHTTPRequest('sendMessage', [selectedChat.id, messageInput]);
      // Refresh chat content after sending a message
      fetchChatContent(sessionStorage.getItem('selectedChat'));
      setMessageInput('');
    } catch (error) {
      console.error('Error sending message:', error);
    }
  };

  const fetchChatContent = async (chatId) => {
    try {
      const response = await getHTTPRequest('getCompanyInfos', [chatId]);
      const parsedContent = JSON.parse(response);
      setChatContent(parsedContent.messages || []);
      // Scroll to the bottom of the chat container after updating content
      chatContainerRef.current.scrollTop = chatContainerRef.current.scrollHeight;
    } catch (error) {
      console.error('Error fetching chat content:', error);
      setChatContent([]);
    }
  };

  useEffect(() => {
    const selectedContent = sessionStorage.getItem('selectedChat');

    if (selectedContent != null && selectedContent !== selectedChat.id) {
      fetchChatContent(selectedContent);
    } else {
      // Reset chatContent when no content is selected
      setChatContent([]);
    }
  }, [selectedChat]);

  return (
    <div className="chat-window-container">
      <Container>
        <Row>
          <Col md={8} className="mx-auto">
            <Card className="mt-4">
              <Card.Body ref={chatContainerRef} className="chat-container">
                {chatContent.map((message, index) => (
                  <div key={index} className="chat-bubble">
                    {message.sender}: {message.text}
                  </div>
                ))}
              </Card.Body>
              <Form className="message-input-form">
                <Form.Control
                  type="text"
                  placeholder="Type your message..."
                  value={messageInput}
                  onChange={(e) => setMessageInput(e.target.value)}
                />
                <Button variant="primary" onClick={handleSendMessage}>
                  Send
                </Button>
              </Form>
              <Button variant="danger" onClick={handleChatRemove}>
                Remove Chat
              </Button>
            </Card>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default ChatWindow;