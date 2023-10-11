import React from "react";
import "../styles/Chat.css";
import CallIcon from "@mui/icons-material/Call";
import VideocamIcon from "@mui/icons-material/Videocam";
import InfoIcon from "@mui/icons-material/Info";
import { Avatar } from "@mui/material";
import EmojiEmotionsIcon from "@mui/icons-material/EmojiEmotions";
import AddPhotoAlternateIcon from "@mui/icons-material/AddPhotoAlternate";
import MicIcon from "@mui/icons-material/Mic";

function messageBox() {
  return (
    <div className="chatBox">
      {/* chatBox */}
      <div className="headerChatBox">
        <div className="headerLeft">
          <span>
            <Avatar className="headerAvatar" />
          </span>
        </div>
        <div className="headerName">
          <h2>John Leo</h2>
          <span>Active now</span>
        </div>
        <div className="headerRight">
          <div className="callIcon">
            <ol>
              <li>
                <CallIcon />
              </li>
              <li>
                <VideocamIcon />
              </li>
              <li>
                <InfoIcon />
              </li>
            </ol>
          </div>
        </div>
      </div>

      <div className="chatboxContent">{/* chat goes here */}</div>
      <div className="footerChat">
        <div className="footerIconLeft">
          <AddPhotoAlternateIcon className="emoji" />
          <MicIcon className="emoji" />
        </div>
        <div className="footerIconright">
          <input type="text" placeholder="Type here" />
        </div>
        <div className="footerRight">
          <EmojiEmotionsIcon className="emoji" />
        </div>
      </div>
    </div>
  );
}

export default messageBox;
