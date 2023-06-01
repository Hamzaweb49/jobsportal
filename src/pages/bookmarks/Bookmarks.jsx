import React from "react";
import Sidebar from "../../components/sidebar/Sidebar";
import Navbar from "../../components/navbar/Navbar";
import Feed from "../../components/feed/Feed";
import Rightbar from "../../components/rightbar/Rightbar";
import "./bookmarks.scss";

const Bookmarks = () => {
  return (
    <div className="bookmarks">
      <Sidebar />
      <div className="bookmarksContainer">
        <Navbar />
        <div className="mainContainer">
          <Feed />
          <Rightbar />
        </div>
      </div>
    </div>
  );
};

export default Bookmarks;
