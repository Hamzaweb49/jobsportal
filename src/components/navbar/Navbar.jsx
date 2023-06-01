import React from "react";
import "./navbar.scss";
import {
  LanguageOutlined,
  ListOutlined,
  NotificationsNoneOutlined,
  SearchOutlined,
} from "@mui/icons-material";
import LocationOnOutlinedIcon from "@mui/icons-material/LocationOnOutlined";
import Hamza from "../../assets/hamza.jpg";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="navbar">
      <div className="wrapper">
        <div className="search">
          <SearchOutlined />
          <input type="text" placeholder="Job title or company" />
        </div>
        <div className="search">
          <LocationOnOutlinedIcon />
          <input type="text" placeholder="City, province or region" />
        </div>
        <button>Search</button>
        <div className="items">
          <div className="item">
            <LanguageOutlined className="icon" />
            EN
          </div>
          <div className="item">
            <NotificationsNoneOutlined className="icon" />
            <div className="counter">1</div>
          </div>
          <div className="item">
            <ListOutlined className="icon listIcon" />
          </div>
          <div className="item">
            <img src={Hamza} alt="" className="avatar" />
            <div className="info">
              <Link to="/profile" style={{ textDecoration: "none" }}>
                <p>Hamza Azam</p>
              </Link>

              <span>Web Developer</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
