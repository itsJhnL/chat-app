import React from "react"; 
import "../styles/Chat.css";
import MessageBox from "./MessageBoxx";
import ChatBox from "./Chatboxx";

function Chat() {
  return (
    <div className="chat">
      <ChatBox />
      <MessageBox />
    </div>
  );
}

export default Chat;
