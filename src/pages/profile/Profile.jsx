import React from "react";
import Sidebar from "../../components/sidebar/Sidebar";
import Navbar from "../../components/navbar/Navbar";
import "./profile.scss";
import User from "../../components/user/USer";

const Profile = () => {
  return (
    <div className="profile">
      <Sidebar />
      <div className="profileContainer">
        <Navbar />
        <div className="mainContainer">
          <User />
        </div>
      </div>
    </div>
  );
};

export default Profile;
