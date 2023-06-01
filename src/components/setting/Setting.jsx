import React from 'react'
import "./setting.scss"
import HomeOutlinedIcon from "@mui/icons-material/HomeOutlined";
import MessageOutlinedIcon from "@mui/icons-material/MessageOutlined";
import BusinessCenterOutlinedIcon from "@mui/icons-material/BusinessCenterOutlined";
import BookmarksOutlinedIcon from "@mui/icons-material/BookmarksOutlined";

const Setting = () => {
    return ( 
        <div className="setting">
            <div className="left">
                <div className="top">
                    <p className='title'>Settings</p>
                </div>
                <div className="bottom">
                    <ul>
                     <li>
                      <HomeOutlinedIcon className="icon" />
                      <span>appearence</span>
                     </li>
                     <li  className="active">
                      <BookmarksOutlinedIcon className="icon" />
                      <span>Personal Information</span>
                     </li>
                     <li>
                       <BusinessCenterOutlinedIcon className="icon" />
                       <span>Billing Information</span>
                     </li>
                     <li>
                       <MessageOutlinedIcon  className="icon" />
                      <span>Messages</span>
                     </li>
                    </ul>
                </div>
            </div>
            <div className="right">
                <p className='heading'>Personal Information</p>
                <hr />
                <div className="form">
                    <p>Profile</p>
                    <span>This information will be displayed publicly so be careful what you share</span>
                    <form action="">
                        <div className="userInfo">
                            <input type="text" placeholder='First Name' />
                            <input type="text" placeholder='Last Name' />
                            <input type="email" placeholder='Email Address' />
                        </div>
                        <div className="textarea">
                            <textarea name="about" id=""  placeholder='Write About Yourself - Min 50 Words' />
                            <p>Brief description for your profile. URLs are hyperlinked</p>
                        </div>
                        <div className="personalInfo">
                            <p>Personal Information</p>
                            <span>This information will be kept for personal use. We will not share it publicly.</span>
                            <div className="userInfo">
                                <input type="text" placeholder='Email Address' />
                                <input type="number" placeholder='Phone Number' />
                                <input type="text" placeholder='Country' />
                                <input type="text" placeholder='Language' />
                            </div>
                        </div>
                        <hr />
                        <div className="button">
                            <button className='canelButton'>Cancel</button>
                            <button className="saveButton">Save</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
     );
}
 
export default Setting;