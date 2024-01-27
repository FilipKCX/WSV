import React, { useState, useEffect, useRef } from 'react';
import { getHTTPRequest } from '../../serverPackage';
import { Container, Row, Col, Card, Form, Button } from 'react-bootstrap';
import '../../../components/UserComponents/Chat/ChatWindow.css';

const ChatsWindow = ({ selectedChat }) => {
  const [chatContent, setChatContent] = useState([]);
  const [messageInput, setMessageInput] = useState('');
  const [newMessage, setNewMessage] = useState('');
  const chatContainerRef = useRef(null);
  console.log(selectedChat)
  const params = [sessionStorage.getItem('SelecteddChat'), sessionStorage.getItem('userID'), newMessage];
  console.log(params)
  
  const handleSendMessage = async () => {
    try {
      await getHTTPRequest('createMessagee', params);
      fetchChatContent(selectedChat);
      setNewMessage('');
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
      const response = await getHTTPRequest('getMessages', [sessionStorage.getItem('SelecteddChat')]);
      const parsedContent = JSON.parse(response);
      console.log(parsedContent)
      if(parsedContent == null)
      {
        setChatContent([]);
      }
      else
      {
        setChatContent(parsedContent);
      }
    } catch (error) {
      console.error('Error fetching chat content:', error);
      setChatContent([]);
    }
  };

  const renderChatContent = () => {
    return (
      <Container className="profile-container-like">
        {chatContent.map((message) => (
          
        <div key={message[3]} className={`chat-bubble ${sessionStorage.getItem('userID') == message[1] ? 'sender-chat' : 'receiver-chat'}`}>
          <h3 style={{fontSize:"11px" , textAlign:"right" , marginTop:'-23px', color:"black"}}> {message[4]}</h3>
          {message[2]}
        </div>
      ))}
        <div className="text-input">
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
 console.log(selectedChat)
  useEffect(() => {
    if (selectedChat) {
      fetchChatContent(selectedChat);
    } else {
      setChatContent([]);
    }
  }, [selectedChat]);
  console.log(chatContent)
  return (
    <div className="chat-window-container">
      {selectedChat!= null ? (
        renderChatContent()
      ) : (
        <div className="no-content" >
           
              
            </div>
      )}
    </div>
  );
};

export default ChatsWindow;