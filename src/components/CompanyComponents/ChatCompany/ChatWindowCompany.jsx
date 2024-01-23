
import '../../UserComponents/Chat/ChatWindow.css'; 
import React, { useState, useEffect, useRef } from 'react';
import { getHTTPRequest } from '../../serverPackage';
import { Container, Row, Col, Card, Form, Button } from 'react-bootstrap';


const ChatWindow = ({ selectedChat }) => {
  const [chatContent, setChatContent] = useState([]);
  const [messageInput, setMessageInput] = useState('');
  const [newMessage, setNewMessage] = useState('');
  const chatContainerRef = useRef(null);
  console.log(selectedChat)
  const params = [sessionStorage.getItem('SelectedChat'), sessionStorage.getItem('userID'), newMessage];
  console.log(params)
  
  const handleSendMessage = async () => {
    try {
      await getHTTPRequest('createMessagee', params);
      fetchChatContent(selectedChat);
      setMessageInput('');
    } catch (error) {
      console.error('Error sending message:', error);
    }
  };
  console.log(selectedChat)
  const handleInputChange = (e) => {
    setNewMessage(e.target.value);
  };

  const fetchChatContent = async (chatId) => {
    try {
      const response = await getHTTPRequest('getMessages', [sessionStorage.getItem('SelectedChat')]);
      const parsedContent = JSON.parse(response);
      console.log(parsedContent)
      setChatContent(parsedContent);
    } catch (error) {
      console.error('Error fetching chat content:', error);
      setChatContent([]);
    }
  };

  const renderChatContent = () => {
    return (
      <Container className="profile-container-like">
        {chatContent.map((message) => (
          <div key={message[1]} className={`chat-bubble ${sessionStorage.getItem('userID') == message[1] ? 'sender-chat' : 'receiver-chat'}`}>
              {message[2]}
          </div>
          
        ))}
        <div className="text-input" >
        <input
          type="text"
          placeholder="Type a message..."
          value={newMessage}
          onChange={handleInputChange}
        />
        <button onClick={handleSendMessage}>Senden</button>
      </div>
      </Container>
    );
  };

  useEffect(() => {
    if (selectedChat != null) {
      fetchChatContent(selectedChat);
    } else {
      setChatContent([]);
    }
  }, [selectedChat]);
  return (
    <div className="chat-window-container">
      {chatContent != null ? (
        renderChatContent()
      ) : (
        <Container className="profile-container-like">

          <div className="text-input" >
        <input
          type="text"
          placeholder="Type a message..."
          value={newMessage}
          onChange={handleInputChange}
        />
        <button onClick={handleSendMessage}>Senden</button>
      </div>
        </Container>)}
    </div>
  );
};

export default ChatWindow;