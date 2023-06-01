import React from "react";
import "./message.scss";
import Pic1 from "../../assets/pic-1.png";
import Pic2 from "../../assets/pic-2.png";
import Pic3 from "../../assets/pic-3.png";
import Pic4 from "../../assets/pic-4.png";
import Pic5 from "../../assets/pic-5.jpg";
import Pic6 from "../../assets/pic-6.jpg";

import { Call, SearchOutlined } from "@mui/icons-material";
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import VideoCallIcon from '@mui/icons-material/VideoCall';
import CallIcon from '@mui/icons-material/Call';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import ShortcutIcon from '@mui/icons-material/Shortcut';
import AddPhotoAlternateIcon from '@mui/icons-material/AddPhotoAlternate';
import AddLinkIcon from '@mui/icons-material/AddLink';
import InsertEmoticonIcon from '@mui/icons-material/InsertEmoticon';
import CloseIcon from '@mui/icons-material/Close';
import FolderOpenIcon from '@mui/icons-material/FolderOpen';
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';
import Facebook from "../../assets/facebook.png";
import Instagram from "../../assets/instgram.png";
import Linkedin from "../../assets/linkedin.png";
import Twitch from "../../assets/twitch.png";

const Message = () => {



    return ( 
        <div className="message">
            <div className="left">
                <div className="search">
                    <SearchOutlined />
                    <input type="text" placeholder="Search .." />
                </div>
                <div className="users">
                    <div className="user active">
                        <div className="userInfo">
                            <div className="info">
                                <img src={Pic1} alt="" />
                                <span>John Denny</span>
                            </div>
                            <div className="time">
                                <span>01:00</span>
                            </div>
                        </div>
                        <div className="text">
                            <p>We almost done with brief!</p>
                            <span className="count">4</span>
                        </div>
                    </div>
                    <div className="user">
                        <div className="userInfo">
                        <div className="info">
                            <img src={Pic3} alt="" />
                            <span>Waton Dcosta</span>
                        </div>
                        <div className="time">
                            <span>02:15</span>
                        </div>
                        </div>
                        <div className="text">
                            <p>Hi! I have some sent money tod..</p>
                            <span className="count">2</span>
                        </div>
                    </div>
                    <div className="user">
                        <div className="userInfo">
                        <div className="info">
                            <img src={Pic2} alt="" />
                            <span>Rempy Sen</span>
                        </div>
                        <div className="time">
                            <span>Jan 12</span>
                        </div>
                        </div>
                        <div className="text">
                            <p>I will immediately pay according to..</p>
                        </div>
                    </div>
                    <div className="user">
                        <div className="userInfo">
                        <div className="info">
                            <img src={Pic4} alt="" />
                            <span>Selina Jeky</span>
                        </div>
                        <div className="time">
                            <span>Jan 12</span>
                        </div>
                        </div>
                        <div className="text">
                            <p>I hope you will be fine without paymen..</p>
                        </div>
                    </div>
                    <div className="user">
                        <div className="userInfo">
                        <div className="info">
                            <img src={Pic5} alt="" />
                            <span>Shane Watson</span>
                        </div>
                        <div className="time">
                            <span>Jan 10</span>
                        </div>
                        </div>
                        <div className="text">
                            <p>You are great Hamza! make that much..</p>
                        </div>
                    </div>
                </div>
                <div className="more">
                    <span>See more</span>
                    <KeyboardArrowDownIcon />
                </div>
            </div>
            <div className="center">
                <div className="centerTop">
                    <div className="userInfo">
                        <div className="image">
                        <img src={Pic1} alt="" />
                        </div>
                        <div className="userName">
                        <p>John Denny</p>
                        <span>Online</span>
                        </div>
                    </div>
                    <div className="icons">
                        <VideoCallIcon className="icon" />
                        <CallIcon className="icon" />
                        <MoreVertIcon className="icon" />
                    </div>
                </div>
                <div className="centerMiddle">
                    <div className="messageContainer">
                        <div className="clientMessage">
                        <div className="clientReply">
                            <p>Perfect purchase refers to the act of buying goods or services from a seller. It ypically involves searching.</p>
                            <ShortcutIcon className="icon" />
                        </div>
                        <div className="time">
                            <span>08:23 AM</span>
                        </div>
                        </div>
                        <div className="userMessage">
                        <div className="userReply">
                            <ShortcutIcon className="icon"/>
                            <p>Product purchases can be made online or in-person</p>
                        </div>
                        <div className="time">
                            <span>9:00 AM</span>
                        </div>
                        </div>
                        <div className="clientMessage">
                        <div className="clientReply">
                            <p>May invlove negotiations or contracts depending on complexity.</p>
                            <ShortcutIcon className="icon" />
                        </div>
                        <div className="time">
                            <span>10:00 AM</span>
                        </div>
                        </div>
                        <div className="userMessage">
                        <div className="userReply">
                            <ShortcutIcon className="icon"/>
                            <p>Yes you are right!</p>
                        </div>
                        <div className="time">
                            <span>1:00 AM</span>
                        </div>
                        </div>
                    </div>
                </div>
                <div className="centerBottom">
                    <div className="messageBox">
                        <input type="text" placeholder="Type a Message" />
                    </div>
                    <div className="options">
                        <div className="icons">
                            <AddPhotoAlternateIcon className="icon"/>
                            <AddLinkIcon className="icon"/>
                            <InsertEmoticonIcon className="icon"/>
                        </div>
                        <div className="button">
                            <button>Send</button>
                        </div>
                    </div>
                </div>
            </div>
            <div className="right">
                <div className="icons">
                    <MoreVertIcon />
                    <CloseIcon />
                </div>

                <div className="clientInfo">
                    <div className="clientImage">
                        <img src={Pic1} alt="" />
                    </div>
                    <div className="clientDetail">
                        <p>John Denny</p>
                        <span>Digital Creator</span>
                    </div>
                </div>

                <div className="sharedFiles">
                    <div className="item">
                    <div className="heading">
                        <p>Recent files</p>
                        <span>120 files</span>
                    </div>
                    <KeyboardArrowDownIcon className="icon"/>
                    </div>
                    <div className="item">
                    <div className="itemName">
                        <FolderOpenIcon />
                        <span>Invoice.pdf</span>
                    </div>
                    <MoreHorizIcon className="icon"/>
                    </div>
                    <div className="item">
                    <div className="itemName">
                        <FolderOpenIcon />
                        <span>Document.pdf</span>
                    </div>
                    <MoreHorizIcon className="icon" />
                    </div>
                    <div className="item">
                    <div className="itemName">
                        <FolderOpenIcon />
                        <span>Details.pdf</span>
                    </div>
                    <MoreHorizIcon className="icon" />
                    </div>
                </div>

                <div className="sharedImages">
                     <div className="item">
                        <div className="heading">
                            <p>Images</p>
                            <span>80 images</span>
                        </div>
                        <KeyboardArrowDownIcon className="icon"/>
                     </div>
                    <div className="images">
                        <div className="image">
                            <img src={Instagram} alt="" />
                        </div>
                        <div className="image">
                            <img src={Facebook} alt="" />
                        </div>
                        <div className="image">
                            <img src={Linkedin} alt="" />
                        </div>
                        <div className="image">
                            <img src={Twitch} alt="" />
                        </div>
                    </div>
                 </div>   

            </div>
        </div>
     );
}
 
export default Message;
