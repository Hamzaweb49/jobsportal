import React from "react";
import "./sidebar.scss";
import HomeOutlinedIcon from "@mui/icons-material/HomeOutlined";
import MessageOutlinedIcon from "@mui/icons-material/MessageOutlined";
import BusinessCenterOutlinedIcon from "@mui/icons-material/BusinessCenterOutlined";
import BookmarksOutlinedIcon from "@mui/icons-material/BookmarksOutlined";
import SettingsOutlinedIcon from "@mui/icons-material/SettingsOutlined";
import Hamza from "../../assets/hamza.jpg";
import { Link } from "react-router-dom";


const Sidebar = () => {
  return (
    <div className="sidebar">
      <div className="top">
        <span className="logo">Job's</span>
      </div>
      <hr />
      <div className="center">
        <ul>
          <Link to="/" style={{ textDecoration: "none" }}>
          <li className="active">
            <HomeOutlinedIcon className="icon" />
            <span>Find Work</span>
          </li>
          </Link>
          <Link to="/messages" style={{ textDecoration: "none" }}>
          <li>
            <MessageOutlinedIcon className="icon" />
            <span>Messages</span>
            <span className="count">5</span>
          </li>
          </Link>
          <Link to="/appliedjobs" style={{textDecoration: "none"}}>
          <li>
            <BusinessCenterOutlinedIcon className="icon" />
            <span>Jobs Applied For</span>
          </li>
          </Link>
          <Link to="/bookmarks" style={{textDecoration: "none"}}>
          <li>
            <BookmarksOutlinedIcon className="icon" />
            <span>Bookmarks</span>
          </li>
          </Link>
          <Link to="/settings" style={{textDecoration: "none"}}>
          <li>
            <SettingsOutlinedIcon className="icon" />
            <span>Settings</span>
          </li>
          </Link>
        </ul>
      </div>
      <div className="bottom">
        <div className="user">
            <div className="userPic">
                <img src={Hamza} alt="" className="avatar" />
            </div>
            <div className="userInfo">
                <p className="name">Hamza Azam</p>
                <span className="role">Web Developer</span>
            </div>
        </div>
        <div className="skills">
            <p>Skills and Expertise</p>
            <div className="skill"> 
                <p>HTML</p>
            
                <p>CSS</p>

                <p>JS</p>
            
                <p>React</p>
            
                <p>Node</p>
            </div>
        </div>
        <Link to="/profile" style={{textDecoration: "none"}}>
        <button>View Profile</button>
        </Link>
      </div>
    </div>
  );
};

export default Sidebar;
