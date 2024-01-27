import React, { useState, useEffect, useRef } from 'react';
import { getHTTPRequest } from '../../serverPackage';
import { Container, Row, Col, Card, Form, Button } from 'react-bootstrap';
import './ChatWindow.css';
import { Link } from 'react-router-dom';

const ChatWindow = ({ selectedChat }) => {
  const [chatContent, setChatContent] = useState([]);
  const [messageInput, setMessageInput] = useState('');
  const [newMessage, setNewMessage] = useState('');
  const chatContainerRef = useRef(null);
  console.log(selectedChat)
  console.log(newMessage)
  const userID = sessionStorage.getItem('userID')
  const params = [sessionStorage.getItem('SelectedChat'), userID, newMessage];
  console.log(params)
  
  const handleSendMessage = async () => {
    try {
      await getHTTPRequest('createMessagee', params);
      fetchChatContent(selectedChat);
      setNewMessage('');
    } catch (error) {
      console.error('Error sending message:', error);
      setNewMessage('');
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
        <div className="text-input" >
        <Link to='/ChatProfileUser'>
        <Button variant='outline-primary' style={{marginRight:'10px', backgroundColor:'white', color:'black', outline:'black'}}>Zum Profil</Button>
        </Link>
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
    if (selectedChat) {
      fetchChatContent(selectedChat);
    } else {
      setChatContent([]);
    }
  }, [selectedChat]);
  console.log(chatContent)
  return (
    <div className="chat-window-container">
      {selectedChat != null ? (
        renderChatContent()
      ) : (
        <div className="no-content" >
           
              <p3 style={{ fontSize:'30px'}} > Kein Chat ausgewählt</p3>
            </div>
      )}
    </div>
  );
};

export default ChatWindow;