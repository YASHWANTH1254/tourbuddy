import React, { useState } from 'react';
import './Chatbox.css'; // Import the CSS file

const ChatBox = () => {
  const [messages, setMessages] = useState([]);
  const [currentMessage, setCurrentMessage] = useState('');
  const [isOpen, setIsOpen] = useState(true);
  const [isMinimized, setIsMinimized] = useState(false);

  // Handle sending a new message
  const handleSendMessage = () => {
    if (currentMessage.trim() !== '') {
      setMessages([...messages, currentMessage]);
      setCurrentMessage('');
    }
  };

  // Handle input change
  const handleInputChange = (event) => {
    setCurrentMessage(event.target.value);
  };

  // Toggle chat box visibility
  const toggleChatBox = () => {
    setIsOpen(!isOpen);
  };

  // Toggle chat box minimize/maximize
  const toggleMinimize = () => {
    setIsMinimized(!isMinimized);
  };

  return (
    <div className={`chat-box ${isOpen ? 'open' : 'closed'} ${isMinimized ? 'minimized' : ''}`}>
      <div className="chat-header">
        {isOpen ? (
          <button className="minimize-button" onClick={toggleMinimize}>
            {isMinimized ? 'Maximize' : 'Minimize'}
          </button>
        ) : (
          // <button className="open-button" onClick={toggleChatBox}>
          //   Open
          // </button>
          <button className="close-button" onClick={toggleChatBox}>
          Close
        </button>
        )}
        
      </div>
      {isOpen && (
        <>
          <div className="chat-messages">
            {messages.map((message, index) => (
              <div className="message" key={index}>
                {message}
              </div>
            ))}
          </div>
          <div className="input-area">
            <input
              type="text"
              placeholder="Type your message..."
              value={currentMessage}
              onChange={handleInputChange}
            />
            <button onClick={handleSendMessage}>Send</button>
          </div>
        </>
      )}
    </div>
  );
};

export default ChatBox;
