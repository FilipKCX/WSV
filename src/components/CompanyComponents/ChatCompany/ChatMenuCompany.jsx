import '../../UserComponents/Chat/ChatMenu.css'
import React, { useState, useEffect } from 'react';
import { getHTTPRequest } from '../../serverPackage';

const ChatMenu = ({ selectChat }) => {
  const [chatItems, setChatItems] = useState([]);
  const [selectedChat, setSelectedChat] = useState(sessionStorage.getItem('selectedChat'));
  const userID = sessionStorage.getItem('userID');

  const fetchChatsData = async () => {
    const uID = sessionStorage.getItem('userID');
    const response = await getHTTPRequest('getChatsC', [uID]);

    const processedChats = await processChats(JSON.parse(response));
    setChatItems(processedChats);
  };

  const processChats = async (chatsData) => {
    const mappedChats = chatsData.map(async (chatData) => {
      const companyId = chatData;
      const companyName = await fetchCompanyName(chatData[0]);
      return {
        id: chatData[0],
        content: companyName,
        chatid: chatData[1]
      };
    });

    return Promise.all(mappedChats);
  };

  async function fetchCompanyName(companyId) {
    const response = await getHTTPRequest('getProfileInfox', [companyId]);
    const companyProfile = JSON.parse(response);
    return companyProfile[0][1];
  }

  useEffect(() => {
    fetchChatsData();
  }, []);

  const renderChatOptions = () => {
    return chatItems.map((chatItem) => (
      <div
        key={chatItem.id}
        className={`chat-option ${selectedChat === chatItem.id ? 'active' : ''}`}
        onClick={() => handleChatClick(chatItem.id, chatItem.content, chatItem.chatid)}
      >
        <div className="chat-box">
          <h3>{chatItem.content}</h3>
        </div>
      </div>
    ));
  };

  const handleChatClick = (cId, chatContent, chatid) => {
    sessionStorage.setItem('SelectedCompany', cId);
    sessionStorage.setItem('SelectedChat', chatid);
    console.log(chatid)
    setSelectedChat(cId);
    selectChat(cId, chatContent);
  };

  return <div>{renderChatOptions()}</div>;
};

export default ChatMenu;