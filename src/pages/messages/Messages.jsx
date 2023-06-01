import React from "react";
import "./messages.scss";
import Sidebar from "../../components/sidebar/Sidebar";
import Navbar from "../../components/navbar/Navbar";
import Message from "../../components/message/Message";

const Messages = () => {
  return (
    <div className="messages">
      <Sidebar />
      <div className="messagesContainer">
        <Navbar />
        <div className="mainContainer">
          <Message />
        </div>
      </div>
    </div>
  );
};

export default Messages;
