import React, { useState, useEffect } from 'react';
import './ChatMenu.css';
import { getHTTPRequest } from '../../serverPackage';
import ChatWindow from './ChatWindow';

const ChatMenu = ({ selectChat }) => {
  const [chatItems, setChatItems] = useState([]);
  sessionStorage.setItem('selectedChat', selectChat)
  const fetchChatsData = async () => {
    const uID = sessionStorage.getItem('userID');
    const response = await getHTTPRequest('getChats', [uID]);
    const processedChats = await processChats(JSON.parse(response));
    setChatItems(processedChats);
  };

  const processChats = async (chatsData) => {
    const chatItems = [];
    for (const chatData of chatsData) {
      const companyId = chatData;
      const companyName = await fetchCompanyName(companyId);
      const chatItem = {
        id: chatData,
        content: companyName,
      };
      chatItems.push(chatItem);
    }
    return chatItems;
  };

  async function fetchCompanyName(companyId) {
    const response = await getHTTPRequest('getCompanyInfox', [companyId]);
    const companyProfile = JSON.parse(response);
    return companyProfile[0];
  }

  useEffect(() => {
    fetchChatsData();
  }, []);

  const renderChatOptions = () => {
    return chatItems.map((chatItem) => (
      <div
        key={chatItem.id}
        className={`chat-option ${sessionStorage.getItem('selectedChat') == chatItem.id ? 'active' : ''}`}
        onClick={() => selectChat(chatItem.id, chatItem.content)}
      >
        <div className="chat-box">
          <h3>{chatItem.content}</h3>
        </div>
      </div>
    ));
  };

  return <div >{renderChatOptions()}</div>;
};

export default ChatMenu;