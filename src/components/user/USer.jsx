import React from "react";
import "./user.scss";
import Hamza from "../../assets/hamza.jpg";
import { LocationOnOutlined } from "@mui/icons-material";
import AddIcon from '@mui/icons-material/Add';
import CreateIcon from '@mui/icons-material/Create';
import DeleteIcon from '@mui/icons-material/Delete';
import Facebook from "../../assets/facebook.png";
import Instagram from "../../assets/instgram.png";
import Linkedin from "../../assets/linkedin.png";
import Twitch from "../../assets/twitch.png";
import Google from "../../assets/google.png";
import Youtube from "../../assets/youtube.png";

const User = () => {
  return (
    <div className="userProfile">
        <div className="top">
            <div className="userProfileInfo">
                <img src={Hamza} alt="" />
                <div className="profileInfo">
                    <p className="name">Hamza Azam</p>
                    <div className="location">
                    <LocationOnOutlined />
                    <span>Lahore, Pakistan – 9:23 pm local time</span>
                    </div>
                </div>
            </div>
            <div className="button">
                <button>Public View</button>
                <button>Profile Settings</button>
            </div>
        </div>
        <div className="bottom">
            <div className="bottomLeft">
                <ul>
                    <li>
                        <span>Video Introduction</span>
                        <AddIcon className="icon"/>
                    </li>
                    <li>
                        <span>Hours per week</span>
                        <CreateIcon className="icon"/>
                    </li>
                    <li className="desc">
                        <span>More than 30 hours per week</span>
                    </li>
                    <li>
                        <span>Languages</span>
                        <div className="icons">
                        <AddIcon className="icon"/>
                        <CreateIcon className="icon"/>
                        </div>
                    </li>
                    <li>
                        <span><b>English:</b> Fluent</span>
                    </li>
                    <li>
                        <span>Education</span>
                        <AddIcon className="icon"/>
                    </li>
                    <li>
                        <span>UET, Lahore</span>
                        <div className="icons">
                        <CreateIcon className="icon"/>
                        <DeleteIcon className="icon"/>
                        </div>
                    </li>
                </ul>
            </div>
            <div className="bottomRight">
                <div className="bottomRightTop">
                    <div className="container">
                    <div className="title">
                        <p>Front-End Developer | React | JavaScript | HTML/CSS Master</p>
                        <span>$20.00/hr</span>
                    </div>
                    <div className="titleDesc">
                        <p>Are you looking for a skilled and dedicated front-end developer who can bring your web projects to life? Look no further! I am here to provide you with top-notch front-end development services tailored to your specific needs.
                        With a strong passion for crafting stunning and user-friendly websites, I specialize in translating design mockups into pixel-perfect, responsive code. My expertise lies in HTML5, CSS3, JavaScript, and the latest front-end frameworks such as React.js.
                        When you choose to work with me, you can expect a seamless collaboration from start to finish... <button>See more</button></p>
                    </div>
                    </div>
                </div>
                <div className="bottomRightCenter">
                    <div className="container">
                    <p>Portfolio</p>
                    <div className="portfolioImages">
                        <div className="image">
                            <img src={Facebook} alt="" />
                            <p>Facebook Clone</p>
                        </div>
                        <div className="image">
                            <img src={Instagram} alt="" />
                            <p>Instagram Clone</p>
                        </div>
                        <div className="image">
                            <img src={Linkedin} alt="" />
                            <p>Liknedin Clone</p>
                        </div>
                        <div className="image">
                            <img src={Google} alt="" />
                            <p>Google Clone</p>
                        </div>
                    </div>
                    </div>
                </div>
                <div className="bottomRightBottom">
                    <div className="container">
                        <p>Skills</p>
                        <div className="skills">
                            <p>HTML</p>
                            <p>CSS</p>
                            <p>JavaScript</p>
                            <p>Node</p>
                            <p>Express</p>
                            <p>MongoDB</p>
                            <p>React</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  );
};

export default User;
