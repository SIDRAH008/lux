import React, { useState, useEffect } from "react";
import "./index.css"; // Import your CSS file for styling

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
      response = "I'm sorry, I didn't understand that. Can you please rephrase?";
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
