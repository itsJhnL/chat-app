import React from "react";
import "../styles/Chat.css";
import SettingsIcon from "@mui/icons-material/Settings";
import SearchIcon from "@mui/icons-material/Search";

function chatBoxx() {
  return (
    <div className="messages">
      <div className="messagesHeader">
        <span>
          <SettingsIcon className="headerChatIcon"/>
        </span>
        <p>Chats</p>
      </div>
      <div className="searchBox">
        <input type="text" placeholder="Search" />
        <span>
          <SearchIcon className="headerChatIcon"/>
        </span>
      </div>
    </div>
  );
}

export default chatBoxx;
