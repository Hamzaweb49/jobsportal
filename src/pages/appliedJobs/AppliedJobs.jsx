import React from "react";
import Sidebar from "../../components/sidebar/Sidebar";
import Navbar from "../../components/navbar/Navbar";
import Feed from "../../components/feed/Feed";
import Rightbar from "../../components/rightbar/Rightbar";
import "./appliedJobs.scss";

const AppliedJobs = () => {
  return (
    <div className="appliedJobs">
      <Sidebar />
      <div className="appliedJobsContainer">
        <Navbar />
        <div className="mainContainer">
          <Feed />
          <Rightbar />
        </div>
      </div>
    </div>
  );
};

export default AppliedJobs;
