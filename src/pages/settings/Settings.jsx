import React from "react";
import Sidebar from "../../components/sidebar/Sidebar";
import Navbar from "../../components/navbar/Navbar";
import "./settings.scss";
import Setting from "../../components/setting/Setting";

const Settings = () => {
  return (
    <div className="settings">
      <Sidebar />
      <div className="settingsContainer">
        <Navbar />
        <div className="mainContainer">
          <Setting />
        </div>
      </div>
    </div>
  );
};

export default Settings;
