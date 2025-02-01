import React, { useState } from "react";
import axios from "axios";
import "./styles.css";

const App = () => {
  const [message, setMessage] = useState("");
  const [response, setResponse] = useState("");

  const sendMessage = async () => {
    if (!message) return;

    try {
      const res = await axios.post("http://127.0.0.1:5000/chat", { message });
      setResponse(res.data.response);
    } catch (error) {
      console.error("Error sending message", error);
    }
  };

  return (
    <div className="chat-container">
      <h1>Smart Career Chatbot</h1>
      <input
        type="text"
        value={message}
        onChange={(e) => setMessage(e.target.value)}
        placeholder="Ask for career advice..."
      />
      <button onClick={sendMessage}>Send</button>
      {response && <div className="response">{response}</div>}
    </div>
  );
};

export default App;
