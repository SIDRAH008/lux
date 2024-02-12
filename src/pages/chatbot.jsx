import React, { useState, useEffect } from "react";
import "./index.css"; // Import your CSS file for styling
import logo from "./lux.png";

const Chatbot = () => {
  const [messages, setMessages] = useState([]);
  const [userInput, setUserInput] = useState("");

  const addMessage = (sender, message) => {
    setMessages((prevMessages) => [...prevMessages, { sender, message }]);
  };

  const processUserMessage = (message) => {
    let response = "";

    if (message.toLowerCase().includes("hello") || message.toLowerCase().includes("hi")) {
      response = "Hello! How can I assist you today?";
    } else if (message.toLowerCase().includes("bye")) {
      response = "Goodbye! Have a great day.";
    } else {
      response = "Unfortunately, we couldn't find the information you're looking for. Please contact us via email at info@luxealty.com or call +00000000000 for further assistance or request a callback.";
    }

    setTimeout(() => addMessage('Chatbot', response), 1000);
  };

  const sendMessage = () => {
    if (userInput.trim() !== "") {
      addMessage('You', userInput);
      processUserMessage(userInput);
      setUserInput("");
    }
  };

  useEffect(() => {
    // Auto-scroll to the bottom of the chat box when new messages are added
    const chatBox = document.getElementById("chat-box");
    chatBox.scrollTop = chatBox.scrollHeight;
  }, [messages]);

  return (
    <div className="chat-container">
      <div className="left">
        <img src={logo} alt="" />
   
       <h2 class="chat-heading">LuxRealty Assist  </h2>    </div>

      <div id="chat-box" className="chat-box">
        {messages.map((msg, index) => (
          <div key={index}>
            <strong>{msg.sender}:</strong> {msg.message}
          </div>
        ))}
      </div>
      <div className="input-container">
        <input
          type="text"
          id="user-input"
          placeholder="Type your message..."
          value={userInput}
          onChange={(e) => setUserInput(e.target.value)}
        />
        <button id="send-btn" onClick={sendMessage}>Send</button>
      </div>
    </div>
  );
};

export default Chatbot;
